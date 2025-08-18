import { LightningElement } from 'lwc'
import {countryCodeList} from 'c/countryCodeList'
import currencyConverter from '@salesforce/resourceUrl/currencyConverter'
import getCurrencyDetails from  '@salesforce/apex/currencyConverterController.getCurrencyDetails'

export default class CurrencyConverterApp extends LightningElement {
    currencyImage = currencyConverter
    countryList = countryCodeList
    countryFrom = "USD"
    countryTo = "AUD"
    amount = ''
    result = ''
    error = ''

    handleChange(event){
        const {name, value} = event.target
        this[name] = value
        this.result=''
        this.error =''
    }

    async submitHandler(event){
        event.preventDefault()
        //this.convert()

        await getCurrencyDetails({countryFrom : this.countryFrom, countryTo: this.countryTo}).then(res => {
            const jsonData = JSON.parse(res)
            this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
        }).catch((error) => { this.error="An error occurred. Please try again..." })
    }

    /* API Calling from JS
    async convert(){
        const API_KEY = '45fa5141095f12aa3d1c8125'
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
        try{
            const data = await fetch(API_URL)
            const jsonData = await data.json()
            debugger;
            this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
        } catch(error){ this.error="An error occurred. Please try again..." }
    } */

    swapValues() {
        const temp = this.countryFrom
        this.countryFrom = this.countryTo
        this.countryTo = temp
        this.result = ''
        this.template.querySelector('.countryFrom').value = this.countryFrom
        this.template.querySelector('.countryTo').value = this.countryTo
    }
}