module.exports = {
	name: 'skill',
	description: 'roll some bones',
	execute(message, args) {
		min = 1;
		max = 20;
		console.log(args);
		return Math.floor(Math.random()*(max-min+1)+min);
	},
};