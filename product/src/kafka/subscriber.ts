import productCreatedConsumer from "./consumer/productConsumer";

export const createSubscriber = () => {
    return {
        productCreated: productCreatedConsumer,
        haisend: (data: any) => {
            console.log('Handling haisend:', data);
            
        }
        
    }
}