import type {Square} from "../Types";
import {autoFillRemaining} from "./autofillRemaining";

describe("autoFillRemaining", () => {
  test("autoFillRemaining ", () => {
    const squares: Square[] = Array.from({length: 5 * 5}, () => ({
      color: "blue",
      shape: "star",
      valid: {
        red: {
          star: false,
          circle: false,
        },
        blue: {
          star: false,
          circle: false,
        },
      },
    }));

    squares[0] = {
      color: "",
      shape: "",
      valid: {
        red: {
          star: true,
          circle: false,
        },
        blue: {
          star: false,
          circle: false,
        },
      },
    };

    const autofilled = autoFillRemaining(squares);

    expect(autofilled[0].color).toBe("red");
  });
});
