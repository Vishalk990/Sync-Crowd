"use client";

import { CardDemo } from "@/components/custom/CardDemo";
import { Sparkles, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SyntheticDataPageContent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="h-[90vh]">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-[90vh] flex items-center justify-center"
          >
            <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.nav 
              variants={itemVariants}
              className="bg-white shadow-sm border-b"
            >
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Sparkles className="h-10 w-6 text-blue-500" />
                    Generate Synthetic Data
                  </span>
                </div>
              </div>
            </motion.nav>

            <div className="flex items-center gap-4 p-11 justify-center">
              <motion.div variants={itemVariants}>
                <CardDemo
                  title="Generate data from a prompt"
                  description="Use advanced LLM models to generate high-quality synthetic data from simple text prompts. Perfect for creating diverse datasets effortlessly."
                  type="1"
                  onClick={() => router.push("/synthetic-data/using-LLM")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <CardDemo
                  title="Generate synthetic data from CSV's"
                  description="Provide a small dataset, and let our models generate comprehensive synthetic data, extending and enhancing your original data seamlessly."
                  type="2"
                  onClick={() => router.push("/synthetic-data/using-generators")}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Page = () => {
  return <SyntheticDataPageContent />;
};

export default Page;