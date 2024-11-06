import React, { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href]);

  return null;
}
