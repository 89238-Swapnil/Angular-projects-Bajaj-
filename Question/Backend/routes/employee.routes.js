const auth = require('../middleware/auth');

employeeRoute.route('/')
  .get(auth, (req, res) => {   // 👈 add middleware
    Employee.find((error, data) => {
      if (error) return next(error);
      res.json(data);
    });
  });
