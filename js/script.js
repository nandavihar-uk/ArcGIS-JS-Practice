    // 2D Map View
      require(["esri/Map", "esri/views/MapView", "esri/widgets/ScaleBar",
      "esri/widgets/Legend"], (Map, MapView, ScaleBar, Legend) => {
       
        const map = new Map({
          basemap: "hybrid"
        });
        const view = new MapView({
          container: "viewDiv", // Reference to the view div created in step 5
          map: map, // Reference to the map object created before the view
          zoom: 5, // Sets zoom level based on level of detail (LOD)
          center: [77,21], // Sets center point of view using longitude,latitude
        });
        const scalebar = new ScaleBar({
          view: view
        });
        const legend = new Legend ({
          view: view
        });

        view.ui.add(scalebar, "bottom-left");
        view.ui.add(legend, "top-right");
      });



    
      // // change basemap style and basemap language
      // require(["esri/config","esri/Map","esri/views/MapView", "esri/intl"], function(esriConfig, Map, MapView, intl) {
  
      // esriConfig.apiKey = "AAPKc4b1675af207485f9c5aa4d6abc1aa66614LKd0Rx4dcgVFzadoA85MbQ3H_21y2ERft4CJZ0RV32Q73xTKhHj7wI17KvSYI";
      
      // intl.setLocale("es");

      // const map = new Map({
      //   // basemap: "arcgis/topographic" // basemap styles service
      //   basemap: {
      //     style: {
      //         id: "arcgis/outdoor",
      //         language: "es"
      //     }
      // }
      // });
      // const view = new MapView({
      //   container: "viewDiv",
      //   map: map,
      //   center: [77,21], // Longitude, latitude
      //   zoom: 5, // Zoom level
      //   container: "viewDiv" // Div element

      // });

      // const updateBasemapLanguage = (languageCode) => {
      //   intl.setLocale(languageCode);
      //           view.map.basemap = {
      //               style: {
      //                   id: "arcgis/outdoor",
      //                   language: languageCode
      //               }
      //           }

      // };

      // const basemapLanguage = document.getElementById("basemapLanguage");
      //       // add to the view UI
      //       view.ui.add(basemapLanguage, "top-right");

      // const languageCombobox = document.getElementById("languageCombobox");
      //       // when the combobox value changes, update the basemap language
      //       languageCombobox.addEventListener("calciteComboboxChange", (event) => {
      //           updateBasemapLanguage(event.target.value);
      //       });

      // const updateBasemapStyle = (basemapId) => {
      //   view.map.basemap = basemapId;
      // };

      // const basemapStylesDiv = document.getElementById("basemapStyles");
      //   view.ui.add(basemapStylesDiv, "top-left");
  
      // const styleCombobox = document.getElementById("styleCombobox");
      //   styleCombobox.addEventListener("calciteComboboxChange", (event) => {
      //     updateBasemapStyle(event.target.value);
      //   });
      //  });
  
        


    // // webmap from ArcGIS Online view
    // require(["esri/config","esri/Map","esri/WebMap","esri/views/MapView","esri/widgets/ScaleBar","esri/widgets/Legend"
    // ], function(esriConfig, WebMap, MapView, ScaleBar, Legend) {

    // esriConfig.apiKey = "AAPKc4b1675af207485f9c5aa4d6abc1aa66614LKd0Rx4dcgVFzadoA85MbQ3H_21y2ERft4CJZ0RV32Q73xTKhHj7wI17KvSYI";

    //   const webmap = new WebMap({
    //     portalItem: {
    //       id: "41281c51f9de45edaf1c8ed44bb10e30"
    //     }
    //   });

    //   const view = new MapView({
    //     container: "viewDiv",

    //     map: webmap

    //   });

    //   const scalebar = new ScaleBar({
    //     view: view
    //   });

    //   view.ui.add(scalebar, "bottom-left");

    // const legend = new Legend ({
    //     view: view
    //   });
    //   view.ui.add(legend, "top-right");







    // 3D Scenic View
    // require(["esri/Map", "esri/views/SceneView"], (Map, SceneView) => {
    //   const map = new Map({
    //     basemap: "satellite",
    //     ground: "world-elevation"
    //   });
    //   const view = new SceneView({
    //     container: "viewDiv3d", // Reference to the scene div created in step 5
    //     map: map, // Reference to the map object created before the scene
    //     camera: { // Sets the initial camera position
    //       position: {
    //         spatialReference: {
    //           latestWkid: 3857,
    //           wkid: 102100
    //         },
    //         x: -11262192.883555487,
    //         y: 2315246.351026253,
    //         z: 18161244.728082635
    //       },
    //       heading: 0,
    //       tilt: 0.49
    //     }
    //   });
    // });


  //   // Custom basemap view
  //   require([
  //     "esri/config",
  //     "esri/Map",
  //     "esri/views/MapView",

  //     "esri/Basemap",
  //     "esri/layers/VectorTileLayer",
  //     "esri/layers/TileLayer",

  // ], function (esriConfig, Map, MapView, Basemap, VectorTileLayer, TileLayer) {

  //     esriConfig.apiKey = "AAPKc4b1675af207485f9c5aa4d6abc1aa66614LKd0Rx4dcgVFzadoA85MbQ3H_21y2ERft4CJZ0RV32Q73xTKhHj7wI17KvSYI";

  //     const vectorTileLayer = new VectorTileLayer({
  //       portalItem: {
  //         id: "6976148c11bd497d8624206f9ee03e30" // Forest and Parks Canvas
  //       },
  //       opacity: 0.5
  //     });

  //     const imageTileLayer = new TileLayer({
  //       portalItem: {
  //         id: "1b243539f4514b6ba35e7d995890db1d" // World Hillshade
  //       }
  //     });

  //     const basemap = new Basemap({
  //       baseLayers: [

  //         imageTileLayer,
  //         vectorTileLayer

  //       ]
  //     });

  //     // const apikey = YOUR_API_KEY ;
  //     const map = new Map({
  //       basemap: basemap,
  //     });

  //     const view = new MapView({
  //       container: "viewDiv",
  //       map: map,

  //       center: [-100, 40],
  //       zoom: 3

  //     });

  //   });





    //   // Add point, line, polygon
    //   require(["esri/config","esri/Map","esri/views/MapView","esri/Graphic","esri/layers/GraphicsLayer"], function(esriConfig,Map, MapView, Graphic, GraphicsLayer) {
    
    //   esriConfig.apiKey = "AAPKc4b1675af207485f9c5aa4d6abc1aa66614LKd0Rx4dcgVFzadoA85MbQ3H_21y2ERft4CJZ0RV32Q73xTKhHj7wI17KvSYI";
    
    //   const map = new Map({
    //     basemap: "arcgis/topographic" // basemap styles service
    //   });
    
    //   const view = new MapView({
    //     map: map,
    //     center: [-118.80500,34.02700], //Longitude, latitude
    //     zoom: 13,
    //     container: "viewDiv"
    //  });
    
    //  const graphicsLayer = new GraphicsLayer();
    //  map.add(graphicsLayer);
    
    //  const point = { //Create a point
    //     type: "point",
    //     longitude: -118.80657463861,
    //     latitude: 34.0005930608889
    //  };
    //  const simpleMarkerSymbol = {
    //     type: "simple-marker",
    //     color: [226, 119, 40],  // Orange
    //     outline: {
    //         color: [255, 255, 255], // White
    //         width: 1
    //     }
    //  };
    
    //  const pointGraphic = new Graphic({
    //     geometry: point,
    //     symbol: simpleMarkerSymbol
    //  });
    //  graphicsLayer.add(pointGraphic);
    
    //  // Create a line geometry
    //  const polyline = {
    //     type: "polyline",
    //     paths: [
    //         [-118.821527826096, 34.0139576938577], //Longitude, latitude
    //         [-118.814893761649, 34.0080602407843], //Longitude, latitude
    //         [-118.808878330345, 34.0016642996246]  //Longitude, latitude
    //     ]
    //  };
    //  const simpleLineSymbol = {
    //     type: "simple-line",
    //     color: [226, 119, 40], // Orange
    //     width: 2
    //  };
    
    //  const polylineGraphic = new Graphic({
    //     geometry: polyline,
    //     symbol: simpleLineSymbol
    //  });
    //  graphicsLayer.add(polylineGraphic);
    
    //  // Create a polygon geometry
    //  const polygon = {
    //     type: "polygon",
    //     rings: [
    //         [-118.818984489994, 34.0137559967283], //Longitude, latitude
    //         [-118.806796597377, 34.0215816298725], //Longitude, latitude
    //         [-118.791432890735, 34.0163883241613], //Longitude, latitude
    //         [-118.79596686535, 34.008564864635],   //Longitude, latitude
    //         [-118.808558110679, 34.0035027131376]  //Longitude, latitude
    //     ]
    //  };
    
    //  const simpleFillSymbol = {
    //     type: "simple-fill",
    //     color: [227, 139, 79, 0.8],  // Orange, opacity 80%
    //     outline: {
    //         color: [255, 255, 255],
    //         width: 1
    //     }
    //  };
    
    //  const popupTemplate = {
    //     title: "{Name}",
    //     content: "{Description}"
    //  }
    //  const attributes = {
    //     Name: "Graphic",
    //     Description: "I am a polygon"
    //  }
    
    //  const polygonGraphic = new Graphic({
    //     geometry: polygon,
    //     symbol: simpleFillSymbol,
    
    //     attributes: attributes,
    //     popupTemplate: popupTemplate
    
    //  });
    //  graphicsLayer.add(polygonGraphic);
    
    //  });