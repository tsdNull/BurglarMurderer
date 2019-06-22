module.exports = {
	name: 'dm roll',
	description: 'roll some bones, dm secret',
	execute(message, args) {
		min = 1;
		max = 6;
		console.log("roll 1d6 for DM role");
		return message.reply(Math.floor(Math.random()*(max-min+1)+min));
	},
};