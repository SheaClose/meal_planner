module.exports = {
  getUser(req, res) {
    if (req.session.user) {
      return res.status(200).json({ user: req.session.user });
    }

    return res.status(500).json('No User Found');
  },
  loginUser(req, res) {
    const { accessToken, expiresIn } = req.body;
    const db = req.app.get('db');
    db
      .find_user([accessToken])
      .then(user => {
        if (user.length) {
          req.session.user = user[0];
          return res.status(200).json(user[0]);
        } else {
          db
            .create_user([accessToken, expiresIn])
            .then(user => {
              req.session.user = user[0];
              return res.status(200).json(user[0]);
            })
            .catch(console.log);
        }
      })
      .catch(console.log);
  }
};
