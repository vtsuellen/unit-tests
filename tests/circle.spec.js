/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it("Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados", () => {
    expect(circle(1)).toEqual({ radius: 1, area: 3.14, circumference: 6.28 });
  });
  // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
  it("Verifica se ao receber um parametro que não seja um numero retorna undefined", () => {
    expect(circle("b")).toBeUndefined();
  });
  // Teste se circle retorna um objeto.
  it("Verifica se circle retorna um Objeto", () => {
    expect(circle(1)).toBeInstanceOf(Object);
  });
  // Teste se o objeto retornado possui 3 propriedades.
  it("Verifica se o ojeto retornado possui 3 propriedades", () => {
  // Keys - chaves 
  // faz um array com todas as chaves que eu passei
   expect(Object.keys(circle(1))).toHaveLength(3);
  });
  // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
  it('Verifica se ao não receber nenhum parametro, a função retorna undefined', () => {
    expect(circle()).toBeUndefined();
  })
  // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
  it("Verifica se dentro do objeto retornado, tem uma key com valor igual circunferencia", () => {
    const circumference = 2 * 3.14 * 2;
    expect(circle(2).circumference).toBe(circumference);
  })
  // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
  it("Verifica se dentro do objeto retornado, tem uma key com valor igual area", () => {
    const area = 3.14 * 3 * 3;
    expect(circle(3).area).toBe(area);
  })
  // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
  it("Verifica se a função retorna em um objeto os dados corretos de um circulo de raio 3", () => {
    expect(circle(3).radius).toBeCloseTo(3)
     expect(circle(3).area).toBeCloseTo(28.26);
      expect(circle(3).circumference).toBeCloseTo(18.84);
  })
});
