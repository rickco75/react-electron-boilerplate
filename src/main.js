process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

const { app, BrowserWindow } = require('electron');
const path = require('path');

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(path.join(__dirname, 'client', 'src'));
}

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#343d42',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: process.env.NODE_ENV !== 'development'
    },
    show: false
  });

  win.once('ready-to-show', () => {
    win.show();
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:8000');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, 'index.html'));
  }

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
