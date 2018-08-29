function rollingDice(numTimes){
	var output = [];
	for (var i= 0; i < numTimes; i++){
		var ranNum = Math.floor(Math.floor(6*Math.random() +1 ));
 		output.push(ranNum);
    }
    return 'Rolled ' + numTimes + ' Dice: '+output.join(', ');
}
console.log(rollingDice(process.argv[2]));
