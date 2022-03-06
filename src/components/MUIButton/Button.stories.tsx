import { Button } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "MUIButton/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["outlined", "contained"],
      control: { type: "radio" },
    },
    children: { control: "text" },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button onClick={action("Click handler")} {...args} />
);
export const Success: ComponentStory<typeof Button> = Template.bind({});
Success.args = {
  variant: "contained",
  children: "Success",
};

export const Danger = Template.bind({});

Danger.args = {
  variant: "contained",
  children: "danger",
};

export const Log = () => <Button onClick={() => console.log("logging..")}>Log</Button>;

export const Knobs = () => (
  <Button disabled={boolean("Disabled", false)}>{text("Label", "Button Label")}</Button>
);
