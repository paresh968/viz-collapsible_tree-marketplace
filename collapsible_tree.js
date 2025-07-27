const dscc = window.dscc;

function drawViz(data) {
  let container = document.getElementById("viz");
  if (!container) {
    container = document.createElement("div");
    container.id = "viz";
    document.body.appendChild(container);
  }
  container.innerHTML = "";
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(data.tables.DEFAULT, null, 2);
  container.appendChild(pre);
}

dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
