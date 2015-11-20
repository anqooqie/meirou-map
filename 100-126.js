$(function(){ // on dom ready

$('#cy').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2
      })
    .selector('node.adjacent')
      .css({
        'background-color': '#AAA',
        'text-outline-color': '#888'
      })
    .selector('edge')
      .css({
        'target-arrow-shape': 'none',
        'line-color': '#AAA',
        'target-arrow-color': '#AAA',
        'source-arrow-color': '#AAA'
      })
    .selector('edge.directed')
      .css({
        'target-arrow-shape': 'triangle'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: '9', name: '9' }, classes: "adjacent" },
      { data: { id: '11', name: '11' }, classes: "adjacent" },
      { data: { id: '82-105', name: '82' }, classes: "adjacent" },
      { data: { id: '82-117', name: '82' }, classes: "adjacent" },
      { data: { id: '85', name: '85' }, classes: "adjacent" },
      { data: { id: '91', name: '91' }, classes: "adjacent" },
      { data: { id: '93', name: '93' }, classes: "adjacent" },
      { data: { id: '98', name: '98' }, classes: "adjacent" },
      { data: { id: '99', name: '99' }, classes: "adjacent" },
      { data: { id: '100', name: '100' } },
      { data: { id: '103-104', name: '103' }, classes: "adjacent" },
      { data: { id: '103-123', name: '103' }, classes: "adjacent" },
      { data: { id: '104', name: '104' } },
      { data: { id: '105', name: '105' } },
      { data: { id: '106', name: '106' } },
      { data: { id: '107', name: '107' } },
      { data: { id: '108', name: '108' } },
      { data: { id: '109', name: '109' } },
      { data: { id: '110', name: '110' } },
      { data: { id: '111', name: '111' } },
      { data: { id: '112-109', name: '112' }, classes: "adjacent" },
      { data: { id: '112-123', name: '112' }, classes: "adjacent" },
      { data: { id: '113', name: '113' } },
      { data: { id: '114', name: '114' } },
      { data: { id: '115', name: '115' } },
      { data: { id: '116', name: '116' } },
      { data: { id: '117', name: '117' } },
      { data: { id: '118', name: '118' } },
      { data: { id: '119', name: '119' }, classes: "adjacent" },
      { data: { id: '120', name: '120' } },
      { data: { id: '121', name: '121' } },
      { data: { id: '122c', name: '122中央' } }, 
      { data: { id: '122', name: '122' } }, 
      { data: { id: '123', name: '123' } },
      { data: { id: '124', name: '124' } },
      { data: { id: '125', name: '125' } },
      { data: { id: '126', name: '126' } },
    ],
    edges: [
      { data: { source: '82-117', target: '117' } },
      { data: { source: '99', target: '100' } },
      { data: { source: '100', target: '104' } },
      { data: { source: '100', target: '105' } },
      { data: { source: '100', target: '106' } },
      { data: { source: '100', target: '119' }, classes: "directed" },
      { data: { source: '100', target: '121' } },
      { data: { source: '100', target: '122c' } },
      { data: { source: '104', target: '103-104' }, classes: "directed" },
      { data: { source: '104', target: '107' } },
      { data: { source: '105', target: '82-105' }, classes: "directed" },
      { data: { source: '105', target: '107' }, classes: "directed" },
      { data: { source: '105', target: '110' } },
      { data: { source: '106', target: '108' } },
      { data: { source: '106', target: '118' } },
      { data: { source: '107', target: '109' } },
      { data: { source: '108', target: '110' } },
      { data: { source: '108', target: '117' } },
      { data: { source: '109', target: '113' } },
      { data: { source: '109', target: '122' } },
      { data: { source: '110', target: '111' } },
      { data: { source: '111', target: '115' }, classes: "directed" },
      { data: { source: '114', target: '115' } },
      { data: { source: '112-109', target: '109' }, classes: "directed" },
      { data: { source: '113', target: '114' } },
      { data: { source: '115', target: '116' } },
      { data: { source: '116', target: '120' } },
      { data: { source: '117', target: '91' }, classes: "directed" },
      { data: { source: '117', target: '104' }, classes: "directed" },
      { data: { source: '117', target: '107' }, classes: "directed" },
      { data: { source: '117', target: '109' }, classes: "directed" },
      { data: { source: '117', target: '120' }, classes: "directed" },
      { data: { source: '118', target: '116' }, classes: "directed" },
      { data: { source: '120', target: '9' }, classes: "directed" },
      { data: { source: '120', target: '125' }, classes: "directed" },
      { data: { source: '122', target: '107' }, classes: "directed" },
      { data: { source: '122', target: '123' } },
      { data: { source: '123', target: '85' }, classes: "directed" },
      { data: { source: '123', target: '93' }, classes: "directed" },
      { data: { source: '123', target: '98' }, classes: "directed" },
      { data: { source: '123', target: '103-123' }, classes: "directed" },
      { data: { source: '123', target: '109' }, classes: "directed" },
      { data: { source: '123', target: '112-123' }, classes: "directed" },
      { data: { source: '123', target: '124' }, classes: "directed" },
      { data: { source: '124', target: '126' }, classes: "directed" },
      { data: { source: '125', target: '126' }, classes: "directed" },
      { data: { source: '126', target: '11' }, classes: "directed" },
    ]
  },
  
  layout: {
    name: 'dagre',
    padding: 10
  },
  
  // on graph initial layout done (could be async depending on layout...)
  ready: function(){
    window.cy = this;
    // giddy up...
    
    cy.elements().unselectify();
    
    cy.on('tap', 'node', function(e){
      var node = e.cyTarget; 
      var neighborhood = node.neighborhood().add(node);
      
      cy.elements().addClass('faded');
      neighborhood.removeClass('faded');
    });
    
    cy.on('tap', function(e){
      if( e.cyTarget === cy ){
        cy.elements().removeClass('faded');
      }
    });
  }
});

}); // on dom ready
