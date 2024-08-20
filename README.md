# Senac

> [!NOTE]
> Este repositório armazena os conteúdos do curso de programação de aplicativos do Senac com finalidade acadêmica e todos os direitos são reservados. :copyright: <!-- Diego -->

> Status do Projeto: Em desenvolvimento :warning:


## Desenvolvimento de aplicações para auto atendimento comercial

<details>
  <summary> Tasks </summary>

| Projeto | Entrega | DeadLine | Imagem | Acesso ao projeto |
| ---- | ---- | ---- | ---- | ---- |
| Exercicíos de lógica e algoritmo | [Conversão de Metros para Pés](https://github.com/diegoppz/senacJS/blob/main/exercicios/calculadoras/metros.js) | 04/07/2024 | ![Image4](https://github.com/diegowps/senacJS/blob/main/wasChronoType/image/printLog/codeMetrosJsCalc.png) | [repositório calculadoras metros/pés](https://github.com/diegoppz/senacJS/blob/main/exercicios/calculadoras/metros.js) |
| Init scratch (algorítmo com blocos) | []()
| ---- | ---- | ---- | ---- | ---- |

</details>


<details>
  <summary> Atividades extra curriculares </summary>

  _____________________________________________

  [Clique aqui](https://github.com/diegowps/senacJS/tree/main/wasArchivementCertifications) para visualizar todos os registros ou acesse através do índice abaixo:

01. Calculadoras

  - Conversor Metros(M) em Pés(ft)

  <details>
  <summary> Documentação do código Conversor m/ft </summary>

  ______________________________________

Para executar os blocos de código a seguir, é necessário importar as bibliotecas javascript [colors](https://www.npmjs.com/package/colors) e [readline-sync](https://www.npmjs.com/package/readline-sync).

Após clonar o repositório [metros.js](https://github.com/diegowps/senacJS/blob/main/exercicios/calculadoras/metros.js), Execute via terminal as instalações com os comandos a seguir:

- [x] readline-sync
- `npm i readline-sync`

- [x] colors
- `npm i colors`

Execute a aplicação com o comando terminal

```javascript
node metros.js
```

Informe a quantidade de Metros(M) que deseja converter em Pés(ft), a resposta deve ser o valor convertido para a unidade de medidas Pés(ft).

Qual a lógica por trás do código?

***1 metro*** equivale a ***3,28084 pés***

1 pé = 0,3048 Metros
1 metro	=	3,2808 pés

Logo, para obter o valor esperado, o a unidade (M) deve ser dividida pelo valor correspondente em pés (ft) por metro **0.3048 ft** (Ex. 1m / 0.3048 = 3,281 ou 5m / 0.3048 = 16.40)

Tabela para teste de valores convertidos

| Metros | > | Pés |
| ---- | ---- | ---- |
| 0 m | = | 0 |
| 0,001 m | = | 0,003281 |
| 0,002 m | = | 0,006562 |
| 0,009 m | = | 0,02953 |
| 0,01 m | = | 0,03281 |
| 0,09 m | = | 0,2953 |
| 0,1 m | = | 0,3281 |
| 1/5 m | = | 0,6562 |
| 1/2 m | = | 1,64 |
| 0,9 m | = | 2,953 |
| 1 m | = | 3,281 |
| 9 m	| =	| 29,53 |


>> Existem 3,28084 pés em 1 metro. Para transformar qualquer valor de metros para pés, basta multiplicar o valor em metros pelo fator multiplicador, conhecido também como fator de conversão que, neste caso, é igual a 3,28084.
Assim, 1 metro vezes 3,28084 corresponde a 3,28084 pés.

Definidas as constantes e variáveis

```javascript
const input = require(`readline-sync`)
const divisor = 0.3048
console.clear()

let metros, valor
```
Dividido o valor em metros pela constante

````javascript
console.log(`Conversor de Metros(M) em Pés(ft)`)
console.log()

metros = Number(input.question(`Quantos metros deseja converter: `))

valor = metros / divisor

console.log(valor.toFixed(2))
````

![view code](https://github.com/diegoppz/senacJS/blob/main/exercicios/calculadoras/metros.js)

<!-- This content will not appear in the rendered Markdown -->
<details>


</details>

<details>
  <summary> Cronograma </summary>

  | Sprint | Data | UC | Atv | status | Obs |
  | --- | --- | ----- | -------- | -- | ---- |
  | Sprint 1 | 17 a 28/06/24 | UC | Atv | status | Obs |
  | Sprint 2 | 01 a 05/07/24 | UC | Atv3 | status | Obs |
  | Sprint 3 | 08 a 26/07/24 | UC | Atv4 | status | Obs |
  | Sprint 4 | 29 a 09/08/24 | UC | Atv5 | status | Obs |
  |   | 24-07-18 - THU - Thursday | UC | [Reverse String](https://coddy.tech/courses/30_days_of_logic_building_in_javascript/1_reverse_a_string) | :white_check_mark: Done | Task01 Coddy.tech / Doc [Freecodecamp](https://coddy.tech/courses/30_days_of_logic_building_in_javascript/1_reverse_a_string) |
  |   | 24-07-25 - THU - Thursday | UC | Atv | status | Obs |
  |   | 24-07-26 - FRI - Friday | UC | Atv | status | Obs |
  |   | 24-07-29 - MON - Monday | UC | Atv | status | Obs |
  |   | 24-07-30 - TUE - tuesday | UC | Atv | status | Obs |
  | Sprint 25 | 12 a 25/05/2025 | UC | Atv | status | Obs |
  | Sprint 26 | 26 a 06/06/2025 | UC | Atv | :alarm_clock: counting | Final sprint |
  |   | 25-06-06 - FRI - Friday | UC | Encerramento | :white_check_mark: Conclude | Prazo final |


  </details>

<details>
  <summary> Conteúdo </summary>

  </details>

<h4 align="center">    
 :construction:  Work in progress  :construction:
</h4>


<details>
  <summary> Conteúdo teste </summary>


## TEI-033 Assistente de desenvolvimento de aplicativo

### UC09 - Desenvolvimento de Algoritmo com javaScript - José de Assis

#### Exercícios

##### Algoritmos
[Code.org]()

##### Calculadoras
[Calculadoras aula]()
[Calculadoras extra](calculator.net)
###### metrosEmPes
###### Aquario
###### 
### UC14 - Manipular e otimizar imagens vetoriais, bitmaps, gráficos - Sirlene Sanches

  </details>

  Projetos para se inspirar scratch
-  https://www.scratchfoundation.org/events-calendar
-  https://www.scratchfoundation.org/scratch-conference
-  https://scratchday.portoseguro.org.br/
-  https://scratch.mit.edu/projects/1042497735/editor/
-  https://scratch.mit.edu/projects/946418677/editor/
-  https://scratch.mit.edu/projects/1029862013/
-  https://scratch.mit.edu/projects/1045773817/editor/
-  https://projects.raspberrypi.org/en/pathways/scratch-intro
-  https://csfirst.withgoogle.com/s/en/home
-  https://scratch.mit.edu/educators



<iframe src="https://scratch.mit.edu/projects/1042497735/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

Tecnologias utilizadas
_________________________________

Copyright (C) 2024 by @diegowps