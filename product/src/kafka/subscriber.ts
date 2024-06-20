import productCreatedConsumer from "./consumer/productConsumer";

export const createSubscriber = () => {
    return {
        productCreated: productCreatedConsumer
    }
}