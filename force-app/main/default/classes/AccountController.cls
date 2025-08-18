public with sharing class AccountController {
    public static void triggerHandler(List<Account> newRecords, List<Account> oldRecords) {
        Map<Object, Object> mapName = (Map<Object, Object>) JSON.deserializeUntyped(jsonString);
        
    }
}