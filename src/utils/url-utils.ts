export const getURLParams = (url: string | null) => {
  if (!url) {
    return undefined;
  }
  try {
    const parsedURL = new URL(url);
    const params = new URLSearchParams(parsedURL.search);
    return Object.fromEntries(params);
  } catch (e) {
    return {};
  }
};
