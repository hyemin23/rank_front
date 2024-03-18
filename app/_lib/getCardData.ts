"use server";
export async function getCardData(path: string) {
  const res = await fetch(`https://allinfoquestion.com/${path}/${1}`, {
    cache: "default",
  });
  if (!res.ok) {
    console.log("데이터 없음");
  } else {
    return res.json();
  }
}
