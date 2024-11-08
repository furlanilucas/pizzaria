import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id; // Obtém o user_id do req

        const detailUserService = new DetailUserService();
        
        // Tenta obter os detalhes do usuário
        try {
            const user = await detailUserService.execute(user_id);

            // Verifica se o usuário foi encontrado
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            return res.json(user); // Retorna os detalhes do usuário
        } catch (error) {
            console.error('Erro ao obter detalhes do usuário:', error);
            return res.status(500).json({ message: 'Erro ao obter detalhes do usuário' });
        }
    }
}

export { DetailUserController }; // Exporta o controlador
