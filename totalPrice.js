function totalPrice(param) {
  let output = 0;

  param.forEach((item) => {
    output += item.price;
  });

  console.log(output);
}

totalPrice(orders);