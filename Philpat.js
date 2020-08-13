function fibsequence(n) {
   if (n <=2) return n;
    return fibsequence(n -1) + fibsequence(n -2);
  }

  console.log(fibsequence(10))
