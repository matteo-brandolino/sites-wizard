import {
  TextInput,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  NumberInput,
  Paper,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons";
import { useEffect, useState } from "react";
import { CustomButton } from "../common/CustomButton";
import { CustomFileButton } from "../FileButton";
import { useStyles } from "./css/customHeaderWrapperCss";
import { CustomHeader } from "./CustomHeader";

type Props = {};

function CustomHeaderWrapper({}: Props) {
  const { classes } = useStyles();
  const [file, setFile] = useState<File | null>(null);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      linksNumber: 1,
      links: [{ label: "", value: randomId() }],
    },

    // functions will be used to validate values at corresponding key
    validate: {
      linksNumber: (value) =>
        value < 0 ? "You must choose at least 1 link" : null,
      links: (value, values) =>
        values.linksNumber < value.length ? "Too many Links" : null,
    },
  });
  const fields = form.values.links.map((item, index) => (
    <Group key={item.value} mt="xs">
      <TextInput
        placeholder="Insert a new link..."
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`links.${index}.label`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("links", index)}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  useEffect(() => {
    if (form.values.linksNumber < form.values.links.length) {
      form.removeListItem("links", form.values.links.length - 1);
    }
  }, [form.values.linksNumber]);

  return (
    <>
      <CustomHeader img={file} links={form.values?.links} />
      <Box sx={{ maxWidth: 600 }} mx="auto">
        <Paper shadow="lg" radius="lg" p="lg" withBorder>
          <Title order={6}>Your Website's Links</Title>
          <div className={classes.numberInputContainer}>
            <Text>Numbers of links</Text>
            <NumberInput
              radius="sm"
              mt="sm"
              placeholder="How many links?..."
              min={1}
              max={4}
              {...form.getInputProps("linksNumber")}
            />
          </div>
          {fields.length > 0 && (
            <Group mt="xs" mb="xs">
              <Text weight={500} size="sm" sx={{ flex: 1 }}>
                Link
              </Text>
            </Group>
          )}

          {fields}

          <Group position="center" mt="md">
            <CustomButton
              label="Add Link"
              disabled={form.values.links.length >= form.values.linksNumber}
              onClick={() =>
                form.insertListItem("links", {
                  label: "",
                  value: randomId(),
                })
              }
            />
          </Group>
        </Paper>
        <Paper shadow="lg" radius="lg" p="lg" mt="lg" withBorder>
          <Title order={6}>Your Website's Icon</Title>
          <CustomFileButton file={file} setFile={setFile} />
        </Paper>
      </Box>
    </>
  );
}

export default CustomHeaderWrapper;
