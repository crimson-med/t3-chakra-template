export const createShortText = (payload: string) => {
  const seperated = payload.split(" ");
  if (seperated.length > 50) {
    return seperated.slice(0, 50).join(" ") + "...";
  }
  return seperated.join(" ");
};
