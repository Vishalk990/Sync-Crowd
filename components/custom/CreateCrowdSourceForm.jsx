import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Switch } from "../ui/switch";

export default function CreateCrowdSourceForm({ onProjectCreated = () => {} }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addColumn = () => {
    setColumns([...columns, { name: "", type: "text", required: false }]);
  };

  const updateColumn = (index, field, value) => {
    const updatedColumns = [...columns];
    updatedColumns[index][field] = value;
    setColumns(updatedColumns);
  };

  const removeColumn = (index) => {
    const updatedColumns = columns.filter((_, i) => i !== index);
    setColumns(updatedColumns);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Basic validation
    if (!title.trim()) {
      setError("Project title is required");
      setIsSubmitting(false);
      return;
    }

    if (columns.length === 0) {
      setError("At least one field is required");
      setIsSubmitting(false);
      return;
    }

    if (columns.some((column) => !column.name.trim())) {
      setError("All fields must have a name");
      setIsSubmitting(false);
      return;
    }

    // Prepare the project data
    const projectData = {
      title,
      description,
      columns: columns.map(({ name, type, required }) => ({
        name,
        type,
        required,
      })),
    };

    try {
      // API call to create a new project
      const response = await fetch("/api/crowdsource", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const data = await response.json();

      // If successful, handle the created project
      if (typeof onProjectCreated === "function") {
        onProjectCreated(data);
      }

      // Reset the form
      setTitle("");
      setDescription("");
      setColumns([]);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create a Crowdsourcing Project</CardTitle>
        <CardDescription>
          Design your own data collection project. Define the information you
          want to gather from contributors.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter a title for your project"
              />
            </div>
            <div>
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what your project is about and what kind of data you're collecting"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Define Data Fields</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create the structure for the data you want to collect. Add
                fields and specify their types.
              </p>
              {columns.map((column, index) => (
                <Card key={index} className="mb-4 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`column-name-${index}`}>Field Name</Label>
                      <Input
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        id={`column-name-${index}`}
                        value={column.name}
                        onChange={(e) =>
                          updateColumn(index, "name", e.target.value)
                        }
                        required
                        placeholder="e.g., Restaurant Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`column-type-${index}`}>Field Type</Label>
                      <Select
                        onValueChange={(value) =>
                          updateColumn(index, "type", value)
                        }
                      >
                        <SelectTrigger
                          id={`column-type-${index}`}
                        >
                          <SelectValue placeholder="Select field type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text</SelectItem>
                          <SelectItem value="number">Number</SelectItem>
                          <SelectItem value="date">Date</SelectItem>
                          <SelectItem value="boolean">Yes/No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <Switch
                        id={`column-required-${index}`}
                        checked={column.required}
                        onCheckedChange={(checked) =>
                          updateColumn(index, "required", checked)
                        }
                      />
                      <Label
                        htmlFor={`column-required-${index}`}
                        className="ml-2"
                      >
                        Required field
                      </Label>
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => removeColumn(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card>
              ))}
              <Button
                type="button"
                onClick={addColumn}
                variant="outline"
                className="w-full"
              >
                Add Another Field
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Project"}
        </Button>
      </CardFooter>
    </Card>
  );
}
