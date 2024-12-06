import ContributeProjectsList from "@/components/custom/ContributeProjectsList";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function ContributePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Contribute to Projects</h1>
      <Suspense fallback={ <Loader2 className="h-12 w-12 animate-spin text-blue-400" />}>
        <ContributeProjectsList />
      </Suspense>
    </div>
  );
}