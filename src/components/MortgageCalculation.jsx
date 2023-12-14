export default function MortgageCalculation({ loanAmount, monthlyInterest, loanTerm }) {
  const amount = parseFloat(loanAmount);
  const interest = parseFloat(monthlyInterest);
  const months = parseFloat(loanTerm);

  const calculatedPayment = interest !== 0 ?
    (amount * (interest * Math.pow(1 + interest, months))) /
    (Math.pow(1 + interest, months) - 1)
    : amount / months;

    return (
      <article className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Monthly Payment</h2>
        <p className="text-lg font-bold text-cyan-600">${calculatedPayment.toFixed(2)}</p>
  
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-semibold mb-4">Total Payment at {months} months</h2>
          <p className="text-lg font-bold text-cyan-900">${(calculatedPayment * months).toFixed(2)}</p>
        </div>
      </article>
    );
}
