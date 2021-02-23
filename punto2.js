//Como preconcicion n debe ser mayor o igual a 0
const fibonacci = (n) => n > 1? fibonacci(n-1) + fibonacci(n-2): n;