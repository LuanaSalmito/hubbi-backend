import { Module } from '@nestjs/common';
import { CompraModule } from './modules/compra/compra.module'; 
import { CompraProdutoModule } from './modules/compraproduto/compra-produto.module';  
import { ProdutoModule } from './modules/produto/produto.module';  
import { VendaModulo } from './modules/venda/venda.modules';  
import { VendaProdutoModule } from './modules/vendaproduto/venda-produto.module';  

@Module({
  imports: [
    CompraModule,
    CompraProdutoModule,
    ProdutoModule,
    VendaModulo,  
    VendaProdutoModule,  
  ],
})
export class AppModule {}
