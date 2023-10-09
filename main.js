const { app, BrowserWindow, globalShortcut, clipboard } =  require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: "./assets/favicon.ico",
      })
    
      win.loadURL("https://codi.link/")

      return win
}

app.whenReady()
    .then(() => {
        const win = createWindow()

        globalShortcut.register('Alt+C', () => {
            console.log("Click");
            clipboard.writeText(win.webContents.getURL())
        })
    })