import { NavLink } from "@mantine/core";
import { HouseSimpleIcon, RocketLaunchIcon } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";

const ICON_SIZE = 20;

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <NavLink
        href="/"
        label="Home"
        leftSection={<HouseSimpleIcon size={ICON_SIZE} />}
        active={path === "/"}
      />
      <NavLink
        href="/launch-list"
        label="Launch List"
        leftSection={<RocketLaunchIcon size={ICON_SIZE} />}
        active={path === "/launch-list"}
      />
    </>
  );
}
