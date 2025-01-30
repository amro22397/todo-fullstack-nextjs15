"use client";

import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from '@/app/data/Tasks';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';


const CheckBoxComponent = ({ singleTask }: { singleTask: Task}) => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleCheckboxChange = () => {

        setLoading(true);

        axios.put("/api/tasks/update-status", {
            id: singleTask?._id,
            status: singleTask.status === "completed" ? "in progress" : "completed",
        })
        .then(() => {
            setLoading(false);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        })
    
      }
  return (
    <div className='hover:opacity-90'>
      
    {loading ? (
        <CircularProgress color="primary" />
      ) : (
        <>
        <Checkbox
          id={`task-${singleTask.id}`}
          className="w-5 h-5 cursor-pointer"
          checked={singleTask.status === "completed"}
          onCheckedChange={handleCheckboxChange}
        />
        </>
      )}
    </div>
  )
}

export default CheckBoxComponent
