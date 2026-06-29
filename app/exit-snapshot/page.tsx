'use client';



import Header from '@/components/Header';

import Footer from '@/components/Footer';

import ExitSnapshotCalculator from '@/components/exit-snapshot/ExitSnapshotCalculator';



export default function ExitSnapshotPage() {

  return (

    <div className='min-h-screen flex flex-col'>

      <Header />



      <main className='flex-1 bg-[var(--color-surface)]'>

        <section className='bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 border-b border-[var(--color-border-subtle)]'>

          <div className='max-w-4xl mx-auto px-6 text-center'>

            <h1 className='text-4xl font-bold text-[var(--color-primary)] mb-4'>

              UK Exit Snapshot Estimator

            </h1>

            <p className='text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto'>

              Estimate your business exit tax position and concentration risk.

              All calculations run in your browser — no sign-in required to generate a preview.

            </p>

          </div>

        </section>



        <div className='max-w-4xl mx-auto px-6 py-12'>

          <ExitSnapshotCalculator variant='standalone' />

        </div>

      </main>



      <Footer />

    </div>

  );

}

