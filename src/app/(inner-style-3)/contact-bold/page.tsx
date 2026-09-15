import { getMainPage } from "@/lib/helper/contentConverter";
import ContactHero from "@/components/contact/ContactHero";
import ContactArea from "@/components/contact/ContactArea";
import SeoData from "@/components/tools/SeoData";

const Contact = () => {
  const { data: contactData } = getMainPage("/contact/_index.mdx");

  const { meta, hero, contact: mainContact } = contactData || {};
  return (
    <main className="details-bold">
      <SeoData
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <ContactHero {...hero} />
      <ContactArea {...mainContact} />
    </main>
  );
};

export default Contact;
