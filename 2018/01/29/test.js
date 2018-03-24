var x = `
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Use correct character set. -->
  <meta charset="utf-8">
  <!-- Tell IE to use the latest, best version. -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- Make the application on mobile take up the full browser screen and disable user scaling. -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <title>经开区社区人口和教育程度</title>
  <script src="../static/Cesium/Cesium.js"></script>
  <link rel="stylesheet" href="../static/Cesium/Widgets/widgets.css">
  <style>
    html,
    body,
    #cesiumContainer {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .type-container {
      position: absolute;
      z-index: 1000;
      background: white;
      padding: 10px;
    }

  </style>
</head>

<body>
  <div class="type-container">
    <span>类型</span>
    <button onclick="typeClick('dataEducate')">教育程度</button>
    <button onclick="typeClick('dataPopulation')">人口变动</button>
  </div>
  <div id="cesiumContainer"></div>
  <script>
    var currentOption = null
    var pieInstance = null
    var currentType = 'dataEducate'
    // 获取用户选择的类型
    function typeClick(type) {
      if (currentType === type) {
        return
      }
      currentType = type
      document.bgColor = 'red'
      // 得到类型后画图
      initPie()
    }
    // 按照类型返回数值
    function getOption(type) {
      var dataObj = {
        '高坡社区': {
          lng: 102.83541776825107,
          lat: 25.028892306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1302
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 1802
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 2320
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 1302,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 10802,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 5030,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '石坝社区': {
          lng: 102.82541776825107,
          lat: 25.000892306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 802
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 1355
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 1320
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 712,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 4802,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 1030,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '阿拉社区': {
          lng: 102.84541776825107,
          lat: 25.000892306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1770
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 2368
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 3099
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 1312,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 2268,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 940,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '海子社区': {
          lng: 102.86541776825107,
          lat: 25.005892306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1770
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 2368
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 3099
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 1312,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 2268,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 940,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '清水社区': {
          lng: 102.89241776825107,
          lat: 24.991002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1770
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 2368
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 3099
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 1262,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 2818,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 340,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '黄土坡社区': {
          lng: 102.87241776825107,
          lat: 24.965002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1770
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 2368
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 3099
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 1312,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 1568,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 1940,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '大冲社区': {
          lng: 102.83741776825107,
          lat: 24.960002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1220
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 1368
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 2099
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 912,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 1528,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 1240,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '大新册社区': {
          lng: 102.85741776825107,
          lat: 24.915002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1980
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 1638
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 2909
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 192,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 1288,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 740,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '大洛羊社区': {
          lng: 102.80941776825107,
          lat: 24.925002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 9180
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 16038
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 20009
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 1092,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 3388,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 1140,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '小洛羊社区': {
          lng: 102.81741776825107,
          lat: 24.915002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 980
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 638
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 1909
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 192,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 488,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 140,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '小新册社区': {
          lng: 102.87741776825107,
          lat: 24.935002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1110
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 1118
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 2119
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 812,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 1428,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 1140,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '倪家营社区': {
          lng: 102.82741776825107,
          lat: 24.935002306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 820
              // material:'rgba(255,0,0,0.9)'
            }, {
              name: 2016,
              value: 1068
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 2099
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 912,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 1528,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 1240,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        },
        '普照社区': {
          lng: 102.79541776825107,
          lat: 25.007892306205415,
          data: {
            dataPopulation: [{
              name: 2015,
              value: 1102
              // material:'rgba(255,0,0,1.0)'
            }, {
              name: 2016,
              value: 2002
              // material:'rgba(0,255,0,1.0)'
            }, {
              name: 2017,
              value: 1320
              // material:'rgba(0,0,255,1.0)'
            }],
            dataEducate: [{
              name: '硕士及以上',
              value: 802,
              material: 'rgba(255,0,0,1.0)'
            }, {
              name: '本科',
              value: 9802,
              material: 'rgba(0,255,0,1.0)'
            }, {
              name: '本科以下',
              value: 7030,
              material: 'rgba(0,0,255,1.0)'
            }]
          }
        }
      }
      var arr = []
      for (var key of Object.keys(dataObj)) { // key值表示写在数据里的社区
        var dataValue = dataObj[key]
        var item = Object.assign({}, {
          position: {
            x: dataValue.lng,
            y: dataValue.lat,
            z: 0.0
          },
          data: dataValue.data[type],
          attribute: {
            title: key,
            name: dataValue.data[type].name,
            value: dataValue.data[type].value
          }
        })
        arr.push(item)
      }
      return arr
    }

    function initPie() {
      var arr = getOption(currentType)
      var newObj
      if (currentOption.series[1]) {
        currentOption.series[1] = null
        pieInstance.setOption(currentOption)
      }
      for (var i = 0; i < arr.length; i++) {
        var option = {
          type: 'pie',
          extrudedHeight: 500,
          radius: 500,
          position: arr[i].position,
          tooltip: {
            show: true,
            tip: function(parmas) {
              var value = parmas.name + '</br>' + parmas.value + '(' + parmas.ratio + ')'
              return value
            }
          },
          onLeftClick: function(par) {
            console.log('123456', par.target.option)
          },
          data: arr[i].data
        }
        delete currentOption.viewer
        currentOption.series[1] = option
        newObj = Object.assign({}, currentOption)
        pieInstance.setOption(newObj)
      }
    }
    window.onload = function() {
      pieInstance = window.geoBI.init(document.getElementById('cesiumContainer'))
      search('../static/data/geoJSON/china-yunnan-kunming-jingkaiqu.json', 'GET', function(result) {
        currentOption = {
          viewer: {
            center: [102.85741776825107, 24.828803306205415],
            height: 25000,
            heading: 0,
            pitch: -60
          }, // 初始化地球
          series: [{
            type: 'loadJSON',
            name: '中国',
            data: result,
            onLeftClick: function(val1, val2) {
              console.log(val1)
              console.log('中国地图!!!')
            }
          }]
        }
        pieInstance.setOption(currentOption)
        initPie()
      })
    }
    // 用于打开和从后台求救数据
    function search(url, type, onload, onerror) {
      var xhr, results
      xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.onload = function(e) {
        if (this.status === 200) { // status表示不同的http请求状态
          results = JSON.parse(this.responseText) // 将一个 JSON 字符串转换为对象
          onload(results)
        }
      }
      xhr.onerror = function(e) {
        onerror(e)
      }
      xhr.send()
    }
  </script>
<script type="text/javascript" src="/GeoBI/static/js/geoBI.js"></script></body>

</html>

`
let _code = x.match(/<script>([\w\W]*?)<\/script>/)[1]
_code = _code.replace(/^\n {4}/gm, '\n')
_code = _code.replace(/^\s+|\s+$/g, '')
// let _code = x.match(/<script>([\w\W]*?)<\/script>/)
console.log(_code)