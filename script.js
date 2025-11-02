function verificarPrimo() {
  const numero = parseInt(document.getElementById('numero').value);
  const saida = document.getElementById('resultado');

  if (isNaN(numero) || numero < 0) {
    saida.textContent = 'Por favor, digite um número inteiro não negativo.';
    return;
  }

  if (numero <= 1) {
    saida.textContent = 'N - Não é primo.';
    return;
  }

  if (numero === 2) {
    saida.textContent = 'S - É primo.';
    return;
  }

  if (numero % 2 === 0) {
    saida.textContent = 'N - Não é primo.';
    return;
  }

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      saida.textContent = 'N - Não é primo.';
      return;
    }
  }

  saida.textContent = 'S - É primo.';
}
