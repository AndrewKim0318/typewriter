const sentence = "hello there from lighthouse labs";

let time = 0;
let interval = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}\n`);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += interval;
}
