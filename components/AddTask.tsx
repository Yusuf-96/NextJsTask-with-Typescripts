import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { ITask } from "../type/ITask";
import { useRouter } from "next/router";

const AddTask: React.FC = () => {
  const initialData = {
    title: "",
    body: "",
  };
  const [inputData, setInputData] = useState<ITask>(initialData);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://noteappfeature.herokuapp.com/api/todo/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: inputData.title,
            body: inputData.body,
          }),
        }
      );
      const data = setInputData(initialData);
      refreshData();
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="max-w-md items-center bg-white mx-auto shadow-md mb-5">
        <div className="p-3">
          <h1 className="text-2xl font-bold">Task App</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-4 py-4">
            <div className="mb-6">
              <Input
                variant="standard"
                label="Title"
                color="red"
                name="title"
                value={inputData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <Input
                variant="standard"
                label="Descreption"
                color="red"
                name="body"
                value={inputData.body}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <Button
                outline={true}
                gradientDuoTone="purpleToPink"
                type="submit"
              >
                Add Task
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
