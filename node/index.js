const path = require('path')
const express = require('express')
const app = express()
app.listen(80, () => {
  console.log('服务启动')
})

//设置跨域访问
app.all('*', function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  // //允许的header类型
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  // //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  // 可以带cookies
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
})

const returnModel = {
  code: 0,
  success: true,
  data: [],
  count: 0,
  message: '成功'
}

app.get('/', (req, res) => {
  res.json('helloword')
})

app.get('/get_banner', (req, res) => {
  const list = [
    {'pic': 'http://localhost/img?path=5.jpg', 'ref': 'https://www.baidu.com/'},
    {'pic': 'http://localhost/img?path=1.jpg', 'ref': 'https://www.baidu.com/'},
    {'pic': 'http://localhost/img?path=2.jpg', 'ref': 'https://www.baidu.com/'},
    {'pic': 'http://localhost/img?path=3.jpg', 'ref': 'https://www.baidu.com/'},
    {'pic': 'http://localhost/img?path=4.jpg', 'ref': 'https://www.baidu.com/'},
    {'pic': 'http://localhost/img?path=5.jpg', 'ref': 'https://www.baidu.com/'},
    {'pic': 'http://localhost/img?path=1.jpg', 'ref': 'https://www.baidu.com/'},
  ]

  returnModel.data = list

  res.json(returnModel)

})


app.get('/img', function (req, res, next) {
  const imgPath = req.query.path
  res.sendFile(path.join(__dirname, 'img/' + imgPath));
})


app.get('/get_recommend', (req, res) => {
  const list = [
    {'pic': 'http://localhost/img?path=lib1.png', 'title': '京东超市'},
    {'pic': 'http://localhost/img?path=lib2.png', 'title': '数码电器'},
    {'pic': 'http://localhost/img?path=lib3.png', 'title': '京东服饰'},
    {'pic': 'http://localhost/img?path=lib4.png', 'title': '京东生鲜'},
    {'pic': 'http://localhost/img?path=lib5.png', 'title': '京东到家'},
    {'pic': 'http://localhost/img?path=lib6.png', 'title': '充值缴费'},
    {'pic': 'http://localhost/img?path=lib7.png', 'title': '9.9元拼'},
    {'pic': 'http://localhost/img?path=lib8.png', 'title': '领劵'},
    {'pic': 'http://localhost/img?path=lib9.png', 'title': '领金贴'},
    {'pic': 'http://localhost/img?path=lib10.png', 'title': 'PLUS会员'},
  ]

  returnModel.data = list

  res.json(returnModel)

})



app.get('/get_tabs', (req, res) => {
  const list = [
    {
      'id':1,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':2,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':3,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':4,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':5,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':6,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':7,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':8,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':9,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
    {
      'id':10,
      'pic': 'http://localhost/img?path=tab.jpg',
      'title': '【送宝宝凳】【顺丰】皓冰 儿童床拼接实木男孩女孩婴儿床带护栏小孩床单人床加宽床拼接床 加厚 三面尾梯 150*70*40实木床（店长推荐）',
      'price': '128.00'
    },
  ]

  returnModel.data = list

  res.json(returnModel)

})