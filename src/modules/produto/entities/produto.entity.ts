import { ApiProperty } from '@nestjs/swagger';

export class Produto {
  @ApiProperty({ example: 1, description: 'ID único do produto' })
  id: number;

  @ApiProperty({ example: 'Disco de Freio', description: 'Nome da peça automotiva' })
  nome: string;

  @ApiProperty({ example: 350.75, description: 'Preço da peça automotiva em reais' })
  preco: number;

  @ApiProperty({ example: '2024-11-10T10:00:00.000Z', description: 'Data de criação do produto' })
  createdAt: Date;

  @ApiProperty({ example: '2024-11-11T15:00:00.000Z', description: 'Data da última atualização do produto' })
  updatedAt: Date;
}
