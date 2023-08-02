// Step 2: Concrete Products
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function () {
        console.log("Sending an email notification......");
        // Email notification specific logic
    };
    return EmailNotification;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function () {
        console.log("Sending an SMS notification......");
        // SMS notification specific logic
    };
    return SMSNotification;
}());
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.send = function () {
        console.log("Sending a push notification......");
        // Push notification specific logic
    };
    return PushNotification;
}());
// Step 3: Factory
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.prototype.createNotification = function (type) {
        switch (type.toLowerCase()) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid notification type: ".concat(type));
        }
    };
    return NotificationFactory;
}());
// Step 4: Client Code
function main() {
    var factory = new NotificationFactory();
    var emailNotification = factory.createNotification("email");
    emailNotification.send();
    var smsNotification = factory.createNotification("sms");
    smsNotification.send();
    var pushNotification = factory.createNotification("push");
    pushNotification.send();
}
main();
