"use client";

import { Download, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CSVLink } from 'react-csv';
import axios from 'axios';
import Papa from "papaparse";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';

const Page = () => {
    return (
        <div>
            <nav className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <Sparkles className="h-10 w-6 text-blue-500" />
                            Generate Synthetic Data
                        </span>
                    </div>
                </div>
            </nav>
            <SyntheticDataGenerator />
        </div>
    );
};

export default Page;

const models = [
    'gretelai/auto',
    'gretelai/Llama-3.1-8B-Instruct',
    'gretelai/Mistral-7B-Instruct-v0.2/industry',
    'gretelai-azure/gpt-3.5-turbo',
    'gretelai-google/gemini-pro'
]

const SyntheticDataGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [model, setModel] = useState('');
    const [data, setData] = useState([]);
    const [csvData, setCsvData] = useState([]);
    const [num_rec, setNumRec] = useState();
    const [laoding, setLoading] = useState(false)


    const handleGenerate = async () => {
        if (prompt === '' || model === '' || num_rec === 1) return;

        setLoading(true);

        console.log("Request made");
        try {
            const response = await axios.post('https://suryanshbachchan.us-east-1.modelbit.com/v1/generateDataUsingLLM/latest', {
                data: [prompt, model, parseInt(num_rec)]
            });

            const jsonData = response.data.data;
            const parsedData = JSON.parse(jsonData);
            setData(parsedData);
            setCsvData(parsedData);
            console.log(parsedData);

        } catch (error) {
            console.error('Error generating data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full h-[90vh] p-4'>
            <h1 className='ml-2 my-3'> Prompt :</h1>

            <Textarea
                placeholder="Enter your prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full mb-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            />


            <div className='flex'>

                <Input
                    placeholder="Enter the number of records"
                    value={num_rec}
                    onChange={(e) => setNumRec(e.target.value)}
                    className="w-52 focus-visible:ring-0 focus-visible:ring-offset-0"
                />

                
            </div>


            <SelectModel model={model} setModel={setModel} />


            <div className='flex  justify-start items-center gap-4 py-3'>
                <Button onClick={handleGenerate} className="w-32">
                    Generate Data
                </Button>

                {
                    csvData.length > 0 ? (
                        <div className="">
                            <CSVLink data={csvData} filename="synthetic_data.csv" className="flex items-center gap-2">
                                <Download className="mr-2" height={20} width={20} />
                            </CSVLink>
                        </div>
                    ) :
                        (
                            <div></div>
                        )
                }

            </div>



            {data.length > 0 && (
                <>
                    <Table className="w-full border-collapse border border-gray-400 my-4">
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map((key) => (
                                    <th key={key} className="border border-gray-300 p-2 text-left">{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td key={i} className="border border-gray-300 p-2 break-words">{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>


                </>
            )}

        </div>
    );
};

const SelectModel = ({ model, setModel }) => {
    return (
        <Select value={model} onValueChange={(value) => setModel(value)}>
            <SelectTrigger className="w-full my-3 focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Model</SelectLabel>
                    {models.map((model) => (
                        <SelectItem key={model} value={model}>
                            {model}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
