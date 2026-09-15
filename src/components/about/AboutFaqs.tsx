"use client";

import { useState, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const AboutFaqs = ({ title, faqs }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);



  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section>
      <div className="inner-container" ref={containerRef}>
        <div className="section-spacing-bottom">
          <div className="bg-background-3 grid gap-0">
            <div className="pt-[53px] px-10 pb-[60px] xl:pt-[73px] xl:px-[60px] xl:pb-20 ">
              <InnerSectionTitle title={title} className="text-text-fixed-2" />

              <div className="accordion-wrapper mt-[47px] has_fade_anim">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={openItem}
                  onValueChange={(value) => setOpenItem(value || "")}
                >
                  {faqs?.map((item, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className="first:border-t border-[#555555] border-opacity-30"
                    >
                      <AccordionTrigger
                        className="text-text-fixed-2 text-[18px] xl:text-[24px] l py-[18px] text-start"
                        customIcon={true}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[18px] leading-[1.44] px-0 pb-[23px] lg:pb-[24px] text-text-fixed-3 ps-0 pe-0">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFaqs;
