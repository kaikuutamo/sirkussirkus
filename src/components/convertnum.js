

var toCents = function (arg) {

    var num = arg.toString();
    var regex = /[.]/;
    
    
    if (num.match(regex) === null) {
      num = Number(num);
      num = num * 100;
      return num;
    }
    
    var split = num.split(".");
    
    if (split[1].length === 1) {
      split[1] = split[1] + "0";
    }
    
    split[0] = Number(split[0]) * 100;
    split[1] = Number(split[1]);
    
    return split[0] + split[1];
    
    }


    var toDecimals = function (arg) {


      return arg / 100;
      
      
      }   

export default {toCents, toDecimals};
