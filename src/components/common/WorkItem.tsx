"use client";

import Image from "next/image";
import { useContext } from "react";
import { WorkWorkInfo } from "../../../types/generated";
import { TestContext } from "./../../context/TestContext";

export default function WorkItem({
  workId,
  workInfo,
}: {
  workId: string;
  workInfo: WorkWorkInfo;
}) {
  const test = useContext(TestContext);

  return (
    <li>
      <Image
        src={workInfo.mainKeyVisualPath}
        alt={workInfo.mainKeyVisualAlt}
        width={640 / 2}
        height={360 / 2}
      />
      <p>
        {test}:{workInfo.workTitle}
      </p>
    </li>
  );
}
