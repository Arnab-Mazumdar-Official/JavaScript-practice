class BankAccount {
    
    constructor(name, accontnumber, balance) {
        this.name = name;
        this.accontnumber = accontnumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} is cridited to the Account of ${this.accontnumber}`);
        this.displaybalance();
    }

    displaybalance() {
        console.log(`Current balance in the Account Number ${this.accontnumber} : ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance!!....");
        }
        else {
            this.balance -= amount;
            console.log(`${amount} is debited to the Account of ${this.accontnumber}`);
            this.displaybalance();
        }
    }

    transfer(amount,secoendaryAccountNumber){
        if(amount > this.balance){
            throw new Error("Insufficient balance!!....");
        }
        else{
            secoendaryAccountNumber.deposit(amount);
            this.balance -= amount;
            console.log(`${amount} transfered to the acc no ${secoendaryAccountNumber} from ${this.accontnumber}`);
            this.displaybalance();
        }
    }
}

const account1 = new BankAccount('SB-012', 'Karishma Hedy', 2000);
const account2 = new BankAccount('SB-019', 'Phokas Intan', 3000);

account1.displaybalance();
account2.displaybalance();

account1.deposit(500);
account1.displaybalance();

account1.withdraw(200);
account1.displaybalance();

account1.transfer(700, account2);
account1.displaybalance();
account2.displaybalance();