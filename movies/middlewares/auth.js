module.exports = {
  ensureLogin: (req, res, next) => {
    req.session.currentUser ? next() : res.redirect(req.session.currentPage.alternative);
  }
}