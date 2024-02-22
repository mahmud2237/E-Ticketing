 // utility
 function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
  }
  function appendChild(elementId, value) {
    const element = document.getElementById(elementId);
    element.appendChild(value);
  }