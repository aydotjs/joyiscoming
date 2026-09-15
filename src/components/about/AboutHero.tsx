"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  sub_title: string;
  description: string;
};

const AboutHero = ({ title, sub_title, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef} className="container">
      <div className="pb-[40px] xl:pb-[60px] pt-[127px] xl:pt-[147px] 2xl:pt-[217px]">
        <InnerSectionTitle
          title={title}
          className="max-w-[900px]"
          heading1
        />
        <div className="grid gap-y-5 gap-x-10 lg:grid-cols-[auto_auto] mt-6 xl:mt-9">
          <div className="has_fade_anim mt-1" data-fade-from="right">
            <span className="text-[16px] leading-none inline-block uppercase pe-[100px] relative">
              {sub_title}
              <span className="absolute w-20 h-[2px] bg-text top-1/2 -translate-y-1/2 end-0"></span>
            </span>
          </div>
          <div>
            <p className="has_fade_anim max-w-[520px] text-[17px] leading-[1.6]" data-fade-from="left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
