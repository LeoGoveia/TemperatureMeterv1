const unidadeOrigem = document.querySelector("#unidade-origem");
const valorTemperatura = document.querySelector("#valor-temperatura");
const unidadeDestino = document.querySelector("#unidade-destino");
const botaoConverter = document.querySelector("#botaoConverter");
const resultado = document.querySelector("#resultado");

// Zero absoluto expresso em cada escala (0K = -273.15°C = -459.67°F)
const zeroAbsolutoPorUnidade = {
  Celsius: -273.15,
  Fahrenheit: -459.67,
  Kelvin: 0,
};

const mensagemZeroAbsoluto =
  "Nao foi possivel converter,temperatura abaixo do zero absoluto.";

// Converte qualquer unidade de origem para Celsius
const paraCelsius = {
  Celsius: (valor) => valor,
  Fahrenheit: (valor) => ((valor - 32) * 5) / 9,
  Kelvin: (valor) => valor - 273.15,
};

// Converte de Celsius para a unidade de destino
const deCelsius = {
  Celsius: (celsius) => celsius,
  Fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
  Kelvin: (celsius) => celsius + 273.15,
};

const simbolos = {
  Celsius: "C",
  Fahrenheit: "F",
  Kelvin: "K",
};

function converterTemperatura() {
  const textoDigitado = valorTemperatura.value.trim();
  const valor = Number(textoDigitado);
  const origem = unidadeOrigem.value;
  const destino = unidadeDestino.value;

  if (textoDigitado === "") {
    resultado.textContent = "Digite uma temperatura.";
    return;
  }

  if (isNaN(valor)) {
    resultado.textContent = "Digite um valor válido.";
    return;
  }

  if (origem === destino) {
    resultado.textContent = "Escolha unidades diferentes para converter.";
    return;
  }

  // Valida o valor digitado, na própria escala escolhida pelo usuário
  if (valor < zeroAbsolutoPorUnidade[origem]) {
    resultado.textContent = mensagemZeroAbsoluto;
    return;
  }

  const temperaturaEmCelsius = paraCelsius[origem](valor);
  const temperaturaConvertida = deCelsius[destino](temperaturaEmCelsius);

  // Rede de segurança: se isso disparar, o bug está na fórmula de conversão,
  // não no valor digitado pelo usuário (a checagem acima já devia ter barrado).
  if (temperaturaConvertida < zeroAbsolutoPorUnidade[destino]) {
    resultado.textContent = mensagemZeroAbsoluto;
    return;
  }

  resultado.textContent = `${temperaturaConvertida.toFixed(2)} °${simbolos[destino]}`;
}

botaoConverter.addEventListener("click", converterTemperatura);

valorTemperatura.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    converterTemperatura();
  }
});
