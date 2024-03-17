const customer = (app) => {
  app.get("/api/customer", (req, res) => {
    res.json({
      list: [
        {
          id: 1,
          name: "soy",
          position: "iT Manager",
        },
        {
          id: "4",
          name: "rachna",
          position: "Bank Manager",
        },
      ],
    });
  });
};

module.exports = customer;
