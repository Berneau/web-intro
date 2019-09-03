function onButtonClick() {
  // gets the input field by the id of the input field (from html)
  let target = document.getElementById('target');
  
  // target.value is the current value of the input field
  // it gets multiplied by 3
  let value = target.value * 3;
  
  // writes the new value into the input field
  target.value = value;
}