import Link from "next/link";
import Image from "next/image";
import Metric from "@/components/shared/Metric";
import { useTheme } from "@/context/ThemeProvider";


interface TaskProps {
  _id: string;
  title: string;
  description: string;
  createdAt?: Date;
}

const TaskCard = ({ _id, title, description, createdAt }: TaskProps) => {
  return (
    <div className={`card-wrapper rounded-[10px]`}>
      <div className="flex flex-row gap-4 p-6">

        {/* Left Content */}
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-5">
            <div className="flex-1">
              <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-2">
                {title}
              </h3>
            </div>
            <span className="bg-dark-700 text-xs text-light-500 font-medium px-2 py-1 rounded-md self-start">
              DEVELOPMENT
            </span>
          </div>

          <p className="body-regular text-dark200_light900 mt-3.5 line-clamp-3">
            {description.slice(0, 2000)}
          </p>

          {/* Footer */}
          <div className="flex-between mt-6 w-full flex-wrap gap-3">
            <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
              <Metric
                imgUrl="/assets/icons/clock.svg"
                alt="clock"
                value="4hrs left"
                textStyles="small-medium text-light-500"
              />
            </div>

            <Link
              href={`/task/${_id}`}
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="body-semibold primary-text-gradient">View task</p>
              <Image
                alt="arrow up right"
                width={20}
                height={20}
                src="/assets/icons/arrow-up-right.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
