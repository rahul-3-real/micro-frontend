import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Mount from "auth/AuthApp";

const AuthApp = () => {
  const containerRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = Mount(containerRef.current, {
      initialPath: history.location.pathname,
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

export default AuthApp;
