const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CGRhyS6A#L4IbnCPuKdE7-DXrQID86grzWibh8L8jMgFSU9ZdYQA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/198a322e8cc0f2bd6cba2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi QUEEN-KYLIE-MD Is Online Now 💻\n*💻 Owner* - QUEEN-KYLIE-MD\n\n*💻 Owner Number* -263718036108",
SUDO_NB: process.env.SUDO_NB || "263718036108",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
