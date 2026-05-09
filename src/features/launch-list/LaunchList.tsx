import { Accordion, Alert, Skeleton, Stack, Title } from "@mantine/core";
import { useGetLaunchList } from "./hooks/useGetLaunchList";
import { InfoIcon } from "@phosphor-icons/react";

import LaunchItems from "./components/LaunchItems";

export default function LaunchList() {
  const { data: launchData, isError, isLoading } = useGetLaunchList();

  if (!launchData && isError) {
    return (
      <Stack align="center">
        <Alert variant="light" color="red" title="Launch List Error" icon={<InfoIcon />} w="20%">
          Launch data failed to load.
        </Alert>
      </Stack>
    );
  }

  return (
    <Stack align="center">
      <Title order={2}>Launch List</Title>
      <Skeleton height={1000} w="97%" m="sm" visible={isLoading}>
        <Stack>
          <Accordion order={3} defaultValue="Launch" variant="contained">
            <LaunchItems launchData={launchData ?? []} />
          </Accordion>
        </Stack>
      </Skeleton>
    </Stack>
  );
}
