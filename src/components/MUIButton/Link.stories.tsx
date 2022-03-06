import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { ComponentStory, ComponentMeta } from "@storybook/react";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
export default
{
    label:"Components/Links",
    component: Link
}as ComponentMeta< typeof Link>
export const linkfunc:ComponentStory<typeof Link> = ()=> 
    <Box
      sx={
        {display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
      onClick={preventDefault} >
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>
    </Box>
  