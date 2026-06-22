# PBL: Sensor de Toque + LEDs Sequenciais

Pacote HTML pronto para uma aula PBL de sistemas embarcados. O projeto usa um sensor de toque para acender 5 LEDs em sequência enquanto o toque continua pressionado.

Todo o material foi escrito em português do Brasil e pode ser publicado diretamente no GitHub Pages.

## Arquivos

- `index.html`: página inicial com links para todos os materiais.
- `aula-slides.html`: apresentação HTML para usar em sala.
- `roteiro-pratico.html`: guia passo a passo para os estudantes.
- `dever-a4.html`: atividade imprimível em formato A4, com gabarito separado.
- `css/styles.css`: estilos compartilhados e regras de impressão.
- `js/main.js`: controles dos slides e botão de impressão.

## Como abrir localmente

1. Baixe ou clone esta pasta.
2. Abra o arquivo `index.html` no navegador.
3. Use os links da página inicial para acessar os slides, o roteiro prático e o dever.

Não é necessário instalar servidor, framework ou dependência externa.

## Como usar os slides

1. Abra `aula-slides.html`.
2. Use as setas na tela ou o teclado:
   - seta para a direita: próximo slide;
   - seta para a esquerda: slide anterior;
   - espaço: próximo slide;
   - Home: primeiro slide;
   - End: último slide.

## Como imprimir o dever

1. Abra `dever-a4.html`.
2. Clique em “Imprimir ou salvar em PDF”.
3. Se quiser entregar sem respostas, remova visualmente ou edite a seção “Gabarito para o professor” antes de imprimir.

## Assumimos nesta versão

- Placa principal: Arduino UNO.
- Linguagem: Arduino C/C++.
- Sensor de toque: módulo capacitivo digital com pinos VCC, GND e OUT ou SIG.
- Sensor no pino digital 2.
- LEDs nos pinos digitais 4, 5, 6, 7 e 8.
- Um resistor por LED, de 220 ohms a 330 ohms.
- No Arduino UNO, o sensor pode ser alimentado em 5V se o módulo permitir.
- No ESP32, use 3V3 e nunca aplique 5V nos pinos de entrada.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste pacote para a raiz do repositório.
3. No GitHub, abra `Settings`.
4. Entre em `Pages`.
5. Em `Build and deployment`, escolha:
   - `Source`: `Deploy from a branch`;
   - `Branch`: `main`;
   - pasta: `/root`.
6. Salve.
7. Aguarde alguns minutos. O GitHub mostrará o link público da página.

Depois da publicação, a página inicial será carregada a partir de `index.html`.

## Duração sugerida da aula

Tempo total: 1h30 a 2h.

| Tempo | Etapa |
|---|---|
| 10 min | Situação-problema e exemplos de sistemas embarcados |
| 20 min | Revisão de programação e eletrônica |
| 30 a 45 min | Montagem do circuito e envio do código |
| 20 min | Testes, erros comuns e depuração |
| 10 a 20 min | Reflexão, dever e desafios de extensão |

## Próximas melhorias possíveis

- Criar uma versão alternativa para ESP32 com pinos já definidos.
- Adicionar um exemplo com Monitor Serial.
- Criar um diagrama físico mais detalhado da protoboard em SVG.
- Adicionar um desafio com buzzer.
- Criar uma rubrica de avaliação da prática.
