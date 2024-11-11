import { Compra, Produto } from '@prisma/client'; 
export class CompraProduto {
  id: number;
  compraId: number;
  produtoId: number;
  quantidade: number;
  compra: Compra;   
  produto: Produto; 
  constructor(partial: Partial<CompraProduto>) {
    Object.assign(this, partial);
  }
}
