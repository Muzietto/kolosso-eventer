var one = ke({});
var two = ke(function(){});
two.on('event_type_3', function(payload){ alert('got an event_type_3'); });
two.on('event_type_3', function(payload){ alert('payload=' + payload); });
