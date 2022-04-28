import React, { useEffect } from "react";
import ContentGigs from "./ContentGigs/ContentGigs";

export default function GigsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContentGigs />
    </div>
  );
}
