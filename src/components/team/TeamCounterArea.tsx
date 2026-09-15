import TeamStatCard from "@/components/team/TeamStatCard";

type Props = {
  client_count: number;
  client_title: string;
  funding_count: number;
  funding_title: string;
  bg_1: string;
  bg_2: string;
};

const TeamCounterArea = ({
  client_count,
  client_title,
  funding_count,
  funding_title,
  bg_1,
  bg_2,
}: Props) => {
  return (
    <div className="counter_area">
      <div className="counter_wrapper grid gap-[10px] sm:grid-cols-2">
        <TeamStatCard
          data={{
            title: client_title,
            count: client_count,
            bg_image: bg_1,
          }}
        />
        <TeamStatCard
          data={{
            title: funding_title,
            count: funding_count,
            bg_image: bg_2,
            suffix: "M",
          }}
          className="bg-[#121212] text-text-fixed-2"
          textColor="text-text-fixed-2"
        />
      </div>
    </div>
  );
};

export default TeamCounterArea;
