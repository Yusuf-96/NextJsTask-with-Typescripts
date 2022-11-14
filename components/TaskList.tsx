import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ITask } from "../type/ITask";

type TaskType = {
  tasks: ITask[];
};

const TaskList: React.FC<TaskType> = ({ tasks }) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const deleteTask = async (id: any) => {
    await fetch(`https://noteappfeature.herokuapp.com/api/todo/${id}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    refreshData();
  };

  return (
    <div className="max-w-md items-center bg-white mx-auto shadow-md">
      <div className="p-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Task List</h1>
        <span className="font-medium">{tasks.length}</span>
      </div>
      <div className="px-4 py-4">
        {tasks.map((task) => (
          <div
            className="border bg-gray-50 hover:shadow-md py-4 mb-4"
            key={task.id}
          >
            <div className="px-2 flex justify-between">
              <Link href={`/${task?.id}`}>
                <span className="font-medium">{task.title}</span>
              </Link>
              <div
                className="font-bold  hover:text-red-500 cursor-pointer"
                onClick={() => deleteTask(task.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
            <div className="px-2">
              <span className="text-base">{task.body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
