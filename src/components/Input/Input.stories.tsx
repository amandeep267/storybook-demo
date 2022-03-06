import Input from "./Input";

export default { title: "Components/Input", component: Input };
export const Larger = () => <Input size="large" placeholder="Large Text" />;
export const Medium = () => <Input size="medium" placeholder="Medium Text" />;
export const Smaller = () => <Input size="small" placeholder="small Text" />;
