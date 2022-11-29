const valAct = document.getElementById("valAct");
const valAnt = document.getElementById("valAnt");
const num = document.getElementsByClassName("num");
const op = document.getElementsByClassName("op");
var ans;

//Agrego números
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", () => {
    valAct.innerHTML += num[i].value;
  });
}

//Agrego operadores
for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", () => {
    if (valAct.textContent != "") {
      valAnt.innerHTML = valAct.textContent;
      valAct.innerHTML = op[i].value + " ";
    }
  });
}

//Boton igual
document.getElementById("igual").addEventListener("click", () => {
  let result1 = valAnt.textContent + " " + valAct.textContent;
  let result = eval(result1);
  valAnt.innerHTML = result1;
  valAct.innerHTML = result;
  console.log(result1);
});

//Boton borrar
document.getElementById("c").addEventListener("click", () => {
  ans = valAct.textContent;
  valAct.innerHTML = "";
  valAnt.innerHTML = "";
});

document.getElementById("del").addEventListener("click", () => {
  valAct.innerHTML = valAct.textContent.substring(
    0,
    valAct.textContent.length - 1
  );
});
