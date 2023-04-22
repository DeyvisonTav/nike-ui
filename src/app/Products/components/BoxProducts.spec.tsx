import { render } from "@testing-library/react";
import { BoxProducts } from "./BoxProducts";
describe("render BoxProducts ", () => {
  it("should be able to render products elements", () => {
    const { getByText } = render(<BoxProducts />);
    expect(getByText("products")).toBeInTheDocument();
  });
});
