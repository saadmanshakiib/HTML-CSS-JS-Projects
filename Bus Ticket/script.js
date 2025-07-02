        
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
        return;
    }
    if(from == "Dhaka"){
       alert("Both Starting Location & Destination Cant Be Same!");
       return;
    }

                 let bus = [
        {
            bus_name : "Hanif",
            bus_no : "701",
            from_station : "Chittagong",
            to_station : "Dhaka",
            starting_time : "7:30 AM",
            reaching_time : "12:00 PM",
            boarding_point : "Dampara Bus Stand",
            dropping_point : "Abdullahpur Bus Stand",
                        break_point : "Hotel Noorzahan"
        },
        {
            bus_name : "Sonar Bangla Express",
            bus_no : "702",
            from_station : "Chittagong",
            to_station : "Dhaka",
            starting_time : "5:00 PM",
            reaching_time : "9:00 PM",
            boarding_point : "Dampara Bus Stand",
            dropping_point : "Abdullahpur Bus Stand",
                        break_point : "Hotel Noorzahan"
        },
        {
            bus_name : "Sonar Bangla Express",
            bus_no : "703",
            from_station : "Dhaka",
            to_station : "Chittagong",
            starting_time : "7:30 AM",
            reaching_time : "12:00 PM",
            boarding_point : "Abdullahpur Bus Stand",
            dropping_point : "Dampara Bus Stand",
                        break_point : "Hotel Noorzahan"
        },
        {
            bus_name : "Hanif",
            bus_no : "704",
            from_station : "Dhaka",
            to_station : "Chittagong",
            starting_time : "7:30 AM",
            reaching_time : "12:00 PM",
            boarding_point : "Abdullahpur Bus Stand",
            dropping_point : "Dampara Bus Stand",
            break_point : "Hotel Noorzahan"
        },
        {
            bus_name : "Saudia",
            bus_no : "705",
            from_station : "Chittagong",
            to_station : "Dhaka",
            starting_time : "10:00 AM",
            reaching_time : "1:00 PM",
            boarding_point : "Dampara Bus Stand",
            dropping_point : "Abdullahpur Bus Stand",
                        break_point : "Hotel Noorzahan"
        },
        {
            bus_name : "Saudia",
            bus_no : "706",
            from_station : "Dhaka",
            to_station : "Chittagong",
            starting_time : "1:00 PM",
            reaching_time : "6:00 PM",
            boarding_point : "Abdullahpur Bus Stand",
            dropping_point : "Dampara Bus Stand",
                        break_point : "Hotel Noorzahan"
        }
    ]

    let matched_bus = bus.filter(
    bus1 => bus1.from_station.toLowerCase() === from.toLowerCase() &&
    bus1.to_station.toLowerCase() == to.toLowerCase()
                            );

    localStorage.setItem("matched_bus",JSON.stringify(matched_bus));
    localStorage.setItem("journeyDate",date);
    window.location.href = "searchResults.html";
}

function Confirm(){

    const confirmMesg = confirm("Are you sure to continue ?");
    if(confirmMesg) window.location.href = "payment.html";
    else return;
}

            let selectedSeats = [];
   
        function selectSeat(button){

            const seatNumber = button.innerText;

            if(button.classList.contains("selected")){
                button.classList.remove("selected");
                selectedSeats = selectedSeats.filter(
                    seats => seats !== seatNumber
                );
            }
            else{
                        if(selectedSeats.length >= 3){
                            alert("You cant choose more than 3 seats");
                            return;
                        }
                        button.classList.add("selected");
                        selectedSeats.push(seatNumber);
            }
                document.getElementById("confirmButton").disabled = selectedSeats.length === 0;
        }

        function payment(){
            const accnumber = document.getElementById("acc").value;
                        const pin = document.getElementById("pin").value;

                        let Accounts = [
                            {
                                account_number : "11111111",
                                password : "asdf"
                            },
                            {
                                account_number : "22222222",
                                password : "qwer"
                            },
                            {
                                account_number : "33333333",
                                password : "zxcv"
                            }
                        ];

                            let found = false;
                        for(let i=0;i<Accounts.length;i++){
                            if(Accounts[i].account_number == accnumber && Accounts[i].password == pin){
                                found = true;
                        localStorage.setItem("Logged_Account",Accounts[i].account_number);
                                break;    
                                                }
                        }
                        if(found){
                            window.location.href = "paymentdone.html";
                        }
                        else{
                                alert("Account Number and Password Doesnt Match");
                                document.getElementById("acc").value = "";
                                document.getElementById("pass").value = "";
                                return;
                            
                        }
        }
