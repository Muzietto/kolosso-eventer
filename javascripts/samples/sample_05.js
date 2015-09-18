var one = ke({});
var two = ke(function(){});
var three = ke({}, one); // could be [one, two] as well
three.on('event_5', function(){ alert('generic event_5'); });
three.onLocal('event_5', function(){ alert('event_5 from one'); });