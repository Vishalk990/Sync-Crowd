"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FeatureCard from "@/components/ui/FeatureCard";
import Footer from "@/components/ui/Footer";

import Navbar from "@/components/ui/Navbar";
import ReadyToStartHero from "@/components/ui/ReadyToStartHero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar />
      <main className="container mx-auto py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">
            Synthetic Data Generation Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Generate high-quality synthetic data for your machine learning
            models
          </p>
          <div className="flex gap-10 justify-center">
            <Dialog className="sm:h-5">
              <DialogTrigger asChild>
                <Button size="lg">Learn More</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>About Our Platform</DialogTitle>
                  <DialogDescription>
                    Our synthetic data generation platform helps you create
                    realistic datasets for training and testing machine learning
                    models.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Button size="lg" onClick={() => router.push("/docs")}>
              Go to Docs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Synthetic Data Generation"
            description="Generate realistic datasets that mimic real-world scenarios."
          />
          <FeatureCard
            title="Rewards in Data Labeling"
            description="Incentivize community-driven engagement in data labeling."
          />
          <FeatureCard
            title="Crowdsourced Dataset Creation"
            description="Collaboratively create large and varied datasets."
          />
          <FeatureCard
            title="Data Cleaning Tools"
            description="Ensure data quality and consistency with our cleaning tools."
          />
          <FeatureCard
            title="Model Testing/Evaluation"
            description="Benchmark and fine-tune your machine learning models."
          />
        </div>
      </main>
      <ReadyToStartHero />
      <Footer />
    </div>
  );
}
