// pages/uploader.js
'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layers3, ScrollText, Shapes, Type, X } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";

export default function Uploader() {
  const [textSnippets, setTextSnippets] = useState(['']);
  const [categories, setCategories] = useState(['']);
  const { toast } = useToast();

  const handleTextSnippetChange = (index, value) => {
    const newTextSnippets = [...textSnippets];
    newTextSnippets[index] = value;
    setTextSnippets(newTextSnippets);
  };

  const addTextSnippet = () => {
    setTextSnippets([...textSnippets, '']);
  };

  const removeTextSnippet = (index) => {
    const newTextSnippets = textSnippets.filter((_, i) => i !== index);
    setTextSnippets(newTextSnippets);
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const addCategory = () => {
    setCategories([...categories, '']);
  };

  const removeCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  // In the imports section, add:


  // Replace the handleSubmit function with:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-classification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textSnippets, categories }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Submission successful:', data);
      toast({
        title: "Success!",
        description: "Text snippets and categories uploaded successfully!",
      });
      setTextSnippets(['']);
      setCategories(['']);
    } catch (error) {
      console.error('Error submitting data:', error);
      toast({
        title: "Error",
        description: "Failed to upload data. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              {/* <Sparkles className="h-10 w-6 text-blue-500" /> */}
              <Shapes className="h-10 w-6 text-blue-500" />
              Text Classification
            </span>
          </div>
        </div>
      </nav>
      <div className="min-h-[80vh] p-6 bg-gray-100 dark:bg-gray-900">

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <Label className="text-xl">Text Snippets</Label>
            {textSnippets.map((textSnippet, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Textarea
                  id={`textSnippet-${index}`}
                  value={textSnippet}
                  onChange={(e) => handleTextSnippetChange(index, e.target.value)}
                  required
                  className="flex-grow min-h-[100px] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeTextSnippet(index)}
                    className={"rounded-full"}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addTextSnippet} className="w-full">
              <ScrollText className='text-slate-300 m-3' />
              Add Text Snippet
            </Button>
          </div>

          <div className="space-y-4">
            <Label className="text-xl">Classification Categories</Label>
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={category}
                  onChange={(e) => handleCategoryChange(index, e.target.value)}
                  required
                  className="flex-grow focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeCategory(index)}
                    className={"rounded-full"}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addCategory} className="w-full">
              <Layers3 className='text-slate-300 m-3' />
              Add Category
            </Button>
          </div>

          <Button type="submit" className="w-full py-3 text-lg">Upload</Button>
        </form>
        <Toaster />
      </div>
    </div>
  );
}
