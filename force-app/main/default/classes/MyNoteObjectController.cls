public with sharing class MyNoteObjectController {

    @AuraEnabled(cacheable=true)        // No cacheable for DML operations
    public static List<My_Note__c> getAllNotes() {
        return [select Id, Name, Description__c, LastModifiedDate from My_Note__c order by LastModifiedDate desc limit 50];
    }

    @AuraEnabled
    public static void insertNote(String title, String describe) {
        try {
            if(!String.isBlank(title)) {
                My_Note__c newNote = new My_Note__c(Name=title, Description__c=describe);
                Database.SaveResult res = Database.insert(newNote);
                if(!res.isSuccess()) {
                    throw new DmlException('Note is not inserted');
                }
            }
        } catch(Exception ex) {
            System.debug(ex.getMessage());
        }
    }

    @AuraEnabled
    public static void deleteNote(String id) {
        try {
            if(!String.isBlank(id)) {
                Database.DeleteResult res = Database.delete(id);
                if(!res.isSuccess()) {
                    throw new DmlException('Note is not deleted');
                }
            }
        } catch(Exception ex) {
            System.debug(ex.getMessage());
        }
    }

    @AuraEnabled
    public static void updateNote(String id, String title, String describe) {
        try {
            if(!(String.isBlank(id) && String.isBlank(title))) {
                My_Note__c newNote = [select Id, Name, Description__c, LastModifiedDate from My_Note__c where id=:id];
                newNote.Name = title;
                newNote.Description__c = describe;
                Database.SaveResult res = Database.update(newNote);
                if(res.isSuccess()) {
                    throw new DmlException('Note is not updated');
                }
            }
        } catch(Exception ex) {
            System.debug(ex.getMessage());
        }
    }
}