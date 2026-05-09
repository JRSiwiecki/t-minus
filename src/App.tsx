import { AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import "./App.css";
import ToggleColorScheme from "./components/ToggleColorScheme";
import Navbar from "./components/Navbar";

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="sm"
      header={{ height: 70 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { desktop: !opened, mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group justify="space-between" p="sm">
          <Burger opened={opened} onClick={toggle} />
          <Title order={1}>T-Minus</Title>
          <ToggleColorScheme />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
