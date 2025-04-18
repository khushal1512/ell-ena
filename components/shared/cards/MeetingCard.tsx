import Link from "next/link";
import Image from "next/image";
import Metric from "@/components/shared/Metric";

interface MeetingProps {
  _id: string;
  title: string;
  createdAt?: Date;
}

const MeetingCard = ({ _id, title, createdAt }: MeetingProps) => {
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
          </div>

          {/* Footer */}
          <div className="flex-between mt-6 w-full flex-wrap gap-3">
            <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
              <Metric
                imgUrl="/assets/icons/clock.svg"
                alt="clock"
                value="Active now"
                textStyles="small-medium text-light-500"
              />
            </div>

            <Link
              href={`/meet/${_id}`}
              className="flex items-center gap-2"
            >
              <p className="body-semibold primary-text-gradient">Open meeting</p>
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

export default MeetingCard; 