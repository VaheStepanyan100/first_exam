function Calculator(num, num2, op) {
    this.num = num;
    this.num2 = num2;
    this.op = op;

    this.calc = () =>  {
        if (this.op === '+') {
            return this.num + this.num2;
        } else if (this.op === '-') {
            return this.num - this.num2;
        } else if (this.op === '*') {
            return this.num * this.num2;
        } else if (this.op === '/') {
            return this.num / this.num2;
        } else {
            return 'no op'
        }
    }
}