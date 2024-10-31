import prismaClient from "../../prisma";

// Interface para os dados do pedido
interface OrderRequest {
  table: number; 
  name: string;  
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    
    if (typeof table !== 'number' || table <= 0) {
      throw new Error("O número da mesa deve ser um inteiro positivo.");
    }
    if (!name || typeof name !== 'string') {
      throw new Error("O nome deve ser uma string válida.");
    }

    try {
      const order = await prismaClient.order.create({
        data: {
          table: table,
          name: name    
        }
      });

      return order;
    } catch (error) {
      
      throw new Error(`Erro ao criar a ordem: ${error.message}`);
    }
  }
}

export { CreateOrderService };
