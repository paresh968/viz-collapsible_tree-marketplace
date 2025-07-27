const dscc = window.dscc;

function drawViz(data) {
  const container = document.getElementById("viz");
  container.innerHTML = "";
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(data.tables.DEFAULT, null, 2);
  container.appendChild(pre);
}

dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
