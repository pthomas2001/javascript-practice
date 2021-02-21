var bicycle = {
	'type': 'városi bringa',
	'color': 'mentazöld',
	'frame material': 'acél',
	'properties': function () {
		var bicycleProperties = [];
		for (var property in this) {
			if (typeof this[property] !== 'function') {
				bicycleProperties.push(this[property]);
			}
		}
		console.log(bicycleProperties);
	}
};