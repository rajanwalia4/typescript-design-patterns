// Step 1: Product Interface
interface INotification {
    send(): void;
}

// Step 2: Concrete Products
class EmailNotification implements INotification {
    send(): void {
        console.log("Sending an email notification......");
        // Email notification specific logic
    }
}

class SMSNotification implements INotification {
    send(): void {
        console.log("Sending an SMS notification......");
        // SMS notification specific logic
    }
}

class PushNotification implements INotification {
    send(): void {
        console.log("Sending a push notification......");
        // Push notification specific logic
    }
}

// Step 3: Factory
class NotificationFactory {
    createNotification(type: string): INotification {
        switch (type.toLowerCase()) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error(`Invalid notification type: ${type}`);
        }
    }
}

// Step 4: Client Code
function main() {
    const factory = new NotificationFactory();
    
    const emailNotification = factory.createNotification("email");
    emailNotification.send();
    
    const smsNotification = factory.createNotification("sms");
    smsNotification.send();
    
    const pushNotification = factory.createNotification("push");
    pushNotification.send();
}

main();
