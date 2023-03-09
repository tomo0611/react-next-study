import SearchLayout from "@/components/search/SearchLayout";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <div className="mt-4 mx-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchLayout />
        </Suspense>
      </div>
    </>
  );
}
