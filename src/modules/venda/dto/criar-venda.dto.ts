import { ApiProperty } from '@nestjs/swagger';

export class CriarVendaDto {
  @ApiProperty({ example: 'João da Silva' })
  cliente: string;

  @ApiProperty({ example: ['Produto A', 'Produto B'] })
  produtos: string[];

  @ApiProperty({ example: [2, 1] })
  quantidade: number[];

  @ApiProperty({ example: 150.50 })
  total: number;
}
