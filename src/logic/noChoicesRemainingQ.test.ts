import type {Square} from "../Types";
import {noChoicesRemainingQ} from "./noChoicesRemainingQ";

describe("noChoicesRemainingQ", () => {
  test("If both players have legal spaces to play, return false.", () => {
    const squares: Square[] = Array.from({length: 5 * 5}, () => ({
      color: "red",
      shape: "circle",
      valid: {
        red: {
          star: true,
          circle: true,
        },
        blue: {
          star: true,
          circle: true,
        },
      },
    }));

    expect(noChoicesRemainingQ(squares)).toBe(false);
  });

  test("If only one color has legal spaces to play, return true.", () => {
    const squares: Square[] = Array.from({length: 5 * 5}, () => ({
      color: "",
      shape: "",
      valid: {
        red: {
          star: false,
          circle: false,
        },
        blue: {
          star: true,
          circle: true,
        },
      },
    }));

    expect(noChoicesRemainingQ(squares)).toBe(true);
  });

  test("If neither color has legal spaces to play, return true", () => {
    const squares: Square[] = Array.from({length: 5 * 5}, () => ({
      color: "",
      shape: "",
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

    expect(noChoicesRemainingQ(squares)).toBe(true);
  });
});
