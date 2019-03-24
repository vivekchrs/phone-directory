 var h1 = document.querySelector("h1");
 var addBtn = document.querySelector(".btn");
 var submitBtn = document.querySelector("#submitBtn");

 var addWindowDiv = document.querySelector(".addwindow");
 var formFields= document.querySelectorAll(".formfields");


 var nDisplay= document.querySelector("#ndisplay");
 var pDisplay= document.querySelector("#pdisplay");

 var namein = document.querySelector("#na");
 var phonein = document.querySelector("#phone");

 var phoneBkDisplay = document.querySelector(".phonebkdisplay");
 var output=document.querySelector(".output");
 var inputName=[];
 var inputPhone=[];
 var str = '';


  //add event listener
 addBtn.addEventListener("click",addWindowActivate);

 namein.addEventListener("keyup",function(){
 	nDisplay.textContent=this.value;
 });
 phonein.addEventListener("keyup",function(){
 	pDisplay.textContent=this.value;
 });
 submitBtn.addEventListener("click",function(){
 	addWindowDeactivate();
 	inputName.push(namein.value);
 	inputPhone.push(phonein.value);
 	showPhnDir();
 	clearForm();
 });
 output.addEventListener("click",function(e){
 	if(e.target.classList.contains("del")){
 		var remID=e.target.getAttribute("data-id");
 		inputName.splice(remID,1);
 		inputPhone.splice(remID,1);
 		output.innerHTML='';
 		str='';
 		showPhnDir();
 	}

 });






function showPhnDir(){
	
	for (var m=0;m<inputPhone.length;m++){
		str= '<div class="entry">';
		str+='<p class="nentry">'+ inputName[m] +'</p>';
		str+='<p class="pentry">'+ inputPhone[m] +'</p>';
		str+='<button class="del" data-id="'+ m +'">DELETE</button>';
		str+='</div>';
	}
	output.innerHTML+=str;
}
 
 function addWindowActivate(){
 	h1.textContent="ADD USER";
 	addWindowDiv.style.display="block";
 	phoneBkDisplay.style.display="none";
 	addBtn.style.display="none";
 };

function addWindowDeactivate(){
	h1.textContent="PHONE DIRECTORY";
 	addWindowDiv.style.display="none";
 	phoneBkDisplay.style.display="block";
 	addBtn.style.display="block";

};

function clearForm(){
	for(var i in formFields){
		formFields[i].value='';
	}	
	nDisplay.textContent="";
	pDisplay.textContent="";
};

