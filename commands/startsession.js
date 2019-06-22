module.exports = {
	name: 'dm roll',
	description: 'roll some bones, dm secret',
	execute(message, args) {
		min = 1;
		max = 6;
		console.log(args);
		return Math.floor(Math.random()*(max-min+1)+min);
	},
};