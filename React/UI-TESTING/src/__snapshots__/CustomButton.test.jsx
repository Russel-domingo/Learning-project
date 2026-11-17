import { vi, describe, it, expect} from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CustomButton from '../CustomButton';

describe("CustomButton", () => {
    it("Should render a button with the text Click me", () => {
        render(<CustomButton></CustomButton>);
        
        const button = screen.getByRole("button", {name: "Click me"});

        expect(button).toBeInTheDocument();
    });

    it("should call the onClick function when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<CustomButton onClick={onClick}></CustomButton>);

        // const button = screen.getByRole("button", { name: "Click me" });
        const button = screen.getByRole("button", { name: "Click me" });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("should not call the function when the button is not clicked", () => {
        const onClick = vi.fn();
        render(<CustomButton onClick={onClick}></CustomButton>);

        expect(onClick).not.toHaveBeenCalled();
    });
});