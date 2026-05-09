import { Skeleton, Stack, Title } from "@mantine/core";
import { useGetLaunchList } from "./hooks/useGetLaunchList";

export default function LaunchList() {
  const { data, isError, isLoading } = useGetLaunchList();

  return (
    <Stack align="center">
      <Title order={2}>Launch List</Title>
      <Skeleton height={1000} w="97%" m="sm" visible={isLoading} />
    </Stack>
  );
}
