"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpanImg } from "@/lib/helper/converter";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

const CareerHero = ({ title, subtitle, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-background-2">
      <div className="container2" ref={containerRef}>
        <div className="pt-[128px] xl:pt-[178px] 2xl:pt-[218px]">
          <h1
            className="has_fade_anim career-section-title max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1100px] text-text-fixed-2 inner-section-title large [&_img]:hidden [&_img]:sm:inline [&_img]:h-[50px] [&_img]:md:h-[60px] [&_img]:lg:h-[70px] [&_img]:xl:h-[80px] [&_br]:hidden [&_br]:sm:inline"
            dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
          />
          <div className="grid gap-y-5 gap-x-[70px] grid-cols-[auto] lg:grid-cols-[auto_1fr] md:ms-[156px] mt-[24px] xl:mt-[44px]">
            <div className="mt-1">
              <span
                className="has_fade_anim pe-[100px] text-[16px] inline-block leading-none uppercase text-text-fixed-2 relative"
                data-fade-from="left"
                data-delay=".30"
              >
                {subtitle}
                <span className="absolute w-20 h-[2px] bg-text-fixed-3 top-1/2 -translate-y-1/2 end-0" />
              </span>
            </div>
            <p
              className="has_fade_anim max-w-[350px] text-text-fixed-3"
              data-fade-from="left"
              data-delay=".45"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
