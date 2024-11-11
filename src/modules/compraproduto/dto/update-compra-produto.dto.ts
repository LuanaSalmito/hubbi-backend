import { IsInt, IsPositive, IsOptional } from 'class-validator';

export class UpdateCompraProdutoDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  compraId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  produtoId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  quantidade?: number;
}
