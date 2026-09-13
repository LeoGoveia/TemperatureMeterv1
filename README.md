Conversor de Temperatura

Projeto de estudo feito para praticar manipulação de DOM, eventos e lógica de conversão em JavaScript puro (sem frameworks).

O que faz

Converte um valor de temperatura entre Celsius, Fahrenheit e Kelvin. O usuário escolhe a unidade de origem, digita o valor, escolhe a unidade de destino e clica em "Converter temperatura" (ou aperta Enter no campo de valor).

```
├── 📁 css
│   └── 🎨 style.css
├── 📁 js
│   └── 📄 main.js
├── 📝 README.md
└── 🌐 index.html
```

Validações implementadas

Campo vazio → avisa para digitar um valor.
Valor não numérico → avisa que o valor é inválido.
Kelvin negativo → bloqueado, já que o zero absoluto é 0K (não existe Kelvin negativo na física).

Decisões técnicas

A conversão usa Celsius como unidade intermediária: primeiro converte a origem para Celsius, depois de Celsius para o destino. 

Isso evita ter que escrever uma fórmula para cada combinação possível entre as 3 unidades (o que resultaria em 6 fórmulas em vez de 6, mas repetidas de forma acoplada).

As conversões ficam em objetos (paraCelsius, deCelsius) em vez de blocos if/else, para facilitar adicionar novas unidades no futuro (bastaria adicionar uma chave nova em cada objeto).

Métrica de zero absoluto: Impossibilita a inserção de uma temperatura menor que o zero absoluto registrado pela física. 

[Acesso ao projeto(https://temperaturemeterv1.netlify.app/)]
