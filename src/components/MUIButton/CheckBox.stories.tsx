import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const checkboxprops = { inputProps: { "aria-label": "Checkbox demo" } };
export default {
  label: "MUIButton/CheckBox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const checkbox: ComponentStory<typeof Checkbox> = () => {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Check me 1"
        color="primary"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Check me 2"
        color="secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            {...checkboxprops}
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        }
        label="Check me 3"
      />
    </div>
  );
};
