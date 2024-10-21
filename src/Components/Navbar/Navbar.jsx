import React from "react";

import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import assets from "../../assets/assets";

function NavItem({ label, theme }) {
  return (
    <a href="#">
      <Typography as="li" color="blue-gray" className={`p-1 uppercase font-semibold font-quickSand text-${theme}`}>
        {label}
      </Typography>
    </a>
  );
}

function NavList({ theme }) {
  return (
    <ul className="mb-4 mt-2  flex flex-col gap-3 lg:justify-end lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem theme={theme} label="About" />
      <NavItem theme={theme} label="Our Speciality" />
      <NavItem theme={theme} label="Sourcing" />
      <NavItem theme={theme} label="Contact" />
    </ul>
  );
}

export function NavbarWithSimpleLinks() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  console.log(open)
  return (
    <Navbar color="transparent" className="bg-primary p-0 sticky top-0 z-50" fullWidth>
      <div className="container mx-auto flex items-center justify-between gap-8 text-blue-gray-900 p-5">
        <img src={assets.logo} className="w-1/5 lg:w-2/12" alt="" />
        <div className="hidden lg:block flex-1">
          <NavList theme="secondary" />
        </div>
        <Button color="gray" className="hidden lg:inline-block px-8 py-1 bg-accent text-secondary font-tanAegan font-normal">
          Order Now
        </Button>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-secondary" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-secondary" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {open && <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList theme="dark" />
          <Button className="mb-2 bg-accent text-secondary font-tanAegan font-normal" fullWidth>
            Order Now
          </Button>
        </div>
      </Collapse>}
    </Navbar>
  );
}

export default NavbarWithSimpleLinks;