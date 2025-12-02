import * as fs from "fs";
import path from "path";

function isMadeOfRepeatedSubstring(s: string): boolean {
  const len = s.length;

  for (let l = 1; l <= Math.floor(len / 2); ++l) {
    if (len % l !== 0) {
      continue;
    }

    const pattern = s.slice(0, l);
    let repeated = "";
    for (let t = 0; t < len / l; ++t) {
      repeated += pattern;
    }

    if (repeated === s) {
      return true;
    }
  }

  return false;
}

const main = () => {
  const filePath = path.join(process.cwd(), "day-2/input.txt");
  const data = fs.readFileSync(filePath, "utf8");
  const ranges = data.split("\n")[0].split(",");

  let ans = BigInt(0);

  for (let i = 0; i < ranges.length; ++i) {
    const [startRaw, endRaw] = ranges[i].split("-");
    const start = Number(startRaw);
    const end = Number(endRaw);

    for (let j = start; j <= end; ++j) {
      const v = j.toString();

      if (isMadeOfRepeatedSubstring(v)) {
        ans += BigInt(v);
      }
    }
  }

  console.log(ans.toString());
};

main();
