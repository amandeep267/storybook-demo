import Button from "./Button";
import Center from "../Center/Center";
import { ComponentMeta } from "@storybook/react";


export default {
  title: "Components/Button",
  component: Button,
  decorators: [(story: () => JSX.Element) => <Center>{story()}</Center>],
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
