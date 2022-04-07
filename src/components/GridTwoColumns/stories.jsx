import { GridTwoColumns } from ".";

export default {
  title: "GridTwoColumns",
  component: GridTwoColumns,
  args: {
    title: "Grid Two Columns",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores magni minus maxime tempore quos?`,
    imageSrc: "assets/images/javascript.svg",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
