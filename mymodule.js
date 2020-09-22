export default function (code, name, surname){
  let balance = 0;
  let pin=code;

  function getBalance(){
    return `Остаток на счете ${balance}`;
  }
  function addMoney (summ,pincode){
    if (typeof summ == 'Number'&& summ>0){
      if (pin==pincode){
        balance+=summ;
      }else {
      return "Не верно указан Pin-code";
      }
    }else {
      throw "Сумма не является числом";
    }
  }
  function getMoney (summ, pincode){
    if (typeof summ == 'Number'&& summ>0){
      if (pin==pincode){
        if (balance>=summ) {
          balance-=summ;
          return `Остаток на счете ${balance}`;
        }else{
          return "Недостаточно средств на счете";
        }
      }else {
        return "Не верно указан Pin-code";
      }
    }else {
      throw "Сумма не является числом";
    }
  }
  function setPin(pincode){
    if(pincode.length ==4){
      pin=pincode;
    }else {
      throw "Некоректннный pin-code";
    }
  }
  return{
    name:name,
    surname: surname,
    getBalance: getBalance,
    setPin: setPin,
    startJob: function (pincode){
      return {
        addMoney: function (summ){
          addMoney(summ, pincode);
        },
        getMoney: function (summ){
          getMoney(summ, pincode);
        }
      }
    }

  }
}