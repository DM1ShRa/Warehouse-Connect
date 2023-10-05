"use client"
import { useState, useEffect } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export default function Review({ params }) {
    const [value, setValue] = React.useState(2);
    const [data, setData] = useState(null)
    useEffect(() => {

        fetch(`/api/prompt/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
    }, [])
    return (
        <>
            <h1>Hello</h1>
            <div>{data.image}</div>
            <h1>{data.prompt}</h1>
            <h1>{data.location}</h1>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>

        </>
    );
}