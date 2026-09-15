"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ImageComponent from "../tools/ImageComponent";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
};

const ServicesHero = ({ title, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="pt-[137px] 2xl:pt-[187px] grid gap-y-10">
        <div>
          <InnerSectionTitle
            title={title}
            className="md:mt-10 large"
            heading1
            animation="has_text_mov_anim"
          />
          <div className="mt-6 lg:mt-[14px] lg:ms-[140px]">
            <p className="has_fade_anim max-w-full lg:indent-[60px] lg:max-w-[300px]">
              {description}
            </p>
          </div>
          <div className="has_fade_anim hidden lg:block ms-[140px] mt-[54px]">
            <ImageComponent
              src="/assets/imgs/shape/img-s-82.png"
              darkSrc="/assets/imgs/shape/img-s-82-light.png"
              width={40}
              height={80}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
