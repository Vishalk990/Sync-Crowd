"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import CreateCrowdSourceForm from "./CreateCrowdSourceForm";
import CreatedProjectCard from "./CreatedProjectCard";
import { Loader2 } from "lucide-react";

export default function CrowdsourceProjects() {
  const [projects, setProjects] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    setIsLoading(false);
  };

  const handleProjectCreated = (newProject) => {
    setProjects([newProject, ...projects]);
    setShowCreateForm(false);
  };

  if (isLoading)
    return (
      <Loader2 className="h-12 w-12 animate-spin mx-auto my-20 text-blue-500 opacity-75" />
    );

  return (
    <div>
      <div className="mb-6 ml-6">
        {!showCreateForm ? (
          <Button onClick={() => setShowCreateForm(true)}>
            Create 
          </Button>
        ) : (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl text-center font-semibold mb-4">Specify the details of the dataset</h2>
            <CreateCrowdSourceForm onProjectCreated={handleProjectCreated} />
          </div>
        )}
      </div>

      {projects.length > 0 ? (
        <div className="flex overflow-x-auto space-x-4">
          {projects.map((project) => (
            <CreatedProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        !showCreateForm && (
          <p>
            No projects created yet. Click the button above to create your first
            project!
          </p>
        )
      )}
    </div>
  );
}
