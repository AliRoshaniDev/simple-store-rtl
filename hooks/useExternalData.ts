import { useEffect, useState } from "react";
import axios from "axios";

//This hook is used to receive data by url
export default function useExternalData<T>(url: string): [T | undefined, any | undefined, boolean] {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .then(() => setLoading(false));
  }, [url]);
  return [data, error, loading];
}
