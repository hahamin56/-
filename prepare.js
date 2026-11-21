// Запускается перед сборкой: кладёт three.js и шрифт в папку game
const fs = require('fs'), path = require('path');
const copy = (from, to) => {
  if (!fs.existsSync(from)) throw new Error('Не найден файл: ' + from);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
};
copy('node_modules/three/build/three.min.js', 'game/lib/three.min.js');
copy('node_modules/@fontsource/press-start-2p', 'game/fonts');
console.log('prepare: three.js и шрифт скопированы в game/');
