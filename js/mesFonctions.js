/******************************
Auteur: 					// à remplir!
Date: 
TP : IFT1144 - TP3
******************************/
// Déclaration des variables globales - selon table des choix, sélections
// variables globales - entPrix:prix du choix courant; entPrix0:prix de l'option 0 ("Choisir...")
// entPrix1:prix de l'option 1 et entPrix2:prix de l'option 2

		var entPrix=0, entPrix0=0.00, entPrix1=900, entPrix2=1400;  
//  -------------------------------------------------------------------
// #1.  Initialiser ici la table des choix de voyage comme variable globale
		
		var tableChoix = [["VARADERO, CUBA", entPrix1],
							["JAMAÏQUE", entPrix2]];


//  ---------------------------------------------------------------------------------------

// #2.  Fonction pour afficher 75 fois le caractère "coeur" - s'exécute dès le fichier téléchargé
//      Modifier cette fonction afin qu'elle reçoit 2 arguments, le caractère voulu (unCar) et le 
//      nombre de fois à le répéter (unNb)
//		Faites une copie de la fonction en dessous pour la nouvelle version, ensuite, mettez l'original en commentaire

		function bordure(car, nb) {
			
			document.write("<p>");
			
			for (var i=0; i<nb; i++){
				
				document.write(car);
				
			}
			
			document.write("</p>");
		}


		
		
		
//  ------------------------------------------------------------------------------

// #3.  Fonction pour créer une chaîne de caractères pour dessiner la table "tableChoix" ci-dessus 
//		Le remplacement du contenu de la division avec id="table" par cette chaîne de caractères
//      sera fait dans la fonction loader().

	function dessinerTable(uneTable){

		var chaineTable = "<table>";
		
		for (i=0;i<uneTable.length;i++){
			
			chaineTable = chaineTable + "<tr>";
			
			for(j=0;j<uneTable[i].length;j++){
				
				chaineTable = chaineTable + "<td>" + uneTable[i][j] + "</td>";
				
			}
			
			chaineTable = chaineTable + "</tr>";
			
		}
		
		chaineTable = chaineTable + "</table>";
	
	
		return chaineTable;					// retourne la chaîne
	}
	
//  ------------------------------------------------------------------------------

//  #4.  Fonction qui s'exécute dès la page est affichée et mesFonctions.js lu et interpreté; 
//       crée un titre 1, remplace le texte du titre 2 (Nos offres courantes)par un autre texte,  
//       affiche la table des choix, ajoute des options dans le select. 
//	 	 Insérer un appel à cette fonction dans TP3_Voyages.html par gestionnaire "onload"

	function loader(){

//  #7.  Créez un élément titre 1 avec texte "VOYAGES Intrasol" et id="premier" et 
//       insérez-le dans <main> AVANT le titre2 qui a « id="titreVar" »  
		
		var newH1 = document.createElement("h1");
		newH1.innerHTML = "VOYAGES Intrasol";
		newH1.id = "premier";
		
		var addMain = document.getElementById("principal");
		var beforeh2 = document.getElementById("titreVar");
		
		addMain.insertBefore(newH1, beforeh2);

    
//  --------------------------------------------------------------------------------
//  #5.  Ciblez le h2 qui a id="titreVar" et remplacez son contenu par le texte "Nos forfaits pour 2016 :"
	
		var changeTitreOffres = document.getElementById("titreVar");
		
		changeTitreOffres.innerHTML = "Nos forfaits pour 2016";

	
//  --------------------------------------------------------------------	
    
//  #6. Ciblez la division avec id="table" et remplacez son contenu par un appel à la fonction 
//      dessinerTable() en lui passant la table "tableChoix" définie avec les variables globales ci-haut
    
		var changeTableau = document.getElementById("table");
		
		changeTableau.innerHTML = dessinerTable(tableChoix);
	
		
//  --------------------------------------------------------------------	

} // Fin de fonction loader()


//    Fonction pour parcourir les éléments du formulaire et obtenir le choix dans les boutons radio et, 
//		  selon la valeur du bouton radio, choisir le prix du forfait, le placer dans entPrix 
//			et l'afficher dans le champ "Prix" du formulaire.

		function affichePrix(){
			var monForm = document.getElementById("voyages");
			for (var i=0;i<monForm.elements.length;i++){

				if (monForm.elements[i].type =="radio" && monForm.elements[i].checked ){
					
//  #9.2  Remplacez le if(monForm.elements[].value=="1") imbriqué par un switch() ... 
/*--------------- Mettez ce bloc en commentaire et ajoutez switch() à sa fin------------------------				
					if (monForm.elements[i].value =="1"){
						entPrix = entPrix1;
					}
					else {
						if (monForm.elements[i].value =="2"){
						entPrix = entPrix2;
						}
					} //fin if() ... else*/ 
					
// --------------Placez votre switch() sous cette ligne -------------------------------					
					switch(monForm.elements[i].value){
						
						case "1":
							entPrix = entPrix1;
							break;
						case "2":
							entPrix = entPrix2;
							break;
							
					}
// -------------- Le switch() doit se terminer ici -----------------------------------

//  #9.3  Ciblez le champ "Prix" (avec id="prixForfait") et placez le prix du forfait entPrix dedans  
// -------------	affichage avec 2 décimaux.-----------------			

					var ciblePrix = document.getElementById("prixForfait");
					ciblePrix.value = entPrix.toFixed(2);
			 
		    }	// fin de premier if()
	      }  // fin de for ...
			//alert("EntPrix : " + entPrix);   // trace
		}  // fin de function afficherPrix()


   // -------------------------------------------------------------------------
   

	// fonction qui fera le calcul total à payer - lancé par un bouton "Calculer" dans le formulaire
	
		function calculer() 	{
//  #10.2  Initialiser les variables locales ---------------------------------------			
			var prixX = 100;
			var tauxTaxe = 0.10;
			var nbXtra = 0;
			var sousTotal, total, taxe;
			
//  #10.3  Cibler le formulaire (id="voyages") et trouver le nombre d'éléments dans le formulaire 
			var formulaireVoyage = document.forms["voyages"];
			var nbElements = formulaireVoyage.length;//????

			     //alert("NbElements : " + nbElements) 		// trace	

//  #10.4  boucler dans les éléments pour trouver combien de cases à cocher sont cochées
				 
			for (i = 0; i <nbElements; i++){	
			
				if (formulaireVoyage.elements[i].type == "checkbox" && formulaireVoyage.elements[i].checked == true){
					nbXtra ++;
				}
				
			}			  
			 // trace voir si nbXtra est correct :  
			    //alert("NBXtra= " + nbXtra);
				
//  #10.5  Calculez le sousTotal (entPrix + prixX * nbXtra)

			 sousTotal = entPrix + prixX * nbXtra;
				
			   //alert("SousTotal = " +sousTotal);
		
//  #10.6  Calculez la taxe (sousTotal * tauxTaxe), et placer la taxe dans le champ du formulaire "Taxes"

			taxe = sousTotal * tauxTaxe;
			document.getElementById("taxe").value = taxe.toFixed(2);

				
//  #10.7  Calculez le total à payer (sousTotal + taxe), et le placer dans champ "Total à payer"	
			
			total = sousTotal + taxe;
			document.getElementById("payer").value = total.toFixed(2);

	 }  // fin calculer()
				

