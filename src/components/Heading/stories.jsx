import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Texto light no fundo Dark",
  },
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};
Light.args = {
  children: "Texto dark no fundo light",
  colorDark: false,
};
