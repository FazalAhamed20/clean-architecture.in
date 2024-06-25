import {producer} from '..'

export const sendHello= async () => {
    try {
        await producer.connect()

        console.log("connected");

        const messages = [
         
            {
                topic: 'to-user',
                messages: [{
                    key: 'helloCreated',
                    value: JSON.stringify('hello')
                },]
            },
           
        ];

        await producer.sendBatch({topicMessages:messages})
        
        
    } catch (error:any) {
        console.log(error);
        
        
    }finally{
        await producer.disconnect();
        console.log("disconnected");
        

    }
    
}