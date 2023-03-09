"use client";

import { ChangeEvent, useState } from "react";
import SearchInput from "./SearchInput";
import SearchResultArea from "./SearchResultArea";

export default function SearchLayout() {
  const [query, setQuery] = useState("");

  function handleQueryChange(ev: ChangeEvent<HTMLInputElement>) {
    setQuery(ev.target.value);
    console.log(query);
  }

  return (
    <>
      <SearchInput query={query} onChange={handleQueryChange} />
      <div className="mt-4">
        <SearchResultArea query={query} />
      </div>
    </>
  );
}
