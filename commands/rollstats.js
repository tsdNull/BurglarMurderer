module.exports = {
	name: 'rollstats',
	description: 'roll some bones',
	execute(message, args) {
		min = 1;
		max = 6;
		//per stat array
		value = [];
		//final array of stats
		stats = [];
		console.log("Rolling 6x 4d6kh3"); 	
		for (var i = 0; i < max; i++){
			for (var j = 0; j < 4; j++){
				value.push(Math.floor((Math.random()*max)+min));
			}
			value.sort((a,b) => b - a);
			number = value[0]+value[1]+value[2];
			stats.push(number);
		}
		return message.reply(stats.toString());
		
		
	},
};