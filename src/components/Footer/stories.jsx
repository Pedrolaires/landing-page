import { Footer } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Pedrolaires">Feito com <span style="color:#DC143C">❤</span> por Pedro Lucas </a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
