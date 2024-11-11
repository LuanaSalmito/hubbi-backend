export class CriarCompraDto {
    precoTotal: number;
    produtos: {
      produtoId: number;
      quantidade: number;
    }[];
  }
  