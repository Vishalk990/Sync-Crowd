// components/custom/ContributeForm.jsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

export default function ContributeForm({ projectId }) {
  const [project, setProject] = useState(null);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchProject();
  }, [projectId]);

  const fetchProject = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/crowdsource/${projectId}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
        initializeFormData(data.columns);
      } else {
        setError("Failed to fetch project");
      }
    } catch (error) {
      setError("Error fetching project");
    }
    setIsLoading(false);
  };

  const initializeFormData = (columns) => {
    const initialData = {};
    columns.forEach((column) => {
      initialData[column.name] = column.type === "boolean" ? false : "";
    });
    setFormData(initialData);
  };

  const handleInputChange = (e, columnType) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: columnType === "boolean" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/crowdsource/contribute/${projectId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/crowd-source");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to submit contribution");
      }
    } catch (error) {
      setError("Error submitting contribution");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExport = async (format) => {
    try {
      const response = await fetch(
        `/api/crowdsource/export/${projectId}?format=${format}`
      );
      if (!response.ok) throw new Error("Export failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${project.title}.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export error:", error);
      setError(`Error exporting ${format.toUpperCase()}`);
    }
  };

  if (isLoading) return <div>Loading project...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {project.columns.map((column) => (
            <div key={column._id} className="mb-4">
              <Label htmlFor={column.name}>{column.name}</Label>
              {column.type === "text" && (
                <Input
                  type="text"
                  id={column.name}
                  name={column.name}
                  value={formData[column.name]}
                  onChange={(e) => handleInputChange(e, column.type)}
                  required={column.required}
                />
              )}
              {column.type === "number" && (
                <Input
                  type="number"
                  id={column.name}
                  name={column.name}
                  value={formData[column.name]}
                  onChange={(e) => handleInputChange(e, column.type)}
                  required={column.required}
                />
              )}
              {column.type === "date" && (
                <Input
                  type="date"
                  id={column.name}
                  name={column.name}
                  value={formData[column.name]}
                  onChange={(e) => handleInputChange(e, column.type)}
                  required={column.required}
                />
              )}
              {column.type === "boolean" && (
                <div className="flex items-center">
                  <Switch
                    id={column.name}
                    name={column.name}
                    checked={formData[column.name]}
                    onCheckedChange={(checked) =>
                      handleInputChange(
                        { target: { name: column.name, checked } },
                        column.type
                      )
                    }
                  />
                  <Label htmlFor={column.name} className="ml-2">
                    {formData[column.name] ? "Yes" : "No"}
                  </Label>
                </div>
              )}
            </div>
          ))}
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Contribution"}
        </Button>
        <Button onClick={() => handleExport("csv")}>Export as CSV</Button>
        <Button onClick={() => handleExport("json")}>Export as JSON</Button>
      </CardFooter>
    </Card>
  );
}
