import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'TheHeartCoder@2021', {
    expiresIn: '30d',
  });
};

export default generateToken;
