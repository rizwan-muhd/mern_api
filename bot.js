const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_NAME = "./data.json";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();

  const commits = Array.from({ length: n }, () => {
    const x = getRandomInt(0, 54);
    const y = getRandomInt(0, 6);
    const DATE = moment()
      .subtract(1, "y")
      .add(1, "d")
      .add(x, "w")
      .add(y, "d")
      .format();
    return DATE;
  });

  commits.forEach((DATE, index) => {
    const data = {
      data: DATE,
    };
    console.log(`Commit ${index + 1}: ${DATE}`);
    simpleGit().add([FILE_NAME]).commit(DATE, { "--date": DATE });
  });
};

makeCommit(100);
