function factorial(n) {
  let m = 1;

  if(n === 0) {
    return 1;
  }
  for (let i = 2; i <= n; i++)
    m = m * i;
    return m;

}
