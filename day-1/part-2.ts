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

    let newPosition: number;
    if (dir === "L") {
      newPosition = position - dist;
    } else {
      newPosition = position + dist;
    }

    if (dir === "L") {
      const highBoundary = Math.ceil(position / DIAL_SIZE);
      const lowBoundary = Math.ceil(newPosition / DIAL_SIZE);
      ans += highBoundary - lowBoundary;
    } else {
      const lowBoundary = Math.floor(position / DIAL_SIZE);
      const highBoundary = Math.floor(newPosition / DIAL_SIZE);
      ans += highBoundary - lowBoundary;
    }

    position = newPosition % DIAL_SIZE;
    if (position < 0) {
      position += DIAL_SIZE;
    }
  }

  console.log(ans);
};

main();
