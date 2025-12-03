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

    const digits = line.split("");
    const k = 12;
    const toRemove = digits.length - k;

    const stack: string[] = [];
    let removed = 0;

    for (let j = 0; j < digits.length; j++) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] < digits[j] &&
        removed < toRemove
      ) {
        stack.pop();
        removed++;
      }
      stack.push(digits[j]);
    }

    while (stack.length > k) {
      stack.pop();
    }

    const rowMax = BigInt(stack.join(""));
    ans += rowMax;
  }

  console.log(ans.toString());
};

main();
