// src/services/order/ListOrderService.ts
import prismaClient from '../../prisma';

class ListOrderService {
    async execute() {
        const orders = await prismaClient.order.findMany({
            include: {
                items: {
                    include: {
                        product: {
                            select: {
                                name: true,
                                banner: true, 
                            },
                        },
                    },
                },
            },
        });
        return orders;
    }
}

export { ListOrderService };
