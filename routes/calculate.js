module.exports = function CalculateRoutes(calculateFunctions) {
   function home(req, res) {
      const results = calculateFunctions.getResults();
      res.render('index', { results });
   }

   function calculate(req, res) {
      calculateFunctions.calculateResults(req.body);
      res.redirect('/');
   }

   return {
      home,
      calculate,
   };
};
