// ------------------------coingecko-------------------------------
// fetching api
function coingecko(){
let data = fetch('https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=inr%2CUSD%2CGBP%2CEUR%2CJPY&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=true&precision=true')
data.then((value1)=>{
    return value1.json()
    })
    .then((value2=>{

    // retrieving price data and assigning to the variables
    let inrCurrency = (value2.ethereum.inr)
    let usdCurrency = (value2.ethereum.usd)
    let gbpCurrency = (value2.ethereum.gbp)
    let eurCurrency = (value2.ethereum.eur)
    let jpyCurrency = (value2.ethereum.jpy)

    // sending data to html document
    document.getElementById("CG-inr").innerHTML = inrCurrency.toLocaleString("hi-IN",{style:"currency", currency:"INR"})
    document.getElementById("CG-usd").innerHTML = usdCurrency.toLocaleString("en-US",{style:"currency", currency:"USD"})
    document.getElementById("CG-gbp").innerHTML = gbpCurrency.toLocaleString("en-GB",{style:"currency", currency:"GBP"})
    document.getElementById("CG-eur").innerHTML = eurCurrency.toLocaleString("en-GB", {style:"currency", currency:"EUR"})
    document.getElementById("CG-jpy").innerHTML = jpyCurrency.toLocaleString("ja-JP", {style:"currency", currency:"JPY"})
    })).catch((error)=>{document.getElementById("errorHandlingCoinGecko").innerHTML = `Error: ${error}`})
}

coingecko()
setTimeout(() => {
    coingecko();
  }, 10000);



// ----------------------------cryptocompare-------------------------------
// fetching api
function cyptro(){
    let data = fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR,USD,GBP,EUR,JPY')
    data.then((value1)=>{
        return value1.json()
        })
        .then((value2=>{
    
        let inrCurrency = (value2.INR)
        let usdCurrency = (value2.USD)
        let gbpCurrency = (value2.GBP)
        let eurCurrency = (value2.EUR)
        let jpyCurrency = (value2.JPY) 
    
        // retrieving price data and sending data to html document
        document.getElementById("CC-inr").innerHTML = inrCurrency.toLocaleString("hi-IN",{style:"currency", currency:"INR"})
        document.getElementById("CC-usd").innerHTML = usdCurrency.toLocaleString("en-US",{style:"currency", currency:"USD"})
        document.getElementById("CC-gbp").innerHTML = gbpCurrency.toLocaleString("en-GB",{style:"currency", currency:"GBP"})
        document.getElementById("CC-eur").innerHTML = eurCurrency.toLocaleString("en-GB", {style:"currency", currency:"EUR"})
        document.getElementById("CC-jpy").innerHTML = jpyCurrency.toLocaleString("ja-JP", {style:"currency", currency:"JPY"})
        })).catch((error)=>{document.getElementById("errorHandlingCryptoCompare").innerHTML = `Error: ${error}`})
    }
    
    cyptro()
    setTimeout(() => {
        cyptro();
      }, 10000);


