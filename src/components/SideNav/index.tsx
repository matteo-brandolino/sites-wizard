import { useEffect, useState } from "react";
import { Navbar, Group, Code } from "@mantine/core";
import { IconSwitchHorizontal, IconLogout } from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { useStyles } from "./css";
import { JSXElementArray } from "../../types";
import { getLinks } from "../../helpers";

export function SideNav({ components }: JSXElementArray) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<String>("");
  const data = getLinks(components);
  if (!data) return <></>;
  const links = data.map((item) => {
    if (!item) return;
    return (
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item?.label === active,
        })}
        href={item?.link}
        key={item?.label}
        onClick={() => {
          setActive(item?.label ?? "");
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item?.label}</span>
      </a>
    );
  });

  useEffect(() => {
    if (active === "") {
      window.location.hash = "#header";
      setActive("Header");
    }
  }, [active]);

  return (
    <Navbar className={classes.navbar} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
