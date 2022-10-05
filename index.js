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

function calculateProfitAndLoss(initial, quantity, current){
    
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial)* 100;

        console.log(loss, lossPercentage);
    }
    
    else if(current > initial){
        var profit = (current - initial ) * quantity;
        var profitPercentage = ( profit / initial ) * 100;

        console.log(profit, profitPercentage);

    }
    else{
        
    }
}

submitBtn.addEventListener('click', submitHandler );
