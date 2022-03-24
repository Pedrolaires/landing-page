import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { LogoLink } from ".";

describe("LogoLink", () => {
  it("should have a heading element", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole("heading", { name: "Olá mundo" });
    expect(heading).toBeInTheDocument();
  });
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole("link", { name: "Olá mundo" })).toHaveAttribute(
      "href",
      "#target",
    );
  });
  it("should render img logo", () => {
    renderTheme(
      <LogoLink link="#target" imageSrc="img.jpg" text="Olá mundo" />,
    );
    expect(screen.getByRole("img", { name: "Olá mundo" })).toHaveAttribute(
      "src",
      "img.jpg",
    );
  });
  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" imageSrc="img.jpg" text="Olá mundo" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
