class Bank {
    constructor() {
        this.names = '';
        this.branches = [];
    }

    addBranch(name) {
        this.branches.push(name);
        console.log(`${name} branch is add to branches`);
        this.displayAllBranches();
    }

    removeBranch(name){
        const index = this.branches.indexOf(name);

        if(index != -1)
        {
            this.branches.splice(index,1);
        }
        console.log(`${name} branch is removed from branches`);
        this.displayAllBranches();
    }

    displayAllBranches(){
        console.log("All the Branches are: ");
        this.branches.map((val) =>  console.log(val));
    }
} 
const bank = new Bank();
// Add branches
bank.addBranch('Branch A');
bank.addBranch('Branch B');
bank.addBranch('Branch C');
// Display all branches
bank.displayAllBranches();
// Remove a branch
bank.removeBranch('Branch B');
// Display all branches again
bank.displayAllBranches();