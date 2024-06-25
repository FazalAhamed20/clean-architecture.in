import { producer } from "..";

export const productCreatedProducer = async (
    data: {
        _id: string;
        name: string;
        stock: string;
        description: string;
        price: string;
    }
) => {
    try {
        await producer.connect()
        console.log("producer connected");
        

        const messages = [
         
            {
                topic: 'to-product',
                messages: [{
                    key: 'productCreated',
                    value: JSON.stringify(data)
                },]
            },
            {
                topic: 'to-product',
                messages: [{
                    key: 'haisend',
                    value: 'hai'
                },]
            }
        ];

        await producer.sendBatch({topicMessages: messages})
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
        console.log("producer disconnect");
        
    }
}