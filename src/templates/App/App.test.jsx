import { screen } from "@testing-library/react";
import Home from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

test("render <Home /> component.", () => {
  renderTheme(<Home />);
});

test("Background do h1 da match com a cor segundaria do tema", () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", {
    name: "Oi",
  }).parentElement;

  expect(headingContainer).toHaveStyleRule(
    "background",
    theme.colors.secondaryBg,
  );
  expect(headingContainer).toMatchSnapshot();
});
