export class AtualizarCompraDto {
    precoTotal?: number; // Pode ser opcional, caso não precise alterar
    produtos?: {
      produtoId: number;
      quantidade: number;
    }[]; 
  }
  