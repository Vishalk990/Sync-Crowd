"use client";

import { useState } from "react";
import Papa from "papaparse";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Circle, Download, Sparkles } from "lucide-react";

export default function CSVUpload() {
  const [file, setFile] = useState(null);
  const [publicUrl, setPublicUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    setError("");

    try {
      // Upload file to Cloudinary
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch("/api/cloudinary/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      if (!uploadData.success) {
        throw new Error(uploadData.message || "Upload failed");
      }

      console.log("1st Upload Done", uploadData.result);

      // Make POST request to generate data
      // const generateResponse = await fetch(
      //   "https://suryanshbachchan.us-east-1.modelbit.com/v1/generateData/latest",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ data: uploadData.result.secure_url }),
      //   }
      // );

      // if (!generateResponse.ok) {
      //   throw new Error("Data generation failed");
      // }

      // const generatedData = await generateResponse.json();
      // console.log(generatedData);

      console.log("Got the synthetic data");

      // Delete the old csv from cloudinary
      console.log(uploadData.result.public_id);
      const deleteResponse = await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id: uploadData.result.public_id }),
      });

      if (!deleteResponse.ok) {
        throw new Error("Failed to delete old file");
      }

      console.log("Deleted the old file");

      // Convert json data back to csv
      const csv = Papa.unparse(generatedData);
      console.log("Converted Json to Csv");

      // Upload the new file to cloudinary
      const newFormData = new FormData();
      newFormData.append(
        "file",
        new Blob([csv], { type: "csv" }),
        "generated_data.csv"
      );

      const newUploadResponse = await fetch("/api/cloudinary/upload", {
        method: "POST",
        body: newFormData,
      });

      const newUploadData = await newUploadResponse.json();
      setPublicUrl(newUploadData.result.secure_url);

      console.log("2nd upload done");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white text-xl font-bold flex items-center gap-2">
            <Sparkles />
            Generate Synthetic Data
          </span>
        </div>
      </nav>

      <main className="container mx-auto mt-8 flex-grow">
        <div className="flex flex-col items-start gap-4">
          <Input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            disabled={isLoading}
            className="cursor-pointer"
          />
          <div className="flex gap-4">
            <Button onClick={handleUpload} disabled={!file || isLoading} className="cursor-pointer">
              {isLoading ? (
                <>
                  <Circle className="animate-bounce mr-2" /> Processing...
                </>
              ) : (
                "Upload and Generate Data"
              )}
            </Button>

            {publicUrl && (
              <Link href={publicUrl} download="generated_data.csv">
                <Button>
                  <Download /> Download
                </Button>
              </Link>
            )}
          </div>

          {isLoading && <div>Loading... This may take a while.</div>}

          {error && <div className="text-red-500">{error}</div>}
        </div>
      </main>
    </div>
  );
}
