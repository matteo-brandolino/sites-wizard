import { useState, useRef } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";

type CustomFileButtonProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
};
export function CustomFileButton({ file, setFile }: CustomFileButtonProps) {
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group position="center">
        <FileButton
          resetRef={resetRef}
          onChange={setFile}
          accept="image/png,image/jpeg"
        >
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>
      {file && (
        <>
          <Text size="sm" align="center" mt="sm">
            Picked file: {file.name}
          </Text>
        </>
      )}
    </>
  );
}
