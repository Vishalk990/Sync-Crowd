import { Suspense } from 'react';
import ContributeForm from '@/components/custom/ContributeForm';
import { Loader2 } from 'lucide-react';

export default function ContributePage({ params }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Contribute to Project</h1>
      <Suspense fallback={ <Loader2 className="h-12 w-12 animate-spin text-blue-400" />}>
        <ContributeForm projectId={params.id} />
      </Suspense>
    </div>
  );
}