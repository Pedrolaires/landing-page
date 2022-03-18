import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading>Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });

    expect(heading).toMatchSnapshot();
  });

  it("should render in UPPERCASE", () => {
    renderTheme(<Heading uppercase={true}>Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
    expect(heading).toMatchSnapshot();
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      color: theme.colors.lightGrayColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });
    expect(heading).toMatchSnapshot();
  });
  // Sizes
  it("should render heading in small size", () => {
    renderTheme(<Heading size="small">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });
    expect(heading).toMatchSnapshot();
  });

  it("should render heading in medium size", () => {
    renderTheme(<Heading size="medium">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.large,
    });
    expect(heading).toMatchSnapshot();
  });

  it("should render heading in large size", () => {
    renderTheme(<Heading size="large">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.xlarge,
    });
    expect(heading).toMatchSnapshot();
  });

  it("should render heading in small size", () => {
    renderTheme(<Heading size="huge">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.xhuge,
    });
    expect(heading).toMatchSnapshot();
  });
  //@media
  it("should render correct font-size (large) when the screen is less than 768px", () => {
    renderTheme(<Heading size="huge">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyleRule("font-size", theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
    expect(heading).toMatchSnapshot();
  });

  it("should render the correct html heading element", () => {
    const { container } = renderTheme(<Heading as={"h6"}>Text</Heading>);
    const h6 = container.querySelector("h6");

    expect(h6.tagName.toLowerCase()).toBe("h6");
    expect(h6).toMatchSnapshot();
  });
});
