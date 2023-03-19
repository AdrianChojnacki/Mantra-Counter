export const getAllMantras: Function = async () => {
  // TODO: any - tried URL type but it's not enough
  const apiUrl: any = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(apiUrl);
  const data = await response.json();

  const mantras = [];

  for (const key in data) {
    mantras.push({
      id: key,
      ...data[key],
    });
  }

  return mantras;
};
