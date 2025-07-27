const dscc = window.dscc;

function drawViz(data) {
  const container = document.getElementById("viz");
  container.innerHTML = ""; // clear previous

  const sample = JSON.stringify(data.tables.DEFAULT, null, 2);

  const pre = document.createElement("pre");
  pre.textContent = sample;
  container.appendChild(pre);
}

// This sets up Looker Studio's visualization subscription
dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
