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
      { data: { id: '1', name: '1' } },
      { data: { id: '2', name: '2' } },
      { data: { id: '3', name: '3' } },
      { data: { id: '4', name: '4' } },
      { data: { id: '5', name: '5' } },
      { data: { id: '6', name: '6' } },
      { data: { id: '7', name: '7' } },
      { data: { id: '8', name: '8' } },
      { data: { id: '9', name: '9' } },
      { data: { id: '10', name: '10' } },
      { data: { id: '11', name: '11' } },
      { data: { id: '12', name: '12' } },
      { data: { id: '13', name: '13' } },
      { data: { id: '14', name: '14' } },
      { data: { id: '15', name: '15' } },
      { data: { id: '16', name: '16' } },
      { data: { id: '17', name: '17' } },
      { data: { id: '18', name: '18' } },
      { data: { id: '19', name: '19' } },
      { data: { id: '20', name: '20' } },
      { data: { id: '21', name: '21' } },
      { data: { id: '22', name: '22' }, classes: "adjacent" },
      { data: { id: '36', name: '36' } },
      { data: { id: '43', name: '43' } },
      { data: { id: '53', name: '53' }, classes: "adjacent" },
      { data: { id: '58', name: '58' }, classes: "adjacent" },
      { data: { id: '59b', name: '59下' }, classes: "adjacent" },
      { data: { id: '100', name: '100' }, classes: "adjacent" },
      { data: { id: '109', name: '109' }, classes: "adjacent" },
      { data: { id: '112', name: '112' } },
      { data: { id: '119', name: '119' } },
      { data: { id: '120', name: '120' }, classes: "adjacent" },
      { data: { id: '123', name: '123' }, classes: "adjacent" },
      { data: { id: '126', name: '126' }, classes: "adjacent" },
      { data: { id: '201', name: '201' } }
    ],
    edges: [
      { data: { source: '1', target: '2' } },
      { data: { source: '1', target: '201' } },
      { data: { source: '2', target: '3' }, classes: "directed" },
      { data: { source: '3', target: '4' }, classes: "directed" },
      { data: { source: '4', target: '5' } },
      { data: { source: '5', target: '6' } },
      { data: { source: '6', target: '7' } },
      { data: { source: '7', target: '8' } },
      { data: { source: '8', target: '9' } },
      { data: { source: '9', target: '10' } },
      { data: { source: '9', target: '12' } },
      { data: { source: '10', target: '13' } },
      { data: { source: '10', target: '11' } },
      { data: { source: '10', target: '59b' }, classes: "directed" },
      { data: { source: '11', target: '17' } },
      { data: { source: '11', target: '19' } },
      { data: { source: '12', target: '14' } },
      { data: { source: '12', target: '18' } },
      { data: { source: '12', target: '53' }, classes: "directed" },
      { data: { source: '13', target: '15' }, classes: "directed" },
      { data: { source: '13', target: '112' } },
      { data: { source: '14', target: '16' } },
      { data: { source: '14', target: '43' } },
      { data: { source: '15', target: '16' } },
      { data: { source: '15', target: '36' } },
      { data: { source: '17', target: '18' }, classes: "directed" },
      { data: { source: '18', target: '20' } },
      { data: { source: '19', target: '20' }, classes: "directed" },
      { data: { source: '20', target: '21' } },
      { data: { source: '21', target: '22' } },
      { data: { source: '21', target: '58' }, classes: "directed" },
      { data: { source: '21', target: '119' }, classes: "directed" },
      { data: { source: '43', target: '20' }, classes: "directed" },
      { data: { source: '100', target: '119' }, classes: "directed" },
      { data: { source: '112', target: '8' }, classes: "directed" },
      { data: { source: '112', target: '109' }, classes: "directed" },
      { data: { source: '119', target: '2' }, classes: "directed" },
      { data: { source: '120', target: '9' }, classes: "directed" },
      { data: { source: '123', target: '112' }, classes: "directed" },
      { data: { source: '126', target: '11' }, classes: "directed" }
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
