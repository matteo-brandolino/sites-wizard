import { Button, ButtonProps } from "@mantine/core";

interface CustomButtonProps extends ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function CustomButton({ label, disabled, onClick }: CustomButtonProps) {
  return (
    <Button disabled={disabled} onClick={onClick} variant="outline" color="cyan" radius="lg">
      {label}
    </Button>
  );
}
