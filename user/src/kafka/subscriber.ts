import userCreatedConsumer from "./consumers/userCreatedConsumer";
import hello from "./consumers/hello";

export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer,
        helloCreate:hello
    }
}