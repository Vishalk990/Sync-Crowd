import ContributeProjectsList from "@/components/custom/ContributeProjectsList";
import { Suspense } from "react";

export default function ContributePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Contribute to Projects</h1>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ContributeProjectsList />
      </Suspense>
    </div>
  );
}