let output = document.getElementById('output');
function display(val){
    output.value += val;
}

function cal(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert('Invalid expression!');
    }
}

function clearAll(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0, -1)
}