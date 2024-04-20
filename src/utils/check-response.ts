export const checkResponse = (response: Response) => {
  return response.ok
    ? response.json()
    : response.json().then((error) => Promise.reject(error));
};
