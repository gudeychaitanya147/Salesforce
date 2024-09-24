import { LightningElement, wire } from 'lwc';
import getAllNotes from '@salesforce/apex/MyNoteObjectController.getAllNotes'
import deleteNote from '@salesforce/apex/MyNoteObjectController.deleteNote'
import insertNote from '@salesforce/apex/MyNoteObjectController.insertNote'
import updateNote from '@salesforce/apex/MyNoteObjectController.updateNote'
import { refreshApex } from '@salesforce/apex'

export default class NoteTaking extends LightningElement {

    deleteNoteModal = false
    updateNoteModal = false
    newNoteModal = false
    messageType = ''
    message = ''
    newNoteTitle = ''
    newNoteDescribe = ''
    noteTitle = ''
    noteDescribe = ''
    selectedNote = {}

    wireNotes = {}
    notes = []
    @wire(getAllNotes) records(result) {
        this.wireNotes = result
        const {data, error} = result
        if(data) {
            this.notes = data.map(item => {
                const descr = String(item.Description__c).replace(/\n/g, '<br>');
                const date = new Date(item.LastModifiedDate).toDateString();
                return { ...item, descr, date };
            });
        }
        if(error) {
            console.log('error', error.message.body)
        }
    }

    connectedCallback() {
        this.template.addEventListener('editNoteRecord', this.clickUpdate.bind(this));
        this.template.addEventListener('deleteNoteRecord', this.clickDelete.bind(this));
    }
    disconnectedCallback() {
        this.template.removeEventListener('editNoteRecord', this.clickUpdate.bind(this));
        this.template.removeEventListener('deleteNoteRecord', this.clickDelete.bind(this));
    }

    // onchange Updates
    newTitle(event) {
        this.newNoteTitle = event.target.value
    }
    newDesc(event) {
        this.newNoteDescribe = event.target.value
    }
    selectedNoteTitle(event) {
        this.selectedNote.title = event.target.value
    }
    selectedNoteDescribe(event) {
        this.selectedNote.describe = event.target.value
    }

    // For Modal Navigation
    newNote() {
        this.newNoteModal = true
    }
    clickUpdate(event) {
        const descr = String(event.target.noteDescribe).replace(/<br>/g, '\n');
        this.selectedNote = {id:event.target.noteId, title:event.target.noteTitle, describe:descr}
        this.updateNoteModal = true
    }
    clickDelete(event) {
        this.selectedNote = {id:event.target.noteId}
        this.deleteNoteModal = true
    }

    // In Modal Options
    doCancelModal() {
        this.deleteNoteModal = false
        this.updateNoteModal = false
        this.newNoteModal = false
        this.reset()        
    }
    doSaveModal() {
        if(this.newNoteModal) {
            this.insertNote()
        }
        else if(this.updateNoteModal) {
            this.updateNote()
        }
        else if(this.deleteNoteModal) {
            this.deleteNote()
        }
        this.reset()
    }

    // DML Operations
    insertNote() {
        if(this.newNoteTitle) { 
            insertNote({title: this.newNoteTitle, describe: this.newNoteDescribe}).then(res => {
                this.newNoteModal = false
                refreshApex(this.wireNotes)
                this.displayToast({type:'success', msg:'New Note is successfully created'})
            }).catch(error => console.log('error', error.message.body))
        }
        else {
            this.displayToast({type:'error', msg:'Please select a Title'})
        }
    }

    updateNote() {
        if(this.selectedNote.title) { 
            this.updateNoteModal = false
            updateNote({id:this.selectedNote.id, title: this.selectedNote.title, describe: this.selectedNote.describe}).then(res => {
                refreshApex(this.wireNotes)
                this.displayToast({type:'success', msg:'New Note is successfully updated'})
            }).catch(error => console.log('error', error.message.body))
        }
        else {
            this.displayToast({type:'error', msg:'Please select a Title'})
        }
    }

    deleteNote() {
        deleteNote({id:this.selectedNote.id}).then(res => {
            this.deleteNoteModal = false
            refreshApex(this.wireNotes)
            this.displayToast({type:'info', msg:'New Note is successfully deleted'})
        }).catch(error => console.log('error', error.message.body))
    }

    // Supporters
    displayToast({type, msg}) {
        this.messageType = type
        this.message = msg
        this.template.querySelector('c-toast-notification').notify()
    }
    reset() {
        this.newNoteTitle = ''
        this.newNoteDescribe = ''
        this.noteTitle = ''
        this.noteDescribe = ''
        this.selectedNote = {}
    }
}