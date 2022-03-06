import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "MUIButton/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];
export const Bgroup: ComponentStory<typeof ButtonGroup> = () => 
  <ButtonGroup disableElevation variant="contained">
    <Button>One</Button>
    <Button>Two</Button>
  </ButtonGroup>

export const verticalButtonGroup: ComponentStory<typeof ButtonGroup> = () => 
  <ButtonGroup
    orientation="vertical"
    aria-label="vertical outlined button group">
   {buttons}
  </ButtonGroup>;
