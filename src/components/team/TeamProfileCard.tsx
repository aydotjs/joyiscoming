import { cn } from "@/lib/utils";
import { TTeamMemberType } from "@/types";
import Link from "next/link";

type Props = {
  profileData: TTeamMemberType;
  className?: string;
};

const TeamProfileCard = ({ profileData, className }: Props) => {
  const { name, post } = profileData.data;
  return (
    <div>
      <Link href={`/team/${profileData.slug}`}>
        <div className="border-t border-border pt-[20px] xl:pt-[24px]">
          <h3
            className={cn("text-[20px] leading-none xl:text-[24px]", className)}
          >
            {name}
          </h3>
          <p className="text-[16px] mt-[3px] xl:mt-[7px] font-medium">{post}</p>
        </div>
      </Link>
    </div>
  );
};

export default TeamProfileCard;
