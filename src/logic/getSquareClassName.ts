import type {Color, RuleSquare, Square, Symbol} from "../Types";

export function getSquareClassName({
  square,
  baseName = "square",
  showHints = false,
  hintShape,
  playerColor,
}: {
  square: Square | RuleSquare;
  baseName?: string;
  showHints?: boolean;
  hintShape?: Symbol | null;
  playerColor?: Color;
}): string {
  const classes = [baseName];

  if (square.symbol) {
    classes.push(square.symbol);
  }

  if (square.color) {
    classes.push(square.color);
  } else if (
    !square.valid.red.star &&
    !square.valid.red.circle &&
    !square.valid.blue.star &&
    !square.valid.blue.circle
  ) {
    classes.push("black");
  } else if (
    showHints &&
    hintShape &&
    playerColor &&
    square.valid[playerColor][hintShape]
  ) {
    classes.push(`${playerColor}-hint`);
  }

  const className = classes.join(" ");

  return className;
}
