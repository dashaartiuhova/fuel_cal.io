
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
function сonsumptionPer100(l,s){
    return l/s*100;
}
function averagePrice(price,consumption){
    return ( price*consumption/100).toFixed(2);
}
function allSum(pricePerKm, s){
    return pricePerKm*s;
}
function fuelConsumption(consumption,s){
    return s/100*consumption;
}
function totalCost(price,l){
    return price*l;
}
function getAllInputs(className){
    return document.querySelectorAll(className+' input');
}
window.onload = function () {
    
    document.getElementById('average-clear').addEventListener('click',function(){clear('.average')});
    document.getElementById('average-calc').addEventListener('click',function(){calc('.average')});
    document.getElementById('length-clear').addEventListener('click',function(){clear('.length')});
    document.getElementById('length-calc').addEventListener('click',function(){calc('.length')});

    var panel1 = document.getElementById('panel_1');
    var panel2 = document.getElementById('panel_2');

    panel2.addEventListener('click',function(){
            document.querySelector('.average').style.display='none';
            document.querySelector('.length').style.display='block';
            this.classList.add('bg-blue');
            this.classList.remove('bg-white');
            panel1.classList.add('bg-white');
            panel1.classList.remove('bg-blue');
    });
    panel1.addEventListener('click',function(){
        document.querySelector('.average').style.display='block';
        document.querySelector('.length').style.display='none';
        this.classList.add('bg-blue');
        this.classList.remove('bg-white');
        panel2.classList.add('bg-white');
        panel2.classList.remove('bg-blue');
    });

    var inputsAverage= document.querySelectorAll('.average .inputs input');
    console.log(inputsAverage);
    var inputsLength = document.querySelectorAll('.length .inputs input');
    let inputFunc = function (){
        inputsAverage.forEach(e=>{
            var k =false;
            e.oninput = function(){
                for(var i=0;i<inputsAverage.length;i++){
                    if(inputsAverage[i].value!='' && isNumber(inputsAverage[i].value) ){
                        if(i===0){
                            k=true;
                        }
                        else if(k===false)
                            k=false;
                        else
                            k=true;
                        
                    }
                    else{
                        k=false;
                    }
                }
                var calcbtn = document.getElementById('average-calc');
                if(k===false){
                    calcbtn.disabled = true;
                }
                    
                if(k===true){
                    calcbtn.removeAttribute('disabled');
                }
                
            };
        });
        inputsLength.forEach(e=>{
            var k =false;
            e.oninput = function(){
                for(var i=0;i<inputsLength.length;i++){
                    if(inputsLength[i].value!='' && isNumber(inputsLength[i].value) ){
                        if(i===0){
                            k=true;
                        }
                        else if(k===false)
                            k=false;
                        else
                            k=true;
                        
                    }
                    else{
                        k=false;
                    }
                } 
                var calcbtn1 = document.getElementById('length-calc');
                if(k===false){
                    calcbtn1.disabled = true;
                }
                    
                if(k===true){
                    calcbtn1.removeAttribute('disabled');
                }
                
            };
        })
    }; 
    inputFunc();   
};

function calc(className){
    var inputs = document.querySelectorAll(className+' .inputs input');
    var znach = {
        'fuel':inputs[0].value,
        'length':inputs[1].value,
        'price':inputs[2].value
    }
    console.log(znach.price);

    document.querySelector(className+' .result').style.display = 'flex';
    document.querySelector(className+' .rounded-bottom').style.borderRadius = '0';
    if(className==='.average'){
        var outputs = document.querySelectorAll('.average .result input');
        var _1,_2,_3;
        _1 = сonsumptionPer100(znach.fuel,znach.length);
        _2 = averagePrice(znach.price,_1);
        _3 = allSum(_2,znach.length);
        outputs[0].value = _1;
        outputs[1].value = _2;
        outputs[2].value = _3;
    }
    if(className==='.length'){
        var outputs = document.querySelectorAll('.length .result input');
        var _1,_2,_3;
        _1 = fuelConsumption(znach.fuel,znach.length);
        _2 = averagePrice(znach.price,znach.fuel);
        _3 = totalCost(znach.price,_1);
        outputs[0].value = _1;
        outputs[1].value = _2;
        outputs[2].value = _3;
        document.getElementById('label-fuel').innerHTML = 'л/'+znach.length+' км';
        document.getElementById('label-cost').innerHTML = 'грн/'+znach.length+' км';
    }
}
function clear(e){
    var inputsAll = getAllInputs(e);

    for (var i = 0;  i < inputsAll.length; i++) {
        inputsAll[i].value = '';
    };
    document.querySelector(e + '-calc').setAttribute("disabled", "disabled");
}
    


