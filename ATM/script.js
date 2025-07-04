
    let accounts = [
        {
            acc_num : "126473811123",
            pin : "1234",
            balance : 120000
        },
        {
            acc_num : "33628189661",
            pin : "1131",
            balance : 230000
        },
        {
            acc_num : "883516278012",
            pin : "5555",
            balance : 278000
        },
        {
            acc_num : "11111111111",
            pin : "1111",
            balance : 450000
        }
    ];

function signin(){
    const accNum = document.getElementById("Account_Num").value;
    const accPin = document.getElementById("pass").value;

        let found = false;
            var account_index;

    for(let i=0;i<accounts.length;i++){
        if(accounts[i].acc_num == accNum && accounts[i].pin == accPin){
            found = true;
            account_index = i;
            break;
        }
    }
    if(found){
        localStorage.setItem("current_acc",accounts[account_index].acc_num);
        localStorage.setItem("current_balance",accounts[account_index].balance);
                localStorage.setItem("current_pin",accounts[account_index].pin);
        window.location.href = "main.html";
    }
    else {
        alert("No Account Found");
        return;
    }
}

window.addEventListener("DOMContentLoaded",function(){
    if(window.location.pathname.includes("balance.html")){

      const acc_no =   localStorage.getItem("current_acc");
      const balance =  localStorage.getItem("current_balance");

      if(!acc_no){
        alert("Login First!");
        window.location.href="atm.html";
      }

      let p =  `Account No : ${acc_no}<br>`;
      let p2 = `Balance : ${balance}<br>`;

      document.getElementById("display").innerHTML = p;
        document.getElementById("display2").innerHTML = p2;
    }
});

window.addEventListener("DOMContentLoaded",function(){

    if(this.window.location.pathname.includes("withdrawdone.html")){

    const account_number = localStorage.getItem("loggedin_acc");
    const balance = localStorage.getItem("loggedin_balance");

        let print = `Account Number : ${account_number}<br>`;
        let print2 = `Current Balance : ${balance}<br>`;

        document.getElementById("display").innerHTML = print;
        document.getElementById("display2").innerHTML = print2;
    }
});


function withdraw(){
    const amount_entered = parseFloat(document.getElementById("money").value);
    const pin_entered = document.getElementById("pass").value;

    if(amount_entered == "" || pin_entered == ""){
        alert("Please Fill Both of Them");
        return;
    }

    let found = false;
    var account_index;
     for(let i=0;i<accounts.length;i++){
        if(accounts[i].pin == pin_entered){
            found = true;
            account_index = i;
            break;
        }
    }

    if(found){
        if(accounts[account_index].balance >= amount_entered){
            accounts[account_index].balance -= amount_entered;

            localStorage.setItem("loggedin_pin",accounts[account_index].pin);
            localStorage.setItem("loggedin_acc",accounts[account_index].acc_num);
            localStorage.setItem("loggedin_balance",accounts[account_index].balance);
                alert("Request Proceed");
                window.location.href="withdrawdone.html";
        }
    }
    else {
        alert("No Account Found");
        return;
    }

}

function transfer(){
    const receiver_acc_no = document.getElementById("acc").value;
    const amount = document.getElementById("money").value;
    const user_pin = document.getElementById("pass").value;

        var logged_in_acc_pin = localStorage.getItem("current_pin");
        var logged_in_acc_balance = localStorage.getItem("current_balance");

    if(logged_in_acc_pin == user_pin){
    var receiver_acc_index;
    var receiver_found = false;
      for(let i=0;i<accounts.length;i++){
        if(accounts[i].acc_num == receiver_acc_no){
            receiver_found = true;
            receiver_acc_index = i;
            break;
        }
    }

            var user_acc_index;
            var user_found = false;
            for(let i=0;i<accounts.length;i++){
            if(accounts[i].pin == user_pin){
            user_found = true;
            user_acc_index = i;
            break;
        }
    }

    if(receiver_found){
        accounts[receiver_acc_index].balance += amount;
        accounts[user_acc_index].balance -= amount;
        alert("Money Transferred\nYour Current Balance : "+accounts[user_acc_index].balance);
        return;
    }
    if(!receiver_found){
        alert("No User Found");
    }
 
}
else{
    alert("Incorrect Pin");
    return;
}
}