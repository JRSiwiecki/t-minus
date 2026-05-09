import { Accordion, Alert, Skeleton, Stack, Title } from "@mantine/core";
import { useGetLaunchList } from "./hooks/useGetLaunchList";
import { InfoIcon } from "@phosphor-icons/react";

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

  const launchItems = launchData?.map((launch) => (
    <Accordion.Item key={launch.id} value={launch.name}>
      <Accordion.Control>{launch.name}</Accordion.Control>
      <Accordion.Panel>{launch.rocket}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack align="center">
      <Title order={2}>Launch List</Title>
      <Skeleton height={1000} w="97%" m="sm" visible={isLoading}>
        <Stack>
          <Accordion order={3} defaultValue="Launch">
            {launchItems}
          </Accordion>
        </Stack>
      </Skeleton>
    </Stack>
  );
}
