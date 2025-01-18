import jwt from 'jsonwebtoken';

const generateJWT = (uid: number, name: string) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ uid: String(uid), name }, process.env.JWT_SECRET, {
        expiresIn: '12h'
    });
}

export default generateJWT;
