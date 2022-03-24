import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          reprehenderit nemo assumenda, ducimus in vitae ut dolor consequuntur,
          molestiae dolores, nostrum provident blanditiis ab? Quis ducimus atque
          dignissimos. Quasi, cum.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
