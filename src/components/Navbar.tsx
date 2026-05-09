import { NavLink } from "@mantine/core";
import { HouseSimpleIcon, RocketLaunchIcon } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const ICON_SIZE = 20;

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <NavLink
        component={Link}
        to="/"
        label="Home"
        leftSection={<HouseSimpleIcon size={ICON_SIZE} />}
        active={path === "/"}
      />
      <NavLink
        component={Link}
        to="/launch-list"
        label="Launch List"
        leftSection={<RocketLaunchIcon size={ICON_SIZE} />}
        active={path === "/launch-list"}
      />
    </>
  );
}
