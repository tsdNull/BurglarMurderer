module.exports = {
	name: 'roll',
	description: 'roll the dice',
	args: true,
	execute(message, args) {
		//reRoll = /\d{1-2}\wd\d{1-2}([-d][-a]?)/;
		//std = /\d{1-2}\wd\d{1-2}/;
		//Splits everything after the !roll command and uses the values to 
		//perform the correct amount of rolls with the correct amount of die
		rollvals = [];
		for(i = 0; i < args.length; i++){
			rolls = args[i].toString().toLowerCase().split('d');
			for(j = 0; j < rolls[0]; j++){
				value = Math.floor(Math.random()*rolls[1]+1);
				rollvals.push(value);
			}

			
			
			console.log(rollvals);
		}
		
		totval = 0;
		for(k = 0; k < rollvals.length; k++){
			totval +=rollvals[k];
		}
		return message.reply("Your "+args+ " rolled: " +rollvals+ "\nFor a total of: " + totval);
	},
};