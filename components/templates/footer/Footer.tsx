import { Separator } from "@/components/ui/separator";
import ForTalents from "./parts/ForTalents";
import ForClients from "./parts/ForClients";
import Resources from "./parts/Resources";
import Company from "./parts/Company";
import SocialLinks from "./parts/SocialLinks";
import Copywrite from "./parts/Copywrite";

const Footer = () => {
  return (
    <footer className="p-2">
      <div className="w-full p-10 text-white bg-black rounded">
        <div className="flex items-start w-full pb-10">
          <ForTalents className="w-full" />

          <ForClients className="w-full" />

          <Resources className="w-full" />

          <Company className="w-full" />
        </div>

        <SocialLinks />

        <Separator className="my-5" />

        <Copywrite />
      </div>
    </footer>
  );
};

export default Footer;
