import Link from "next/link";
import { Button } from "@/components/ui/button";
import TaskCard from "@/components/shared/cards/TaskCard";
import type { Metadata } from "next";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

interface Task {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export const metadata: Metadata = {
  title: "Home — Ell-ena",
};

export default async function Home() {
  const tasks: Task[] = [
    {
      _id: "1",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
    {
      _id: "3",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
    {
      _id: "4",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
    {
      _id: "5",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
    {
      _id: "6",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
    {
      _id: "7",
      title: "Create a Lang-Chain Pipeline",
      description: "This contains the AI generated Task based on users meeting transcription and Chat communications.",
      createdAt: new Date(),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Tasks</h1>

        <Link href="/create-task" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Create a Task
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Tasks and Meetings"
          otherClasses="flex-1"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {tasks.length > 0 &&
          tasks.map((task: Task) => (
            <TaskCard
              key={task._id}
              _id={task._id}
              title={task.title}
              description={task.description}
              createdAt={task.createdAt}
            />
          ))}
      </div>
    </>
  );
}
