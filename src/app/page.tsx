import Card from "@/components/Card";
import { Work } from "@/models/Work";
import Image from "next/image";

export default async function Page() {
  // Without parentheses, any code on the lines after return will be ignored!

  const res = await fetch("http://127.0.0.1:3000/json/RankingWorkList.json");
  const data = await res.json();
  const workList: Work[] = data.data.workList;
  const recommendableWorks = workList.filter(
    (work) => work.workInfo.favoriteCount > 50000
  );

  const listItems = recommendableWorks.map((work: Work) => (
    <li key={`list_${work.workId}`}>
      <Image
        src={work.workInfo.mainKeyVisualPath}
        alt={work.workInfo.mainKeyVisualAlt}
        width={640 / 2}
        height={360 / 2}
      />
      <p>{work.workInfo.workTitle}</p>
    </li>
  ));

  return (
    <>
      <div className="mt-4 mx-4">
        <h1 className="mt-2 text-3xl font-bold underline">
          デイリーアニメランキング: 最も人気のアニメ
        </h1>

        <div className="mt-4 grid grid-rows-5 grid-cols-5 gap-3">
          {recommendableWorks.map((work: Work) => (
            <Card key={`list_${work.workId}`} work={work} />
          ))}
        </div>
      </div>
    </>
  );
}
