import { ApiDanimeSearchGet200Response } from "../../../../../types/generated";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let query = searchParams.get("query");

  if (query == undefined) {
    query = "";
  }

  const res = await fetch(
    "https://animestore.docomo.ne.jp/animestore/rest/WS000105?length=100&mainKeyVisualSize=10&searchKey=" +
      encodeURIComponent(query) +
      "&vodTypeList=svod_tvod",
    { cache: "no-store" }
  );

  const data: ApiDanimeSearchGet200Response = await res.json();

  console.log(data);

  return Response.json(data);
}
