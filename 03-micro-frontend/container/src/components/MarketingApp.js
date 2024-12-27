import React, { useRef, useEffect } from "react";

import Mount from "marketing/MarketingApp";

const MarketingApp = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Mount(containerRef.current);
    // const marketingMount = Mount(containerRef.current);
    // return () => marketingMount.destroy();
  }, []);

  return <div ref={containerRef} />;
};

export default MarketingApp;
