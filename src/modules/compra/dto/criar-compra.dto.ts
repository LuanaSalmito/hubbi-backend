import { IsArray, IsNumber, IsNotEmpty } from 'class-validator';

export class CriarCompraDto {
  @IsNumber()
  @IsNotEmpty()
  precoTotal: number;

  @IsArray()
  @IsNotEmpty()
  produtos: { produtoId: number; quantidade: number }[];
}
