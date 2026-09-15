"use client";

import { useRef } from "react";
import { TWorkType } from "@/types";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import Link from "next/link";

const WorkDetails = ({ data }: TWorkType) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="work-details-area pt-[80px] xl:pt-[100px]">
      <div className="relative z-1">
        <div className="container2" ref={containerRef}>
          <div className="pt-[60px] pb-[43px] xl:pt-[80px] xl:pb-[63px]">
            <div className="">
              <div className="">
                <div className="">
                  <h1
                    className=" has_fade_anim md:w-1/2  font-beatricetrial uppercase leading-[1] text-[35px] mt-0 md:text-[40px] md:mt-[-11px] lg:text-[44px] lg:mt-[-12px] xl:text-[60px] xl:mt-[-17px] 2xl:text-[60px] 2xl:mt-[-17px]"
                    dangerouslySetInnerHTML={convertWithBrSpan(data.title)}
                  />
                </div>
              </div>
              <ul className="work-meta pl-0 pt-[27px] md:pl-[80px] has_fade_anim">
                <li>
                  <span className=" text-[18px] font-medium text-text block leading-[24px]">
                    Date
                  </span>
                  <span className="text text-[14px] font-medium leading-[24px] text-text">
                    {data.date}
                  </span>
                </li>
                <li className="mt-[23px]">
                  <span className=" text-[18px] font-medium text-text block leading-[24px]">
                    Client
                  </span>
                  <span className="text text-[14px] font-medium leading-[24px] text-text">
                    Art Direction, Web Design, Production
                  </span>
                </li>
                {data?.action_btn ? (
                  <li className="mt-[23px]">
                    <Link
                      href={data?.action_btn?.link}
                      className="btn-normal text-[14px] leading-[24px] font-medium text-text btn-text-flip"
                    >
                      <span data-text={`( ${data?.action_btn?.label} )`}>
                        ( {data?.action_btn?.label} )
                      </span>
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
