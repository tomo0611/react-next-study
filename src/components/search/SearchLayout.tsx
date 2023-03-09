"use client";

import { ChangeEvent, useState } from "react";
import SearchInput from "./SearchInput";
import SearchResultArea from "./SearchResultArea";
import { TestContext } from "@/context/TestContext";

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
        <TestContext.Provider value={5}>
          <SearchResultArea query={query} />
        </TestContext.Provider>
      </div>
    </>
  );
}
