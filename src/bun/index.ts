import { BrowserWindow, BrowserView, Updater } from "electrobun/bun";

const DEV_SERVER_PORT = 5173;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

async function getMainViewUrl(): Promise<string> {
  const channel = await Updater.localInfo.channel();
  if (channel === "dev") {
    try {
      await fetch(DEV_SERVER_URL, { method: "HEAD" });
      console.log(`HMR enabled: Using Vite dev server at ${DEV_SERVER_URL}`);
      return DEV_SERVER_URL;
    } catch {
      console.log("Vite dev server not running. Run 'bun run dev:hmr' for HMR support.");
    }
  }
  return "views://mainview/index.html";
}

const url = await getMainViewUrl();

const _data = [
  {
    id: 1,
    name: "Item 1",
    description: "This is the first item.",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is the second item.",
  },
];

const rpc = BrowserView.defineRPC({
  maxRequestTime: 5000,
  handlers: {
    requests: {
      loadData: () => {
        return _data;
      },
    },
  },
});

const mainWindow = new BrowserWindow({
  title: "Vanilla + Vite",
  url,
  frame: {
    width: 900,
    height: 700,
    x: 200,
    y: 200,
  },
  rpc,
});

console.log("Vanilla Vite app started!");
