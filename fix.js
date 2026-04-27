const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory && f !== '.git') {
            walkDir(dirPath, callback);
        } else if (f.endsWith('.html')) {
            callback(dirPath);
        }
    });
}

walkDir(__dirname, function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const isRoot = path.dirname(filePath) === __dirname;
    const prefix = isRoot ? '' : '../';

    // Fix bottom navs
    // Replace href="#" where the inner text contains 首页, 订单, 我的
    // A safer way: replace using a function
    content = content.replace(/<a([^>]*href=["'])([^"']*)(["'][^>]*>)([\s\S]*?)(<\/a>)/g, (match, p1, p2, p3, inner, p5) => {
        if (inner.includes('>首页<')) {
            return `<a${p1}${prefix}index.html${p3}${inner}${p5}`;
        }
        if (inner.includes('>订单<')) {
            // Check if it's already fixed so we don't mess it up
            if (p2 === '#' || !p2.includes('订单')) {
                return `<a${p1}${prefix}订单中心/code.html${p3}${inner}${p5}`;
            }
        }
        if (inner.includes('>我的<')) {
            if (p2 === '#' || !p2.includes('个人中心')) {
                return `<a${p1}${prefix}个人中心/code.html${p3}${inner}${p5}`;
            }
        }
        return match;
    });

    // Fix index.html buttons
    if (isRoot) {
        // We can explicitly fix the blocks by searching for the label
        const btnReplacements = [
            { label: '>游玩预约<', href: '游玩预约/code.html' },
            { label: '>酒店预订<', href: '酒店预订/code.html' },
            { label: '>特色餐厅<', href: '餐厅列表/code.html' },
            { label: '>疗养课程<', href: '森林呼吸疗愈/code.html' },
            { label: '>接驳服务<', href: '接驳车列表/code.html' },
            { label: '>主题活动<', href: '活动与笔记/code.html' },
            { label: '>晨曦瑜伽', href: '活动与笔记/code.html' },
            { label: '>林间冥想', href: '活动与笔记/code.html' }
        ];

        content = content.replace(/<a([^>]*href=["'])([^"']*)(["'][^>]*>)([\s\S]*?)(<\/a>)/g, (match, p1, p2, p3, inner, p5) => {
            for (let r of btnReplacements) {
                if (inner.includes(r.label)) {
                    return `<a${p1}${r.href}${p3}${inner}${p5}`;
                }
            }
            return match;
        });

        // if there are any <button> that should be <a> left:
        content = content.replace(/<button([^>]*)>([\s\S]*?)<\/button>/g, (match, p1, inner) => {
            for (let r of btnReplacements) {
                if (inner.includes(r.label)) {
                    return `<a href="${r.href}"${p1.replace(/type=["'][^"']*["']/, '')}>${inner}</a>`;
                }
            }
            return match;
        });
    } else {
         // Fix inner pages 
         // Example: <button>立即预订</button>
         const btnReplacements = [
            { label: '>立即预订<', href: '提交订单/code.html' },
            { label: '>确认提交<', href: '确认预约/code.html' },
            { label: '>去支付<', href: '预约成功/code.html' },
            { label: '立即预订', href: '提交订单/code.html' }
        ];
        content = content.replace(/<button([^>]*)>([\s\S]*?)<\/button>/g, (match, p1, inner) => {
            for (let r of btnReplacements) {
                if (inner.includes(r.label)) {
                    return `<a href="${prefix}${r.href}"${p1.replace(/type=["'][^"']*["']/, '')} style="display:inline-flex; align-items:center; justify-content:center;">${inner}</a>`;
                }
            }
            // Add back button functionality if it's the back button
            if (inner.includes('>arrow_back<') && !p1.includes('onclick')) {
                return `<button onclick="history.back()"${p1}>${inner}</button>`;
            }
            return match;
        });
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('All links fixed.');
