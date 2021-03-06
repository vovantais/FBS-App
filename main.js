const { app, BrowserWindow,Menu } = require("electron");
const isDev = require("electron-is-dev");
const path = require('path');

function createWindow() {
	//Menu.setApplicationMenu(false);
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	const startURL = isDev
		? "http://localhost:3000"
		: `file://${path.join(__dirname, "../build/index.html")}`;
	console.log(`file://${path.join(__dirname, "../build/index.html")}`);
	win.loadURL(startURL);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});