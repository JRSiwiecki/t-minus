import { NavLink } from "@mantine/core";
import { HouseSimpleIcon, RocketLaunchIcon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <>
      <NavLink href="/" label="Home" leftSection={<HouseSimpleIcon size={20} />} />
      <NavLink
        href="/launch-list"
        label="Launch List"
        leftSection={<RocketLaunchIcon size={20} />}
      />
    </>
  );
}
