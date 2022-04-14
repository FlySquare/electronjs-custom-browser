const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow, Menu, Shell,screen } = electron;
let mainWindow;
var userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36';

const template = [
    {
        label: 'View',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'help',
        label: 'Siteler',
        submenu: [
            {
                label: 'WhatsApp',
                click () { mainWindow.loadURL("https://web.whatsapp.com/"); }
            },
            {
                label: 'Outlook',
                click () { mainWindow.loadURL("https://outlook.office365.com/mail/"); }
            }
        ]
    }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
app.on('ready', () => {
    mainWindow = new BrowserWindow({width:1280, height:720})
    let displays = electron.screen.getAllDisplays()
    let externalDisplay = displays.find((display) => {
        return display.bounds.x !== 0 || display.bounds.y !== 0
    })

    if (externalDisplay) {
        mainWindow.webContents.userAgent = userAgent;
        mainWindow.loadURL("https://ogrencin.net/")
    }
});