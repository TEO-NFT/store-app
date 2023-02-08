function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(
        res.status(400).json({
          ok: false,
          message: error.details[0].message,
        })
      );
    }
    next(error);
  };
}

module.exports = validatorHandler
