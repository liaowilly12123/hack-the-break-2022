
function loadComponentToId(nodeId, component) {
    fetch(component)
      .then(res => res.text())
      .then(body => document.querySelector(nodeId).innerHTML = body)
  }

loadComponentToId("#path-goes-here", "./tiles.html");