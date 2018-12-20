define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onEndEditing defined for txtEmailS **/
    AS_TextField_e4a26ce32b5f4fc1a27fc783dc0840c2: function AS_TextField_e4a26ce32b5f4fc1a27fc783dc0840c2(eventobject, changedtext) {
        var self = this;
        //If it is not empty then check for email validation
        if (/^\s*$/.test(this.view.txtEmailS.text))
        //Reset the skin to Normal since the textbox is empty
        {
            self.view.txtEmailS["skin"] = "skEmail"
            return
        } else {
            if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(this.view.txtEmailS.text)) {
                self.view.txtEmailS["skin"] = "skEmail"
            } else {
                self.view.txtEmailS["skin"] = "skEmailRed"
            }
        }
    },
    /** onEndEditing defined for txtEmailS **/
    AS_TextField_ebf35748b8c34e1da76ff4774ebfc3c8: function AS_TextField_ebf35748b8c34e1da76ff4774ebfc3c8(eventobject, changedtext) {
        var self = this;
        //If it is not empty then check for email validation
        if (/^\s*$/.test(this.view.txtEmailS.text))
        //Reset the skin to Normal since the textbox is empty
        {
            self.view.txtEmailS["skin"] = "skEmail"
            return
        } else {
            if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(this.view.txtEmailSLI.text)) {
                self.view.txtEmailS["skin"] = "skEmail"
            } else {
                self.view.txtEmailS["skin"] = "skEmailRed"
            }
        }
    }
});