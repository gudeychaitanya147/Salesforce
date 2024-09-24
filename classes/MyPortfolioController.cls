public with sharing class MyPortfolioController {

    @AuraEnabled (Cacheable=true)
    public static PortfolioUser__c retriveUser() {
        PortfolioUser__c result = [SELECT Id, Name, AboutMe__c, Designation__c, YearsOfExp__c, PeoplesoftExp__c, SalesforceExp__c, TrailheadAchieve__c, Hobbies__c, Gmail__c, PhoneNumber__c, Location__c, Facebook__c, Linkedin__c, Whatsapp__c, Trailhead__c FROM PortfolioUser__c LIMIT 1];
        return result;
    }
}
