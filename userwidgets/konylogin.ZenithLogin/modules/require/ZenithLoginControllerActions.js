define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ondone defined for tbxUsername **/
    AS_TextField_b6f60278db7f4ebc9816a40ce1a17932: function AS_TextField_b6f60278db7f4ebc9816a40ce1a17932(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    },
    /** ondone defined for tbxPassword **/
    AS_TextField_g0f9ab977b754d69a6cba0ceee4c9048: function AS_TextField_g0f9ab977b754d69a6cba0ceee4c9048(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    /** ontouchstart defined for imgClose **/
    AS_Image_bfcc49b5339247259a2deef65f4f102a: function AS_Image_bfcc49b5339247259a2deef65f4f102a(eventobject, x, y) {
        var self = this;
        undefined.isVisible = false;
    }
});