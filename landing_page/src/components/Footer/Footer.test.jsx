import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("Footer", () => {
  it("should render", () => {
    renderTheme(<Footer footerHtml={"<h1>Olá</h1>"}></Footer>);
    expect(screen.getByRole("heading", { name: "Olá" })).toBeInTheDocument();
  });

  /*   it("should match snapshot", () => {
    const { container } = renderTheme(<Footer html={"<h1>Olá</h1>"}></Footer>);
    expect(container).toMatchSnapshot();
  }); */
});
