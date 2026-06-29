'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import ExitSnapshotForm, { EMPTY_SNAPSHOT_FORM } from '@/components/exit-snapshot/ExitSnapshotForm';
import ExitSnapshotPreview from '@/components/exit-snapshot/ExitSnapshotPreview';
import {
  type SnapshotFormData,
  validateSnapshotInputs,
} from '@/lib/validation/validateSnapshotInputs';
import { calculateUkExitSnapshot } from '@/lib/exit-snapshot/calculateUkExitSnapshot';
import { buildSnapshotContext } from '@/lib/exit-snapshot/buildSnapshotContext';
import { evaluateNarrativeRules } from '@/lib/exit-snapshot/evaluateNarrativeRules';
import { buildSnapshotReport } from '@/lib/exit-snapshot/renderSnapshot';
import { SESSION_KEYS } from '@/lib/exit-snapshot/sessionKeys';
import type { MatchedNarrativeRule, SnapshotCalculated } from '@/lib/exit-snapshot/types';

const CLERK_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

function serializeFormState(formState: SnapshotFormData): string {
  return JSON.stringify(formState);
}

export interface ExitSnapshotCalculatorCoreProps {
  variant: 'standalone' | 'landing';
  signInPath: string;
  requireAuthForDownload: boolean;
  executeDownload: (html: string) => Promise<void>;
}

export default function ExitSnapshotCalculatorCore({
  variant,
  signInPath,
  requireAuthForDownload,
  executeDownload,
}: ExitSnapshotCalculatorCoreProps) {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const [formState, setFormState] = useState<SnapshotFormData>(EMPTY_SNAPSHOT_FORM);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [formSnapshotAtGeneration, setFormSnapshotAtGeneration] = useState<string | null>(null);
  const [fullReportHtml, setFullReportHtml] = useState('');
  const [previewHtml, setPreviewHtml] = useState('');
  const [calculated, setCalculated] = useState<SnapshotCalculated | null>(null);
  const [matchedRules, setMatchedRules] = useState<MatchedNarrativeRule[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const validation = useMemo(() => validateSnapshotInputs(formState), [formState]);
  const inputsChangedSinceReport = useMemo(() => {
    if (!formSnapshotAtGeneration) return false;
    return serializeFormState(formState) !== formSnapshotAtGeneration;
  }, [formState, formSnapshotAtGeneration]);

  const handleGenerateReport = useCallback(() => {
    if (!validation.isValid) return;
    setIsGenerating(true);
    try {
      const calc = calculateUkExitSnapshot(formState);
      const context = buildSnapshotContext(formState, calc);
      const rules = evaluateNarrativeRules(context);
      const { fullHtml, previewHtml: preview } = buildSnapshotReport(context, rules);

      setCalculated(calc);
      setMatchedRules(rules);
      setFullReportHtml(fullHtml);
      setPreviewHtml(preview);
      setFormSnapshotAtGeneration(serializeFormState(formState));
      setReportGenerated(true);
      requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } finally {
      setIsGenerating(false);
    }
  }, [formState, validation.isValid]);

  const handleDownloadFullReport = useCallback(async () => {
    if (!reportGenerated || !fullReportHtml || isDownloading) return;

    if (requireAuthForDownload) {
      if (!CLERK_CONFIGURED) return;

      if (!isSignedIn) {
        sessionStorage.setItem(SESSION_KEYS.draft, JSON.stringify(formState));
        sessionStorage.setItem(SESSION_KEYS.fullHtml, fullReportHtml);
        sessionStorage.setItem(SESSION_KEYS.pendingDownload, '1');
        router.push(signInPath);
        return;
      }
    }

    setIsDownloading(true);
    try {
      await executeDownload(fullReportHtml);
    } finally {
      setIsDownloading(false);
    }
  }, [
    reportGenerated,
    fullReportHtml,
    isDownloading,
    requireAuthForDownload,
    isSignedIn,
    formState,
    router,
    signInPath,
    executeDownload,
  ]);

  useEffect(() => {
    if (!requireAuthForDownload) return;
    if (!isLoaded || !isSignedIn) return;
    if (sessionStorage.getItem(SESSION_KEYS.pendingDownload) !== '1') return;

    const draft = sessionStorage.getItem(SESSION_KEYS.draft);
    const html = sessionStorage.getItem(SESSION_KEYS.fullHtml);

    if (draft) {
      try {
        const restored = JSON.parse(draft) as SnapshotFormData;
        setFormState(restored);

        const calc = calculateUkExitSnapshot(restored);
        const context = buildSnapshotContext(restored, calc);
        const rules = evaluateNarrativeRules(context);
        setCalculated(calc);
        setMatchedRules(rules);
        setReportGenerated(true);
      } catch {
        // ignore corrupt session data
      }
    }

    if (html) {
      setFullReportHtml(html);
      const calc = draft
        ? calculateUkExitSnapshot(JSON.parse(draft) as SnapshotFormData)
        : null;
      if (calc) {
        const context = buildSnapshotContext(
          JSON.parse(draft!) as SnapshotFormData,
          calc,
        );
        const rules = evaluateNarrativeRules(context);
        setPreviewHtml(buildSnapshotReport(context, rules).previewHtml);
      }
      void executeDownload(html);
    }

    sessionStorage.removeItem(SESSION_KEYS.draft);
    sessionStorage.removeItem(SESSION_KEYS.fullHtml);
    sessionStorage.removeItem(SESSION_KEYS.pendingDownload);
  }, [isLoaded, isSignedIn, requireAuthForDownload, executeDownload]);

  const downloadDisabled = requireAuthForDownload
    ? !reportGenerated || !CLERK_CONFIGURED
    : !reportGenerated;
  const downloadDisabledReason =
    requireAuthForDownload && !CLERK_CONFIGURED
      ? 'Download requires Clerk authentication. Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY in your environment.'
      : undefined;

  return (
    <div className='space-y-8'>
      <ExitSnapshotForm
        formState={formState}
        onChange={setFormState}
        onGenerate={handleGenerateReport}
        isGenerating={isGenerating}
        reportGenerated={reportGenerated}
        inputsChangedSinceReport={inputsChangedSinceReport}
      />

      {reportGenerated && calculated && (
        <div ref={resultsRef} id='calculator-results' className='scroll-mt-24'>
          <ExitSnapshotPreview
            calculated={calculated}
            matchedRules={matchedRules}
            previewHtml={previewHtml}
            onDownload={handleDownloadFullReport}
            downloadDisabled={downloadDisabled || isDownloading}
            downloadDisabledReason={downloadDisabledReason}
            isSignedIn={Boolean(isSignedIn)}
            isDownloading={isDownloading}
          />
        </div>
      )}

      {variant === 'standalone' && (
        <div className='text-xs text-[var(--color-text-secondary)] text-center pt-4 border-t border-[var(--color-border-subtle)]'>
          <p>
            Financial inputs stay in your browser only. Email is captured via Clerk when you download
            the full report. See our{' '}
            <a href='/privacy' className='text-[var(--color-primary)] hover:underline'>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
