const User = require('./../users/user-model');

const checkPayload = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json('Username and password required')
  } else {
    next()
  }
}
const checkUsernameUnique = async (req, res, next) => {
  try {
    const rows = await User.findBy({ username: req.body.username })
    if (!rows.length) {
      next()
    } else {
      res.status(401).json('Username already taken')
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}
const checkUsernameExists = async (req, res, next) => {
  try {
    const rows = await User.findBy({ username: req.body.username })
    if (rows.length) {
      req.userData = rows[0]
      next()
    } else {
      res.status(401).json('You dont seem to exist')
    }
  } catch (err) {
    res.status(500).json('something blew up')
  }
}

module.exports = {
  checkPayload,
  checkUsernameExists,
  checkUsernameUnique
}