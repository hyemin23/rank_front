export async function getCardData(path: string) {
  console.log("path", path);
  const res = await fetch(`https://allinfoquestion.com/${path}/${1}`, {
    cache: "default",
  });

  console.log(res);
  if (!res.ok) {
    console.log("데이터 없음");
  } else {
    return res.json();
  }
}
