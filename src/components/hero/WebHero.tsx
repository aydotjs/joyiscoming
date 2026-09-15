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
        <div className="relative pt-[60px] lg:pt-[90px] 2xl:pt-[120px] pb-[70px] lg:pb-[110px] xl:pb-[130px]">
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

          {/* Soft accent wash - replaces the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[120px] end-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl bg-theme -z-[1] lg:h-[720px] lg:w-[720px] 2xl:end-[-4%]"
          />

          <div className="max-w-[1180px]">
            <span
              className="has_fade_anim inline-block text-sm uppercase tracking-[0.2em] font-semibold text-text-3 mb-[24px]"
            >
              Coding bootcamp &amp; development agency &mdash; Manchester
            </span>

            <h1 className="has_fade_anim text-[56px] sm:text-[72px] md:text-[96px] xl:text-[120px] 2xl:text-[150px] leading-[0.92] font-bold tracking-[-0.02em]">
              We teach code and build{" "}
              <span className="text-theme">Digital Products</span>
            </h1>

            <div className="mt-[40px] xl:mt-[56px] grid gap-y-[28px] gap-x-[60px] md:grid-cols-[1fr_auto] md:items-end">
              <p
                className="text-lg 2xl:text-xl leading-[1.6] max-w-[560px] has_fade_anim"
                data-delay="0.30"
              >
                Learn to code with hands-on courses. Or hire us to build your app, website, or mobile product.
              </p>

              <div className="has_fade_anim" data-delay="0.45">
                <Link
                  href="/contact-bold"
                  className="btn-text-flip wc-btn-underline text-sm uppercase inline-flex items-center gap-2.5 font-semibold"
                >
                  <span data-text="talk to us">talk to us</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;