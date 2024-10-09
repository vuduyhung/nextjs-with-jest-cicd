/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);

  const image = screen.getByRole("img", { name: /next\.js logo/i });
  expect(image).toHaveAttribute("src", "https://nextjs.org/icons/next.svg");
});

it("Page must have 'This is demo page' text", () => {
  render(<Page />);

  const pageText = screen.getByText(/This is a demo Nextjs 14.2.15/i);
  expect(pageText).toBeInTheDocument();
});

it("A sample error test to make test fail", () => {
  render(<Page />);

  const pageText = screen.getByText(/This is a xxx Hello!/i);
  expect(pageText).toBeInTheDocument();
});