import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

export default function CreatedProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="w-full max-w-sm mx-auto mt-4">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
        <Button 
          onClick={() => setShowDetails(!showDetails)} 
          className="mt-4"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
        {showDetails && (
          <div className="mt-4">
            <h3 className="font-semibold">Fields:</h3>
            <ul>
              {project.columns.map((column, index) => (
                <li key={index}>
                  {column.name} - {column.type} {column.required ? '(Required)' : ''}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">Created on: {new Date(project.createdAt).toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  );
}