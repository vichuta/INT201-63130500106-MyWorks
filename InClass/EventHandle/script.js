const cancelBtn = document.querySelector("#cancel");

//1. binding with event function name
// cancelBtn.onclick = showMessage;
// function showMessage() {
//   alert('you click on cancel button now!');
// }

//2. binding with event function expression
// cancelBtn.onclick = function (event) {
//   alert(`you click on cancel button now!:${event.target.id}`);
// };

const okBtn = document.querySelector('#submit');
okBtn.addEventListener('click', addProduct);
//okBtn.removeEventListener('click', addProduct);
function addProduct(event){
  alert(`event target:${event.target}
          event target:${event.target.id}
          event phase:${event.eventPhase}
          event type:${event.type}`);
}

const divBtn = document.querySelector('#divButtonPanel');
divBtn.addEventListener('click', (event) => {
  alert(`event target:${event.target}
          event target:${event.target.id}
          event phase:${event.eventPhase}
          event type:${event.type}`);

},true);
