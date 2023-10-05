// Import necessary components and styles
"use client"
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Review({ params }) {
  const [value, setValue] = useState(2);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/prompt/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [params.id]);

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow-lg bg-white mt-6 flex">
      {data && (
        <>
          <img src={data.image} alt="Image" className="w-32 h-32 rounded-lg mr-4" />
          <div className="w-3/4">
            <h1 className="text-3xl font-bold mb-2">Details: {data.prompt}</h1>
            <div className="mb-2">Location: {data.location}</div>
            <div className="mb-2">Warehouse Name: {data.warehouseName}</div>
            <div className="mb-2">Creator's Name: {data.creator.name}</div>
            <div className="mb-2">Current Storage Status: {data.currentStorageStatus}</div>
            <div className="mb-2">Build Date: {data.buildDate ? new Date(data.buildDate).toLocaleDateString() : 'N/A'}</div>

            <div className="mb-2">Storage Capacity: {data.storageCapacity}</div>
            <div className="mb-2">Available Storage: {data.availableStorage}</div>
            <div className="mb-2">Description: {data.description}</div>
            <div className="mb-2">Goods Type: {data.goodsType}</div>

            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </>
      )}
    </div>
  );
}
