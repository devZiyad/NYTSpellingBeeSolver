var lettersPolygon = document.getElementsByClassName("hive")[0].children;
var mapLettersToEventHandlers = {}
var submitAnswerButton = document.getElementsByClassName("hive-action__submit")[0];
var answers = window.gameData.today.answers;

for (c of lettersPolygon) {
    var letter = c.children[1].textContent; // Get the letter from the polygon
    var letterEventHandler = c.children[0]; // Get the element which handles the mousedown event
    mapLettersToEventHandlers[letter] = letterEventHandler; // Add the pair to the table
};

for (answer of answers) {
    for (char of answer) {
        var letterEventHandler = mapLettersToEventHandlers[char];
        letterEventHandler.dispatchEvent(new MouseEvent('mousedown'));
    }
    submitAnswerButton.dispatchEvent(new MouseEvent('mousedown'));
}
