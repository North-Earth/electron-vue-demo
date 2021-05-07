import { ipcRenderer } from 'electron'
import os from 'os';

window.ipcRenderer = ipcRenderer
window.userInfo = os.userInfo();