export type Color = "red" | "blue";

export type Shape = "star" | "circle";

// e.g. structure like:
//       "valid": {
//         "red": {
//           "star": false,
//           "circle": true
//         },
//         "blue": {
//           "star": true,
//           "circle": true
//         }
//       }
export type ValidInfo = {
  [C in Color]: {
    [S in Shape]: boolean;
  };
};

export type Square = {
  color: Color | "";
  shape: Shape | "";
  valid: ValidInfo;
};

export type RuleSquare = Omit<Square, "color"> & {
  color: Square["color"] | "red-hint" | "blue-hint" | "black";
};

export type Score = {
  [C in Color]: number;
};
