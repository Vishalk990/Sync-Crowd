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
import { PlusCircle, Users } from 'lucide-react';

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

      {/* <MotionDiv className="mb-12 ml-4" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">How Our Platform Works</h2>
        <ol className="list-decimal list-inside text-md mb-4">
          <li className="mb-2">
            Create a project or choose an existing one to contribute to.
          </li>
          <li className="mb-2">
            Define the data you need or contribute to ongoing projects.
          </li>
          <li className="mb-2">
            Collaborate with others to gather and validate information.
          </li>
          <li className="mb-2">
            Access and analyze the collected data for your research or business
            needs.
          </li>
        </ol>
      </MotionDiv> */}

      <MotionDiv
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <PlusCircle className="w-6 h-6 text-blue-500" />
              <CardTitle className="text-2xl font-bold text-blue-700">Create Your Own Project</CardTitle>
            </div>
            <CardDescription className="text-blue-600">
              Design and launch your own data collection project.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Link href="/crowd-source/create" passHref>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto px-8 py-2 rounded-full transition-colors duration-300">
                Create Project
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-green-500" />
              <CardTitle className="text-2xl font-bold text-green-700">Contribute to Projects</CardTitle>
            </div>
            <CardDescription className="text-green-600">
              Participate in ongoing data collection projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Link href="/crowd-source/contribute" passHref>
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto px-8 py-2 rounded-full transition-colors duration-300">
                View Projects
              </Button>
            </Link>
          </CardContent>
        </Card>
      </MotionDiv>
    </MotionDiv>
  );
}
