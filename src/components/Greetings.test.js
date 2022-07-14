import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Hello World printed", () => {
  render(<Greetings />);

  const HelloWorldEl = screen.getByText(/Hello World/i);
  expect(HelloWorldEl).toBeInTheDocument();
});
