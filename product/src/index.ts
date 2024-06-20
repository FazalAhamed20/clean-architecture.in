import app from "./server";
import { runConsumer, stopConsumer } from "./kafka/consumer";
import { dbConnection } from "./database";

(async () => {
  try {
    app;
    await dbConnection();

    console.log("before consumer");

    await runConsumer().catch((error: any) => {
      console.log(error);
      process.exit();
    });
    console.log("after consumer");

    process.on("SIGTERM", async () => {
      console.info("SIGTERM received");
      console.log("consumer stopping");
      stopConsumer();
    });
  } catch (error: any) {
    console.log(error?.message);
  }
})();
