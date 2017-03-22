
begin();
function begin(){
var main=document.getElementById("mainP");

//alert(main.innerHTML );
var player1=1;
var player2=2;
tempPlayer=player1;

var maxRow=3;
var maxCol=3;
var temp;
 ma=[];
	for(var i=0; i< maxRow ; i++)
	{
		var s=document.createElement( "div")
		s.classList.add("div-table-row");
		for(var j=0; j < maxCol; j++)
		{	
			temp=document.createElement("div");
			temp.classList.add("div-table-col");
			temp.id=""+ j +""+i;
			temp.appendChild(document.createTextNode("click"));
			temp.addEventListener("click", getIdClicked);
			s.appendChild(temp);
			var t=temp.id;
			//var a= {t: false  };
			//ma.push(a);
			ma[t]=false;
		}

		main.appendChild(s);
	}



	/*if(tempPlayer===1){tempPlayer=2}else{tempPlayer=1}//switch player
		console.log(tempPlayer);
	while( playerWon(tempPlayer) ){

	}*/

}//end of begin
	//ma.length=maxCol*maxRow;
	//console.log(ma);
function getIdClicked()
{
	//alert(this.id);
	if(taken(this.id)){alert("please click another box");return;}
	mark(tempPlayer, this.id);

	if( playerWon(tempPlayer)  ){ alert("congrats " + tempPlayer+ " you have won!" );  }
	//tie();
	
	console.log(tempPlayer);
	if(tempPlayer===1){ this.classList.add("x");tempPlayer=2}else{this.classList.add("o");tempPlayer=1}//switch player
		

	return false;

}

function taken(id)
{//check!!!
	console.log(id);
	if(ma[id]){ return true;}
	return ma[id];

}	

function playerWon(player)
{
	if(  ma["00"]===player && ma["10"]===player &&ma["20"]===player  )return true;
		else if(  ma["01"]===player && ma["11"]===player &&ma["21"]===player )return true;
			else if(  ma["02"]===player && ma["12"]===player &&ma["22"]===player )return true;
				else if(  ma["00"]===player && ma["01"]===player &&ma["02"]===player )return true;
					else if(  ma["10"]===player && ma["11"]===player &&ma["12"]===player )return true;
						else if(  ma["20"]===player && ma["21"]===player &&ma["22"]===player )return true;
							else if(  ma["00"]===player && ma["11"]===player &&ma["22"]===player )return true;
								else if(  ma["20"]===player && ma["11"]===player &&ma["02"]===player )return true;
	return false;								

}
function tie()
{
	
	var v=ma.filter(function(item){ if(!item) return item;}  );
	if(v===false){return false }
	alert("game is tied, refresh to try again");	
	return true;
}
function mark(player, id)
{

	ma[id]=player;

}

/*	console.log(ma[0]+", "+ma[0][0]);

	console.log(ma[1]+", "+ma[1][1]);

	console.log(ma[2]+", "+ma[2][0]);*/

/*
var doughnut1={price: 3, tax: 0.12, 
	dough: "whole wheat", hole:true, filling: true, toping: "sprinkles", fillingType: "cholocalate", pasteType:"chocolate", ingredients: ['sugar', 'flower', 'water', 'vanila estract'], 
totalprice:function(){return this.price+(this.price*this.tax); }, showPrice :function(){return this.price;}, 
showTax:function(){return this.tax;} }

var doughnut2={price: 3, tax: 0.12, 
	dough: "whole wheat", hole:true, filling: true, toping: "sprinkles", fillingType: "cholocalate", pasteType:"chocolate", ingredients: ['sugar', 'flower', 'water', 'vanila estract'], 
totalprice:function(){return this.price+(this.price*this.tax); }, showPrice :function(){return this.price;}, 
showTax:function(){return this.tax;} }

var doughnut3={price: 3, tax: 0.12, 
	dough: "whole wheat", hole:false, filling: true, toping: "no sprinkles", fillingType: "vanilla cream", pasteType:"whiteFrost", ingredients: ['sugar', 'flower', 'water', 'vanila estract'], 
totalprice:function(){return this.price+(this.price*this.tax); }, showPrice :function(){return this.price;}, 
showTax:function(){return this.tax;} }

var doughnutBox={pricebox: 10, tax: 0.12, 
	dough: "whole wheat", doughnuts : [doughnut1, doughnut2, doughnut3], 
totalprice:function(){ var total=0; for(  var i=0; i<this.doughnuts.length; i++){ total =total+this.doughnuts[i].totalprice(); alert(total); }return total ; }, showPrice :function(){return this.pricebox;}, 
showTax:function(){return this.tax;} };

function sum(ary){ 
	sum=0;
	for(var i=0; i< ary.length; i++)
		{ sum=sum+ary[i];} 
	return sum; 
}

function fullname(obj){ return obj.name+obj.lastName;}

fullname({name:"jane", lastName:"doe"});
"janedoe"

var myArr=[1,2,3,4,5];

myArr.forEach(function (item){
console.log(item);});*/