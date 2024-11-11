import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as cors from 'cors';
import { VendaController } from './venda.controller';
import { VendaService } from './venda.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoModule } from '../produto/produto.module';

@Module({
  imports: [ProdutoModule],
  controllers: [VendaController],
  providers: [VendaService, PrismaService],
})
export class VendaModulo implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cors({
          origin: 'http://localhost:3001',
          methods: 'GET,POST,PUT,DELETE',
          allowedHeaders: 'Content-Type,Authorization',
        }),
      )
      .forRoutes('*');
  }
}
