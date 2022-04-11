import { GridTwoColumns } from ".";
import mock from "./mock";

export default {
  title: "GridTwoColumns",
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    text: String,
    title: String,
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
