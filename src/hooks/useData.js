import { useEffect, useState } from "react";

function useData(url) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((reponseData) => setData(reponseData));
  }, [url]);
  return data;
}

export default useData;
