function verifyInput(input) {
  var signs = "(){}[]";
  var stack = [];
  var character;
  var signPosition;

  for (let i = 0; (character = input[i]); i++) {
    signPosition = signs.indexOf(character);
    if (signPosition === -1) {
      //Si es -1 significa que es cualquier no es un carácter válido a los signos previamente definidos.
      continue;
    } else {
      //es un carácter válido
      if (signPosition % 2 === 0) {
        //es un signo de apertura
        signPosition = signPosition + 1;
        //se le ingresa la posición de su respectivo signo de cierre
        stack.push(signPosition);
      } else {
        //returna falso si el elemento del tope de la pila es diferente a la signPosition
        //o si no hay elementos en la pila, significa que hubieron mas de cierre que de apertura
        if (stack.length === 0 || stack.pop() !== signPosition) {
          return { status: false, message: "Los signos estan INCORRECTOS" };
        }
      }
    }
  }
  //si todo es correcto, returna true
  return { status: true, message: "Los signos estan CORRECTOS" };
}

console.log(verifyInput("([[()]])")); //true
console.log(verifyInput("([[])(")); //false
