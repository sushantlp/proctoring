const electron = require("electron");
const app = electron.app;
const globalShortcut  = electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1200, 
        height: 800,
        icon: "",
        kiosk:true,
        alwaysOnTop :true
    });
    mainWindow.on("blur", () =>{
        console.log("Huhhh")
    })

    mainWindow.onbeforeunload = (e) => {
        console.log('I do not want to be closed')
      
    
        e.returnValue = false // equivalent to `return false` but not recommended
      }
    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));



}


app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});