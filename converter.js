    function weightConverter(){
            y = document.getElementById("converter").value;
            return y;
        }
     
    function Calculate(){
        y = weightConverter();
     
        x = document.getElementById("value1").value;
     
        if(x == ""){
            document.getElementById("value2").value = "";
        }else{
            switch(y){
                case "Pounds":
                    document.getElementById("value2").value = x * 0.0022046;
                break;
     
                case "Kilograms":
                    document.getElementById("value2").value = x * 1000;
                break;
     
                case "Ounces":
                    document.getElementById("value2").value = x * 0.0044643;
                break;
     
                case "Stones":
                    document.getElementById("value2").value = x * 0.00015747;
                break;
    
            }
        }
    }