const productDetails = require("../src/productDetails");
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
  });
  // Teste se o retorno da função é um array.
  it("Verifica se o retorno da função é um array", () => {
    expect(Array.isArray(productDetails("Alcool gel", "Máscara"))).toBeTruthy();
  });
  // Teste se o array retornado pela função contém dois itens dentro.
  it("Verifica se o retorno do array tem dois item", () => {
    expect(productDetails()).toHaveLength(2);
  });
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it("Verifica se os dois itens do array são objetos", () => {
    expect(typeof productDetails()[0]).toBe("object");
    expect(typeof productDetails()[1]).toBe("object");
  });
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it("Verifica se ao receber parametros diferentes os objetos também são diferentes", () => {
    const firstItem = productDetails("jabuticaba", "mamao")[0];
    const secondItem = productDetails("jabuticaba", "mamao")[1];
    expect(firstItem).not.toEqual(secondItem);
  });
  // Teste se os dois productIds terminam com 123.
  it("Verifica se os dois productIds terminam em 123", () => {
    const firstItem = productDetails("jabuticaba", "mamao")[0];
    const secondItem = productDetails("jabuticaba", "mamao")[1];
    const primeiroItem = firstItem.details.productId;
    const segundoItem = secondItem.details.productId;
    expect(primeiroItem.slice(primeiroItem.length - 3)).toBe("123");
    expect(segundoItem.slice(segundoItem.length - 3)).toBe("123");
  });
});
