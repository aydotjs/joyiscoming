"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import ImageComponent from "../../ImageComponent";

type Props = {
  img?: string;
  description1: string;
  description2: string;
  className?: string;
};

const FeatureContent = ({
  img,
  description1,
  description2,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid mt-[30px] xl:mt-[60px] xl:grid-cols-[auto,960px] gap-y-[20px] gap-x-[60px] justify-between",
        className
      )}
    >
      <div className="shape hidden xl:block has_fade_anim">
        <ImageComponent
          src="/assets/imgs/shape/img-s-84.png"
          darkSrc="/assets/imgs/shape/img-s-84-light.png"
          width={238}
          height={136}
          alt="shape"
        />
      </div>
      <div>
        {img && (
          <div className="relative has_fade_anim">
            <Image
              className="md:rounded-br-[300px] w-full"
              src={img}
              alt="content-img"
              width={960}
              height={500}
            />
          </div>
        )}
        <div className="has_fade_anim grid lg:grid-cols-2 gap-x-20 gap-y-[30px]">
          <p className="!m-0 !p-0">{description1}</p>
          <p className="!m-0 !p-0">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;
