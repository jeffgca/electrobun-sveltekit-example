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
    name: "Bun",
    description: "Bun is a fast all-in-one JavaScript runtime.",
    url: "https://bun.sh",
    image: "https://bun.sh/favicon.ico",
    features: ["Fast JavaScript and TypeScript execution", "Built-in bundler and transpiler", "Native support for npm packages", "Efficient file system access", "Integrated testing framework"],
    links: [
      { name: "GitHub", url: "" },
      { name: "Documentation", url: "https://bun.sh/docs" },
      { name: "Blog", url: "https://bun.sh/blog" },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["runtime", "javascript", "typescript", "bundler", "transpiler"],
    metadata: {
      stars: 5000,
      forks: 300,
      issues: 50,
      pullRequests: 20,
    },
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
