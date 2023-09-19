import LogoLink from "@/components/custom-ui/LogoLink";
import SearchForm from "./parts/SearchForm";
import ProfileLogin from "./parts/ProfileLogin";
import NavMenu from "./parts/NavMenu";
import SidebarToggle from "./parts/SidebarToggle";
import SideSearch from "./parts/SideSearch";

const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center justify-between max-w-full py-5 mx-auto">
        <div className="flex items-center gap-5 lg:gap-10">
          <SidebarToggle />

          <LogoLink />

          <div className="hidden lg:block">
            <NavMenu className="flex items-center gap-4" />
          </div>
        </div>

        <div className="flex items-center gap-5 lg:gap-10">
          <div className="hidden lg:block">
            <SearchForm />
          </div>

          <ProfileLogin />

          <SideSearch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
