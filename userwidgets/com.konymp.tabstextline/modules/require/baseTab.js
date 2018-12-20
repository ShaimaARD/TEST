/*
#
#  Created by Team Kony.
#  Copyright (c) 2018 Kony Inc. All rights reserved.
#
*/
define(function() {
    var konyLoggerModule = require('com/konymp/tabstextline/konyLogger');
    var konymp = konymp || {};
    konymp.logger = new konyLoggerModule("Tabs");

    return {
        /**
         * @function createDynamicFlex
         * @description This function is used to create Dynamic FlexContainer at run time
         * @private
         * @param {string} id
         * @param {string} left
         * @param {string} height
         * @param {string} width
         * @param {string} centerX
         * @param {string} centerY
         * @param {string} onClickCallback
         */
        createDynamicFlex: function(id, left, top, height, width, centerX, centerY, onClickCallback) {
            konymp.logger.trace("----------Entering createDynamicFlex function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var flx = new kony.ui.FlexContainer({
                    "id": id,
                    "top": top + "%",
                    "left": left + "%",
                    "width": width + "%",
                    "height": height + "%",
                    "zIndex": 1,
                    "centerX": centerX,
                    "centerY": centerY,
                    "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                    "isVisible": true,
                    "onClick": onClickCallback,
                    "clipBounds": true,
                }, {
                    "padding": [0, 0, 0, 0]
                }, {});
                konymp.logger.trace("---------------Exiting createDynamicFlex function---------------", konymp.logger.FUNCTION_EXIT);
                return flx;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function createDynamicLabels
         * @description This function is used to create a Label at Run-Time
         * @private
         * @param {string} id
         * @param {string} text
         * @param {string} centerX
         * @param {string} centerY
         *return {widget} lbl
         */
        createDynamicLabels: function(id, text, centerX, centerY) {
            konymp.logger.trace("----------Entering createDynamicLabels function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var lblBasic = {
                    "id": id,
                    "skin": "konympTitleDullSkin",
                    "centerX": centerX,
                    "centerY": centerY,
                    "zIndex": 5,
                    "text": text,

                    isVisible: true
                };
                var lblLayout = {
                    "containerWeight": 100,
                    "padding": [5, 5, 5, 5],
                    "margin": [5, 5, 5, 5],
                    "hExpand": true,
                    "vExpand": false
                };
                var lblPlatForm = {
                    "renderAsAnchor": true,
                    "wrapping": constants.WIDGET_TEXT_WORD_WRAP
                };
                var lbl = new kony.ui.Label(lblBasic, lblLayout, lblPlatForm);
                konymp.logger.trace("---------------Exiting createDynamicLabels function---------------", konymp.logger.FUNCTION_EXIT);
                return lbl;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }

        },
        /**
         * @function createDynamicImage
         * @description This function is used to create a Image widget at Run-Time
         * @private
         * @param {string} id
         * @param {string} left
         * @param {string} top
         * @param {string} height
         * @param {string} width
         * @param {string} centerX
         * @param {string} centerY
         * @param {string} src
         * @return {widget} 
         */
        createDynamicImage: function(id, left, top, height, width, centerX, centerY, src) {
            try {
                konymp.logger.debug("#####In createDynamicImage", konymp.logger.FUNCTION_ENTRY);
                var createdImage = new kony.ui.Image2({
                    "id": id,
                    "isVisible": true,
                    "left": left,
                    "width": width,
                    "top": top,
                    "height": height,
                    "centerX": centerX,
                    "centerY": centerY,
                    "src": src,
                    "imageScaleMode": 1
                }, {}, {});
                return createdImage;
            } catch (exception) {
                konymp.logger.error("#####Exception in createDynamicImage : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function setContentOffset
         * @description This function is used to validate the contentOffset based the no of tabs per screen 
         * @private
         * @param {string} index
         */
        setContentOffset: function(context, tabId) {
          konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
            try {
                var totalWidth=context.tabCount*parseInt(context.tabWidth);
              	if(totalWidth<=parseInt(context.view.flxTabs.width)){
                  return;
                }
              else{
                var tabWidth=parseInt(context.tabWidth);
                if(50<tabWidth && tabWidth<=100){
                  this.passValueToContentOffset(context, context.view["flxTab"+tabId].left);
                }
                else if(35<=tabWidth ||tabWidth==50){
                  var offset=(100-(parseInt(tabWidth)))/2;
                  if(tabId==0){
                    this.passValueToContentOffset(context, "0%");
                  }
                  else{
                    var secondaryOffset=parseInt(context.view["flxTab"+(tabId-1)].left)+parseInt(tabWidth)-offset;
                    this.passValueToContentOffset(context, secondaryOffset+"%");
                  }
                }
                else{
                  this.minimumThreeTabsPerScreen(context,tabId);
                }
              }
                konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
            } catch (exception) {
                konymp.logger.error("#####Exception in setContentOffset : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
      /**
         * @function minimumThreeTabsPerScreen
         * @description This function will be invoked when the no of tabs per screen are greater than 3 
         * @private
         * @param {string} index
         * @param {string} context
         */
      minimumThreeTabsPerScreen: function(context,tabId){
        try {
                konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
          		tabId--;
                var contentOffsetOfTab = context.view["flxTab" + tabId].left;
                var tabsPerScreen = parseInt(100 / parseInt(context.tabWidth));
                var bar = (context.tabCount * parseInt(context.tabWidth)) / (tabsPerScreen - 1);
                if (Math.ceil((100 / parseInt(context.tabWidth))) > 5) {
                    bar = 0;
                }
                if (parseInt(contentOffsetOfTab) <= bar) {
                  var factor=(context.tabCount-tabId)*parseInt(context.tabWidth);
                  if(factor<parseInt(context.view.flxTabs.width)){
                    contentOffsetOfTab=(parseInt(contentOffsetOfTab)-(parseInt(context.view.flxTabs.width)-factor))+"%";
                  } 
                    this.passValueToContentOffset(context, contentOffsetOfTab);
                }
                konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
            } catch (exception) {
                konymp.logger.error("#####Exception in setContentOffset : " + exception.message, konymp.logger.EXCEPTION);
            }
      },
       /**
         * @function passValueToContentOffset
         * @description This function will use setContentOffset api of the Flex Scroll Container 
         * @private
         * @param {string} index
         * @param {string} context
         */
      passValueToContentOffset: function(context,x){
        try{
        konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
        context.view.flxTabs.setContentOffset({
                        "x": x
                    }, true);
      }
        catch(exception){
         konymp.logger.error("#####Exception in passValueToContentOffset : " + exception.message, konymp.logger.EXCEPTION); 
        }
      }
    };
});