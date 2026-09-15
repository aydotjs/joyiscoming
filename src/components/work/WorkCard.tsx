import { TWorkType } from "@/types";
import Link from "next/link";

type Props = {
  project: TWorkType;
};

const WorkCard = ({ project }: Props) => {
  const { title, tags } = project.data;

  return (
    <div className="has_fade_anim">
      <Link href={`/work/${project?.slug}`}>
        <div className="group">
          <div className="border-b border-border pb-[22px] group-hover:border-text transition-all duration-500">
            <h3 className="text-[20px]">{title}</h3>
            <div className="mt-1">
              <span className=" text-[14px] inline-block text-text-3">
                {tags[0]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
