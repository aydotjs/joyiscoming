"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
};

const TeamCommunity = ({ title, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="main-section-spacing">
        <InnerSectionTitle
          title={title}
          className="max-w-[750px] mt-[-10px] mx-auto text-center lg:text-[36px]"
        />
        <div className="mt-[23px]">
          <p className="has_fade_anim xl:text-[24px] leading-[1.27] max-w-[850px] mx-auto text-center">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCommunity;
