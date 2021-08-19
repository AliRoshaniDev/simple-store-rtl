import { useEffect, useState } from "react";

//This hook is used to receive data by url
export default function useExternalData<T>(url: string): T | undefined {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((reponseData) => setData(reponseData))
      .catch((err) => setData(undefined));
  }, [url]);
  return data;
}
