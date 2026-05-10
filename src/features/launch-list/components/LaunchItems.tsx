import { Accordion, Anchor, Badge, Group, Image, Text, Title } from "@mantine/core";
import type { Launch } from "../types/launch";

import { format } from "date-fns";
import { ArrowElbowDownRightIcon } from "@phosphor-icons/react";

interface LaunchItemsProps {
  launchData: Launch[];
}

const determineLaunchBadge = (launch: Launch) => {
  if (launch.upcoming) return <Badge color="blue">Upcoming</Badge>;
  if (launch.success) return <Badge color="green">Success</Badge>;
  else return <Badge color="red">Failure</Badge>;
};

export default function LaunchItems({ launchData }: LaunchItemsProps) {
  return launchData?.map((launch) => (
    <Accordion.Item key={launch.id} value={launch.name}>
      <Accordion.Control icon={determineLaunchBadge(launch)}>
        <Group>
          <Image radius="md" src={launch.links.patch.small} h={50} w="auto" fit="contain" />
          <Title order={3}>
            {launch.name} - Flight #{launch.flight_number} [
            {format(new Date(launch.date_utc), "yyyy-MM-dd")}]
          </Title>
        </Group>
      </Accordion.Control>
      {launch.rocket && <Accordion.Panel>Rocket ID: {launch.rocket}</Accordion.Panel>}
      {launch.details && <Accordion.Panel>Details: {launch.details}.</Accordion.Panel>}
      {launch.failures && (
        <Accordion.Panel>
          {launch.failures.map((failure) => (
            <Text ml="md">
              <ArrowElbowDownRightIcon size={20} style={{ marginRight: "5px" }} />
              {failure.reason} at T={failure.time} with altitude {failure.altitude}km
            </Text>
          ))}
        </Accordion.Panel>
      )}
      {launch.links && (
        <Accordion.Panel>
          <Group>
            {launch.links.webcast && (
              <Anchor href={launch.links.webcast} target="_blank">
                Webcast
              </Anchor>
            )}
            {launch.links.reddit.launch && (
              <Anchor href={launch.links.reddit.launch} target="_blank">
                Reddit
              </Anchor>
            )}
            {launch.links.article && (
              <Anchor href={launch.links.article} target="_blank">
                Article
              </Anchor>
            )}
            {launch.links.wikipedia && (
              <Anchor href={launch.links.wikipedia} target="_blank">
                Wikipedia
              </Anchor>
            )}
          </Group>
        </Accordion.Panel>
      )}
    </Accordion.Item>
  ));
}
