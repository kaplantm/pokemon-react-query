import axios, { CancelToken } from "axios";

export const downloadWithProgress = async (url: string, cancelToken: CancelToken, onProgress: (progress: number) => void) => {
  try {
    const result = await axios.get(url, {
      cancelToken,
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(percentCompleted);
      },
    });
    return result;
  } catch (e) {
    console.log(e);
    onProgress(0);
  }
  return null;
};

export const cancelRequest = (cancelToken: string) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
};
