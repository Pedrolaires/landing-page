import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { MenuLink } from ".";

describe("MenuLink", () => {
  it("should render a link", () => {
    renderTheme(<MenuLink link={"http://www.google.com"}>Children</MenuLink>);
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_self",
    );
  });

  it("should match snapshot", () => {
    renderTheme(
      <MenuLink newTab={true} link={"http://www.google.com"}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole("link", { name: "Children" })).toMatchSnapshot();
  });
});
