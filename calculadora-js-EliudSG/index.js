function calcular(operacion) {
  const num1 = document.getElementById('numero1').value;
  const num2 = document.getElementById('numero2').value;
  const resultadoDiv = document.getElementById('resultado');

  if (num1 === '' || num2 === '') {
    resultadoDiv.textContent = 'Error: Ambos campos deben contener números';
    resultadoDiv.className = 'resultado error';
    return;
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = a + b;
      break;
    case 'restar':
      resultado = a - b;
      break;
    case 'multiplicar':
      resultado = a * b;
      break;
    case 'dividir':
      if (b === 0) {
        resultadoDiv.textContent = 'No se puede dividir entre cero';
        resultadoDiv.className = 'ERROR';
        return;
      }
      resultado = a / b;
      break;
    default:
      return;
  }

  resultadoDiv.textContent = `Resultado: ${resultado}`;
  resultadoDiv.className = 'resultado exito';
}
