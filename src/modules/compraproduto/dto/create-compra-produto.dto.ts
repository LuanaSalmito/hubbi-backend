import { IsInt, IsPositive } from 'class-validator';

export class CreateCompraProdutoDto {
  @IsInt()
  @IsPositive()
  compraId: number;

  @IsInt()
  @IsPositive()
  produtoId: number;

  @IsInt()
  @IsPositive()
  quantidade: number;
}
