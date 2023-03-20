export const getProgressColorScheme: Function = (percentageValue: number) => {
  if (percentageValue <= 14) {
    return "cyan";
  } else if (percentageValue > 14 && percentageValue <= 28) {
    return "blue";
  } else if (percentageValue > 28 && percentageValue <= 42) {
    return "teal";
  } else if (percentageValue > 42 && percentageValue <= 56.5) {
    return "green";
  } else if (percentageValue > 56.5 && percentageValue <= 71) {
    return "yellow";
  } else if (percentageValue > 71 && percentageValue <= 85.5) {
    return "orange";
  } else if (percentageValue > 85.5 && percentageValue < 100) {
    return "red";
  } else if (percentageValue >= 100) {
    return "pink";
  } else {
    return "gray";
  }
};
