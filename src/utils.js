/**
 * 检测端口是否被占用
 * @param port
 * @returns {boolean}
 */
export function portIsInUse(port) {
  let result = true; // 默认未占用
  const net = require('net');
  const server = net.createServer().listen(port);
  server.on('listening', () => {
    console.log(`server is running on ${port}`);
    server.close();
  })

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') { // 端口被占用
       console.log(`The port ${port} is occupied, please change other port.`);
       result = false;
    }
  })
  return result;
}
