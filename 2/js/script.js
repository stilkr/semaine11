/*déclaration des id */
$pierre = document.getElementById("pierre");
$feuille = document.getElementById("feuille");
$ciseaux = document.getElementById("ciseaux");

$go = document.getElementById("go");
$score = document.getElementById("score");

var choixJoueur = undefined;


/* shi-fu-mi */

function shifumi(option)						{    		
   choixJoueur = option;
   choixJoueurElement = document.getElementById(choixJoueur);
   }

   
/* big Brother */

function bigBrother()							{
  	 var choixOrdinateur = Math.random();
		if(choixOrdinateur <0.34)			{
				choixOrdinateur = "pierre";
			}else if(choixOrdinateur <=0.67){
				choixOrdinateur = "feuille";
			}else{
				choixOrdinateur = "ciseaux";
			}
			
			scoreMessage = compare(choixJoueur, choixOrdinateur);
			
			score.innerHTML = 
			"<p>Vous avez choisi: " + choixJoueur + " <br/> L'ordinateur a choisi:" 
			+ choixOrdinateur + "</p> <p>" + scoreMessage + "</p>";			
	};
	
			
/* comparaison des tirages */

function compare(choixJoueur, choixOrdinateur)		{
		if(choixJoueur == undefined)			{
					return "Merci d'être fair play et de choisir votre prochain coup avant de cliquer sur GO. Même si vous savez pertinemment que l'ordinateur va gagner :P"				
		}	

		if(choixJoueur == choixOrdinateur)		{
					return "Match nul";
		}
		    
		if(choixJoueur == "pierre")				{
		    if (choixOrdinateur == "ciseaux"){
		            return "Vous gagnez.";
		        } else {
		            return "L'ordinateur gagne. Réessayez.";					
		    }	
				
		} else if (choixJoueur == "feuille") 	{
		    if (choixOrdinateur == "pierre"){
					return "Bien joué." ;
				
		} else if("ciseaux") 					{
					return "Big Brother did it again. Prenez votre revanche." ;					
		        }
		        
		} else if (choixJoueur == "ciseaux") 	{		      
			if (choixOrdinateur == "pierre"){
		            return "Vous n'avez aucun instinct. Retentez.";					
		        }else						{
		            return "Bravo.";
			}	
		}
	}  		