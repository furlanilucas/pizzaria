import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
  sub: string; // Define a interface para o payload do token
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  // Receber o token do cabeçalho Authorization
  const authToken = req.headers.authorization;

  if (!authToken) {
    console.error('Token não fornecido');
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  // Extrair o token da string "Bearer token"
  const [, token] = authToken.split(" ");

  try {
    // Validar o token e extrair o payload
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // Recuperar o id do token e colocar dentro do req
    req.user_id = sub;

    return next(); // Prosseguir para o próximo middleware ou rota
  } catch (err) {
    console.error('Erro na validação do token:', err);
    return res.status(401).json({ message: 'Token inválido' }); // Retornar 401 se o token for inválido
  }
}
