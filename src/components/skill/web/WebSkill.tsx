"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebSkillCard from "@/components/skill/web/WebSkillCard";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  skills: {
    title: string;
    description: string;
    icon: {
      light: string;
      dark: string;
    };
    img_small: string;
    img_main: string;
  }[];
};

const WebSkill = ({ title, description, skills }: Props) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-[80px] lg:py-[100px] xl:py-[140px]">
      <div className="inner-container">
        {/* Header Section */}
        <div className="max-w-[800px] mb-[60px] lg:mb-[80px]">
          <h2 className="has_text_move_anim text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] font-bold mb-5">
            {title}
          </h2>
          <p className="has_fade_anim text-lg text-text/80 max-w-[600px]">
            {description}
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[80px] items-start">
          {/* Skills List */}
          <div>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li
                  className="has_fade_anim cursor-pointer"
                  key={index}
                  onClick={() => setActive(index)}
                  data-delay={0.1 + (index * 0.1)}
                >
                  <WebSkillCard {...skill} active={index === active} />
                </li>
              ))}
            </ul>
          </div>

          {/* Image Display */}
          <div className="has_fade_anim relative" data-delay="0.4">
            <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-theme/5 to-transparent p-8 lg:p-12">
              {/* Main SVG Illustration */}
              <ImageComponent
                src={skills[active].img_main}
                width={600}
                height={500}
                alt={`${skills[active].title} illustration`}
                className="w-full h-auto transition-all duration-500"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-theme/10 rounded-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSkill;