import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest) {
    const item = await prismaClient.item.create({
      data: {
        amount: amount,
        order_id: order_id, // Usando order_id diretamente
        product_id: product_id // Usando product_id diretamente
      }
    });
    return item;
  }
}

export { AddItemService };
