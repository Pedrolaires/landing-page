import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GoTop } from ".";

describe("GoTop", () => {
  it("should render", () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toBeInTheDocument();
  });
  it("should have a hash atribute", () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<GoTop />);
    expect(container).toMatchSnapshot();
  });
});
