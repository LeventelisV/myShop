import { render, screen } from "@testing-library/react";
import MemoProduct from "../Components/Product";
import Products from "../products";
import Context from "../Context";
import ShoppingCard from "../Components/ShoppingCard";
import Product from "../Components/Product";

describe("Product", () => {
  test("render product", () => {
    const { getByText } = render(
      <Products>

          <Product></Product>

      </Products>
    );
    expect(getByText("")).toBeInTheDocument();
  });
});
