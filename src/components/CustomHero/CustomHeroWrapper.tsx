import CustomerHero from "./CustomHero";
import { useForm } from "@mantine/form";
import {
  ActionIcon,
  Button,
  Group,
  NumberInput,
  TextInput,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { IconTrash } from "@tabler/icons";
import { CustomFileButton } from "../FileButton";
import { randomId } from "@mantine/hooks";
import { CustomButton } from "../common/CustomButton";

function CustomHeroWrapper() {
  const [file, setFile] = useState<File | null>(null);
  const form = useForm({
    initialValues: {
      title: "",
      subTitle: "",
      buttonsNumber: 1,
      buttons: [{ label: "", value: randomId() }],
    },
    validate: {
      buttonsNumber: (value) =>
        value < 0 ? "You must choose at least 1 button" : null,
      buttons: (value, values) =>
        values.buttonsNumber < value.length || values.buttonsNumber > 2
          ? "Too many Buttons"
          : null,
    },
  });
  const fields = form.values.buttons.map((item, index) => (
    <Group key={item.value} mt="xs">
      <TextInput
        placeholder="Insert a new Button..."
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`buttons.${index}.label`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("buttons", index)}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  //TO DO: refactoring numberInput + fields
  return (
    <>
      <CustomerHero
        img={file}
        title={form.values?.title}
        subTitle={form.values?.subTitle}
        buttons={form.values?.buttons}
      />
      <div style={{ maxWidth: 320, margin: "auto" }}>
        <TextInput
          label="Title"
          placeholder="Title"
          {...form.getInputProps("title")}
        />
        <TextInput
          mt="md"
          label="SubTitle"
          placeholder="SubTitle"
          {...form.getInputProps("subTitle")}
        />
        <CustomFileButton file={file} setFile={setFile} />
        <NumberInput
          radius="md"
          mt="sm"
          label="Number Of buttons"
          placeholder="How many buttons?..."
          min={1}
          max={2}
          {...form.getInputProps("buttonsNumber")}
        />
        {fields.length > 0 && (
          <Group mt="xs" mb="xs">
            <Text weight={500} size="sm" sx={{ flex: 1 }}>
              Button
            </Text>
          </Group>
        )}

        {fields}

        <Group position="center" mt="md">
          <CustomButton
            label="Add Button"
            disabled={
              form.values.buttons.length >= form.values.buttonsNumber ||
              form.values.buttonsNumber > 2
            }
            onClick={() =>
              form.insertListItem("buttons", {
                label: "",
                value: randomId(),
              })
            }
          />
        </Group>
      </div>
    </>
  );
}

export default CustomHeroWrapper;
