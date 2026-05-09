import { Button, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

const ICON_SIZE = 20;
const BUTTON_SIZE = 40;

export default function ToggleColorScheme() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const isDarkMode = colorScheme === "dark";

  return (
    <Button
      variant="outline"
      color={isDarkMode ? "yellow" : "blue"}
      onClick={() => (isDarkMode ? setColorScheme("light") : setColorScheme("dark"))}
      w={BUTTON_SIZE}
      h={BUTTON_SIZE}
      p={0}
    >
      {isDarkMode ? (
        <SunIcon size={ICON_SIZE} color="yellow" />
      ) : (
        <MoonIcon size={ICON_SIZE} color="blue" />
      )}
    </Button>
  );
}
