let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":" [{\"label\":\"Group\", \"value\":[], \"groupIds\": \"\"}]","dsDelay":0,"resultVar":""}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625928221570-34v2mfzdt","label":"Action","stateAction":{"eventName":"cpqutils","extraParams":{"ids":"{action.value}","utilMethod":"handleMultiSelectCartIds"},"hasExtraParams":true,"id":"flex-action-1616431911028","message":"cpq_ui_event","subType":"PubSub","type":"Event"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625928221570-34v2mfzdt","label":"Action","stateAction":{"eventName":"cpqutils","extraParams":{"ids":"{action.value}","utilMethod":"handleMultiSelectCartIds"},"hasExtraParams":true,"id":"flex-action-1616431911028","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cartgroupids","displayLabel":"cartgroupids:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"isFlex":true,"listenToWidthResize":true,"lwc":{"DeveloperName":"cfCpqDetailViewFlexTableContainer_4_Vlocity","Id":"0RbDo000000RFMlCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqDetailViewFlexTableContainer_4_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"states":[{"actions":[],"childCards":["cpqCartFlexTable","cpqSpinner"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Checkbox-0","key":"element_element_block_0_0_baseInputElement_0_0","name":"Checkbox","parentElementKey":"element_block_0_0","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpqutils_{recordId}","extraParams":{"cartType":"{Parent.cartType}","checked":"{checked}","groupItems":"{value}","offerType":"cartDetailViewGroup","selectionLabel":"{label}","utilMethod":"selectCartItemFunctionality"},"hasExtraParams":true,"id":"flex-action-1633954998288","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","propertyObj":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpqutils_{recordId}","extraParams":{"cartType":"{Parent.cartType}","checked":"{checked}","groupItems":"{value}","offerType":"cartDetailViewGroup","selectionLabel":"{label}","utilMethod":"selectCartItemFunctionality"},"hasExtraParams":true,"id":"flex-action-1633954998288","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"checked":false,"customProperties":[{"id":0,"label":"checked","value":"{checked}"}],"label":" ","name":"cartgroupids","value":"{record.result[0].groupIds}"},"record":"{record}","type":"checkbox"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Field-1","key":"element_element_block_0_0_outputField_1_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","fieldName":"label","label":"","placeholder":"","record":"{record}","type":"text"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-23","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"2","medium":"2","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"","width":"1"},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"2","medium":"2","small":"12"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_2-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #cccccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"","width":"1"},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"2","medium":"2","small":"12"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_2-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #cccccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-FlexCard-1","key":"element_element_block_1_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_1_0","property":{"cardName":"cpqCartFlexTable","cardNode":"{record.value}","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","cartView":"{Parent.cartView}","saveAttributesOnly":"{Parent.saveAttributesOnly}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 "},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-1-Action-2","key":"element_element_block_1_0_action_1_0","name":"Action","parentElementKey":"element_block_1_0","property":{"buttonVariant":"outline-brand","card":"{card}","data-conditions":{"group":[{"field":"Parent.actions.nextproducts","hasMergeField":false,"id":"state-new-condition-7","operator":"!=","type":"custom","value":"undefined"},{"field":"Parent.load","hasMergeField":false,"id":"state-new-condition-0","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"hideActionIcon":true,"record":"{record}","stateAction":{"displayName":"{Label.CPQLoadMore}","eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{Parent.cartId}","ipMethod":"CPQ_GetCartItems","lastRecordId":"{actions.nextproducts.remote.params.lastRecordId}","offerType":"Detail","pagesize":"10","utilMethod":"loadMoreFunctionality"},"hasExtraParams":true,"id":"flex-action-1626152374484","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-FlexCard-3","key":"element_element_block_1_0_childCardPreview_2_0","name":"FlexCard","parentElementKey":"element_block_1_0","property":{"cardName":"cpqSpinner","cardNode":"","data-conditions":{"group":[{"field":"Parent.load","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"size":"medium"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":10,"medium":10,"small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":10,"medium":10,"small":"12"},"sizeClass":"slds-large-size_10-of-12 slds-medium-size_10-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":10,"medium":10,"small":"12"},"sizeClass":"slds-large-size_10-of-12 slds-medium-size_10-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#FAFAF9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FAFAF9;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqDetailViewFlexTableContainer","Id":"a5aDo000001M3V5IA4","vlocity_cmt__GlobalKey__c":"cpqDetailViewFlexTableContainer/Vlocity/3/1663037764698"};
  export default definition