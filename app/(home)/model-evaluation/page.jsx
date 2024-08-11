import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@shadcn/ui'; // Assuming ShadCN UI library
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Using Recharts for graph visualization

const ModelEvaluation = () => {
  // Sample data for demonstration purposes
  const data = [
    { name: 'Accuracy', value: 0.95 },
    { name: 'Precision', value: 0.92 },
    { name: 'Recall', value: 0.90 },
    { name: 'F1 Score', value: 0.91 },
    { name: 'MSE', value: 0.04 },
  ];

  const confusionMatrixUrl = '/path/to/confusion_matrix.png'; // Replace with actual URL
  const rocCurveUrl = '/path/to/roc_curve.png'; // Replace with actual URL

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-4 text-center">Model Evaluation</Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-lg">
          <CardHeader>
            <Typography variant="h6">Evaluation Metrics</Typography>
          </CardHeader>
          <CardContent>
            <ul>
              {data.map(metric => (
                <li key={metric.name} className="mb-2">
                  <Typography variant="body1"><strong>{metric.name}:</strong> {metric.value}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <Typography variant="h6">Confusion Matrix</Typography>
          </CardHeader>
          <CardContent>
            <img src={confusionMatrixUrl} alt="Confusion Matrix" className="w-full h-auto" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card className="shadow-lg">
          <CardHeader>
            <Typography variant="h6">ROC Curve</Typography>
          </CardHeader>
          <CardContent>
            <img src={rocCurveUrl} alt="ROC Curve" className="w-full h-auto" />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <Typography variant="h6">Learning Curve</Typography>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ModelEvaluation;
