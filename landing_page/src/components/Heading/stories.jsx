import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Texto dark no fundo light",
  },
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "dark",
  },
};
Light.args = {
  children: "Texto light no fundo dark",
  colorDark: false,
};
