({
    handleOnInitListener : function(component, event, helper) {
        var options = component.get("v.options");
        component.set("v.searchedOptions",options);
    },
    
    handleOnValueChangeListener : function(component, event, helper) {
        var options = component.get("v.options");

        var value = component.find("input-search").get("v.value");
        var searchOptions;
        component.set("v.isShowDropDown", false);
        if($A.util.isUndefinedOrNull(value)){
            searchOptions = options;
        }else{
            searchOptions = helper.searchByBavlue(options, value);
        }
        
        if(searchOptions.length>0){
            component.set("v.searchedOptions",searchOptions);
            component.set("v.isShowDropDown", true);
            helper.handleSize(component);
        }
    },
    
    handleOnIconClickListener : function(component, event, helper) {
        helper.toggleDropDown(component,event, helper);
    },
    
    handleOnClickOptionListener : function(component, event, helper){
        component.set("v.value",event.currentTarget.dataset.value);
        helper.toggleDropDown(component,event, helper);
    },
    
    toggleDropDown : function(component, event, helper){
        var isDropDownShown = component.get("v.isShowDropDown");
        if(isDropDownShown){
            component.set("v.isShowDropDown", false);
        }else{
            helper.handleOnValueChangeListener(component, event, helper);
        }
        
    },
    handleShowHelpMessageIfInvalid : function(component, event, helper){
        var inputComponent = component.find("input-search");
        inputComponent.showHelpMessageIfInvalid();
    },
    
    searchByBavlue : function(opptions, value){
        var searchedResults = [];
        opptions.forEach(function(option){
            if(option.value.toUpperCase().startsWith(value.toUpperCase())){
                searchedResults.push(option);
            }
        });
        return searchedResults;
    },

    handleSize : function(component){
        var size = component.get('v.size');
        var style = document.createElement('style');
        style.type = 'text/css';
        var cssClass = '.tempSize { webkit-overflow-scrolling: touch;';
        cssClass += 'max-height: calc(((1rem * 1.5) + 1rem) *'+ size+');';
        cssClass += 'overflow-y: auto; }';
        style.innerHTML = cssClass
 
        document.getElementsByTagName('head')[0].appendChild(style);

        var listBox = component.find('listbox-id-11');
        $A.util.addClass(listBox, 'tempSize');
    }
})