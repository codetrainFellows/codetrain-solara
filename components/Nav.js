import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
        href="https://codetrainafrica.com/about-us"
        className="flex items-center"
      >
        <Typography
          as="li"
          variant="paragraph"
          className="p-1 text-textColor font-medium"
        >
          About Us
        </Typography>
      </Link>

      <Link href="https://tally.so/r/mRZvBP" target="_blank">
        <Button
          variant="outlined"
          size="sm"
          className="rounded-none bg-violet text-white capitalize"
        >
          Apply Now
        </Button>
      </Link>
    </ul>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="px-6 py-3 max-w-full sticky top-0 z-50 rounded-none shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/" passHref className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <Image
            src="/codetrain-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
