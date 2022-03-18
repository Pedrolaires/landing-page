import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic autem magni debitis numquam quidem distinctio doloremque laboriosam,
    dolorum cumque repellat minus similique dolor odio suscipit ea error harum odit!`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
