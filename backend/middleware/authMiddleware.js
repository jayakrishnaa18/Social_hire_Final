const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    token = token.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

// module.exports = { protect };
// Fix this in authMiddleware.js
module.exports = { protect };

