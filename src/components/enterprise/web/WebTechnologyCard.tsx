import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  title: string;
  icon: {
    light: string;
    dark: string;
  };
};

const WebTechnologyCard = ({ title, icon }: Props) => {
  return (
    <div
      className="expertise-box has_fade_anim w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] border border-border rounded-full flex justify-center items-center flex-col"
      data-fade-from="right"
    >
      <div className="icon ">
        <ImageComponent
          src={icon.light}
          darkSrc={icon.dark}
          width={100}
          height={100}
          alt="technology-icon"
          className="h-[44px] w-[44px] lg:h-[56px] lg:w-[56px] xl:h-[64px] xl:w-[64px] object-contain"
        />
      </div>
      <p className="name text-[15px] lg:text-[17px] xl:text-[18px] leading-none mt-[14px] xl:mt-[18px] text-center px-3">
        {title}
      </p>
    </div>
  );
};

export default WebTechnologyCard;
