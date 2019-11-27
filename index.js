#!/usr/bin/env node

process.stdin.on("data", function(data) {
  console.log("input:\r\n" + data.toString());
  process.stdout.write(
    "output:\r\n" +
      JSON.stringify(
        data
          .toString()
          .split(" ")
          .filter(a => a && a !== "\n")
          .filter((a, i) => a !== "→")
          .reduce(
            (acc, val, i, arr) =>
              i % 3 === 2 ? [...acc, [arr[i - 2], arr[i - 1], val]] : acc,
            []
          )
      )
  );
});
