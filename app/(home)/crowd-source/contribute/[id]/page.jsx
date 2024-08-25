import { Suspense } from 'react';
import ContributeForm from '@/components/custom/ContributeForm';

export default function ContributePage({ params }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Contribute to Project</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ContributeForm projectId={params.id} />
      </Suspense>
    </div>
  );
}