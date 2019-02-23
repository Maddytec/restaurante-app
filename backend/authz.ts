import { apiConfig } from './api-config';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const handleAuthorization = (request: Request, response: Response, next) => {
    const token =  verificarToken(request);

    if (!token) {
        response.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
        response.status(401).json({ message: 'Você precisa se autenticar.'});
    }else {
        jwt.verify(token, apiConfig.secret, (error, decoded) => {
            if (decoded) {
                next();
            }else {
                response.status(403).json({ message: 'Não autorizado.'});
            }
        })
    }
}

function verificarToken(request: Request): string {
    let token = undefined;
    if (request.headers && request.headers.authorization) {
       // Authorization: Bearer xxx.xxx.xxx
        const partes: string[] = request.headers.authorization.split(' ');
        if (partes.length === 2 && partes[0] === 'Bearer') {
            token = partes[1];
        }
    }

    return token;
}
