import {autoFillRemaining} from "./autofillRemaining";

describe("autoFillRemaining", () => {
  test("autoFillRemaining ", () => {
    let squares = Array.from({length: 5 * 5}, () => ({
      color: "blue",
      symbol: "star",
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
      symbol: "",
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
