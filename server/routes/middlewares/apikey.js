function apikey (req, res, next) {
  const { api_key } = req.query

  // if (api_key === "12345") next()
  // else res.json({ msg: 'Please enter a valid key.'})
  next()
}

module.exports = apikey