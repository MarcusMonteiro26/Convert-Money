const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.24
const euro = 5.62
const bitcoin = 0.0000068
const libra = 6.35

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const dolarValueText = document.getElementById('dolar-value-text')


    realValueText.innerHTML = new Intl.NumberFormat("pt-br",
        { style: "currency", currency: "BRL", }).format(inputReais)

        if (select.value === "£ Libra Esterlina")  {

            dolarValueText.innerHTML = new Intl.NumberFormat("en-US",
                { style: "currency", currency: "GBP", }).format(inputReais / libra)
         }

     if (select.value === "₿ Bitcoin")    {

        dolarValueText.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "BTC", }).format(inputReais * bitcoin)
     }

    if (select.value === "US$ Dólar Americano") {

        dolarValueText.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD", }).format(inputReais / dolar)

    }

    if (select.value === "€ Euro") {

        dolarValueText.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR", }).format(inputReais / euro)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "£ Libra Esterlina") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./Assets/libra.png"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/bitcoin.png"
    }
    
    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/eua.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.png"
    }
    convertValues() 
}



button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
