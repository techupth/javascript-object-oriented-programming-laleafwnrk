class EmailNotification { 
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId=notificationId;
        this.createdTime=createdTime;
        this.content=content;
        this.receiver=receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification {
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId=notificationId;
        this.createdTime=createdTime;
        this.content=content;
        this.phoneNumber=phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
 }
 let firstEmail = new EmailNotification(1, "11:20", "Hello", "techup@gmail.com");
 firstEmail.send();
 
 let firstNumber = new SMSNotification(2, "11:20", "Hello", "099-9999999");
 firstNumber.send();