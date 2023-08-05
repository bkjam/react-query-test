export const wait = (milliseconds: number) => {
  console.log("Adding Delay of " + milliseconds + "ms");
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
