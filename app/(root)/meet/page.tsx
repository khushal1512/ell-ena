import Link from "next/link";
import { Button } from "@/components/ui/button";
import MeetingCard from "@/components/shared/cards/MeetingCard";
import type { Metadata } from "next";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

interface Meeting {
  _id: string;
  title: string;
  createdAt: Date;
}

export const metadata: Metadata = {
  title: "Meetings — Ell-ena",
};

export default async function Meetings() {
  const meetings: Meeting[] = [
    {
      _id: "1",
      title: "Open Peer Chat",
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "Agora Frontend",
      createdAt: new Date(),
    },
    {
      _id: "3",
      title: "Hodl Team",
      createdAt: new Date(),
    },
    {
      _id: "4",
      title: "Stability Chat",
      createdAt: new Date(),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Meetings</h1>

        <Link href="/create-meeting" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Create a Meeting
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/meet"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Meetings"
          otherClasses="flex-1"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {meetings.length > 0 &&
          meetings.map((meeting: Meeting) => (
            <MeetingCard
              key={meeting._id}
              _id={meeting._id}
              title={meeting.title}
              createdAt={meeting.createdAt}
            />
          ))}
      </div>
    </>
  );
}
