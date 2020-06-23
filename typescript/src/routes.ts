import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'email',
        password: '1331',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 100},
        ],
    });

    return response.json({ mesage: 'Hello World' });
}