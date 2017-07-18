function ClozeCard (text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}

	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(cloze, "...");
	if(this.fullText.indexOf(this.cloze) < 0) {
		console.log("Warning, cloze text of '" + this.cloze + "' does not exist in the full text of '" + this.text + "'."); 
	}
}


// This returns a function, so has to be called, so doesn't use the syntax, so got removed
// ClozeCard.prototype.partial = function () {
// 	if(this.fullText.indexOf(this.cloze) >= 0) {
// 		return this.fullText.replace(cloze, "...");	
// 	}
// 	console.log("Warning, cloze text does not exist in the full text"); 
// }

module.exports = ClozeCard;