        
        let users = [
        { 
        Email : "saadman102002@gmail.com",
        Pass : "asdf"
        },
    {
        Email : "nissan120438@gmail.com",
        Pass : "qwer"
    }
        ]

function signup(){
    window.location.href = "signupPage.html"
}
function signin(){
    const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;

            let isValid = false;

        for(let i  = 0;i<users.length;i++){
            if(users[i].Email == email && users[i].Pass == pass){
                isValid = true;
                    break;           
                }
            }

            if(isValid){
                window.location.href="homepage.html";
            }

            else{
                alert("Incorrect Email or Password");
                document.getElementById("email").value = "";
                document.getElementById("pass").value = "";
            }
        }

function check(){

    const Password = document.getElementById("pass").value;
    const ConfirmPass = document.getElementById("confirmedpass").value;
    const enterEmail = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const nid = document.getElementById("nid").value;
    const date = document.getElementById("date").value;
    const year = document.getElementById("year").value;

    if(name == "" || number == "" || nid=="" || date == "" || year=="" || email =="" || Password=="" || ConfirmPass==""){
        alert("Please fill all the required details");
    }

    else{

    if(Password == ConfirmPass){
            for(let i=0;i<users.length;i++){
                if(users[i].Email == enterEmail){
                    alert("Account Already exists");
                    document.getElementById("pass").value = "";
                    document.getElementById("confirmedpass").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("number").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("birthmont").value = "";

                }
                    }   
            }
    else{
        alert("Passwords dont match");
         document.getElementById("pass").value = "";
                    document.getElementById("confirmedpass").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("number").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("birthmont").value = "";
    }
    }
}