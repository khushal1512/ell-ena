import Link from "next/link";
import Image from "next/image";
import Theme from "@/components/shared/navbar/Theme";
import GlobalSearch from "@/components/shared/search/GlobalSearch";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Ell-ena"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-primary-500">Ell-ena</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        <Mobile />
      </div>
    </nav>
  );
};

export default Navbar;
