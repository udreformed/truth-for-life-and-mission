import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const schedulePath = "/private/tmp/annual-reading-plan.json";
const publicationDir = path.join(root, "work/annual-reading/publication");
const outputPath = path.join(root, "src/data/annual-bible-reading.json");

const playlistIds = {
  1: "PLqie1n1CWRFinfPBACuRgj5HRXjW1ZGcP",
  2: "PLqie1n1CWRFi4CIo6yEoSU1kb8Ys6mSW9",
  3: "PLqie1n1CWRFh7iU6gDehI1sWCVMS35g9A",
  4: "PLqie1n1CWRFhe-fDaQUVaP_kpVdFVkxtW",
  5: "PLqie1n1CWRFh1eu-aOQu1VDoNjw2jXOm7",
  6: "PLqie1n1CWRFhH-d84DxJjR6jlOSGXkmuJ",
  7: "PLqie1n1CWRFihNGDEHPLCNSn0KMJ-hguW",
  8: "PLbVk5YW2YAKE",
  9: "PLeHrN9piMfC4",
  10: "PLIG5yh6sDpDM",
  11: "PLSK-Urh7uMgw",
  12: "PLQzUy5AgTswM"
};

const videoIds = {
  1: ["XFxwYoYkbiY","nRWeGDD-dyU","nOmy1nvUdUA","xkW038eFrZg","uS5X2Q8F5pQ","vODAtlzyx18","lIM4cQCpf8o","XGl9XuY2RA8","v2-k1-VzTwQ","YPdtB0LQxyY","hwCyexYkX04","jRYcRHQi-Zw","-qAhlZ7b0PE","9Vri6aadrkc","iJQSd4VQbUA","-ckvWahn3uc","YWWTy4FgR4Q","FLNtqiYKFaY","Gfff1_j5WmA","Bx6zCgAOJXk","QlERBLwDcXY","fCWav6VpTpo","u2Jaz-M-Uw8","5gcl7SXsuGw","tiBju_8Eddk","odW63YHXqUg","NyVgIHBVyyI","-qY62cqatik","wrWFd2k0b0A","mWjW4cOjWbo","FoWWoInl6hk"],
  2: ["woKIu9XeBto","x1oAEmK-wko","ZaaI5vt-x0U","LGqrD_Nwclk","pTW6EZ74vVA","vtjC7-xhbgk","ad9kNQsnO10","ZOEXEZRPr5w","7gCzdVBkSLg","w-fgmjNneNU","v5NOnWpU3zw","RjH3cLNgt3Q","a93L7AIh9qo","paKm8S_Rark","_OI8NYJv1sU","Z-7bhdcIhnY","MkkRoUDKfaQ","UMz5KXuT_6g","4Oe8eHUOCKU","zrs65xAUOXE","CvxnChcFbok","OuCj25GIo24","KBrtIu73-Lg","7F-W185Hcxs","sqDIIpHXi4Q","EDuYhTQH2jg","BS24lnCcwsE","3ZTOGd89xXE","fFaLROQDbVg","9pk0-Kcekis"],
  3: ["1Py5nBffA84","Dq2VDz7TX84","ICxajjd61hg","F7vRrxn5KB4","aZSAQ3q7e74","52BkcEpqTEo","qXQ5cD3XIr4","pjbynPJswPQ","HnA1cR6pMMQ","EIP_xYjwqoI","EEAuBkcfGo0","eubbjQ1rx98","f4Dg-3nyxyY","nBTAOTssWVM","LNB0KT7w6ac","hHLEgdmLFYs","mN3VJ_cu1iQ","Ppo7jhMHwA8","wNahdqfzmJg","nGO6ZJOIyR4","W_udjAUdUvg","wz4rbk4_dmA","SyhxYIgU2a8","QjYv_-R1duA","tBKi_17gLzQ","HVs4Pad5gDE","dXDSEGhp2D8","2Lx83EUTELc","D_jnuHgDYGA","-vdfo3DpWR4","bom02uvxJQA"],
  4: ["hZE68FgA5RA","phwFlxjLJKc","uGZFRDRXy_8","k3Cu_6aYDc4","yz_TaBUcQCE","13vi0uUkLRk","Njd-22k7Rr4","iCcAW2GNooM","nCt3e6vieLA","lLoepW6eUwg","gfTMQ4jdkMg","by1ZRo0EX8w","bi-SZQE-ihU","hUfGF6TadP4","tG-SQQpNKq4","_mmJUphK1PY","1sz2bHQL5uE","14NO7xbmhcc","beNxRYO4CM4","CjcB414q3k4","HpV8Gnhqp38","noffAbbU4hM","It41BU3V9Xg","jjAVuMrhZIM","QSAJK7vCBLU","bd0V0pJNviY","0-ZrJKdqsn0","oLfS8ySZ5vs","AqN8axV_TCQ","Ctd3GeYxs78"],
  5: ["6Fe-guIyeMc","Rwl6LLB_Jm8","_weR4x18bFM","BY0-6anBi-s","Ql1U0YZzTaE","WrVOb3NMuWE","0i3FyDT05wM","x7PLp5tMcWE","ZLZeCb6hlSw","0CTSbeX8r0c","C6CDi2goAV0","vXjrTpEr0FM","uck4ZVT7-so","7HAN8jxVVIQ","3XixJlVos5M","cF8EIqxFUNc","trD6L9h6TXs","KT9yX5ijx18","cYA92l8HtMQ","gWsJyHV0_uM","kGCOjCWDDvE","e7pY31646r0","jmtGUNdMvjU","7z4i8NFseJ8","p6XlWpmtdX8","Em50Trzwi1s","tLqhjk1IwQY","ACjmI6gS-Uk","FaTT-wpCNf0","vJI2k9xrhZI","eDfMgGUoQLs"],
  6: ["AxCWSWedkGc","m-LkWVuy4iI","UpnlCY-obFc","QmgSJbf2ATo","Cvskteb5Puw","lGOey8n2hHU","do9oszY7f1g","oP6i5ZIZkxo","ZP7ZuHu1anA","3ToABQbibzI","Nuqghxry8B8","3XweQw-CZYU","ovVBvh6Xy0U","ZSRDz-dDAug","niVh-e3DeHo","aTsFdOrrYNg","p2oriT1Suk0","-68U4WdLKPI","_JFHS24j15Y","2J617VlwLG4","4necmPHnSZw","LoAjJlwwaHw","NoV8TQAn3ks","HsLGJhFfl-M","SwqJrwZg4fw","2-REmPdBu6o","Vaw_PH2ZRlY","OjDEmKIUo_E","sEt1c706jSc","YPviIOxuYCA"],
  7: ["qj0VmySvzdc","uuAQVcrsanw","WfnGkpxCLaQ","midofmcvFV8","2wjan9ApsXE","CivROt-dLVM","o1-C50X0MXk","pvz2V-v2srk","a8yCtqoB0Os","Y3fCsM5TUN0","C-Nx90TnIIQ","lu5XJtfFots","COmvZcMBZKM","JRqUk35z42Y","A_oyDXETuTM","qbzeK2HzwTE","r5YNNxvOgDg","wL1o3TfFpz8","qqYy8ZAZVvk","NLzvscMzUFk","PHngvZLApQc","kDfgRKX5XGk","ga3Eb7TtaMc","rDTrHhgYQ6w","zrm7mLg6OFI","XeDeBS42LDs","yMs2QPAUMT4","JAszmA8vR5s","YERCyMZkYJE","DzeixRUGaNE","GZir1Z1ceqs"],
  8: ["e92TP2TwKoY","N6HM8nwsYN4","pF6CcvglVgU","_tgMr0GWs3M","V3TyJl1rjb0","5OBbDInyRsc","D9Q0ANitYHQ","3qbjM6om9zg","X00bLIhK6hA","guDbm8ALx-w","D1UbANrBfTY","204-2H37MtY","8yu-Lgd183c","J_ZjD25Lvc8","kpvE5srVOn4","ifCHnD-yHcM","7mHmoZZTk9k","6v-reQ8s3rE","meERmz8G9x8","c5UlT5DwoQk","c-z1V1hNpds","U5cF1HAXsmo","uTnhsBvVjfs","9LrPlkRTeNw","J0OiaXI6yMU","mqN0qg-dw6o","vdJnPG3_oj0","j_7PUysI2zQ","sqd9UVD1Bhc","-uLcXVVRiho","DfgC0b1ldt4"],
  9: ["J0gyG0ie8-k","h65sPsQO2No","_FHWojjEH0M","4zkPlBEmZuE","8gjyywNGV4g","gBgjHqvYjiA","ZJanuvN5t2Q","K6SHs14lWEo","H4_eVuYHd8Y","-Uw1uQ1kz-c","mCpreXG9ftw","hYLxkukXyZ8","wNyrvZlVe38","f_NhZ9rlAWw","vVAlnn7f2Fs","ychHnKJ8P3g","XkTUNpsyNW4","EHdn8EMO-c0","T7gJWKkavio","ZX-zV_brQDs","S4WKh3q-AoY","PHWGi3zSQZg","An1t4_F6TiE","YDE4GmHJj-0","uPigSe1i3zo","su1QRQokBCo","rk1BWtdYIRI","oMrxqujE9zE","U16_GKGXGfo","fGAgWsaePU0"],
  10: ["DgDE-IF6XW0","ajjEgU1vLJA","CyRl1Nh2lPQ","5A71WUyJHYQ","U_v9JtjgwyE","EI1D5xXfNZY","9VfaVmrrbSM","aXN7URSXrTk","UVvY4opamuU","OAO9115Ejs4","sVR3l5Nc6W4","BxdU4CXwsYc","Y_qvB7BT760","8EREyF_pums","JbVGrcnkPLs","6_Ncna3KWWY","GCG1uwUjLh4","KqajumNEavo","rIOwF3sv3FY","UwbNqfH9zV0","I2sPbWy-X-o","kPqrIeHr664","60tVkH0xkNA","KwdyNUXRte8","h7By7FXGKKc","8VWBRjJ2WSk","IKmXMBaMJgY","ecllZH8ZxM4","5Jit6RzFSAk","kJ-QNwPUMuE","Zp4xsMHHqAE"],
  11: ["UaYUDSTA060","qlsyR4JZCuY","y_toldh1vl4","yXwOFQkXv0g","79YTuH0trds","jU1VGyL2kcY","y6n_tanXNYI","cIvW3ZGFt84","mCW2vgzPLBo","MfmoDbjcLbY","J0I4KiVZ7Dw","2eRW4L-3K94","Gj9f8i-UQIY","7FKDbSvDbF8","5OxkdihJAkw","slaLGniGr_0","8eplTsdIlJI","qaOnItlBrhc","iRxGt834FVk","D2CXWxNxTOg","VlTGa6Bs4pk","8xfXrbcKs60","4xo_bxMKg0o","BFHWzmuN4ko","cyUkX9QMQlM","cWt7LMx8L2I","pQwGygsnhmM","-LPJL253fuY","NUyNBqQFmYo","Wz7N57OSCCw"],
  12: ["72rgmZSlIXY","LWDT7WLrD2o","p7rBI1JRxuQ","h4A2ETOmhsM","rflqM7FEQ9U","mwzx3H8vyxI","KreztvFSBlg","bD1d1uLCgN0","O8TJnmB2O_4","ZOS8DyTip_8","wzoyrgb5zj8","qQDyd1S8Bx4","yoP3fFSrVM4","O2oypM7Xff8","t6orlBRBMH0","eVrxXS2Vdw0","ar9o8Jm26U8","eN24uZtZYd0","QnsVPEBXFNw","GXx5W5V-GIM","3qxpoKm1nRU","xWikjW3R5Xo","XEZxHiPh36Y","4pjubvMCbGg","2C4GeEbHz-8","8dPzP770NCw","pgoHbN-OTBo","B4jSYKdL0IY","FocBut5jhV4","xlyWsluH-hY","Ags_thaxGBo"]
};

const schedule = JSON.parse(fs.readFileSync(schedulePath, "utf8"));
const bibleBookPattern =
  /^(창|출|레|민|신|수|삿|룻|삼상|삼하|왕상|왕하|대상|대하|스|느|에|욥|시|잠|전|아|사|렘|애|겔|단|호|욜|암|오|옵|욘|미|나|합|습|학|슥|말|마|막|눅|요|행|롬|고전|고후|갈|엡|빌|골|살전|살후|딤전|딤후|딛|몬|히|약|벧전|벧후|요일|요이|요삼|유|계)\s*/;
let currentOldTestamentBook = "";
for (const item of schedule) {
  const match = item.oldTestament?.match(bibleBookPattern);
  if (match) {
    currentOldTestamentBook = match[1];
  } else if (currentOldTestamentBook && item.oldTestament) {
    item.oldTestament = `${currentOldTestamentBook} ${item.oldTestament}`;
  }
}
const summaries = new Map();
for (let month = 1; month <= 12; month += 1) {
  const file = path.join(publicationDir, `korean-publication-${String(month).padStart(2, "0")}.json`);
  for (const item of JSON.parse(fs.readFileSync(file, "utf8"))) {
    summaries.set(`${item.month}-${item.day}`, item);
  }
}

const februaryVideoIds = {
  leapYearFebruary28: videoIds[2][27],
  leapYearFebruary29: videoIds[2][28],
  commonYearFebruary28: videoIds[2][29]
};

const records = schedule.map((item) => {
  const summary = summaries.get(`${item.month}-${item.day}`);
  if (!summary) throw new Error(`Missing summary for ${item.month}-${item.day}`);
  let videoId = videoIds[item.month]?.[item.day - 1] ?? null;
  if (item.month === 2 && item.day === 28) videoId = februaryVideoIds.commonYearFebruary28;
  const isCommonYearFebruaryEnd = item.month === 2 && item.day === 28;
  return {
    ...item,
    oldTestament: isCommonYearFebruaryEnd ? "레 9~10" : item.oldTestament,
    newTestament: isCommonYearFebruaryEnd ? "눅 14~15" : item.newTestament,
    dateKey: `${String(item.month).padStart(2, "0")}-${String(item.day).padStart(2, "0")}`,
    firstSummary: summary.first,
    secondSummary: summary.second,
    videoId,
    playlistId: playlistIds[item.month] ?? null
  };
});

records.push({
  dayOfYear: 60,
  month: 2,
  day: 29,
  dateKey: "02-29",
  oldTestament: "레 10",
  newTestament: "눅 15",
  firstSummary: "아론의 아들 나답과 아비후가 명령하지 않은 불을 드렸다가 심판받고, 하나님은 제사장이 거룩한 것과 속된 것을 분별하며 맡은 직분을 경외함으로 감당해야 함을 가르치십니다.",
  secondSummary: "예수님은 잃은 양과 잃은 드라크마와 두 아들의 비유를 통해 죄인 한 사람이 회개할 때의 하늘 기쁨을 보여 주시며, 스스로 의롭다고 여기는 마음도 아버지의 은혜 밖에 설 수 있음을 드러내십니다.",
  videoId: februaryVideoIds.leapYearFebruary29,
  playlistId: playlistIds[2]
});

records.sort((a, b) => a.month - b.month || a.day - b.day);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`);
console.log(`Wrote ${records.length} records to ${outputPath}`);
