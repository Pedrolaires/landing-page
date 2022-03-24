import { LogoLink } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    link: "http://localhost",
    imageSrc: "assets/images/logo.svg",
  },
  argTypes: {
    text: { type: "string" },
    link: { type: "string" },
    imageSrc: { type: "string" },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  imageSrc: "",
};
