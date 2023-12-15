let string = "";
let btns = document.querySelectorAll(".btn");
 Array.from(btns).forEach(value => {
    value.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("#screen").value = string;
        }
    else if(e.target.innerHTML == 'CE'){
            string = string.substring(0,string.length-1);
            document.querySelector("#screen").value = string;

    }
    else if(e.target.innerHTML == 'AC'){
        string = "";
        document.querySelector("#screen").value = string;
    }

    else if (e.target.innerHTML == 'pi'){
            string = "3.14";
            document.querySelector("#screen").value = string ;
        }
    

    else{
        string = string + e.target.innerHTML;
        document.querySelector("#screen").value = string;

        
    };
 });
});


function square(){

    string = Math.pow(document.querySelector("#screen").value = string , 2);
    document.querySelector("#screen").value = string;
}


function sin(){

    string = Math.sin( document.querySelector("#screen").value = string);
    document.querySelector("#screen").value = string;
}

function cos(){

    string = Math.cos( document.querySelector("#screen").value = string);
    document.querySelector("#screen").value = string;
}

function tan(){

    string = Math.tan( document.querySelector("#screen").value = string);
    document.querySelector("#screen").value = string;
}


function log(){

    string = Math.log( document.querySelector("#screen").value = string);
    document.querySelector("#screen").value = string;
}

function sqrt(){

    string = Math.sqrt( document.querySelector("#screen").value = string);
    document.querySelector("#screen").value = string;
}

function pow(){

    string = Math.pow(10 , document.querySelector("#screen").value = string);
    document.querySelector("#screen").value = string;
}






    
    