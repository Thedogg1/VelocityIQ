'use client';

import { useCallback } from 'react';
import ExitSnapshotCalculatorCore from '@/components/exit-snapshot/ExitSnapshotCalculatorCore';

async function downloadPdf(html: string): Promise<void> {
  const { downloadSnapshotPdf } = await import('@/lib/exit-snapshot/downloadSnapshotPdf');
  await downloadSnapshotPdf(html);
}

export default function ExitSnapshotCalculator() {
  const executeDownload = useCallback(async (html: string) => {
    await downloadPdf(html);
  }, []);

  return (
    <ExitSnapshotCalculatorCore
      variant='standalone'
      signInPath='/exit-snapshot/sign-in?redirect_url=/exit-snapshot'
      requireAuthForDownload
      executeDownload={executeDownload}
    />
  );
}
