import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { TextComponent } from ".";

describe("TextComponent", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Text</TextComponent>);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("should render a text", () => {
    const { container } = renderTheme(<TextComponent>Text</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
