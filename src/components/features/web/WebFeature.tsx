"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebFeatureCard from "@/components/features/web/WebFeatureCard";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  img_icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const WebFeature = ({ title, img_icon, description, features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-theme" ref={containerRef}>
      <div className="inner-container">
        <div className="py-[80px] lg:py-[100px] xl:py-[140px]">
          {/* Centered Header Section */}
          <div className="text-center max-w-[900px] mx-auto px-4">
            {/* Icon */}
            <div
              className="has_fade_anim inline-flex justify-center mb-6"
              data-fade-offset="0"
              data-delay="0.3"
            >
              <ImageComponent 
                src={img_icon} 
                width={80} 
                height={80}
                alt="feature icon"
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
              />
            </div>

            {/* Title */}
            <h2 className="has_text_move_anim text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] font-bold text-text-fixed mb-6">
              {title}
            </h2>

            {/* Description */}
            <p 
              className="has_fade_anim text-base md:text-lg lg:text-xl leading-[1.7] text-text-fixed max-w-[600px] mx-auto"
              data-delay="0.45"
            >
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-[60px] lg:mt-[80px] xl:mt-[100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="has_fade_anim"
                  data-delay={0.3 + (index * 0.15)}
                >
                  <WebFeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebFeature;