import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("-- Greeting :", () => {
  test("prints the Hello World", () => {
    render(<Greetings />);

    const HelloWorldEl = screen.getByText(/Hello World/i);
    expect(HelloWorldEl).toBeInTheDocument();
  });

  test('renders the "DUMMY" when button was NOT clicked', () => {
    render(<Greetings />);

    const paragraphEl = screen.getByText(/Dummy/i);
    expect(paragraphEl).toBeInTheDocument();
  });

  test('renders the "Changed" when button was clicked', () => {
    render(<Greetings />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const paragraphEl = screen.getByText(/Changed/i);
    expect(paragraphEl).toBeInTheDocument();
  });

  test('DOES NOT renders the "DUMMY" when button was NOT clicked', () => {
    render(<Greetings />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const paragraphEl = screen.queryByText(/DUMMY/i);
    expect(paragraphEl).toBeNull();
  });
});
