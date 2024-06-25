import { producer } from "..";

export const userCreatedProducer = async (
    data: {
        name: string;
        email: string;
        password: string;
    }
) => {
    try {
        await producer.connect();
        console.log("connected");

        const messages = [{
            topic: 'to-user',
            messages: [{
                key: 'userCreated',
                value: JSON.stringify(data)
            }]
        }];
        
        console.log(data);
        await producer.sendBatch({ topicMessages: messages });

    } catch (error: any) {
        console.log(error?.message);
    } finally {
        await producer.disconnect();
        console.log("disconnected");
    }
};
