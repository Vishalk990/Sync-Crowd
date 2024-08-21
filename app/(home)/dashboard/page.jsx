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
import { Download, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <WordPullUp
        className="flex m-3 p-3 text-3xl font-semibold tracking-[-0.02em] text-black dark:text-white md:leading-[5rem]"
        words={`🎉 Welcome, ${username}`}
      />
      <motion.div className="m-3 p-3" variants={itemVariants}>
        <h2 className="text-2xl font-semibold m-3 p-3">History</h2>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-500 opacity-75" />
            </motion.div>
          ) : error ? (
            <motion.p
              key="error"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
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
            >
              <Table className="m-3 w-[90%]">
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Download</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {datasets.map((dataset, index) => (
                    <motion.tr key={index} variants={itemVariants}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {dataset.filename || `Dataset ${index + 1}`}
                      </TableCell>
                      <TableCell>
                        {new Date(dataset.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            window.open(dataset.cloudinaryUrl, "_blank")
                          }
                          variant="outline"
                          size="sm"
                        >
                          <Download />
                        </Button>
                      </TableCell>
                    </motion.tr>
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
              className="m-3 p-3"
            >
              No datasets generated.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Page = () => {
  return <PageContent />;
};

export default Page;
