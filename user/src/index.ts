import server from './server'
import { runConsumer, stopConsumer } from './kafka/consumer';
import { database } from './database';

(async() => {
    try {
        server;
        await database()
        .catch((error:any) => {
            console.log(error?.message);
            process.exit();
        })

        await runConsumer()
        .catch((error: any) => {
            console.log(error);
            process.exit()
        })

        process.on('SIGTERM', async () => {
            console.info("SIGTERM received");
            console.log("consumer stopping");
            stopConsumer();
            });
    } catch (error: any) {
        console.log(error?.message);
    }
})();
