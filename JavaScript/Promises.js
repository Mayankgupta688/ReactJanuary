var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Sorry...");
    }, 5000)
});


var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");

dataPromise.then(function(data) {
    console.log(data)
}, function(data) {
    console.log(data)
})