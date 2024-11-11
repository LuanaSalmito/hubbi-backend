import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CriaProdutoDto {
  @ApiProperty({ example: 'Disco de Freio', description: 'Nome da peça automotiva' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 350.75, description: 'Preço da peça automotiva em reais' })
  @IsNumber()
  @Min(0)
  preco: number;
}
