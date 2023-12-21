document.addEventListener("keyup", myFunction);
document.addEventListener("keyup", pwd);
document.addEventListener('click', darkMode);

function myFunction() {
  let x = document.getElementById("firstname").value;
  document.getElementById("display-firstname").innerHTML = x;

  let age = document.getElementById("age").value;
  if (age > 18){
    document.getElementById("a-hard-truth").innerHTML = age;
    document.getElementById("a-hard-truth").style.visibility= "visible" ;
  }else{
    document.getElementById("a-hard-truth").style.visibility= "hidden" ;
  }
}

function pwd(){
    let pass = document.getElementById("pwd").value;
    let passConf = document.getElementById("pwd-confirm").value;
    if (pass == passConf && pass.length > 6 ){
    passConf.style.border = "2px solid #00FF00"  ;
    }else{
    passConf.style.border = "2px solid #FF3456"  ;
    }
}

    function darkMode(){
        let mode = document.getElementById('toggle-darkmode');
        if(mode.value === 'dark'){
            document.body.style.backgroundColor = '#000000';
            document.body.style.color ='#FFFFFF'
        }else{
            document.body.style.backgroundColor = '#FFFFFF';
            document.body.style.color ='#000000';
        }
      
      
    }