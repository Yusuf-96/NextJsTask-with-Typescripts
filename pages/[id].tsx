import { Button } from "flowbite-react";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import { ITask } from "../type/ITask";

type TaskType = {
  task: ITask;
};

const TaskDetails: React.FC<TaskType> = ({ task }) => {
  return (
    <>
      <div className="max-w-md items-center bg-white mx-auto shadow-md mb-5">
        <div className="p-3">
          <h1 className="text-2xl font-bold">Task Details</h1>
        </div>
        <div className="px-4 py-4">
          <div className="border bg-gray-50 hover:shadow-md py-4 mb-4">
            <div className="px-2">
              <span>{task.title}</span>
            </div>
            <div className="px-2">
              <span>{task.body}</span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-5">
          <Link href="/">
            <Button outline={true} gradientDuoTone="purpleToPink" type="button">
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const id = context.params?.id;
  const res = await fetch(
    `https://noteappfeature.herokuapp.com/api/todo/${params?.id}/`
  );
  const task = await res.json();
  if (!task) {
    return {
      notFound: true,
    };
  }
  return {
    props: { task },
  };
};
