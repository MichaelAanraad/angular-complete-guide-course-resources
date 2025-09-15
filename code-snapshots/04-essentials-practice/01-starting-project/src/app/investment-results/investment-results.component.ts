import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {UserInput} from "../user-input/user-input.model";
import {InvestmentResult} from "./investment-result.model";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() userInput!: UserInput;

  calculateInvestmentResults() : InvestmentResult[] {
    const annualData : InvestmentResult[] = [];

    let investmentValue = this.userInput.initialInvestment;
    let initialInvestment = this.userInput.initialInvestment;
    let annualInvestment = this.userInput.annualInvestment;

    for (let i = 0; i < this.userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        investmentValue: investmentValue,
        interestYearly: interestEarnedInYear,
        interestTotal: totalInterest,
        investedCapital: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
