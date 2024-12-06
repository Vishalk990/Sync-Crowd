"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Layers, Rocket } from 'lucide-react';

export default function CrowdsourcePage() {
  const [MotionDiv, setMotionDiv] = useState(() => React.Fragment);

  useEffect(() => {
    import("framer-motion").then((mod) => {
      setMotionDiv(() => mod.motion.div);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <MotionDiv
      className="container py-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionDiv
        className="text-2xl font-semibold mb-8 text-center"
        variants={itemVariants}
      >
        CrowdSource Projects
      </MotionDiv>

      <MotionDiv
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px] flex flex-col">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <PlusCircle className="w-6 h-6 text-gray-700" />
              <CardTitle className="text-2xl font-bold text-gray-900">Create Your Own Project</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Design and launch your own data collection project.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 flex-grow flex flex-col justify-between">
            <div className="flex justify-center items-center flex-grow">
              <Layers className="w-32 h-32 text-gray-300" />
            </div>
            <Link href="/crowd-source/create" passHref>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white w-full px-8 py-2 rounded-full transition-colors duration-300">
                Create Project
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px] flex flex-col">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-gray-700" />
              <CardTitle className="text-2xl font-bold text-gray-900">Contribute to Projects</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Participate in ongoing data collection projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 flex-grow flex flex-col justify-between">
            <div className="flex justify-center items-center flex-grow">
              <Rocket className="w-32 h-32 text-gray-300" />
            </div>
            <Link href="/crowd-source/contribute" passHref>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white w-full px-8 py-2 rounded-full transition-colors duration-300">
                View Projects
              </Button>
            </Link>
          </CardContent>
        </Card>
      </MotionDiv>
    </MotionDiv>
  );
}