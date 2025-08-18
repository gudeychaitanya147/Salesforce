import { LightningElement, api } from 'lwc';

export default class NoteBox extends LightningElement {

    @api noteId = ''
    @api noteTitle = ''
    @api noteDescribe = ' '
    @api lastModified = ''

    editRecord() {  
        this.dispatchEvent(new CustomEvent('editNoteRecord', {bubbles:true}))
    }
    deleteRecord() {
        this.dispatchEvent(new CustomEvent('deleteNoteRecord', {bubbles:true}))
    }
    renderedCallback() {
        this.template.querySelector('.describe').innerHTML = this.noteDescribe;
    }
}