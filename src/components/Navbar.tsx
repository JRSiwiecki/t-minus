import { NavLink } from "@mantine/core";
import { RocketLaunchIcon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <>
      <NavLink
        href="/launch-list"
        label="Launch List"
        leftSection={<RocketLaunchIcon size={20} />}
      />
    </>
  );
}
