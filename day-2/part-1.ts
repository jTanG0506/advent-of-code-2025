import * as fs from "fs";
import path from "path";

const main = () => {
  const filePath = path.join(process.cwd(), "day-2/input.txt");
  const data = fs.readFileSync(filePath, "utf8");
  const ranges = data.split("\n")[0].split(",");

  let ans = BigInt(0);

  for (let i = 0; i < ranges.length; ++i) {
    const start = Number(ranges[i].split("-")[0]);
    const end = Number(ranges[i].split("-")[1]);

    for (let j = start; j <= end; ++j) {
      const v = j.toString();
      if (v.length % 2 === 1) {
        continue;
      }

      const mid = v.length / 2;
      const left = v.slice(0, mid);
      const right = v.slice(mid);

      if (left === right) {
        ans += BigInt(j);
      }
    }
  }

  console.log(ans.toString());
};

main();
