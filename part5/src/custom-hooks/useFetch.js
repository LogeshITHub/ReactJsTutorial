import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  let fetchApi = async () => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setData(data);
      } else {
        setError("Not have data");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { isloading, data, error };
}

export default useFetch;
