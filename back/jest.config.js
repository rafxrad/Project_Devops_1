// jest.config.js ou jest.config.cjs dependendo do seu sistema de módulos
module.exports = {
  transform: {
    "^.+\\.m?jsx?$": "babel-jest", // Transforma arquivos JS e JSX
  },
  testEnvironment: "node",
  detectOpenHandles: true,
};
