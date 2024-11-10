const getValue = () => {
  return Math.floor(Math.random() * 250);
};

setInterval(() => {
  let value = `rgb(${getValue()}, ${getValue()}, ${getValue()})`;

  document.body.style = `background: ${value};`;
  color.textContent = value;
}, 2000);
