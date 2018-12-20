/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define(function () {
  var konymp = konymp || {};
  var KonyLoggerModule = require("com/konymp/travelrefresh/KonyLogger");
  konymp.logger = (new KonyLoggerModule("Travel Refresh Animation Component")) || function () {};
  return {
    constructor: function (baseConfig, layoutConfig, pspConfig) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      this.view.height = "0%";
      this._planeDuration = 5;
      this._bigCloudDuration = 5;
      this._skyDuration = 4;
      this._sunDuration = 5;
      this._screenHeight = parseFloat(kony.os.deviceInfo().screenHeight);
      this._compHeight = (23.9 / 100) * this._screenHeight;
      this._setHeight = parseInt(this._compHeight) + "dp";
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function () {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      defineSetter(this, "planeDuration", function (x) {
        try{
          konymp.logger.trace("----------------------------- Setting planeDuration Start", konymp.logger.FUNCTION_ENTRY);
          if (isNaN(x)===false && x.indexOf("-") === -1 && (parseFloat(x)>0 &&parseFloat(x)<100) ) {
            this._planeDuration = x;
            this.view.height = "0%";
          }
          else {
            throw {
              error: "InvalidType",
              message: "Refresh Animation Travel planeDuration should be between 0 and 100"
            };
          }
        }
        catch (e) {
          konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
          if(e.error === "InvalidType"){  
            throw e;
          }
        }
        konymp.logger.trace("-----------------------------Setting planeDuration End", konymp.logger.FUNCTION_EXIT);              	
      });

      defineSetter(this, "sunDuration", function (x) {
        try{
          konymp.logger.trace("----------------------------- Setting sunDuration Start", konymp.logger.FUNCTION_ENTRY);
         if (isNaN(x)===false && x.indexOf("-") === -1 && (parseFloat(x)>0 &&parseFloat(x)<100) ) {
            this._sunDuration = x;	
          }
          else {
            throw {
              error: "InvalidType",
              message: "Refresh Animation Travel sunDuration should be between 0 and 100"
            };
          }
        }
        catch (e) {
          konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
          if(e.error === "InvalidType"){  
            throw e;
          }
        }
        konymp.logger.trace("-----------------------------Setting sunDuration End", konymp.logger.FUNCTION_EXIT);
      });

      defineSetter(this, "skyDuration", function (x) {
        try{
          konymp.logger.trace("----------------------------- Setting skyDuration Start", konymp.logger.FUNCTION_ENTRY);
      if (isNaN(x)===false && x.indexOf("-") === -1 && (parseFloat(x)>0 &&parseFloat(x)<100) ){
            this._skyDuration = x;
          }
          else {
            throw {
              error: "InvalidType",
              message: "Refresh Animation Travel skyDuration should be between 0 and 100"
            };
          }
        }
        catch (e) {
          konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
          if(e.error === "InvalidType"){  
            throw e;
          }
        }
        konymp.logger.trace("-----------------------------Setting skyDuration End", konymp.logger.FUNCTION_EXIT);
      });

      defineSetter(this, "bigCloudDuration", function (x) {
        try{
          konymp.logger.trace("----------------------------- Setting bigCloudDuration Start", konymp.logger.FUNCTION_ENTRY);
        if (isNaN(x)===false && x.indexOf("-") === -1 && (parseFloat(x)>0 &&parseFloat(x)<100) ) {
            this._bigCloudDuration = x;
          }
          else {
            throw {
              error: "InvalidType",
              message: "Refresh Animation Travel bigCloudDuration should be between 0 and 100"
            };
          }
        }
        catch (e) {
          konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
          if(e.error === "InvalidType"){  
            throw e;
          }
        }
        konymp.logger.trace("-----------------------------Setting bigCloudDuration End", konymp.logger.FUNCTION_EXIT);
      });
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    show: function () {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var iterationCount = 0;
        this.view.imgBigCloud2TravelRefresh.src = this.view.imgBigCloudTravelRefresh.src;
        this.view.imgSky2TravelRefresh.src = this.view.imgSky1TravelRefresh.src;
        this.view.height = this._setHeight;
        this._skyAnimation(iterationCount,this._skyDuration);
        this._sunAnimation(0,iterationCount,this._sunDuration);
        this._planeAnimation(0,iterationCount,this._planeDuration);
        this._bigCloudAnimation(iterationCount,this._bigCloudDuration);
      }catch(e){
        konymp.logger.error("-------------------Error Animating show" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    hide: function () {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var iterationCount =1;
        var duration = 0.01;
        this.view.height = "0%";
        this._skyAnimation(iterationCount,duration);
        this._sunAnimation(0,iterationCount,duration);
        this._planeAnimation(0,iterationCount,duration);
        this._bigCloudAnimation(iterationCount,duration);
      }catch(e){
        konymp.logger.error("-------------------Error Animating hide" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);

    },
    _skyAnimation: function (iterationCount,duration) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        this._skyAnimation1(this.view.imgSky1TravelRefresh,0,iterationCount,duration);
        this._skyAnimation2(this.view.imgSky2TravelRefresh,0,iterationCount,duration);
      }catch(e){
        konymp.logger.error("-------------------Error Animating sky" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _skyAnimation1: function(img,delay,iterationCount,duration){
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var animDef = kony.ui.createAnimation({
          "0": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          },
          "100": {
            "left": "-120%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          }
        });
        var animConfig = {
          "delay": delay,
          "iterationCount": iterationCount,
          "fillMode": kony.anim.FILL_MODE_BACKWARDS,
          "duration": duration
        };
        img.animate(animDef, animConfig, {});
      }catch(e){
        konymp.logger.error("-------------------Error Animating sky1" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _skyAnimation2: function(img,delay,iterationCount,duration){
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var animDef = kony.ui.createAnimation({
          "0": {
            "left": "120%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          },
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          }
        });
        var animConfig = {
          "delay": delay,
          "iterationCount": iterationCount,
          "fillMode": kony.anim.FILL_MODE_BACKWARDS,
          "duration": duration 
        };
        img.animate(animDef, animConfig, {});
      }catch(e){
        konymp.logger.error("-------------------Error Animating sky2" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _bigCloudAnimation: function (iterationCount,duration) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        this._cloudAnimation1(this.view.imgBigCloudTravelRefresh,0,iterationCount,duration);
        this._cloudAnimation2(this.view.imgBigCloud2TravelRefresh,0,iterationCount,duration);
      }catch(e){
        konymp.logger.error("-------------------Error Animating bigCloud" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _cloudAnimation1: function (img,delay,iterationCount,duration) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{ 
        var animDef = kony.ui.createAnimation({
          "0": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          },
          "100": {
            "left": "-137%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          }
        });
        var animConfig = {
          "delay": delay,
          "iterationCount": iterationCount,
          "fillMode": kony.anim.FILL_MODE_BACKWARDS,
          "duration": duration
        };
        img.animate(animDef, animConfig, {});
      }catch(e){
        konymp.logger.error("-------------------Error Animating cloud1" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _cloudAnimation2: function (img,delay,iterationCount,duration) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var animDef = kony.ui.createAnimation({
          "0": {
            "left": "137%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          },
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          }
        });
        var animConfig = {
          "delay": delay,
          "iterationCount": iterationCount,
          "fillMode": kony.anim.FILL_MODE_BACKWARDS,
          "duration": duration
        };
        img.animate(animDef, animConfig, {});
      }catch(e){
        konymp.logger.error("-------------------Error Animating cloud2" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _planeAnimation: function (delay,iterationCount,duration) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var animDef = kony.ui.createAnimation({
          "0": {
            "left": "2%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          },
          "100": {
            "left":"98%",
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            }
          }
        });
        var animConfig = {
          "delay": delay,
          "iterationCount": iterationCount,
          "fillMode": kony.anim.FILL_MODE_BOTH,
          "duration": duration
        };
        this.view.imgPlaneTravelRefresh.animate(animDef, animConfig, {});
      }catch(e){
        konymp.logger.error("-------------------Error Animating plane" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    _sunAnimation: function (delay,iterationCount,duration) {
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try{
        var r0 = kony.ui.makeAffineTransform();
        r0.rotate(0);
        var r1 = kony.ui.makeAffineTransform();
        r1.rotate(-120);
        var r11 = kony.ui.makeAffineTransform();
        r11.rotate(-240);
        var r111 = kony.ui.makeAffineTransform();
        r111.rotate(-360);
        var animDef = kony.ui.createAnimation({
          "100": {
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            },
            "transform": r111
          },
          "66": {
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            },
            "transform": r11
          },
          "33": {
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            },
            "transform": r1
          },
          "0": {
            "stepConfig": {
              "timingFunction": kony.anim.LINEAR
            },
            "transform": r0
          }
        });
        var animConfig = {
          "delay": delay,
          "iterationCount": iterationCount,
          "fillMode": kony.anim.FILL_MODE_BACKWARDS,
          "duration": duration
        };
        this.view.imgSunTravelRefresh.animate(animDef, animConfig, {});
      }catch(e){
        konymp.logger.error("-------------------Error Animating sun" , konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    },
    isShown : function(){
      konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
      try {
        if(this.view.height!="0%"){
          return true;
        }
        else
        {
          return false;
        }
      } catch (e) {
        konymp.logger.error("-------------------Error Animating show", konymp.logger.EXCEPTION);
      }
      konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
    }
  };
});
