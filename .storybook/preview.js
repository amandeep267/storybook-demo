import { ThemeProvider } from "@material-ui/styles";
import "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <ThemeProvider>
//       <Story />
//     </ThemeProvider>
//   ),
// ];
// export const parameters = {
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
