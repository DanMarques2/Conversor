const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") 
    const currencyvalueconvert = document.querySelector(".currency-value")



    const dolartoday = 5.2
    const eurotoday = 6.2

    if (currencyselect.value == "dolar") {
        currencyvalueconvert.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolartoday)
    }

    if (currencyselect.value == "euro"){
        currencyvalueconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / eurotoday)
    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    }

    function chargecurrency(){
        const currencyname = document.getElementById("currency-name")
        const currencyimage = document.querySelector("currency-img")

        if (currencyselect.value == "dolar") {
            currencyname.innerHTML = "Dólar americano"
            currencyimage.src = "./assets/dolar.png"
        }
        if (currencyselect.value == "euro") {
            currencyname.innerHTML = "euro"
            currencyimage.src="./assets/euro.png"
        }

        convertvalues()
    }
    
    currencyselect.addeventlistener("change", chargecurrency)
    convertbutton.addEventListener("click", convertvalues)
  