function modulo(){
var nbre1 = document.getElementById("premier_nombre").value;    //déclaration de la fction
var nbre2 = document.getElementById("deuxieme_nombre").value;   //declaration de la fction
  if (isNan(nbre1)) || isNan(nbre2)){                       // || est un operateur logique
  alert('il faut des nbres');
}else if (second==0){ //pr comparer les valeur on met un == .
  alert("on ne peut pas diviser par o");
}
else {
var result = parsInt(nbre1)% parsFloat(nbre2);                // % operateur de division
alert ('voici le reste: ' + result);
}
}
