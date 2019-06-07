//1.初始化
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//2.生成键盘
generateKeyboard(keys, hash)

//3.监听事件
listenToUser(hash)

//4.函数
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}
function createButton(id) {
    var button = tag('button')
    button.textContent = 'Set'
    button.id = id
    button.onclick = function (keyboard) {
        var button2 = keyboard['target']
        var img2 = button2.previousSibling
        var key = button2['id']
        var x = prompt('输入你想要的网址')
        hash[key] = x
        img2.src = 'https://' + x + '/favicon.ico'
        img2.onerror = function (xxx) {
            xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        localStorage.setItem('zzz', JSON.stringify(hash))
    }

    button.onclick = function (keyboard) {
        button2 = keyboard['target']
        img2 = button2.previousSibling
        key = keyboard['target']['id']
        x = prompt('输入你想要的网址')
        hash[key] = x
        localStorage.setItem('zzz', JSON.stringify(hash))
        console.log(hash)
    }
    return button
}

function createImage(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror = function (xxx) {
        xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}
function init() {
    var keys = {
        '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
        '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
        '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
        'length': 3
    }
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'taobao.com',
        'y': 'youtube.com',
        'u': 'unpkg.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': 'people.com',
        'a': 'apple.com',
        's': 'sougou.com',
        'd': 'douban.com',
        'f': 'fanyi.baidu.com',
        'g': 'jingdong.com',
        'h': 'hao123.com',
        'j': 'jianshu.com',
        'k': 'kugou.com',
        'l': 'bilibili.com',
        'z': 'zhihu.com',
        'x': 'xiedaimala.com',
        'c': 'ctrip.com',
        'v': 'v.qq.com',
        'b': 'baidu.com',
        'n': 'news.sina.com.cn',
        'm': 'www.mcdonalds.com.cn'
    }

    var hashInLocalStorage = getFromLocalStorage('zzz')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}

function generateKeyboard(keys, hash) {
    for (var index = 0; index < keys['length']; index = index + 1) {
        var div = tag('div')
        div.className = 'row'
        main.appendChild(div)
        var row = keys[index]
        for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
            var span = createSpan(row[index2])
            var button = createButton(row[index2])
            var img = createImage(hash[row[index2]])
            var kbd = tag('kbd')
            kbd.className = 'key'
            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)
            div.appendChild(kbd)
        }
    }
}
function listenToUser(hash) {
    document.onkeypress = function (keyboard) {
        var key = keyboard['key']
        var website = hash[key]

        //原窗口
        // location.href = 'https://' + website 

        //新窗口
        window.open('https://' + website, '_blank')

    }
}


// keys = { 
//     '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
//     '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 }, 
//     '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 }, 
//     'length': 3 
// }   
// hash = { 
//     'q': 'qq.com', 
//     'w': 'weibo.com', 
//     'e': 'ele.me', 
//     'r': 'renren.com', 
//     't': 'taobao.com', 
//     'y': 'youtube.com', 
//     'u': 'unpkg.com', 
//     'i': 'iqiyi.com', 
//     'o': 'opera.com', 
//     'p': 'people.com', 
//     'a': 'apple.com',
//     's': 'sougou.com',  
//     'd': 'douban.com',
//     'f': 'fanyi.baidu.com',
//     'g': 'jingdong.com',
//     'h': 'hao123.com',
//     'j': 'jianshu.com',
//     'k': 'kugou.com',
//     'l': 'bilibili.com',
//     'z': 'zhihu.com', 
//     'x': 'xiedaimala.com',
//     'c': 'ctrip.com',
//     'v': 'v.qq.com',
//     'b': 'baidu.com',
//     'n': 'news.sina.com.cn',
//     'm': 'www.mcdonalds.com.cn' 
// } 
// function getFromLocalStorage(name){
// 	return JSON.parse(localStorage.getItem(name) || 'null')
// }

// if(hashInLocalStorage){
//     hash = hashInLocalStorage
// }

// // 遍历keys，生产kdb标签
// index = 0
// while(index<keys["length"]){
//     div = document.createElement('div') 
//     div.className = 'row'
//     main.appendChild(div) 
//     row = keys[index]
//     index2 = 0
//     while(index2<row['length']){
//         kbd = document.createElement('kbd')
//         span = document.createElement('span')
//         span.textContent = row[index2]
//         span.className = 'text'
//         kbd.appendChild(span)
//         kbd.className = 'key'
//         button = document.createElement('button')
//         button.textContent = 'Set'
//         button.id = row[index2]
//         img = document.createElement('img')

//         if(hash[row[index2]]){
//             img.src = 'http://' + hash[row[index2]] + '/favicon.ico'
//         }else{
//             img.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
//         }
//         img.onerror = function(xxx){
//             xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
//         }
//         button.onclick = function(keyboard){
//             button2 = keyboard['target']
//             img2 = button2.previousSibling
//             key = keyboard['target']['id']
//             x = prompt('输入你想要的网址')
//             hash[key] = x
//             localStorage.setItem('zzz',JSON.stringify(hash))
//             console.log(hash)
//         }

//         kbd.appendChild(img)
//         kbd.appendChild(button)
//         div.appendChild(kbd)
//         index2 = index2 +1
//     }
//     index = index + 1
// } 
// document.onkeypress = function(keyboard){
//     key = keyboard['key']
//     website = hash[key]
//     //原窗口
//     // location.href = 'https://' + website 

//     //新窗口
//     window.open('https://' + website, '_blank')
// }

