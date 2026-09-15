import { convertWithBr } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  title: string;
  /** string props for MDX (v6 blockJS strips {{...}} objects); the object form still works */
  iconLight?: string;
  iconDark?: string;
  icon?: {
    dark: string;
    light: string;
  };
  serial_no: string;
  /** comma-separated string in MDX (v6 blockJS strips {[...]} expressions); array still accepted */
  feature_list: string | string[];
  className?: string;
};

const WebServiceProcess = ({
  title,
  icon,
  iconLight,
  iconDark,
  serial_no,
  feature_list,
  className,
}: Props) => {
  return (
    <div className="has_fade_anim" data-fade-from="left" data-delay="0.15">
      <h4
        dangerouslySetInnerHTML={convertWithBr(title)}
        className="text-[24px] leading-[1.08] uppercase !font-semibold"
      />
      <div className="mt-[13px] xl:mt-[33px] z-[1] relative before:content-[''] before:absolute before:w-full before:h-px before:bg-border before:start-0 before:top-1/2 before:-translate-y-1/2 before:z-[-1] after:content-[''] after:absolute after:w-2 after:h-2 after:bg-border after:rounded-full after:start-0 after:top-1/2 after:-translate-y-1/2 after:z-[1]">
        <span className="text-[16px] font-teko font-semibold w-[30px] h-[30px] border border-border flex justify-center items-center rounded-full ms-auto bg-background relative z-[1]">
          {serial_no}
        </span>
      </div>
      <div className="mt-[20px] xl:mt-[40px]">
        <ImageComponent
          src={iconLight ?? icon?.light ?? ""}
          darkSrc={iconDark ?? icon?.dark ?? ""}
          width={52}
          height={60}
          alt="icon"
          className="w-auto"
        />
      </div>
      <div className="mt-[30px]">
        <ul>
          {(Array.isArray(feature_list) ? feature_list : String(feature_list).split(",").map((s) => s.trim()).filter(Boolean)).map((item, i) => (
            <li
              key={i}
              className="flex gap-[10px] text-[18px] first:mt-0 mt-[10px]"
            >
              <span>+</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebServiceProcess;
