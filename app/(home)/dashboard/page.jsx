"use client";

import WordPullUp from "@/components/magicui/word-pull-up";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Loader2, FileSpreadsheet } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageContent = () => {
  const { user } = useUser();
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = user ? user.firstName || user.username : "Guest";

  useEffect(() => {
    if (user) {
      fetchCloudinaryUrls();
    }
  }, [user]);

  const fetchCloudinaryUrls = async () => {
    try {
      const response = await fetch("/api/user/cloudinaryUrl", {
        headers: {
          "x-clerk-user-id": user.id,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cloudinary URLs");
      }

      const data = await response.json();
      console.log(data);
      setDatasets(data.datasets || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 border-none bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>
              <WordPullUp
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-4xl"
                words={`🎉 Welcome, ${username}`}
              />
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Dataset History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center py-12"
                >
                  <Loader2 className="h-12 w-12 animate-spin text-blue-400" />
                </motion.div>
              ) : error ? (
                <motion.p
                  key="error"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="text-red-500 dark:text-red-400"
                >
                  Error: {error}
                </motion.p>
              ) : datasets.length > 0 ? (
                <motion.div
                  key="table"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="overflow-x-auto"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead className="text-right">Download</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {datasets.map((dataset, index) => (
                        <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <TableCell>
                            <FileSpreadsheet className="h-6 w-6 text-primary" />
                          </TableCell>
                          <TableCell className="font-medium">
                            {dataset.filename || `Dataset ${index + 1}`}
                          </TableCell>
                          <TableCell>
                            {new Date(dataset.createdAt).toLocaleString()}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              onClick={() => window.open(dataset.cloudinaryUrl, "_blank")}
                              variant="outline"
                              size="sm"
                              className="hover:bg-primary hover:text-primary-foreground"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </motion.div>
              ) : (
                <motion.p
                  key="no-datasets"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="text-center py-12 text-gray-500 dark:text-gray-400"
                >
                  No datasets generated yet. Start creating to see your history!
                </motion.p>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const Page = () => {
  return <PageContent />;
};

export default Page;

