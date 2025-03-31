type RequestPropsType = {
  method: string;
  url: string;
  body?: unknown;
};

function useRequest() {
  const baseUrl = "https://api.capitalcity.gg:3333";

  const createRequest = async <T>(request: RequestPropsType): Promise<T> => {
    const response = await fetch(`${baseUrl}${request.url}`, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: request.body ? JSON.stringify(request.body) : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  };

  return {
    createRequest,
  };
}

export default useRequest;
