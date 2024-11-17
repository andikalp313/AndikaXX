import ContactSection from "@/features/contact/components/Contact";
import { VelocityScroll } from "@/components/ui/scrollBasedBelocity";
const ContactPage = () => {
  return (
    <div>
      <div>
        <ContactSection />
      </div>
      <div>
        <VelocityScroll
          text="Pioneering the Future of Robotics and AI Innovation"
          default_velocity={1}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-cyan-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </div>
    </div>
  );
};
export default ContactPage;
