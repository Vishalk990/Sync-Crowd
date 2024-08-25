import CrowdsourceProjects from "@/components/custom/CrowdsourceProjects";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function CrowdsourcePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">CrowdSource Projects</h1>
      <Suspense
        fallback={
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 opacity-75" />
        }
      >
        <CrowdsourceProjects />
      </Suspense>
    </div>
  );
}
