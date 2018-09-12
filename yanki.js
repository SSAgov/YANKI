//===========================================//
//YANKI: Attribute Remover                   //
//Created By Social Security Administration  //
//===========================================//
//Version 1.0.0
(function() {
	try{
		var cssSelectorString = prompt("YANKI: What attribute do you want to yank?","role");
		if(cssSelectorString){
			var cssSelectorStringSplit = cssSelectorString.split("=");
			var attributeToYank = cssSelectorStringSplit[0];
			cssSelectorString = "[" + cssSelectorString + "]";
			var yankElements = document.querySelectorAll(cssSelectorString);
			var yankElementsLength = yankElements.length;
			for(var x=0; x<yankElementsLength; x++){
				yankElements[x].removeAttribute(attributeToYank);
			}
			if(yankElementsLength > 0)
				alert("YANKI: " + cssSelectorString + " has been yanked from " + yankElementsLength + " elements.");
			else
				alert("YANKI: " + cssSelectorString + " was not found on any element.");
		}
		else return; //Cancel was pressed.
	}
	catch(err){
		alert("YANKI cannot be used on this browser/document mode/compatability mode.");
	}
})();
