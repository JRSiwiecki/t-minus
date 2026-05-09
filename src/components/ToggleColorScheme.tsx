import { Button, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export default function ToggleColorScheme() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const isDarkMode = colorScheme === "dark";

  return (
    <Button onClick={() => (isDarkMode ? setColorScheme("light") : setColorScheme("dark"))}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
