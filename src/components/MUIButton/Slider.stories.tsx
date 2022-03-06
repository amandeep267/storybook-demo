import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default
{
    label:"MUIButton/Slider",
    component: Slider
}as ComponentMeta< typeof Slider>

export const slider:ComponentStory<typeof Slider> = ()=>
    <Box width={300} height={100} mt={20} >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>;