"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ActionBtnType } from "@/types";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Link from "next/link";

type Props = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    action_btn: ActionBtnType;
    gallery: string[];
  };
};

const WebAbout = ({ data }: Props) => {
  const { title, subTitle, description, action_btn, gallery } = data;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-[80px] lg:py-[120px]">
      <div className="inner-container">
        <div className="grid lg:grid-cols-2 gap-[60px] lg:gap-[80px] items-center">
          {/* Content Column */}
          <div className="has_fade_anim">
            {subTitle && (
              <span className="text-sm uppercase tracking-wider text-theme font-semibold mb-4 block">
                {subTitle}
              </span>
            )}
            
            <h2 className="text-[40px] md:text-[50px] xl:text-[60px] leading-[1.1] font-bold mb-6">
              {title}
            </h2>

            <p className="text-lg leading-[1.7] text-text mb-8 max-w-[540px]">
              {description}
            </p>

            {action_btn && (
              <Link
                href={action_btn.link}
                className="btn-text-flip wc-btn-underline text-sm uppercase inline-flex items-center gap-2.5 font-semibold"
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
                <ImageComponent
                  src="/assets/imgs/icon/arrow-right-half.png"
                  darkSrc="/assets/imgs/icon/arrow-right-half-light.png"
                  width={21}
                  height={7}
                  alt="arrow icon"
                />
              </Link>
            )}
          </div>

          {/* Image Column */}
          <div className="has_fade_anim" data-fade-from="right">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Image 1 */}
              {gallery[0] && (
                <div className="relative overflow-hidden rounded-[20px] shadow-lg mt-12">
                  <ImageComponent
                    src={gallery[0]}
                    width={280}
                    height={320}
                    alt="About Code Dynasty"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Image 2 */}
              {gallery[1] && (
                <div className="relative overflow-hidden rounded-[20px] shadow-lg">
                  <ImageComponent
                    src={gallery[1]}
                    width={280}
                    height={380}
                    alt="Learning & Building"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Simple Stats Badge */}
            <div className="mt-8 inline-flex items-center gap-4 bg-background-2 dark:bg-background rounded-xl px-6 py-4 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-theme animate-pulse" />
                <span className="text-sm font-semibold text-text">
                  Building the future, one project at a time 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;