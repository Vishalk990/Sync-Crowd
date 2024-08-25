import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import CreateCrowdSourceForm from './CreateCrowdSourceForm';

export default function NewProjectCard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Card className="w-full max-w-2xl mx-auto mt-4">
      <CardHeader>
        <CardTitle>Create a New Crowdsourcing Project</CardTitle>
      </CardHeader>
      <CardContent>
        {!showForm ? (
          <p>Start a new project to collect data from the crowd. Click below to begin.</p>
        ) : (
          <CreateCrowdSourceForm onProjectCreated={() => setShowForm(false)} />
        )}
      </CardContent>
      <CardFooter>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>
            Create New Project
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}