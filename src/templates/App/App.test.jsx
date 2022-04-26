import Home from ".";
import { renderTheme } from "../../styles/render-theme";
import { mockBase } from "../Base/mock";

describe("<Home />", () => {
  it("should render home", () => {
    renderTheme(<Home {...mockBase} />);
  });
});
