import Logo from "./Logo";
import Link from "next/link";

const LogoLink = () => {
  return (
    <Link href="/" className="inline-block">
      <Logo />
    </Link>
  );
};

export default LogoLink;
