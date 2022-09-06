import { useEffect, useState } from "react";
import { createStyles, Header, Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { useStyles } from "./css";

type Props = {
  links: { label: string; value: string }[];
};

export function CustomHeader({ links }: Props) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<String>("");
  const { classes, cx } = useStyles();

  const items = links.map(
    (link) =>
      link.label && (
        <a
          key={link.label[0].toUpperCase() + link.label.substring(1)}
          href={`/${link.label}`}
          className={cx(classes.link, {
            [classes.linkActive]: active === `/${link.label}`,
          })}
          onClick={(event) => {
            event.preventDefault();
            setActive(`/${link.label}`);
          }}
        >
          {link.label[0].toUpperCase() + link?.label.substring(1)}
        </a>
      )
  );

  useEffect(() => {
    links[0] && links[0].label && setActive(`/${links[0].label}`);
  }, [links]);

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
