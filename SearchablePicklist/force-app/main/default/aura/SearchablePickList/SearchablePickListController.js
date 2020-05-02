({
    doInit : function(component, event, helper){
        helper.handleOnInitListener(component, event, helper);
    },

    onValueChange : function(component, event, helper) {
        helper.handleOnValueChangeListener(component, event, helper);
    },

    onIconClick : function(component, event, helper){
        helper.handleOnIconClickListener(component, event, helper);
    },

    onClickOption : function(component, event, helper){
        helper.handleOnClickOptionListener(component, event, helper);
    },
    showHelpMessageIfInvalid : function(component, event, helper){
        helper.handleShowHelpMessageIfInvalid(component, event, helper);
    },
})