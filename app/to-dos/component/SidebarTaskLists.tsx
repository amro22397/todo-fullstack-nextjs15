'use client'

import { TaskList } from '@/app/data/Tasks'
import React from 'react'
import EditDeleteTaskList from './EditDeleteTaskList'
import Link from 'next/link'

const SidebarTaskLists = ({ tasksList, email, fetchTasksList }: {
  tasksList: TaskList[],
  email: string | null | undefined,
  fetchTasksList: () => void
}) => {

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <ul className="flex flex-col mx-0 gap-3 max-md:mb-4">
              {tasksList.map((tasklist, index) => (
                <div key={index} className="flex flex-row justify-between items-center">
                  <Link href={`/to-dos/${tasklist._id}`}
                  className="cursor-pointer font-semibold tracking-wider hover:text-gray-600
                  dark:hover:text-gray-200
                  text-md">
                    {capitalizeFirstLetter(`${tasklist.name}`)}
                </Link>

                <EditDeleteTaskList tasklist={tasklist} tasksList={tasksList} email={email} fetchTasksList={fetchTasksList} />
                
                </div>
              ))}
            </ul>
  )
}

export default SidebarTaskLists
