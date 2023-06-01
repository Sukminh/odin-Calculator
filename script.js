let order = [];
let start = 0;
let nnew = 0;
function startNum(num){
    let main = document.getElementsByClassName("displayScreen");
    let button = document.getElementsByClassName("buttonFormat");
    button[1].style.backgroundColor = "green";
    button[5].style.backgroundColor = "green";
    button[9].style.backgroundColor = "green";
    button[13].style.backgroundColor = "green";
    if(start == 0) {
        order.push(num);
        main[0].innerHTML = num.toString();
        start = 1;
    }
    else if(typeof(order[order.length-1]) == "number") {
        if(nnew == 0) {
            let temp = order[order.length-1].toString() + num;
            order[order.length-1] = Number(temp);
            main[0].innerHTML = temp;
        }
        else {
            order = [];
            order.push(num);
            main[0].innerHTML = num.toString();
            nnew = 0;
        }
    }
    else {
        order.push(num);
        main[0].innerHTML = num.toString();
        if(order.length == 3) {
            operate();
        }
    }
}

function startOperator(oper){
    let main = document.getElementsByClassName("displayScreen");
    let button = document.getElementsByClassName("buttonFormat");
    button[1].style.backgroundColor = "green";
    button[5].style.backgroundColor = "green";
    button[9].style.backgroundColor = "green";
    button[13].style.backgroundColor = "green";
    let w = button[0];
    if(oper == "+"){
        w = button[13];
    }
    else if(oper == "-"){
        w = button[9];
    }
    else if(oper == "*"){
        w = button[5];
    }
    else if(oper == "/"){
        w = button[1];
    }
    w.style.backgroundColor = "lightgreen";
    if(start == 0){
        order.push(0);
        order.push(oper);
        start = 1;
    }
    else {
        if(typeof(order[order.length-1]) == "string") {
            main[0].innerHTML = "0";
            order = [];
            order.push(0);
            order.push(oper);
        }
        else {
            main[0].innerHTML = order[order.length-1].toString();
            order.push(oper);
        }
    }
}

function operate() {
    let num = 0;
    if(order[1] == "+"){
        num = order[0] + order[2];
    }
    else if(order[1] == "-"){
        num = order[0] - order[2];
    }
    else if(order[1] == "*"){
        num = order[0] * order[2];
    }
    else if(order[1] == "/"){
        num = order[0] / order[2];
    }
    if(num.toString().length > 9) {
        if(num.toString().includes(".")) {
            num = Math.round(num * 100000000) / 100000000;
        }
        else {
            clearDisplay();
            return;
        }
    }
    order = [];
    order.push(num);
    nnew = 1;
}

function equal() {
    let main = document.getElementsByClassName("displayScreen");
    if(typeof(order[order.length-1]) == "string") {
        let num = 0;
        if(order.length == 2){
            if(order[1] == "+"){
                num = order[0] + order[0];
            }
            else if(order[1] == "-"){
                num = order[0] - order[0];
            }
            else if(order[1] == "*"){
                num = order[0] * order[0];
            }
            else if(order[1] == "/"){
                num = order[0] / order[0];
            }
            order=[];
            order.push(num);
            main[0].innerHTML = num.toString();
            nnew = 1;
        }
    }
    else {
        main[0].innerHTML = order[0].toString();
    }
}

function clearDisplay() {
    let main = document.getElementsByClassName("displayScreen");
    order = [];
    start = 0;
    nnew = 0;
    main[0].innerHTML = "0";
}