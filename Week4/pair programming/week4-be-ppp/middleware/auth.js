const auth = (req, res, next) => {
  const isAdmin = req.query.admin === 'true';
  if (isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

module.exports = auth;
