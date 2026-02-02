"use client";

import Link from "next/link";
import ImageComponent from "../tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";

const WebHero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container large">
        <div className="relative pt-[80px] 2xl:pt-[120px] pb-[80px] lg:pb-[120px] xl:pb-[140px]">
          {/* Background Shape */}
          <div className="absolute bottom-0 end-[calc(100%-200px)] w-[330px] 2xl:w-[410px] h-[410px] -z-[1] opacity-50">
            <ImageComponent
              src="/assets/imgs/shape/img-s-64.png"
              darkSrc="/assets/imgs/shape/img-s-64-dark.png"
              width={410}
              height={410}
              className="w-full h-full rtl-rotate-y-180"
              alt="shape"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-y-[60px] gap-x-[80px] items-center">
            {/* Content Column */}
            <div>
              <h1 className="has_fade_anim text-[60px] md:text-[80px] xl:text-[100px] 2xl:text-[140px] leading-[0.9] font-bold">
                We teach & build{" "}
                <span className="text-theme">
                  Digital Products
                </span>{" "}
                that transform
              </h1>

              <p
                className="text-lg 2xl:text-xl leading-[1.6] mt-[40px] max-w-[540px] has_fade_anim"
                data-delay="0.30"
              >
                From zero to hero! 💪 Learn to code with hands-on courses, or let us build your dream app, website, or mobile solution at budget-friendly prices.
              </p>

              <div className="mt-[50px] has_fade_anim" data-delay="0.45">
                <Link
                  href="/contact-bold"
                  className="btn-text-flip wc-btn-underline text-sm uppercase inline-flex items-center gap-2.5 font-semibold"
                >
                  <span data-text="start your journey">start your journey</span>
                  <ImageComponent
                    src="/assets/imgs/icon/arrow-right-half.png"
                    darkSrc="/assets/imgs/icon/arrow-right-half-light.png"
                    width={21}
                    height={7}
                    alt="arrow icon"
                  />
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="has_fade_anim" data-fade-from="right">
              <div className="relative flex justify-center lg:justify-end">
                <div
                  className="relative overflow-hidden rounded-[24px] shadow-2xl"
                  style={{
                    maxWidth: "500px",
                  }}
                >
                  <ImageComponent
                    src="/assets/imgs/gallery/hero_img_2.jpg"
                    width={500}
                    height={600}
                    alt="Digital Products"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay accent */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme/10 to-transparent pointer-events-none" />
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-8 -left-8 z-[-1]">
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-60.png"
                    darkSrc="/assets/imgs/shape/img-s-60-light.png"
                    width={120}
                    height={120}
                    className="opacity-60"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;