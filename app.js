function formValidate()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["phone"]; 
    var password = document.forms["RegForm"]["Password"]; 
    var cpassword = document.forms["RegForm"]["cPassword"];  
    var address = document.forms["RegForm"]["Address"];  

    var errname= document.getElementById("name");
    var erremail= document.getElementById("email");
    var erraddress= document.getElementById("address");
    var errpassword= document.getElementById("pwd");
    var errcpassword= document.getElementById("cpwd");
    var errphone= document.getElementById("phone")


    if (name.value.length < 4)
    { 
        errname.innerText="Alteast 4 Charater Required";
        name.focus(); 
        return false; 
    }
    else
    {
        errname.innerText =""
    } 

    if (address.value == "")                               
    { 
        erraddress.innerText="Address field cannot be empty"; 
        address.focus(); 
        return false; 
    }
    else
    {
        erraddress.innerText = ""
    } 


    if (email.value == "")                                   
    { 
        erremail.innerText="Email cannot be empty";
        email.focus(); 
        return false; 
    }
    else
    {
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
        {
            erremail.innerText="";
        }
        else
        {
            erremail.innerText="Email is Invalid";
            email.focus();
            return false; 
        }
    } 


    if (password.value == "")                        
    { 
        errpassword.innerText="Password cannot be Empty";
        password.focus(); 
        return false; 
    }
    else
    {
        if(password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/))
        {
            errpassword.innerText="";
        }
        else
        {
            errpassword.innerText="Password contain 7 to 15 characters which contain at least one numeric digit and a special character";
            return false;
        }  
    } 


    if (cpassword.value == "")                        
    { 
        errcpassword.innerText="Password cannot be Empty";
        cpassword.focus(); 
        return false; 
    }
    else
    {
        if(password.value == cpassword.value)
        {
            errcpassword.innerText="";
        }
        else
        {
            errcpassword.innerText="Password and confirm password must be same";
            cpassword.focus(); 
            return false; 
        }

    }

    if (phone.value == "")                           
    { 
        errphone.innerText="Phone field cannot be empty";
        phone.focus(); 
        return false; 
    }
    else
    {
        errphone.innerText="";
    }

    return true;

}
