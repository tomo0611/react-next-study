"use client";

import Image from "next/image";
import { WorkWorkInfo } from "../../../types/generated";

export default function WorkItem({
  workId,
  workInfo,
}: {
  workId: string;
  workInfo: WorkWorkInfo;
}) {
  return (
    <li>
      <Image
        src={workInfo.mainKeyVisualPath}
        alt={workInfo.mainKeyVisualAlt}
        width={640 / 2}
        height={360 / 2}
      />
      <p>{workInfo.workTitle}</p>
    </li>
  );
}
