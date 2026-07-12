import { useEffect, useState } from "react";

const useClientReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => setIsReady(true), []);

  return isReady;
};

export default useClientReady;
