
import { Input } from '@/components/ui/input'

export default function DataInput({setAmount, setMonthlyInterest, setLoanTerm}) {
    function handleAmountChange(e){
        const amount = parseInt(e.target.value);
        setAmount(amount > 0 ? amount : e.target.value === '' ? undefined : 0);
    }
    function handleAnualInterestChange(e){
        const anualInterest = parseFloat(e.target.value);
        setMonthlyInterest(anualInterest >= 0 && anualInterest <=100 ? anualInterest /12 /100 : undefined);
    }
    function handleLoanTermChange(e){
        const loanTermYears = parseInt(e.target.value);
        setLoanTerm(loanTermYears > 0 ? loanTermYears*12 : 0);
    }
    return (
        <form className='border border-black p-6 bg-white'>
            <label htmlFor="loan" className='font-semibold'>Loan amount</label>
            <Input id="loan" placeholder="Loan amount" onChange={handleAmountChange} min="0"/>

            <label htmlFor="interest" className='font-semibold'>Anual interest rate (%)</label>
            <Input id="interest" placeholder="Annual interest rate" onChange={handleAnualInterestChange}  min="0" max="100"/>
            
            <label htmlFor="loan-term-years" className='font-semibold'>Loan term</label>
            <Input id="loan-term-years" placeholder="Loan term in years" onChange={handleLoanTermChange} min="1" max ="50"/>
        </form>
    )
}