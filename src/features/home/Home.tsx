import { Title } from "@mantine/core";
import { usePrefetchLaunchList } from "../launch-list/hooks/useGetLaunchList";

export default function Home() {
  usePrefetchLaunchList();

  return (
    <>
      <Title order={2}>Home</Title>
    </>
  );
}
