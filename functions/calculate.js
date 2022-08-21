module.exports = function Calculate() {
   let results = 0;

   function calculateResults({ firstValue, secondValue, operation }) {
      if (operation === 'add') {
         results = Number(firstValue) + Number(secondValue);
      } else if (operation === 'subract') {
         results = Number(firstValue) - Number(secondValue);
      } else if (operation === 'multiple') {
         results = Number(firstValue) * Number(secondValue);
      } else if (operation === 'divide') {
         results = Number(firstValue) / Number(secondValue);
      }
   }

   function getResults() {
      return results % 1 == 0 ? results : results.toFixed(9);
   }

   return {
      calculateResults,
      getResults,
   };
};
