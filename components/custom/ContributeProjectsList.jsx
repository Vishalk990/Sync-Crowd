"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContributeProjectsList() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/crowdsource");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        setError("Failed to fetch projects");
      }
    } catch (error) {
      setError("Error fetching projects");
    }
    setIsLoading(false);
  };

  if (isLoading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.length === 0 ? (
        <p>No projects available for contribution at the moment.</p>
      ) : (
        projects.map((project) => (
          <Card key={project._id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fields: {project.columns.length}</p>
              {/* You can add more project details here */}
              <p> {(project._id)}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/crowd-source/contribute/${project._id}`} passHref>
             
                <Button className="w-full">Contribute</Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
