import { Skeleton, Stack, Title } from "@mantine/core";

export default function LaunchList() {
  return (
    <Stack align="center">
      <Title order={2}>Launch List</Title>
      <Skeleton height={1000} w="97%" m="sm" />
    </Stack>
  );
}
