function convert() {
  const fromUnit = document.getElementById("from-select").value;
  const toUnit = document.getElementById("to-select").value;
  const inputValue = parseFloat(document.getElementById("unit-input").value);

  let fromRatio = 0;
  let toRatio = 0;

  switch (fromUnit) {
    case "km":
      fromRatio = 1000;
      break;
    case "m":
      fromRatio = 1;
      break;
    case "cm":
      fromRatio = 0.01;
      break;
    case "mm":
      fromRatio = 0.001;
      break;
    case "um":
      fromRatio = 0.000001;
      break;
    case "nm":
      fromRatio = 0.000000001;
      break;
    case "mi":
      fromRatio = 1609.34;
      break;
    case "yd":
      fromRatio = 0.9144;
      break;
    case "ft":
      fromRatio = 0.3048;
      break;
    case "in":
      fromRatio = 0.0254;
      break;
    default:
      break;
  }

  switch (toUnit) {
    case "km":
      toRatio = 1000;
      break;
    case "m":
      toRatio = 1;
      break;
    case "cm":
      toRatio = 0.01;
      break;
    case "mm":
      toRatio = 0.001;
      break;
    case "um":
      toRatio = 0.000001;
      break;
    case "nm":
      toRatio = 0.000000001;
      break;
    case "mi":
      toRatio = 1609.34;
      break;
    case "yd":
      toRatio = 0.9144;
      break;
    case "ft":
      toRatio = 0.3048;
      break;
    case "in":
      toRatio = 0.0254;
      break;
    default:
      break;
  }

  const result = inputValue * (fromRatio / toRatio);
  document.getElementById("result-input").value = result.toFixed(4);
}
