function verifyFromFields(){
    let inputboxes=document.getElementsByClassName("inputbox")
    let email=inputboxes[0].value
    let password=inputboxes[1].value
    
    if(email =="" && password =="")
    {
        window.alert("please enter email & password")
    }
}
