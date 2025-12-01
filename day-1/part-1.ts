import * as fs from "fs";
import path from "path";

const main = () => {
  const filePath = path.join(process.cwd(), "day-1/input.txt");
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");
  const DIAL_SIZE = 100;

  let position = 50;
  let ans = 0;

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i];
    const dir = line[0];
    const dist = Number(line.slice(1));

    if (dir === "L") {
      position -= dist;
    } else {
      position += dist;
    }

    if (position < 0) {
      position = (DIAL_SIZE + position) % DIAL_SIZE;
    } else if (position >= DIAL_SIZE) {
      position = position % DIAL_SIZE;
    }

    if (position === 0) {
      ans++;
    }
  }

  console.log(ans);
};

main();
