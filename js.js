const eye = document.getElementById("univisible");
const hide = document.getElementById("invisible");
const loginbtn = document.querySelector('.login-button');
const password = document.querySelector('input-password');   
const pass = document.getElementById('pass');
const user = document.getElementById('user-name-input'); 

eye.onclick = function(){
eye.classList.toggle('active');

    hide.classList.toggle('show');
    document.getElementById('pass').type = 'text';
};
hide.onclick = function(){
    eye.classList.remove('active');
    
        hide.classList.remove('show');
        document.getElementById('pass').type = 'password';
    };

    loginbtn.addEventListener("click", event =>{
        verifyUserName()
        verifyPassword()
        

     
      

        });
        function verifyPassword() {  
            var pw =document.getElementById('pass').value;
            //check empty password field  
            if(pw == "") {  
               document.getElementById("message").innerHTML = "**Fill the password please!";  
               return false;  
            }  
             
           //minimum password length validation  
            if(pw.length < 8) {  
               document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
               return false;  
            }  
            
          //maximum length of password validation  
            if(pw.length > 15) {  
               document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
               return false;  
            } else {  
                document.getElementById("message").innerHTML = "" 
               alert("Password is correct");  
            }  
          };
          //user-name
          function verifyUserName() {  
            var user=document.getElementById('user-name-input').value;
            //check empty user field  
            if(user == "") {  
               document.getElementById("message1").innerHTML = "**Fill the UserName please!";  
               return false;  
            }  
             
           //minimum user length validation  
            if(user.length < 4) {  
               document.getElementById("message1").innerHTML = "**UserNmae length must be atleast 4 characters";
               document.getElementById("message1").style.color="#d70101";
            }  

            if(user.length >  4) {  
                document.getElementById("message1").innerHTML = "Done";
                document.getElementById("message1").style.color="#96d701";  
                return false;  
             }
            
          
          }



   
 
        

       
            
           