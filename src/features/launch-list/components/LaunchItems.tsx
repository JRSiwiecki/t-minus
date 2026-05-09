import { Accordion, Anchor, Group } from "@mantine/core";
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
        {launch.name} [{format(new Date(launch.date_utc), "yyyy-MM-dd")}]
      </Accordion.Control>
      <Accordion.Panel>
        Flight #{launch.flight_number} - Rocket ID: {launch.rocket}
      </Accordion.Panel>
      {launch.details && <Accordion.Panel>Details: {launch.details}.</Accordion.Panel>}
      {launch.links && (
        <Accordion.Panel>
          <Group>
            <Anchor href={launch.links.webcast ?? ""} target="_blank">
              Webcast
            </Anchor>
            <Anchor href={launch.links.article ?? ""} target="_blank">
              Article
            </Anchor>
            <Anchor href={launch.links.wikipedia ?? ""} target="_blank">
              Wikipedia
            </Anchor>
          </Group>
        </Accordion.Panel>
      )}
    </Accordion.Item>
  ));
}
