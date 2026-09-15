"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";

type Props = {
  totalEmployee: string;
};
const TeamImageArea = ({ totalEmployee }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="container">
        <div
          className="has_fade_anim w-[200px] lg:w-[250px] 2xl:w-[310px] aspect-square flex justify-center items-center bg-[#FBF9F9] dark:bg-[#171717] rounded-[50%] flex-col"
          data-fade-from="top"
          data-ease="bounce"
        >
          <h2 className="text-[70px] lg:text-[100px] 2xl:text-[120px]">
            <span data-count={totalEmployee} className="has_count_anim">
              {totalEmployee}
            </span>
            +
          </h2>
          <h2 className="text-[16px] lg:text-[20px] 2xl:text-[24px] leading-[1.16]">
            Expertise <br /> employees
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TeamImageArea;
