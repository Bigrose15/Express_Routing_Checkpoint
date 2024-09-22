const verifyRequestTime = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day >= 0 && day <= 6 && hour >= 6 && hour <= 17) {
    next();
  } else {
    res.render("error");
  }
};

export { verifyRequestTime }; //if you are exporting, you need to import it with the same name, but if it is default export, you can import it with any name, but the file path and name must be correct.
