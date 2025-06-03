        
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
                else if(users[i].Email != email){
                    if(enterEmail.endsWith("@gmail.com") && number.length == 11 && year<=2025 && nid.length == 16 && date<=31){
                        alert("Account has been created!");
                        window.location.href="loginpage.html";
                    }
                    else{
                        alert("Check all the fields correctly and fullfill");
                    }
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

function search(){

    const from = document.getElementById("fromStation").value;
    const to = document.getElementById("toStation").value;
    const date = document.getElementById("journeyDate").value;

    if(from == "" || to == "" || date == ""){
        alert("Please fill all the fields");
    }

        else{
            window.location.href = "searchResults.html";
             let trains = [
        {
            train_name : "Suborno Express",
            train_no : "701",
            from_station : "Chittagong",
            to_station : "Dhaka",
            starting_time : "7:30 AM",
            reaching_time : "12:00 PM"
        },
        {
            train_name : "Sonar Bangla Express",
            train_no : "702",
            from_station : "Chittagong",
            to_station : "Dhaka",
            starting_time : "5:00 PM",
            reaching_time : "9:00 PM"
        },
        {
            train_name : "Sonar Bangla Express",
            train_no : "703",
            from_station : "Dhaka",
            to_station : "Chittagong",
            starting_time : "7:30 AM",
            reaching_time : "12:00 PM"
        },
        {
            train_name : "Suborno Express",
            train_no : "704",
            from_station : "Dhaka",
            to_station : "Chittagong",
            starting_time : "7:30 AM",
            reaching_time : "12:00 PM"
        }
    ]

    let matched_trains = trains.filter(
                                train => train.from_station.toLowerCase() == from.toLowerCase() &&
                                train.to.toLowerCase() == to.toLowerCase());

                document.getElementById("trainName").value = matched_trains.train_name;    
                document.getElementById("From").value = matched_trains.from_station;
                document.getElementById("To").value = matched_trains.to_station;
                document.getElementById("StartTime").value = matched_trains.starting_time;
                document.getElementById("EndTime").value = matched_trains.reaching_time;



        
        }
            

    

}