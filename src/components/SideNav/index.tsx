import { useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import { useStyles } from './css';

const data = [
  { link: '#header', label: 'Header', icon: IconBellRinging },
  { link: '#hero', label: 'Hero', icon: IconReceipt2 },
  { link: '#section-3', label: 'Security', icon: IconFingerprint },
  { link: '#section-4', label: 'SSH Keys', icon: IconKey },
  { link: '#section-5', label: 'Databases', icon: IconDatabaseImport },
  { link: '#section-6', label: 'Authentication', icon: Icon2fa },
  { link: '#section-7', label: 'Other Settings', icon: IconSettings },
];

export function SideNav() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<String>('Header');
  
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar className={classes.navbar} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <MantineLogo size={28} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}