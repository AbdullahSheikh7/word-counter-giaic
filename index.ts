#!/usr/bin/env node

import inquirer from "inquirer";

const main = async () => {
  let paragraph = (
    await inquirer.prompt([
      {
        name: "paragraph",
        type: "text",
        message: "Enter a paragraph:\n",
      },
    ])
  ).paragraph;

  let totalCharacters = paragraph.length;
  let totalWords = paragraph.split(" ").length;

  console.log(`Total characters: ${totalCharacters}`);
  console.log(`${totalWords}`);
};

do {
  await main();
} while (true);
