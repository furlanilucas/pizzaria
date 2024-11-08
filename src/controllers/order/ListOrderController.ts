
import { Request, Response } from 'express';
import { ListOrderService } from '../../services/order/ListOrderService';

class ListOrderController {
    async handle(req: Request, res: Response) {
        const listOrderService = new ListOrderService();

        try {
            const orders = await listOrderService.execute();
            console.log('Ordens retornadas:', orders);
            return res.json(orders); 
        } catch (error) {
            console.error('Erro ao listar ordens:', error);
            return res.status(500).json({ error: 'Erro ao listar ordens' });
        }
    }
}

export { ListOrderController };
