import React, { useState, useEffect } from "react";

export const useRequest = (request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    request()
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    // return () => {
    //   cleanup;
    // };
  }, []);

  return [data, loading, error];
};
