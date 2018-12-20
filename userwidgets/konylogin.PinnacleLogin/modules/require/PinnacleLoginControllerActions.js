define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ondone defined for tbxUsername **/
    AS_TextField_g054843a12cd43fa84dcf8db41d00944: function AS_TextField_g054843a12cd43fa84dcf8db41d00944(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    },
    /** ondone defined for tbxPassword **/
    AS_TextField_cd7db03ac3994c59bf98d5fe4912eeee: function AS_TextField_cd7db03ac3994c59bf98d5fe4912eeee(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    /** ontouchstart defined for imgClose **/
    AS_Image_c17f2387abe64852bc89a57536f8b090: function AS_Image_c17f2387abe64852bc89a57536f8b090(eventobject, x, y) {
        var self = this;
        undefined.isVisible = false;
    }
});