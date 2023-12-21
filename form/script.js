document.addEventListener("keyup", myFunction);
document.addEventListener("keyup", pwd);
document.addEventListener('click', darkMode);

function myFunction() {
  let x = document.getElementById("firstname").value;
  document.getElementById("display-firstname").innerHTML = x;

  let age = document.getElementById("age").value;
  let ageSecond = document.getElementById("a-hard-truth");
  if (age > 18){
    ageSecond.innerHTML = age;
    ageSecond.style.visibility= "visible" ;
  }else{
    ageSecond.style.visibility= "visible" ;
  }
}

function pwd(){
    let pass = document.getElementById("pwd");
    let passvaleur =pass.value;
    let passConf = document.getElementById("pwd-confirm");
    let passConfVal =passConf.value;
    if (passvaleur == passConfVal && passvaleur.length > 6 ){
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