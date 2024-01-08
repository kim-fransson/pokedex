export const formatId = (id: number) => {
  return `#${id.toString().padStart(4, "0")}`;
};
