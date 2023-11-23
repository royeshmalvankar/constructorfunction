// "use strict";
function Bankacc(acno,name,type,bal){
    this.Acc_number = acno;
    this.Name = name;
    this.Type = type;
    this.Balance = bal;
    this.status =true;
    this.deposit= function(deop){
        this.Balance=this.Balance+deop
        console.log("Remaining Balance after deposit ₹"+(this.Balance));
    }
    this.withdraw=function(withd){
        if(this.Balance>=withd)
        {
            this.Balance=this.Balance-withd
            console.log("Remaining Balance after withdrawal ₹"+(this.Balance));
        }
        else
        {
            console.log("insufficient balance");
        }
        
    }
    this.checkbal=function(){
        console.log("Balance ₹"+(this.Balance));
    }
    this.isActive =function(con){
        if(this.status===true)
        {
            this.status=con
            console.log("Account is Active");
        }
        else
        {
            this.status=con
            console.log("Account is Inactive");
        }
    }
}

let ac1= new Bankacc(1001,"Royesh","sb_eazy_account",50000)
let ac2= new Bankacc(1002,"Rajesh","sb_eazy_account",50000)
let ac3= new Bankacc(1101,"Royesh","crb_bsn_account",2900000)

function getTotalBalance(){
    let total=ac1.Balance+ac2.Balance+ac3.Balance
    console.log("Total account Balance ₹"+(total));;
}

ac1.deposit(10000)
ac2.withdraw(10000)
ac1.checkbal()
ac2.checkbal()
ac3.checkbal()
ac1.isActive()
ac2.isActive()
ac3.isActive()
getTotalBalance()