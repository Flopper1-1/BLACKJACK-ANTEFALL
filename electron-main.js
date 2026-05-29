const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const DiscordRPC = require("discord-rpc");

const DISCORD_CLIENT_ID = "1509996292796059718";
DiscordRPC.register(DISCORD_CLIENT_ID);

const rpc = new DiscordRPC.Client({ transport: "ipc" });
const startedAt = Date.now();

let currentPresence = {
  details: "Climbing the antes",
  state: "Menu"
};

function setDiscordPresence() {
  rpc.setActivity({
    details: currentPresence.details,
    state: currentPresence.state,
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

ipcMain.on("update-presence", (event, data) => {
  currentPresence = {
    details: `Ante: ${data.ante} | Quota: $${data.target.toLocaleString()}`,
    state: `Cash: $${Math.round(data.cash).toLocaleString()}`
  };
  if (rpc && rpc.setActivity) {
    setDiscordPresence();
  }
});

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
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js")
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
