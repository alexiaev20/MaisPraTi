function gerarFibonacci() {
    const quantidade = 10;
    let fib = [0, 1];

    for (let i = 2; i < quantidade; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log("Primeiros 10 números da sequência de Fibonacci:");
    console.log(fib.join(', '));
}

gerarFibonacci();
