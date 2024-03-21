export default function (req, res, next) {
  const clientSideOnlyRoutes = [
    /^\/specialist\/\S+/,
    /^\/account\/\S+/,
    /^\/admin\/\S+/,
    /^\/developer\/\S+/,
    /^\/beta\/\S+/,
  ]

  if (clientSideOnlyRoutes.some((pattern) => pattern.test(req.originalUrl))) {
    res.spa = true
  }

  next()
}
