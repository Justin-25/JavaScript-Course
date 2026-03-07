  
  
  let calc = JSON.parse(localStorage.getItem('calc'));

  if(calc === null) {
    calc = '';
  }

  showCalc();

  function calculatorNum(num) {
    calc += num;

    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function calculatorPoint(point) {
    calc += point;

    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function plusCalculator(plus) {
    calc += plus;

    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function minusCalculator(minus) {
    calc += minus;

    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function timesCalculator(times) {
    calc += times;
    
    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function devideCalculator(devide) {
    calc += devide;

    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function resultCalc() {
    calc = eval(calc);
    showCalc()

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function removeCalc(clear) {
    calc = '';
    if (clear) {
      document.querySelector('.js-result').innerHTML = calc; 
      return;
    }

    localStorage.setItem('calc', JSON.stringify(calc));
  }

  function showCalc() {
    document.querySelector('.js-result').innerHTML = `${calc}`

    localStorage.setItem('calc', JSON.stringify(calc));
  }