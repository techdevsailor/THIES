import { createWorker } from "tesseract.js";

(async () => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize('https://billboardspakistan.com/wp-content/uploads/2021/06/Billboards-or-Hoardings.png');
  console.log(ret.data.text);
  await worker.terminate();
})();