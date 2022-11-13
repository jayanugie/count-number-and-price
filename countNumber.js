function count(num) {
  const arr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });

  let objNum = {};
  arr.forEach((item) => {
    if (/[0-9]/.test(item)) {
      objNum[item] = (objNum[item] || "") + item;
    }
  });

  let output = 0;
  for (let count in objNum) {
    if (objNum.hasOwnProperty(count)) {
      output++;
    }
  }

  console.log(output);
}

count(776265327);
