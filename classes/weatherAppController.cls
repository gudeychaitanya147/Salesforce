public with sharing class weatherAppController {

   static String key = '';

   @AuraEnabled 
   public static string getWeatherDetails(String input){
      String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric&appid=' + key;
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