public with sharing class currencyConverterController {

    static String key = '';
    
   @AuraEnabled 
   public static String getCurrencyDetails(String countryFrom, String countryTo){
      String url = 'https://v6.exchangerate-api.com/v6/' + key + '/pair/' + countryFrom + '/' + countryTo;
      return getResponse(url);
   }

   static String getResponse(String strUrl){
      Http h  = new Http();
      HttpRequest req = new HttpRequest();
      HttpResponse res = new HttpResponse();
      req.setMethod('GET');
      req.setEndpoint(strUrl);
      req.setTimeout(120000);
      return h.send(req).getBody();
   }
}