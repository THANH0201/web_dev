// Read from a filec
const fs1 = require('fs');
fs1.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});
// Write to a fileS
const fs2 = require('fs');
fs2.writeFile('output.txt', 'This is some sample data.', (err) => {
if (err) {
console.error('Error writing file:', err);
} else {
console.log('Data written to output.txt');
}
});
// Get system information
const os1 = require('os');
console.log("Platform: " + os1.platform());
console.log("Hostname: " + os1.hostname());
console.log("Architecture: " + os.arch());

////optional: Write system information to a file
const fs = require('fs');
const os = require('os');

// content to write
const systemInfo = `
Hostname: ${os.hostname()}
Platform: ${os.platform()}
CPU Info: ${JSON.stringify(os.cpus(), null, 2)}
`;

// write system-info.txt
fs.writeFile('system-info.txt', systemInfo, (err) => {
  if (err) {
    console.error('Error writing system info:', err);
  } else {
    console.log('System info saved to system-info.txt');
  }
});
