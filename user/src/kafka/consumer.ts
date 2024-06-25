import { consumer } from "./index";
import { createSubscriber } from "./subscriber";

export const runConsumer = async () => {
    try {
        await consumer.connect();
        console.log("connected");

        await consumer.subscribe({
            topic: 'to-user',
            fromBeginning: false
        });

        const subscriber: any = createSubscriber();

        await consumer.run({
            eachMessage: async ({ message }) => {
                
                
                const { key, value } = message;
                console.log(String(key));
                

                try {
                    const subscriberMethod = String(key);
                    const subscriberData = JSON.parse(String(value));
                    
                    console.log(subscriberMethod, '---------');
                    console.log(subscriberData, '=============');

                   
                        await subscriber[subscriberMethod](subscriberData);
                    
                } catch (error: any) {
                    console.error('Error processing message:', error.message);
                    // Optionally handle the error or throw it further
                }
            },
        });

    } catch (error: any) {
        console.error('Consumer error:', error.message);
        // Optionally handle the error or throw it further
    }
};

export const stopConsumer = async () => {
    try {
        await consumer.stop();
        await consumer.disconnect();
        console.log("stopped");
    } catch (error:any) {
        console.error('Error stopping consumer:', error.message);
        // Optionally handle the error
    }
};
