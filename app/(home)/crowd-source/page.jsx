import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Grid } from "@/components/ui/grid";

const CrowdSource = () => {

  const tasks = [
    {
      title: "Image Tagging",
      description: "Label images with relevant tags (e.g., 'cat,' 'car,' 'tree').",
      icon: "🏷️",
    },
    {
      title: "Object Detection",
      description: "Draw bounding boxes around objects in images and label them (e.g., 'dog,' 'bicycle').",
      icon: "📦",
    },
    {
      title: "Text Classification",
      description: "Classify text snippets into predefined categories (e.g., 'positive,' 'negative,' 'neutral').",
      icon: "📝",
    },
    {
      title: "Sentiment Analysis",
      description: "Determine the sentiment of a given text (e.g., 'happy,' 'sad,' 'angry').",
      icon: "😊",
    },
    {
      title: "Named Entity Recognition (NER)",
      description: "Identify and label entities in text (e.g., 'John' as a person, 'Paris' as a location).",
      icon: "👤",
    },
    {
      title: "Image Segmentation",
      description: "Segment an image by drawing boundaries around different regions and labeling them.",
      icon: "🖼️",
    },
  ];


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center uppercase">Choose an Annotation Task</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">{task.icon}</span>
                {task.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 h-15 border p-3">{task.description}</p>
            </CardContent>
              <Button className="w-full">Start Task</Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CrowdSource

