import { Accordion, Anchor, Group, Image } from "@mantine/core";
import type { Launch } from "../types/launch";
import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { format } from "date-fns";

interface LaunchItemsProps {
  launchData: Launch[];
}

export default function LaunchItems({ launchData }: LaunchItemsProps) {
  return launchData?.map((launch) => (
    <Accordion.Item key={launch.id} value={launch.name}>
      <Accordion.Control
        icon={launch.success ? <CheckIcon color="green" /> : <XIcon color="red" />}
      >
        <Group>
          <Image radius="md" src={launch.links.patch.small} h={50} w="auto" fit="contain" />
          {launch.name} - Flight #{launch.flight_number} [
          {format(new Date(launch.date_utc), "yyyy-MM-dd")}]
        </Group>
      </Accordion.Control>
      {launch.rocket && <Accordion.Panel>Rocket ID: {launch.rocket}</Accordion.Panel>}
      {launch.details && <Accordion.Panel>Details: {launch.details}.</Accordion.Panel>}
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
