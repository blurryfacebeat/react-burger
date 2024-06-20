export const chunkArray = <T>(array: T[], chunkSize: number) => {
  const results = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }

  return results;
};
