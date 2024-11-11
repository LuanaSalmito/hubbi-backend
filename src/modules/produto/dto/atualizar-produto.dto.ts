import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CriaProdutoDto } from './criar-produto.dto';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class AtualizaProdutoDto extends PartialType(CriaProdutoDto) {
  @ApiProperty({ example: 'Pastilha de Freio', description: 'Nome atualizado da peça automotiva', required: false })
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiProperty({ example: 300.50, description: 'Preço atualizado da peça automotiva em reais', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  preco?: number;
}
