'use client'

import { AppLogo } from '@/components/AppLogo'
import React, { useEffect, useState } from 'react'
import TaskListAddDialog from '../TaskListAddDialog'
import mongoose from 'mongoose'
import { TasksList } from '@/models/tasks-list'
import { Edit, Trash, X } from 'lucide-react'


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EditDeleteTaskList from './EditDeleteTaskList'
import Link from 'next/link'
import CloseSidebar from './CloseSidebar'
import SidebarTaskLists from './SidebarTaskLists'
import { getServerSession } from 'next-auth/next'
import { authConfig } from '@/lib/auth'
import { getSession } from '@/app/actions/getUser'
import axios from 'axios'


const SideBar = ({ session }: { session: any}) => {


  const [tasksList, setTasksList] = useState([]);

  const fetchTasksList = async () => {
    const res = await axios.get(`/api/tasks-list-get`);
    console.log(res.data)

    setTasksList(res.data.data);
}

useEffect(() => {
    fetchTasksList();
}, []);

  // const session = await getSession();
  //   console.log(session);

  // const tasksList = await TasksList.find({userEmail: {$in: [session?.user?.email]}})

  // const jTasklists = JSON.parse(JSON.stringify(tasksList));

  const taskListIconSize = 17;
  const taskListButtonClassName = "cursor-pointer active:scale-95"
  

  return (
    <div className="max-md:z-50
    md:w-[400px] w-[98%] sm:w-[95%] 
     md:h-screen border-r border-solid px-3 sm:px-14
    
        border-gray-200 md:px-[11px] flex flex-col gap-4">


            <AppLogo className="mt-5"/>

            <div className="flex flex-col gap-3 mx-2">
            <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg text-gray-700">Tasks List</h2>

            <TaskListAddDialog tasksList={tasksList} />
            
            </div>

            <SidebarTaskLists tasksList={tasksList} />
            </div>


        </div>
  )
}

export default SideBar
