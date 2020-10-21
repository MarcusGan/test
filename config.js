const env = process.env;

export const nodeEnv = env.NODE_ENV || "developer";

export const logStars = function (message) {
  console.info("*************");
  console.info(message);
  console.info("*************");
};

export default {
  mongodbUri:
    "mongodb+srv://<user>:<password>@mango.hafdh.mongodb.net/<Cluster>?retryWrites=true&w=majority",
  port: env.PORT || 3000,
  host: env.HOST || "0.0.0.0",
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};
