const pentagonal = (n) => {
  if(n < 0)
    return;
  
  if(n === 1)
    return 1;

  return (5*n - 5) + pentagonal(n - 1);
}

pentagonal(3);