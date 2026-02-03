import WebAbout from "@/components/about/WebAbout";
import WebBlog from "@/components/blog/web/WebBlog";
import ClientSlider from "@/components/clients/ClientSlider";
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
import WebWork from "@/components/work/web/WebWork";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import BindBtnMoveEffect from "@/components/tools/BindBtnMoveEffect";
import SeoData from "@/components/tools/SeoData";
import LayoutWrapper from "./layout-wrapper";

const page = () => {
  const { data: clients } = getMainPage("/brands/brands3.mdx");
  const { data: about } = getMainPage("/about/web-about.mdx");
  const { data: feature } = getMainPage("/features/web-feature.mdx");
  const { data: skill } = getMainPage("/skill/web-skill.mdx");
  const { data: enterprise } = getMainPage("/enterprise/web-enterprise.mdx");
  const works = getAllPages("/works/web");
  const { data: service } = getMainPage("/services/web/_main.mdx");
  const services = getAllPages("/services/web");
  const { data: image } = getMainPage("/image/web-image.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: team } = getMainPage("/team/web/_main.mdx");
  const { data: faqsData } = getMainPage("/faqs/web-faqs.mdx");
  const { data: contactBanner } = getMainPage("/banner/web-contact-banner.mdx");
  const { data: testimonial } = getMainPage("/testimonial/web-testimonial.mdx");
  const { data: blog } = getMainPage("/blogs/web/_main.mdx");
  const blogs = getAllPages("/blogs/web");
  
  return (
    <LayoutWrapper>
      <BindBtnMoveEffect />
      <SeoData
        title="CodeDynasty"
        description="CodeDynasty Description"
      />
      <WebHero />
      <ClientSlider
        clients={clients.brands}
        shapeImage="/assets/imgs/shape/img-s-65.png"
      />
      <WebAbout data={{ ...about }} />
      <WebFeature {...feature} />
      <WebEnterPrise {...enterprise} />
      <WebService {...service} services={services} />
    </LayoutWrapper>
  );
};

export default page;
