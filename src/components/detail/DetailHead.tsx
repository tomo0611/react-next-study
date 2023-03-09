"use client";

import Image from "next/image";

export default function DetailHead() {
  return (
    <>
      <div className="flex">
        <div>
          <Image
            src="https://cs1.animestore.docomo.ne.jp/anime_kv/img/24/27/3/24273_1_1.png"
            width={640}
            height={360}
            alt=""
          />
        </div>
        <Image
          src="https://cs1.animestore.docomo.ne.jp/anime_kv/img/24/27/3/0/01/24273001_1_2.png"
          width={288}
          height={162}
          alt=""
        />
        <Image
          src="https://cs1.animestore.docomo.ne.jp/anime_kv/img/24/27/3/0/01/24273001_1_3.png"
          width={288}
          height={162}
          alt=""
        />
      </div>

      <div>
        <h1 className="text-2xl">魔女の旅々（全12話）</h1>
      </div>
    </>
  );
}
