"use client";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import SectionTitle from "../sectionTitle/SectionTitle";

type Props = {
  faqTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const ServiceDetailsFaq = ({ faqs, faqTitle }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="container2" ref={containerRef}>
      <div className="section-spacing-top">
        <div className="grid gap-y-10 max-w-[760px]">
          <div className="has_fade_anim">
            <SectionTitle
              title={faqTitle}
              className="font-normal max-w-[370px] lg:text-[36px] font-beatricetrial"
            />

            <div className="mt-[27px] border-t-[1px]"></div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue={openItem}
              onValueChange={(value) => setOpenItem(value || "")}
            >
              {faqs?.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger
                    className=" leading-[1] text-[18px] py-[18px] px-0 font-beatricetrial text-start font-medium"
                    customIcon={true}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[18px] leading-[1.44] px-0 pb-[23px] lg:pb-[24px] text-text-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsFaq;
