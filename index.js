var initalPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#output-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler(){
    var ip = Number(initalPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr )
}

function showOutput(message){
    outputBox.innerHTML = message;
}

function calculateProfitAndLoss(initial, quantity, current){
    if ( initial <=0  || quantity <=0 || current <=0 ) {
        showOutput(`Shares aren't for free my friend :) `);
        
    } else {
        if(initial > current){
            var loss = (initial - current) * quantity;
            var lossPercentage = ((initial - current) / initial)* 100;
            showOutput( `The loss is ${loss} and the 
                loss percentage is ${lossPercentage} %`);
    
        }
        
        else if(current > initial){
            var profit = (current - initial ) * quantity;
            var profitPercentage = ( (current - initial ) / initial ) * 100;
            showOutput( `The profit is ${profit} and the 
                profit percentage is ${profitPercentage} %`);
        }
        else{
            showOutput( `No pain, no gain and vice-versa`);
        }
    }
    

}

submitBtn.addEventListener('click', submitHandler );
