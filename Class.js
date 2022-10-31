// unnamed
let Calculator = class {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
    sum() {
        return this.num1+this.num2;
    }
    multiply() {
        return this.num1*this.num2;
    }
    divide() {
        return this.num1/this.num2;
    }
    subtract() {
        return this.num1-this.num2;
    }
  };

  const Number=new Calculator(23,45);
  console.log(`SUM        : ${Number.sum()}`);
  console.log(`MULTIPLY   : ${Number.multiply()}`);
  console.log(`DIVIDE     : ${Number.divide()}`);
  console.log(`SUBTRACT   : ${Number.subtract()}`);