import HttpStatus from 'http-status-codes'
import jwt from 'jsonwebtoken'

// TODO
// wait for connect model

export const login = (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    const token = jwt.sign({ username }, 'privateKey')

    // response
    res.status(HttpStatus.OK)
    .json({
      token
    })
  } else {
    // response
    res.status(HttpStatus.UNAUTHORIZED)
    .json({
      error: true,
      message: 'Invalid username or password.'
    })
  }
}
