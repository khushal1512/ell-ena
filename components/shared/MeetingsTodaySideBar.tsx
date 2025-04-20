import Image from 'next/image'
import React from 'react'
import RenderTag from './RenderTag'

const UpcomingMeetings = [
    {
        _id:1, 
        title: "Debugging Diaries: Lessons from the Trenches",
    },
    {
        _id:2, 
        title: "5 PM Stand-Up: Code, Collaborate, Conquer",
    },
    {
        _id:3, 
        title: "Bug Bash Brainstorm",
    },
    {
        _id:4, 
        title: "Low digit addition generator",
    },
    {
        _id:5, 
        title: "Sprint Retrospective: Insights & Improvements",
    }
]

const TaskTags = [
    {
        _id: 1,
        tag: "javascript", 
        totaltasks: 31
    },
    {
        _id: 2,
        tag: "nextjs",
        totaltasks: 22
    },
    {
        _id: 3,
        tag: "critical bug",
        totaltasks: 23
    },
    {
        _id: 4,
        tag: "frontend",
        totaltasks: 2
    },
    {
        _id: 5,
        tag: "ci/cd pipeline",
        totaltasks: 11
    },
    {
        _id: 6,
        tag: "financial",
        totaltasks: 1
    },
    {
        _id: 7,
        tag: "langchain",
        totaltasks: 3
    }
];

const MeetingsTodaySideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
        <div>
            <h3 className="h3-bold text-dark200_light900"> Upcoming Meetings</h3>
            <div className='mt-7 flex w-full flex-col gap-[30px]'>
                {UpcomingMeetings.map((meet) => (
                    <div key={meet._id} className="flex cursor-pointer items-center justify-between gap-7">
                        <p className="body-medium text-dark500_light700">{meet.title}</p>
                        <Image
                            src="/assets/icons/chevron-right.svg"
                            width={20}
                            height={20}
                            alt='chevron right'
                            className='invert-colors'
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-16">
            <h3 className="h3-bold text-dark200_light900">
                Task Tags
            </h3>
            <div className="mt-7 flex flex-col gap-4">
                {TaskTags.map((tag) => (
                    <RenderTag  
                        key={tag._id}
                        name={tag.tag}
                        totalTasks={tag.totaltasks}
                        showCount
                        />
                ))}
            </div>
        </div>
    </section>
  )
}

export default MeetingsTodaySideBar