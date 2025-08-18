import { LightningElement } from 'lwc'
import weatherAppIcons from '@salesforce/resourceUrl/weatherAppIcons'
import getWeatherDetails from  '@salesforce/apex/weatherAppController.getWeatherDetails'

export default class Weather extends LightningElement {

    cityName = ''
    loading = ''
    loadingState = false
    errorState = false
    resultString = {}
    displayResult = false
    
    res = {
        icon : '',
        temp : '', 
        describe : '',
        city : '', 
        country : '', 
        feels : '', 
        humidity : ''
    }
    icons = {
        arrow : weatherAppIcons + '/weatherAppIcons/arrow-back.svg',
        map : weatherAppIcons + '/weatherAppIcons/map.svg',
        thermo : weatherAppIcons + '/weatherAppIcons/thermometer.svg',
        droplet : weatherAppIcons + '/weatherAppIcons/droplet.svg',
        clear : weatherAppIcons + '/weatherAppIcons/clear.svg',
        cloud : weatherAppIcons + '/weatherAppIcons/cloud.svg',
        haze : weatherAppIcons + '/weatherAppIcons/haze.svg',
        rain : weatherAppIcons + '/weatherAppIcons/rain.svg',
        snow : weatherAppIcons + '/weatherAppIcons/snow.svg',
        storm : weatherAppIcons + '/weatherAppIcons/storm.svg'
    }

    changeHandler(event) {
        this.cityName = event.target.value
    }

    async submitHandler(event) {
        event.preventDefault()
        this.errorState = false
        this.loadingState = true
        this.loading = 'Fetching Details...'

        if(this.cityName === '') {
            this.errorState = true
            this.loading = 'Please enter a city name'
            return
        }

        await getWeatherDetails({input : this.cityName}).then(res => {
            this.resultString = JSON.parse(res)
        }).catch((error) => {   
            this.loadingText = "Something went wrong"
        })

        if (this.resultString.cod === '404') {
            this.loading = this.cityName + ' is not a valid city name'
            this.errorState = true;
            return
        }

        this.res = {
            icon : this.iconDisplay(this.resultString.weather[0].id),
            temp : Math.round(this.resultString.main.temp), 
            describe : this.resultString.weather[0].description,
            city : this.resultString.name, 
            country : this.resultString.sys.country, 
            feels : Math.round(this.resultString.main.feels_like), 
            humidity : Math.round(this.resultString.main.humidity)
        } 

        this.loadingState = false
        this.displayResult = true
    }

    iconDisplay(id) {
        if(id===800) {
            return this.icons.clear
        } else if ((id >= 200 && id <= 232)) {
            return this.icons.storm
        } else if(id >=701 && id <= 781) {
            return this.icons.haze
        } else if(id >= 600 && id <= 622) {
            return this.icons.snow
        } else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            return this.icons.rain
        }
        return this.icons.cloud 
    }

    get loadingClass() {
        if(this.errorState) {
            return 'error-loading'
        }
        return 'loading'
    }

    returntoHome() {
        this.cityName = ''
        this.loading = ''
        this.loadingState = false
        this.errorState = false
        this.resultString = {}
        this.displayResult = false
    }
}