// worker.ts
import { WebWorkerMLCEngineHandler, MLCEngine } from "https://esm.run/@mlc-ai/web-llm";

// A handler that resides in the worker thread
const engine = new MLCEngine();
const handler = new WebWorkerMLCEngineHandler(engine);
onmessage = (msg) => {
  handler.onmessage(msg);
};
