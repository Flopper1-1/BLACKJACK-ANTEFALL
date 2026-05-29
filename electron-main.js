const { app, BrowserWindow } = require("electron");
const path = require("path");
const DiscordRPC = require("discord-rpc");

const DISCORD_CLIENT_ID = "1509996292796059718";
DiscordRPC.register(DISCORD_CLIENT_ID);

const rpc = new DiscordRPC.Client({ transport: "ipc" });
const startedAt = Date.now();

function setDiscordPresence() {
  rpc.setActivity({
    details: "Climbing the antes",
    state: "Playing BLACKJACK: ANTEFALL",
    startTimestamp: startedAt,
    largeImageKey: "logo",
    largeImageText: "BLACKJACK: ANTEFALL",
    buttons: [
      {
        label: "Download",
        url: "https://github.com/Flopper1-1/BLACKJACK-ANTEFALL"
      }
    ]
  });
}

rpc.on("ready", setDiscordPresence);

rpc.login({ clientId: DISCORD_CLIENT_ID }).catch(() => {});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 960,
    minHeight: 640,
    backgroundColor: "#071014",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
