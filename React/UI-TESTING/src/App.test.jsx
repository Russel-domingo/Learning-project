// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     // using regex with the i flag allows simpler case-insensitive comparison
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });


describe("App component", () =>{
    it("renders magnificent", () => {
        const {container} = render(<App></App>);
        expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup();

        render(<App></App>);
        // const button = screen.getByRole("button", {name: "Click me"});
        const button = screen.getByRole("button", { name: "Click Me" });
        await user.click(button);

        // expect(screen.getByRole("heading").textContent.toMatch(/radical rhinos/i));
        expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    });
}); 