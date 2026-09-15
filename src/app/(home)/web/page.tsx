import WebAbout from "@/components/about/WebAbout";
import WebContact from "@/components/contact/WebContact";
import WebEnterPrise from "@/components/enterprise/web/WebEnterPrise";
import WebFaq from "@/components/faq/web/WebFaq";
import WebFeature from "@/components/features/web/WebFeature";
import WebHero from "@/components/hero/WebHero";
import WebImage from "@/components/image/WebImage";
import WebService from "@/components/service/web/WebService";
import WebSkill from "@/components/skill/web/WebSkill";
import WebTeam from "@/components/team/web/WebTeam";
import WebTestimonial from "@/components/testimonial/web/WebTestimonial";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import BindBtnMoveEffect from "@/components/tools/BindBtnMoveEffect";
import SeoData from "@/components/tools/SeoData";

const page = () => {
  const { data: about } = getMainPage("/about/web/main.mdx");
  const { data: feature } = getMainPage("/features/web-features.mdx");
  const { data: skill } = getMainPage("/skill/web-skill.mdx");
  const { data: enterprise } = getMainPage("/enterprise/web-enterprise.mdx");
  const { data: service } = getMainPage("/services/web/_main.mdx");
  const services = getAllPages("/services/web");
  const { data: image } = getMainPage("/image/web-image.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: team } = getMainPage("/team/web/_main.mdx");
  const { data: faqsData } = getMainPage("/faqs/web-faqs.mdx");
  const { data: contactBanner } = getMainPage("/banner/web-contact-banner.mdx");
  const { data: testimonial } = getMainPage("/testimonial/web-testimonial.mdx");

  return (
    <div>
      <BindBtnMoveEffect />
      <SeoData
        title="CodeDynasty"
        description="CodeDynasty Description"
      />
      <WebHero />
      <WebAbout data={{ ...about }} />
      <WebFeature {...feature} />
      {/* <WebSkill {...skill} /> */}
      <WebEnterPrise {...enterprise} />
      <WebService {...service} services={services} />
      {/* <WebImage {...image} /> */}
      {/* <WebTestimonial {...testimonial} /> */}
      {/* <WebTeam teamMembers={teamMembers} {...team} /> */}
      {/* <WebFaq {...faqsData} /> */}
      {/* <WebContact contactBanner={contactBanner} /> */}
    </div>
  );
};

export default page;