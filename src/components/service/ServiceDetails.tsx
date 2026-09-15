"use client";

import { useEffect, useRef, useState } from "react";
import { TServiceType } from "@/types";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import SectionTitle from "../sectionTitle/SectionTitle";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
} from "react-share";

const ServiceDetails = ({ data }: TServiceType) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [mainUrl, setMainUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      setMainUrl(url);
    }
  }, []);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="pt-[80px] xl:pt-[100px]">
      <div className="container2" ref={containerRef}>
        <div className="thumb-main">
          <div className="flex gap-[20px] items-center py-2.5">
            <p className="pe-[80px] relative inline-block text-[14px] uppercase before:absolute before:bg-border before:w-[60px] before:h-[1px] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2">
              Follow
            </p>
            <div className="flex gap-[25px]">
              <FacebookShareButton
                url={mainUrl}
                hashtag={"#blog..."}
                className="hover:!text-text-3"
              >
                <FaFacebookF className="text-[16px]" />
              </FacebookShareButton>
              <TwitterShareButton
                url={mainUrl}
                title={data?.title}
                hashtags={["#service..."]}
                className="hover:!text-text-3"
              >
                <FaXTwitter className="text-[16px]" />
              </TwitterShareButton>
              <InstapaperShareButton
                url={mainUrl}
                title={data?.title}
                description={data?.description}
                className="hover:!text-text-3"
              >
                <FaInstagram className="text-[16px]" />
              </InstapaperShareButton>
            </div>
          </div>
        </div>
        <div className="grid items-center mt-[46px] lg:grid-cols-[1fr,460px] xl:grid-cols-[1fr,520px] gap-y-[20px] gap-x-[60px]">
          <SectionTitle
            title={data.title}
            className="text-[30px] sm:text-[35px] md:mt-[-11px] md:text-[40px] lg:mt-[-12px] lg:text-[44px] xl:mt-[-17px] xl:text-[60px]"
            heading1
          />
          <div className="p-0 mb-1 has_fade_anim">
            <ul className="grid leading-[1] sm:grid-cols-[auto_auto] sm:gap-x-[50px] gap-y-[10px] justify-start lg:justify-between p-0 m-0">
              {data.features.map((item, index) => (
                <li className="" key={index}>
                  <span className="mr-[13px]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
