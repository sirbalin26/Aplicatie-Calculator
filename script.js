console.log("Aplicatie Calculator");

function Calculator(parentClass) {
	this.displayValue = "0";
	this.firstOperand = null;
	this.waitingNextOperand = false;
	this.operator = null;

	this.$parent = document.querySelector(parentClass);
	this.$display = document.querySelector(`${parentClass} > .calculator-display`);

	this.doCalculations = {
		"+": (first, second) => first + second,
		"-": (first, second) => first - second,
		"x": (first, second) => first * second,
		"/": (first, second) => first / second,
		"=": (first, second) => second
	};

	this.init = function() {
		this.attachEvents();
	};

	this.attachEvents = function() {
		const buttons = document.querySelectorAll(`${parentClass} > .calculator-buttons > button`);
		buttons.forEach((button)=>{
			button.addEventListener('click', (event)=>{
				if (event.target.classList.contains("operator")) {
					this.onOperatorClick(event.target.value);
					this.display();
					return;
				}

				if (event.target.classList.contains("dot")) {
					this.inputDigit(event.target.value);
					this.display();
					return;
				}

				this.inputDigit(event.target.value);
				this.display();
			});
		});
	};

	this.display = function() {
		this.$display.value = this.displayValue;
	};

	this.onOperatorClick = function(operator) {
		const value = parseFloat(this.displayValue);

		if (this.firstOperand === null) {
			this.firstOperand = value;
		} else if (this.operator) {
			const result = this.doCalculations[this.operator](this.firstOperand, value);
			

			this.displayValue = String(result);
			this.firstOperand = result;
		}

		this.waitingNextOperand = true;
		this.operator = operator;
	}

	this.inputDigit = function(digit) {
		if (this.waitingNextOperand) {
			this.displayValue = digit;
			this.waitingNextOperand = false;
		} else {
			this.displayValue = 
			this.displayValue ==="0" ? digit : this.displayValue + digit
		}
	};

	this.inputDecimal = function() {
		if (!this.displayValue.includes(dot)) {
			this.displayValue = this.displayValue + dot;
		}
		this.displayValue = this.displayValue + dot;
	};

	this.resetCalculator = function() {
		this.displayValue = "0";
		this.firstOperand = null;
		this.operator = null;
		this.waitingNextOperand = false;
	}

	function cosclicked(cosOperator) {
		mynumber.value = Math.cos(mynumber.value);
	}

	function sinclicked(sinOperator) {
		mynumber.value = Math.sin(mynumber.value);
	}

	function tanclicked(tanOperator) {
		mynumber.value = Math.tan(mynumber.value);
	}

}

const calc = new Calculator(".calculator");
calc.init();
