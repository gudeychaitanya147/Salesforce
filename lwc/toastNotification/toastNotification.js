import { LightningElement, api } from 'lwc';

export default class ToastNotification extends LightningElement {

    showMessage = false
    @api messageType = 'info'
    @api message = 'Information'

    @api notify() {
        this.showMessage = true
        setTimeout(() => {
            this.showMessage = false
        }, 3000)
    }

    get hrefReturn() {
        return '/assets/icons/utility-sprite/svg/symbols.svg#' + this.messageType
    }
    get spanReturn() {
        return 'slds-m-right_small slds-no-flex slds-align-top slds-icon_container slds-icon-utility-' + this.messageType
    }
    get divReturn() {
        return  'slds-notify slds-notify_toast slds-theme_' + this.messageType
    }
}