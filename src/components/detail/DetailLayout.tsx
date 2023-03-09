"use client";

import { useState } from "react";
import DetailHead from "./DetailHead";

export default function DetailLayout() {
  const [data, setData] = useState(null);

  fetch("http://localhost:3000/api/danime/work?workId=24273")
    .then((r) => r.json())
    .then((data) => {});
  return (
    <>
      <DetailHead />
      <div className="mt-4">
        <SearchResultArea query={query} />
      </div>
    </>
  );
}
