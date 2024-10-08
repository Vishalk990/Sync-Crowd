"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ReadyToStartHero from "@/components/custom/ReadyToStartHero";
import { useRouter } from "next/navigation";
import Meteors from "@/components/magicui/meteors";
import { Boxes, FileText, Goal, Library, ScrollText } from "lucide-react";
import Services from "@/components/custom/Services";
import { AnimatedTooltipPreview } from "@/components/custom/AnimatedTooltipPreview"; 
import { Companies } from "@/components/custom/Companies";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";

export default function Home() {
  const router = useRouter();

  // Ref and InView hook for each section
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { triggerOnce: true, threshold: 0.1 });

  const companiesRef = useRef(null);
  const isCompaniesInView = useInView(companiesRef, { triggerOnce: true, threshold: 0.1 });

  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { triggerOnce: true, threshold: 0.1 });

  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar />
      <main className="container mx-auto py-14">
        <div className="text-center mb-16 animate-fadeIn">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[300px] sm:h-[500px] w-full flex-col items-center justify-center overflow-hidden px-4"
          >
            <Meteors number={30} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight sm:leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Synthetic Data Generation Platform
              <p className="text-sm sm:text-base lg:text-lg font-light text-gray-400 mt-4 sm:mt-6 lg:mt-8">
                Generate high-quality synthetic data for your machine learning models
              </p>
            </span>
          </motion.div>

          <motion.div
            ref={companiesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isCompaniesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-10 justify-center">
              <Dialog className="sm:h-5">
                <DialogTrigger asChild>
                  <Button size="lg">Learn More <Library height={27} width={27} className="p-1" /></Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-4xl">About Our Platform</DialogTitle>
                    <DialogDescription className="text-justify">
                      <p>
                        Our synthetic data generation platform helps you create
                        realistic datasets for training and testing machine learning
                        models.
                      </p>

                      <span className="flex items-center gap-3">
                        <Goal />
                        <h3 className="py-2 font-semibold text-xl"> Our Vision</h3>
                      </span>

                      <p className="text-justify pl-5">
                        At SyncCrowd, we believe in democratizing access to high-quality data for
                        machine learning. Our platform aims to bridge the gap between data scientists and
                        diverse datasets, fostering innovation and collaboration.
                      </p>

                      <span className="flex items-center gap-3">
                        <ScrollText />
                        <h3 className="py-2 font-semibold text-xl"> Our Story </h3>
                      </span>

                      <p className="text-justify pl-5">
                        Founded by a team of data enthusiasts and researchers, SyncCrowd was created to address the limitations of traditional data collection methods. We leverage crowdsourcing and synthetic data generation to build robust, diverse datasets for the global data science community.
                      </p>

                      <span className="flex items-center gap-3">
                        <Boxes />
                        <h3 className="py-2 font-semibold text-xl"> Meet the Team </h3>
                      </span>

                      <AnimatedTooltipPreview />

                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Button size="lg" onClick={() => router.push("/docs")}>
                Go to Docs <FileText height={20} width={20} className="m-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Companies/>
          <Services />
        </motion.div>

      </main>

      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <ReadyToStartHero />
        <Footer />
      </motion.div>
    </div>
  );
}
