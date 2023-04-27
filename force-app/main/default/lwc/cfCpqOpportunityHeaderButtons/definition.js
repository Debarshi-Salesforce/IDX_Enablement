let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"Custom","value":{"body":"[{\"label\":\"Create Quote\"}, {\"isCartHasError\": false}]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1652985389752-h7ashmuz1","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.buttonEnable","fieldValue":"false"}],"id":"flex-action-1652985442744","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_submitbutton_disable","element":"action","eventLabel":"pubsub","eventname":"cpq_submitbutton_disable","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1652985510750-5qu0ebj7b","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.buttonEnable","fieldValue":"true"},{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1652985579360","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1668530275028-h2hd9xwau","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"isCartHasError","fieldValue":"{action.isCartHasError}"}],"id":"flex-action-1668530373442","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_is_cart_has_error","element":"action","eventLabel":"pubsub","eventname":"cpq_is_cart_has_error","eventtype":"pubsub","key":"event-2","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqOpportunityHeaderButtons_4_Vlocity","Id":"0RbDo000000RFLrSAU","ManageableState":"unmanaged","MasterLabel":"cfCpqOpportunityHeaderButtons_4_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-0","name":"Action","property":{"actionList":[{"actionIndex":0,"contextId":"","draggable":false,"isOpen":true,"key":"1643711077093-q6iws7upa","label":"Action","stateAction":{"Web Page":{"targetName":"/lightning/cmp/vlocity_cmt__vlocityLWCOmniWrapper?c__target=c:cPQCreateQuoteMultiLanguage&c__layout=lightning&c__tabIcon=custom:custom18&c__cartId={recordId}&c__tabLabel=Create Quote"},"hasExtraParams":true,"id":"flex-action-1645015999153","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom"}}],"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"details.records[0].actions.checkout","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"field":"Session.buttonEnable","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"==","type":"custom","value":"true"},{"group":[{"field":"Parent.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-17","operator":"==","type":"custom","value":"true"},{"field":"Parent.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-105","logicalOperator":"||","operator":"==","type":"custom","value":"0"}],"id":"state-new-group-18","logicalOperator":"&&"},{"field":"isCartHasError","hasMergeField":false,"id":"state-new-condition-341","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.CreateQuotes}","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"textAlign":"right"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"styles":{"label":{"textAlign":"right"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"styles":{"label":{"textAlign":"right"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"details.records[0].actions.checkout","hasMergeField":false,"id":"state-new-condition-2","operator":"==","type":"custom","value":"undefined"},{"field":"Session.buttonEnable","hasMergeField":false,"id":"state-new-condition-17","logicalOperator":"||","operator":"==","type":"custom","value":"false"},{"field":"isCartHasError","hasMergeField":false,"id":"state-new-condition-324","logicalOperator":"||","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BLabel.CreateQuotes%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__global-header_order__submit-order incomplete-btn slds-p-right_medium slds-p-left_medium slds-p-vertical_xx-small ","container":{"class":"cpq__global-header_order__submit-order incomplete-btn"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:medium","size":"medium","type":"right"},{"label":"left:medium","size":"medium","type":"left"},{"label":"vertical:xx-small","size":"xx-small","type":"vertical"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__global-header_order__submit-order incomplete-btn slds-p-right_medium slds-p-left_medium slds-p-vertical_xx-small ","container":{"class":"cpq__global-header_order__submit-order incomplete-btn"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:medium","size":"medium","type":"right"},{"label":"left:medium","size":"medium","type":"left"},{"label":"vertical:xx-small","size":"xx-small","type":"vertical"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-right_x-small ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:x-small","size":"x-small","type":"right"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqOpportunityHeaderButtons","Id":"a5aDo000001M3PGIAO","vlocity_cmt__GlobalKey__c":"cpqOpportunityHeaderButtons/Vlocity/4/1668530197065"};
  export default definition