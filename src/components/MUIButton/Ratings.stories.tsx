import Rating from '@mui/material/Rating';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default 
{
label:"MUIButton/RatingBar",
component: Rating
}as ComponentMeta<typeof Rating>;

export const rating: ComponentStory<typeof Rating> = ()=> 
      <Rating name="size-medium" defaultValue={2} />;

  