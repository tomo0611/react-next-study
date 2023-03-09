"use client";

import { ChangeEvent } from "react";

export default function SearchInput({
  query,
  onChange,
}: {
  query: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-1/2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-primary-100"
          placeholder="作品名/曲名/声優/歌手/キャラ名"
          onChange={onChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-primary-100 hover:bg-primary-150 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
}
