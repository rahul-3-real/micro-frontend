import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Mount from "marketing/MarketingApp";

const MarketingApp = () => {
  const containerRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = Mount(containerRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const pathname = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={containerRef} />;
};

export default MarketingApp;
