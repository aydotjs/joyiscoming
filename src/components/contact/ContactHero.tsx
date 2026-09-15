"use client";

import { convertWithBr } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Link from "next/link";

type Props = {
  title: string;
  direct_contact: {
    title: string;
    link: string;
  };
};

const ContactHero = ({ title, direct_contact }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="inner-container" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] pb-[10px] md:me-[calc((100vw-var(--container-max-widths))/-2-3px)]">
        <div className="grid gap-y-10 gap-x-[60px] lg:grid-cols-[1fr_420px]">
          <h1
            className="inner-section-title has_fade_anim !leading-[1.05] max-w-[760px]"
            dangerouslySetInnerHTML={convertWithBr(title)}
          />
          <div className="flex items-end">
            <div className="z-10 relative bg-background-3 px-[30px] pt-[85px] pb-[40px] w-full max-w-[420px]">
              <span className="text-text-fixed-3">Direct contact: </span>
              <p className="link text-[24px] leading-none mt-3 text-text-fixed-2 hover:text-text-fixed-3 transition-all duration-300">
                <Link href={direct_contact?.link}>
                  {direct_contact?.title}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
