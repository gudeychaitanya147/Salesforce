public with sharing class MyPortfolioController {

    static String apiKey = '';
    static String domain = '';
    static String endpoint = 'https://api.mailgun.net/v3/' + domain + '/messages';


    @AuraEnabled(cacheable=false)
    public static void sendContactEmail(String userName, String userEmail, String userMessage) {
/*
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new String[] { toEmail });
        email.setSubject('New Message from Your Portfolio Contact Form!');
        String body = '\nHi '+ host + ',\n\nYou have received a new message from the contact form on your portfolio page. Here are the details:\n\nName -- ' + userName + '\nEmail -- ' + userEmail + '\n-- Message --\n\n' + userMessage;
        email.setPlainTextBody(body);
        Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] { email });
*/
/*
        Map<String, Object> flowInputs = new Map<String, Object>();
        flowInputs.put('userName', userName);
        flowInputs.put('userEmail', userEmail);
        flowInputs.put('userMessage', userMessage);

        Flow.Interview.Send_Email_from_Portfolio flow = new Flow.Interview.Send_Email_from_Portfolio(flowInputs);
        flow.start();
*/

        Http http = new Http();
        HttpRequest request = new HttpRequest();

        // Set endpoint and method
        request.setEndpoint(endpoint);
        request.setMethod('POST');

        // Set basic auth header
        Blob headerValue = Blob.valueOf('api:' + apiKey);
        String authorizationHeader = 'Basic ' + EncodingUtil.base64Encode(headerValue);
        request.setHeader('Authorization', authorizationHeader);

        // Set content type for form data
        request.setHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Set POST parameters
        String emailBody = 'Hi Chaitanya Gudey,\n\n' +
                   'You have received a new message from the contact form on your portfolio page.\n\n' +
                   '\nEmail -- ' + userEmail +
                   '\n\n--- Message ---\n' + userMessage +
                   '\n\n\nThanks & Regards,\n' + userName;
        String body =
            'from=' + EncodingUtil.urlEncode('Mailgun Sandbox <postmaster@' + domain + '>', 'UTF-8') +
            '&to=' + EncodingUtil.urlEncode('Chaitanya Gudey <gudeychaitanya147@gmail.com>', 'UTF-8') +
            '&subject=' + EncodingUtil.urlEncode('Hello Chaitanya Gudey', 'UTF-8') +
            '&text=' + EncodingUtil.urlEncode(emailBody, 'UTF-8');
        request.setBody(body);

        try {
            HttpResponse response = http.send(request);
        } catch (Exception e) {
            System.debug('Mailgun Email Error: ' + e.getMessage());
        }
    }
}
