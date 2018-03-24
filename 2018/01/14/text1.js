function startup(Cesium) {

  widget = new Cesium.CesiumWidget('cesiumContainer');

  url = 'http://115.28.101.41:8088/geoserver/cite/wms';   //wms地址

  layers = widget.scene.globe.imageryLayers;

  layers.removeAll();

  var blackMarble = layers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({  //加载一个新的图层

    url: url,

    layers: 'cite:1996',// Here just give layer name

    version: '1.1.0'

  }));

  // Start off looking at Australia.

  widget.camera.setView({

    destination: Cesium.Rectangle.fromDegrees(-100, 0, 310, 80)  //给地图显示页定位

  });

  //Sandcastle_End

  Sandcastle.finishedLoading();  //加载地图

}

if (typeof Cesium !== "undefined") {  //调用starup()

  startup(Cesium);

} else if (typeof require === "function") {

  require(["Cesium"], startup);

}