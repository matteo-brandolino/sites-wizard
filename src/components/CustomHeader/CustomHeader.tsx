import { useEffect, useState } from "react";
import {
  Header,
  Container,
  Group,
  Burger,
  Transition,
  Paper,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT, useStyles } from "./css/customHeaderCss";

type Props = {
  links: { label: string; value: string }[];
  img: File | null;
};

export function CustomHeader({ img, links }: Props) {
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
    <Header height={HEADER_HEIGHT} mb={120}>
      <Container className={classes.header}>
        <Image
          width={120}
          height={40}
          alt="With default placeholder"
          withPlaceholder
          src={img ? URL.createObjectURL(img) : undefined}
        />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles: any) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
