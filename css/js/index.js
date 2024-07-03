var siteNameInput=document.getElementById("siteName");
var siteUrlInput=document.getElementById("siteUrl");
var data=document.getElementById("tBody");
var allBookMarks=[];

if(localStorage.allBookMarks !=null){
    allBookMarks=JSON.parse(localStorage.allBookMarks);
    displayData(allBookMarks)
}
function addBookMark() {
    validateUrl()
//    if(validateUrl()==true && siteUrlInput.value.length !=""){

       console.log("addBookMark");
       var newBookMark={
           siteName:siteNameInput.value,
           siteUrl:siteUrlInput.value,
       }
       allBookMarks.push(newBookMark);
       localStorage.setItem("allBookMarks",JSON.stringify(allBookMarks))
       console.log(allBookMarks);
       displayData(allBookMarks);
       clearBookMark();
    // }
    // else{
    //     alert("please enter valid data");
    // }
    
}



function displayData(arr) {
    var cartona="";
    for(var i=0;i<arr.length;i++){
        cartona +=`<tr>
    <td>${i+1}</td>
    <td>${arr[i].siteName}</td>
    <td><a class="btn btn-primary " href="${arr[i].siteUrl}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
    <td><button class="btn btn-danger" onclick="deleteBookMark(${i})"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
    
</tr>
        `;
}
data.innerHTML=cartona
}
function deleteBookMark(index){
    allBookMarks.splice(index,1);
    localStorage.setItem("allBookMarks",JSON.stringify(allBookMarks));
    displayData(allBookMarks);

}
function clearBookMark(){
    siteNameInput.value=''
    siteUrlInput.value=''
}
function validateUrl() {
    var pattern=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    console.log(pattern.test(siteUrlInput.value));
    return pattern.test(siteUrlInput.value)
    
}

  
