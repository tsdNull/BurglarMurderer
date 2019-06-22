module.exports = {
	name: 'attack',
	description: 'Make an attack roll and roll damage at the same time',
	args: true,
	execute(message, args) {
		//roll attack, with damage
		indicate = "\nYou hit for ";
		rollvals = [];
		
		for(i = 0; i < args.length; i++){
			rolls = args[i].toString().toLowerCase().split('d');
			for(j = 0; j < rolls[0]; j++){
				value = Math.floor(Math.random()*rolls[1]+1);
				rollvals.push(value);
			}
		}
		
		totval = 0;
		for(k = 0; k < rollvals.length; k++){
			totval +=rollvals[k];
		}
		
		//Checks if user used the advantage flag		
		if(args[0].toString().toLowerCase().match(/-a/)){
			adv = [];
			adv.push(Math.floor(Math.random()*20+1));
			adv.push(Math.floor(Math.random()*20+1));
			adv.sort((a,b) => b - a);
			att = adv.toString();
			if(att[0] == 20){
				totval += totval;
				indicate = "\nYou CRIT for "
			}
		//checks if the user used the disadvantage flag
		} else if(args[0].toString().toLowerCase().match(/-d/)) {
			dis = [];
			dis.push(Math.floor(Math.random()*20+1));
			dis.push(Math.floor(Math.random()*20+1));
			dis.sort((a,b) => a - b);
			att = dis.toString();
			if(att[0] == 20){
				totval += totval;
				indicate = "\nYou CRIT for "
			}
		//this is for a "normal" roll
		} else {
			att = Math.floor(Math.random()*20+1);
		}

		//Roll however many of X dice the playern requested 
		


		return message.reply("Your attack roll is: " +att+ indicate +totval+" damage!");
		
	},
};