import { parse } from "node-html-parser";
import {
  CompactEpisode,
  CompactWorkInfo,
} from "../../../../../types/generated";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let workId = searchParams.get("workId");

  if (workId != undefined) {
    const res = await fetch(
      "https://animestore.docomo.ne.jp/animestore/ci_pc?workId=" + workId,
      {
        cache: "no-store",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0",
        },
      }
    );

    const root = parse(await res.text());

    let compactWorkInfo: CompactWorkInfo = {
      workId: workId,
      title: "",
      img1: "",
      img1w: 640,
      img1h: 360,
      img2: "",
      img2w: 288,
      img2h: 162,
      img3: "",
      img3w: 288,
      img3h: 162,
      option_text: "",
      fav_count_text: "",
    };

    let episodes: CompactEpisode[] = [];

    root.getElementsByTagName("div").forEach((div) => {
      if (
        compactWorkInfo.img1 == "" &&
        div.attrs["class"] == "productWrapperIn clearfix"
      ) {
        compactWorkInfo.img1 =
          div.getElementsByTagName("img")[0].attrs["data-src"];
        compactWorkInfo.img1w = parseInt(
          div.getElementsByTagName("img")[0].attrs["width"]
        );
        compactWorkInfo.img1h = parseInt(
          div.getElementsByTagName("img")[0].attrs["height"]
        );
        compactWorkInfo.img2 =
          div.getElementsByTagName("img")[1].attrs["data-src"];
        compactWorkInfo.img2w = parseInt(
          div.getElementsByTagName("img")[1].attrs["width"]
        );
        compactWorkInfo.img2h = parseInt(
          div.getElementsByTagName("img")[1].attrs["height"]
        );
        compactWorkInfo.img3 =
          div.getElementsByTagName("img")[2].attrs["data-src"];
        compactWorkInfo.img3w = parseInt(
          div.getElementsByTagName("img")[2].attrs["width"]
        );
        compactWorkInfo.img3h = parseInt(
          div.getElementsByTagName("img")[2].attrs["height"]
        );
        compactWorkInfo.title = div.getElementsByTagName("h1")[0].innerText;
        div.getElementsByTagName("li").forEach((div2) => {
          if (div2.attrs["class"] == "optionText") {
            compactWorkInfo.option_text = div2.innerText;
          } else if (div2.attrs["class"] == "nonmemberFavoriteCount") {
            compactWorkInfo.fav_count_text = div2.innerText;
          }
        });
      }

      if (div.attrs["class"] == "itemModule list") {
        let episode: CompactEpisode = {
          partId: "",
          partDispNumber: "",
          partTitle: "",
          mainScenePath: "",
          mainSceneWidth: 0,
          mainSceneHeight: 0,
          mainSceneAlt: "",
          watchingProgress: 0,
        };

        const a = div.getElementsByTagName("a")[0];
        const partId = a.attrs["href"].replace("cd_pc?partId=", "");
        episode.partId = partId;
        const img = div.getElementsByTagName("img")[0];
        const imgSrc = img.attrs["data-src"];
        const imgWidth = img.attrs["width"];
        const imgheight = img.attrs["height"];
        const imgAlt = img.attrs["alt"];
        episode.mainScenePath = imgSrc;
        episode.mainSceneWidth = parseInt(imgWidth);
        episode.mainSceneHeight = parseInt(imgheight);
        episode.mainSceneAlt = imgAlt;
        let titleLine1 = "";
        let titleLine2 = "";
        div.getElementsByTagName("span").forEach((div2) => {
          if (div2.attrs["class"] == "line1") {
            titleLine1 = div2.innerText;
          } else if (div2.attrs["class"] == undefined) {
            titleLine2 = div2.innerText;
          }
        });
        episode.partDispNumber = titleLine1;
        episode.partTitle = titleLine2;

        let watchingProgress = 0;
        div.getElementsByTagName("span").forEach((div2) => {
          if (div2.attrs["class"] == "progressCompleted") {
            watchingProgress = parseInt(
              div2.attrs["style"].replace("width: ", "").replace("%", "")
            );
          }
        });
        episode.watchingProgress = watchingProgress;

        episodes.push(episode);
      }
    });

    compactWorkInfo.episodes = episodes;

    return Response.json(compactWorkInfo);
  } else {
  }
}
