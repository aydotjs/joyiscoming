import AboutAward from "@/components/about/AboutAward";
import AboutHero from "@/components/about/AboutHero";
import AboutTeam from "@/components/team/AboutTeam";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";

const About = () => {
  const { data: about } = getMainPage("/about/branding-about.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: contactBanner } = getMainPage("/banner/contact-banner.mdx");

  const { title, hero, award_area, team_area, meta } = about || {};

  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <AboutHero {...hero} />
      <AboutAward {...award_area} />
      <AboutTeam teamMembers={teamMembers} {...team_area} />
      <ContactBanner {...contactBanner} />
    </main>
  );
};

export default About;
