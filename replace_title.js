const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.html')) results.push(file);
    }
  });
  return results;
}

const files = walk('e:/code/qitai/stitch_');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  content = content.replace(/泰康康养小镇/g, '祺泰康养小镇');
  content = content.replace(/空泰康养小镇/g, '祺泰康养小镇');
  content = content.replace(/泰康养老小镇/g, '祺泰康养小镇');
  content = content.replace(/泰康养生小镇/g, '祺泰康养小镇');
  content = content.replace(/泰康养小镇/g, '祺泰康养小镇');
  content = content.replace(/Serenity Wellness/g, '祺泰康养小镇');
  content = content.replace(/Serenity 官方/g, '祺泰官方');
  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated ' + f);
  }
});
