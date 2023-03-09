"use client";

import { use, useEffect, useState } from "react";
import { ApiDanimeSearchGet200Response, Work } from "../../../types/generated";
import WorkItem from "../common/WorkItem";

export default function SearchResultArea({ query }: { query: string }) {
  let [workList, setWorkList] = useState<Work[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/danime/search?query=${query}`)
      .then((r) => r.json())
      .then((data: ApiDanimeSearchGet200Response) => {
        if (data.data != null) {
          setWorkList(data.data.workList);
        }
      });
  }, [query]);

  const recommendableWorks = workList.filter(
    (work) => work.workInfo.favoriteCount > 50000
  );

  const listItems = recommendableWorks.map((work: Work) => (
    <WorkItem
      key={`list_${work.workId}`}
      workId={work.workId}
      workInfo={work.workInfo}
    />
  ));

  return (
    <>
      {workList.length > 0 ? (
        <>
          <div>{`検索結果：${workList.length}作品`}</div>
          <ul>{listItems}</ul>
        </>
      ) : (
        <div>検索結果がありません。</div>
      )}
    </>
  );
}
