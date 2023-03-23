const { exec } = require("child_process");

function lock() {
  exec('cinnamon-screensaver-command --lock', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`screen locked`);
  })
}

function shutdown() {
  exec('shutdown -h', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`shutdown`);
  })
}

module.exports = {
  lock,
  shutdown,
}