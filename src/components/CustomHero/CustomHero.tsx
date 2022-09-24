import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import { CustomButton } from "../common/CustomButton";
import { useStyles } from "./css";

type Props = {
  title: string;
  subTitle: string;
  img: File | null;
  buttons: { label: string; value: string }[];
};

function CustomHero({ title, subTitle, img, buttons }: Props) {
  const { classes, cx } = useStyles({ img });
  const buttonsToRender =
    buttons.length > 0 &&
    buttons.map((button, index) => (
      <CustomButton
        label={button.label}
        key={button.value}
        className={
          index === 1
            ? cx(classes.control, classes.secondaryControl)
            : classes.control
        }
      />
    ));
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>{title}</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {subTitle}
          </Text>
        </Container>

        <div className={classes.controls}>{buttonsToRender}</div>
      </div>
    </div>
  );
}

export default CustomHero;
