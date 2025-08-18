public with sharing class TriggerRecursion {

    public static Set<String> executedTriggers = new Set<String>();
    public static Boolean checkTriggerExecution(String triggerName) {
        if(executedTriggers.contains(triggerName)) {
            return true;
        }
        executedTriggers.add(triggerName);
        return false;
    }
}