var one = ke({});
var two = ke(function(){});
two.on('event_4', function(payload){ alert('got an event_4'); });
two.on('event_4', function(payload){ alert('payload=' + payload); });
