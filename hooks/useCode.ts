import useRequest from "./useRequest";

function useCode() {
  const { createRequest } = useRequest();

  const validateCode = (code: string, firstAccess: boolean) => {
    return createRequest<{ valid: boolean }>({
      method: "POST",
      url: "/validateCode",
      body: { code, firstAccess },
    });
  };

  return validateCode;
}

export default useCode;
