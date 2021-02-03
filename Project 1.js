// Event table
let entry=document.getElementById("entry");
entry.addEventListener("click",()=>{displayDetails()});
let row = 1;
function displayDetails(){
    let name=document.getElementById("username").value;
    let mob=document.getElementById("mobnumb").value;
    let email=document.getElementById("emailad").value;
    if(!name || !mob || !email){
        alert("Please fill all the boxes");
        return;
    }
    let display= document.getElementById("display");
    let newRow= display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3=newRow.insertCell(2);
    cell1.innerHTML=name;
    cell2.innerHTML=mob;
    cell3.innerHTML=email;

    row++;
}


// sponsor

document.getElementById("addbtn").onclick = function (){
    addspons();
};

function addspons (){
    const photopath = document.getElementById("sponsimg");
    const photolink = document.getElementById("sponslink");
    const photoid = document.getElementById("sponsid");

    const input={
        path: photopath.value,
        link: photolink.value,
        ID: photoid.value,
    }
    const div = document.createElement('div');

    div.setAttribute("id",input.ID)

    div.style.backgroundColor = " rgb(1,11,38)";
    div.style.padding = "50px 0px";
    div.style.width = "1349";

    div.innerHTML = '<a target="_blank"  href="'+input.link+'"><img class="sponser" src='+input.path+'></a>';
    
    document.getElementById("sponsers").appendChild(div);
    return input;
    
}
document.getElementById("R").onclick = function (){
    removespons();
};
function removespons (){
    console.log("true");
   
   const Removespons= document.getElementById("sponsid").value;
  
  
   const remove= document.getElementById(Removespons);
   remove.remove();
}
    
