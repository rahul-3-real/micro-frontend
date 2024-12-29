import React, { useRef, useEffect } from "react";

import Mount from "dashboard/DashboardApp";

const DashboardApp = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Mount(containerRef.current);
  }, []);

  return <div ref={containerRef} />;
};

export default DashboardApp;
