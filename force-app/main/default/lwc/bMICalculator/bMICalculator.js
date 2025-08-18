import { LightningElement } from 'lwc';

export default class BMICalculator extends LightningElement {
    initial = { cms: '175 cms', kgs: '75 kgs' }
    height = ''
    weight = ''
    bmi = 24.5
    result = 'Healthy'

    heightChange(event) {
        this.height = event.target.value
    }
    weightChange(event) {
        this.weight = event.target.value
    }

    submitHandler(event) {
        event.preventDefault()
        let hsq = (Number(this.height) * Number(this.height))/10000
        this.bmi = (Number(this.weight)/hsq).toFixed(1)

        if(this.bmi <= 60) {
            const temp = ((this.bmi/65)*100).toFixed(1).toString() + '%'
            this.template.querySelector('.scale-sign').style.left = temp
        }
        else {
            this.template.querySelector('.scale-sign').style.left = '94%'
            this.bmi = '60+'
        }

        if(this.bmi < 18.5) {
            this.result = 'Underweight'
        } else if(this.bmi <= 25) {
            this.result = 'Healthy'
        } else if(this.bmi <= 40) {
            this.result = 'Overweight'
        } else {
            this.result = 'Obese'
        }
    }

    reCalculate() {
        this.height = ''
        this.weight = ''
        this.bmi = 0
        this.result = ''
    }
}