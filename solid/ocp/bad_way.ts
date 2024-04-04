// Open Close Priciple : - 
/* 
    The disadvantage of this function is that every time we need to add a new payment method
    we need to edit the PaymentProcessor class which voilates OCP.

*/
class PaymentProcessor1{
    processPayment(amount : number,type:string){
        if(type == "paytm"){
            console.log(`Rs. ${amount} of payment processed using Paytm.`);
        }else if(type == "phonepe"){
            console.log(`Rs. ${amount} of payment processed using PhonePe.`);
        }else if(type == "razorpay"){
            console.log(`Rs. ${amount} of payment processed using RazorPay.`);
        }else{
            throw new Error("Invalid type of payment");
        }
    }
}

const paymentProcessor1 = new PaymentProcessor1();
paymentProcessor1.processPayment(1000, "paytm");

paymentProcessor1.processPayment(2000,"razorpay");