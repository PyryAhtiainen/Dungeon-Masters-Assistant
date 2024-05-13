function rollDice(diceType) {

    var numDiceInput = document.getElementById('numDice' + diceType);
    var numDice = numDiceInput.value;
    var results = [];
    var resultDiv = document.getElementById('results' + diceType);
    resultDiv.innerHTML = '<h3>Results:</h3>';
    for (var i = 0; i < numDice; i++) {
        var roll = Math.floor(Math.random() * diceType) + 1;
        results.push(roll);
    }
    results.forEach(function(result, index) {
        resultDiv.innerHTML += '<p>Roll ' + (index + 1) + '= ' + result + '</p>';
    });
}