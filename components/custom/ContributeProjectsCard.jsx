"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContributeProjectsCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      // Replace this with your actual API call
      const response = await fetch("/api/crowdsource/list");
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Contribute to Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available for contribution at the moment.</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project._id}>
              <Link
                href={`/crowd-source/contribute/${project._id}`}
                className="text-blue-500 hover:underline"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
