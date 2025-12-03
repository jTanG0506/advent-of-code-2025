import * as fs from "fs";
import path from "path";

const main = () => {
  const filePath = path.join(process.cwd(), "day-3/input.txt");
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");

  let ans = BigInt(0);

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i];
    if (!line) {
      continue;
    }

    const nums = line.split("").map(Number);

    const suffixMax = new Array(nums.length);
    suffixMax[nums.length - 1] = nums[nums.length - 1];
    for (let j = nums.length - 2; j >= 0; j--) {
      suffixMax[j] = Math.max(nums[j], suffixMax[j + 1]);
    }

    let rowMax = 0;
    for (let j = 0; j < nums.length - 1; j++) {
      const res = nums[j] * 10 + suffixMax[j + 1];
      rowMax = Math.max(rowMax, res);
    }

    ans += BigInt(rowMax);
  }

  console.log(ans.toString());
};

main();
