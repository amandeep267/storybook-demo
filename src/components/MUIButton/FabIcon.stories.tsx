import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import { SxProps } from '@mui/system';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    label:'MUIButton/FabIcon',
    component:Fab
}as ComponentMeta< typeof Fab>

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  const fab =  {
      color: 'primary' as 'primary',
      sx: fabStyle as SxProps,
      icon: <AddIcon />,
      label: 'Add',
    }
export const fabIcon: ComponentStory<typeof Fab> = () =>

<Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
{fab.icon}
</Fab>