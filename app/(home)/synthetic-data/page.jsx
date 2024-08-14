"use client";

import { CardDemo } from "@/components/custom/CardDemo";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-[90vh]">
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Sparkles className="h-10 w-6 text-blue-500" />
                Generate Synthetic Data
              </span>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4 p-11 justify-center">
        <CardDemo 
          title="Generate data from a prompt" 
          description="Use advanced LLM models to generate high-quality synthetic data from simple text prompts. Perfect for creating diverse datasets effortlessly."
          type="1"
          onClick={() => router.push("/synthetic-data/using-LLM")}
        />

        <CardDemo 
          title="Generate synthetic data from CSV's" 
          description="Provide a small dataset, and let our models generate comprehensive synthetic data, extending and enhancing your original data seamlessly." 
          type="2"
          onClick={() => router.push("/synthetic-data/using-generators")}
        />
        </div>
      </div>
    </>
  )
}

export default page


