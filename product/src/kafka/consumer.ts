import { consumer } from "./index";
import { createSubscriber } from "./subscriber";

export const runConsumer = async () => {
    try {
        
        await consumer.connect();
        console.log("consumer connected");
        

        await consumer.subscribe({
            topic: 'to-product',
            fromBeginning: true
        });

        const subscriber: any = createSubscriber()

        await consumer.run({
            eachMessage: async ({message}) => {
                const {key, value} = message;
                console.log("key",String(key));
                
                const subscriberMethod = String(key)
                const subscriberData = JSON.parse(String(value))
                console.log(subscriberMethod,'---------');
                console.log(subscriberData,'=============');
                
                try{
                    await subscriber[subscriberMethod](subscriberData);
                    
                } catch(error: any) {
                    throw new Error(error?.message)
                }
            }
        })
    } catch (error: any) {
        throw new Error(error?.message)
    }
}
export const stopConsumer = async () => {
    await consumer.stop()
    await consumer.disconnect()
    console.log("consumer disconnected");
    
}