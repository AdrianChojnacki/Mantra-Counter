export const getProgressColorScheme: Function = (percentageValue: number) => {
  if (percentageValue <= 12.5) {
    return "cyan";
  } else if (percentageValue > 12.5 && percentageValue <= 25) {
    return "blue";
  } else if (percentageValue > 25 && percentageValue <= 37.5) {
    return "teal";
  } else if (percentageValue > 37.5 && percentageValue <= 50) {
    return "green";
  } else if (percentageValue > 50 && percentageValue <= 62.5) {
    return "yellow";
  } else if (percentageValue > 62.5 && percentageValue <= 75) {
    return "orange";
  } else if (percentageValue > 75 && percentageValue <= 87.5) {
    return "red";
  } else if (percentageValue > 87.5) {
    return "pink";
  }
};
