import ServicesHero from "@/components/service/ServicesHero";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import ServiceInnerArea from "@/components/service/ServiceInnerArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import AboutBanner from "@/components/banner/AboutBanner";

const Services = () => {
  const { data: hero } = getMainPage("/services/main/_index.mdx");
  const services = getAllPages("services/main");
  const { data: aboutBanner } = getMainPage("/banner/about-banner.mdx");
  const { data: pricingData } = getMainPage("/pricings/main-pricing.mdx");
  const { data: contactBanner } = getMainPage("/banner/contact-banner.mdx");

  const { title, title2, description2, meta } = hero || {};

  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <ServicesHero {...hero} />
      <ServiceInnerArea
        title={title2}
        description={description2}
        services={services}
      />
      <AboutBanner {...aboutBanner} />
      <PricingArea {...pricingData.pricing} />
      <ContactBanner {...contactBanner} />
    </main>
  );
};

export default Services;
