/*
In the below example we are using inheritance to achieve OCP. we could also send the instance to constructor.
*/


interface IPaymentProcessor{
    processPayment(type: number) : void;
}

class PaymentProcessor{
    paymentProcessor: IPaymentProcessor;
    constructor(paymentProcessor : IPaymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }

    processPayment(amount : number): void {
        console.log(`Rs. ${amount} of payment processed.`);
    }
}

class PaytmPaymentProcessor implements IPaymentProcessor{
    processPayment(amount : number): void {
        console.log(`Rs. ${amount} of payment processed using Paytm.`);
    }
}

class PhonePePaymentProcessor implements IPaymentProcessor{
    processPayment(amount : number): void {
        console.log(`Rs. ${amount} of payment processed using PhonePe`);
    }
}

class RazorPayPaymentProcessor implements IPaymentProcessor{
    processPayment(amount : number): void {
        console.log(`Rs. ${amount} of payment processed using Razorpay`);
    }
}

const paytmPaymentProcessor = new PaytmPaymentProcessor();
const paymentProcessor2 = new PaymentProcessor(paytmPaymentProcessor);
paymentProcessor2.processPayment(100);

const phonePePaymentProcessor = new PaytmPaymentProcessor();
const paymentProcessor3 = new PaymentProcessor(phonePePaymentProcessor);
paymentProcessor3.processPayment(200);