
# Mortgage calculator

Technical challenge built with Next.js and shadcn. It was built as a mortgage calculator based on the following mathematical expression:

![Mathematical Formula](https://github.com/brenah00/mortgage-calculator/blob/04cef3850b2e56d84c35e4db3e80910832c119ee/src/assets/mortgage.png)

Where: 

$P$ is the principal loan amount. 

$r$ is the monthly interest rate. 

$n$ is the total number of payments.

## Components
### Principal
Located in src/index.js, it comprises two components: $DataInput$ and $MortgageCalculation$.
Within this component, states are declared to store the loan amount, annual interest rate, and loan term. These states are then passed down to the respective components for calculation.

#### DataInput
This component's primary function is to capture and store the values of the loan amount, annual interest rate, and loan term in years. It receives functions as props to update these values.

The data input undergoes modifications for the calculation process. Specifically, the annual interest rate is divided by 12 to convert it into a monthly rate, and further divided by 100 to obtain the percentage. Additionally, the loan term is multiplied by 12 to represent the number of months in the loan duration.

#### MortgageCalculation
The primary function of this component is to compute and display the monthly payment and the total amount the customer will pay over the loan period. It receives the values of the loan amount, monthly interest rate, and loan term in months as props.

## Getting Started to run the proyect

### In your computer 
1. Begin by forking and cloning the repository to your local storage.

2. Subsequently, initiate the development server using one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment Details

The project has been deployed using Vercel.

You can access the deployed application by following [this link](https://mortgage-calculator-one.vercel.app/). Try out the mortgage calculator!

