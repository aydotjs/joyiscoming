"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBr } from "@/lib/helper/converter";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Link from "next/link";
import { SocialShare1 } from "../tools/Social";

type Props = {
  name: string;
  post: string;
  description: string;
  portfolios?: {
    title: string;
    link: string;
  }[];
  socials?: {
    name: string;
    link: string;
  }[];
};

const TeamMemberDetails = ({
  name,
  post,
  description,
  portfolios,
  socials,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] section-spacing-bottom">
        <div className="grid gap-y-10">
          <div className="md:pt-[60px]">
            <div>
              <div>
                <h1 className="has_fade_anim name text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] leading-[1.08]">
                  {name.split(" ").map((word, index) => (
                    <span key={`team-name-word-${index}`}>
                      {word}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="mt-[26px]">
                <span className="has_fade_anim text-[24px] inline-block text-text-3">
                  {post}
                </span>
              </div>
              <div className="has_fade_anim mt-[36px] mb-2 text-text-3">
                <p dangerouslySetInnerHTML={convertWithBr(description)} />
              </div>
              <div className="mt-10 has_fade_anim">
                <span className="text-[18px] mb-[22px] inline-block">
                  Portfolio :
                </span>
                <div className="flex gap-[10px]">
                  {portfolios?.map((item, index) => (
                    <Link
                      key={`team-profile-${index}`}
                      href={item.link}
                      target="_blank"
                      className="text-[14px] py-[7px] px-[14px] border rounded-[30px] inline-block text-text-3 hover:text-inherit"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-[40px] has_fade_anim">
                <span className="text-[18px] mb-[22px] inline-block">
                  Follow :
                </span>
                <div>
                  <ul className="flex gap-5">
                    {socials?.map((social, index) => (
                      <React.Fragment key={`team-social-${index}`}>
                        {SocialShare1(social)}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetails;
