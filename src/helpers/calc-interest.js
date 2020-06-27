
export default class CalculateInterest{

  static Calculate(interestRate, amount){
    return +amount + (amount * (interestRate / 100));    
  }

  static CalculateRate(amountInit, incomeAmountMonth){
    return ((incomeAmountMonth*100)/amountInit);    
  }
} 