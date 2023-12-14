import { Inter } from 'next/font/google'
import DataInput from '@/components/DataInput'
import MortgageCalculation from '@/components/MortgageCalculation'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function MortgageCalculator() {
  const [loanAmount, setAmount] = useState(0);
  const [anualInterest, setMonthlyInterest] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  return (
    <main className={`flex min-h-screen flex-col items-center p-24${inter.className}`} >
      <h1 className='text-3xl font-bold m-8'>Mortgage calculator</h1>
      <section className='m-4 flex xs:flex-col sm:flex-row'>
        <article>
          <DataInput setAmount={setAmount} setMonthlyInterest={setMonthlyInterest} setLoanTerm={setLoanTerm}></DataInput>
          {loanAmount <= 0 && <p className='text-xs italic'>{`* Please provide a positive loan amount`}</p>}
          {!anualInterest &&  anualInterest!== 0 && <p className='text-xs italic'>{`* Please provide a valid interest value (0 - 100)`}</p>}
          {loanTerm <= 0 && <p className='text-xs italic'>{`* Please provide a positive loan term`}</p>}
        </article>
        {loanAmount > 0 && anualInterest >= 0 && loanTerm > 0 && <MortgageCalculation loanAmount={loanAmount} monthlyInterest={anualInterest} loanTerm={loanTerm}></MortgageCalculation>}
      </section>
    </main>
  )
}
