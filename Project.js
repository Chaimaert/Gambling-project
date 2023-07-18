
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
};

const SYMBOLS_Values = {
    A:5,
    B:4,
    C:3,
    D:2
};

// 1.Collect deposit from the user

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a Deposit amount: ");
        const bnDepositAmount = parseFloat(depositAmount);

        if(isNaN(bnDepositAmount) || bnDepositAmount <=0) {
            console.log("Invalid deposit, please try again !!");
        }else{
            return bnDepositAmount;
        }
    }
};

// 2.Determine nbr of lines to bet on

const getNumberOfLines = () => {
    while(true){
        const Lines = prompt("Enter the number of lines to bet on (1-3): ");
        const NumberOfLines = parseFloat(Lines);

        if(isNaN(NumberOfLines) || NumberOfLines <=0 || NumberOfLines > 3 ) {
            console.log("Invalid number, please try again !!");
        }else{
            return NumberOfLines;
        }
    }
}

// 3.Collect a bet amount

const getBet = (balance, Lines) => {
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const NumberBet= parseFloat(bet);

        if(isNaN(NumberBet) || NumberBet <=0 || NumberBet > (balance/Lines) ) {
            console.log("Invalid bet, please try again !!");
        }else{
            return NumberBet;
        }
    }
};

// 4.Spin the slot machine

const spin = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
        symbols.push(symbol);
        }
    }
    const reels =[];
    for (let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; i < ROWS; j++){
            const randomIndex = Math.floor(math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1); // To delete the element that we took after adding it to the array
        }
    }
    return reels;
};


const reels = spin();
let balance = deposit();
const nbrlines = getNumberOfLines();
const bet = getBet(balance);

