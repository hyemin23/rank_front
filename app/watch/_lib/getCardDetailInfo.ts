export async function getCardDetailInfo(id: string) {
  const res = await fetch(`https://allinfoquestion.com/watchInfo/${id}`);
  if (!res.ok) {
    console.log("데이터 없음");
  } else {
    return res.json();
  }
}
