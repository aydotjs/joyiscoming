"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ActionBtnType } from "@/types";
import ImageComponent from "@/components/tools/ImageComponent";
import TerminalTyper from "@/components/hero/TerminalTyper";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Link from "next/link";

type Props = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    action_btn: ActionBtnType;
  };
};

const WebAbout = ({ data }: Props) => {
  const { title, subTitle, description, action_btn } = data;
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

          {/* Terminal column */}
          <div className="has_fade_anim min-w-0" data-fade-from="right">
            <TerminalTyper className="lg:max-w-[560px]" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;