let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[\n{\"value\":\"value1\"}, {\"value\":\"value2\"},\n{\"value\":\"value1\"}, {\"value\":\"value2\"},\n{\"value\":\"value1\"}, {\"value\":\"value2\"}\n]","dsDelay":"","resultVar":""}},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultiSiteAppliedFiltersChild_1_Vlocity","Id":"0RbDo000000RFLG0AE","ManageableState":"unmanaged","MasterLabel":"cfCpqMultiSiteAppliedFiltersChild_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7Bvalue%7D%3C/div%3E","record":"{record}"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_value ","container":{"class":"cpq__multisite-applied-filters_value"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n        color:#0176D3; ","text":{"align":"","color":"#0176D3"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_value ","container":{"class":"cpq__multisite-applied-filters_value"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n        color:#0176D3; ","text":{"align":"","color":"#0176D3"}}}],"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Action-1","name":"Action","property":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"iconColor":"#747474","iconOnly":true,"iconSize":"x-small","isOpen":true,"key":"1635329004433-gic3qxvie","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.Remove}","eventName":"cpq_{Parent.recordId}_{Parent.type}","extraParams":{"name":"{Parent.name}","selectedValue":"{value}"},"hasExtraParams":true,"id":"flex-action-1635329006690","message":"multisite_remove_applied_filter","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"utility:close"},"stateObj":"{record}"}],"card":"{card}","flyoutDetails":{},"iconColor":"#747474","iconName":"utility:close","iconOnly":true,"iconSize":"x-small","label":"{Label.Remove}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_remove slds-p-left_xx-small ","container":{"class":"cpq__multisite-applied-filters_remove"},"elementStyleProperties":{"iconColor":"#747474","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[{"label":"left:xx-small","size":"xx-small","type":"left"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_remove slds-p-left_xx-small ","container":{"class":"cpq__multisite-applied-filters_remove"},"elementStyleProperties":{"iconColor":"#747474","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[{"label":"left:xx-small","size":"xx-small","type":"left"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"Parent.name","hasMergeField":false,"id":"state-new-condition-12","operator":"!=","type":"custom","value":"Default_ClearAll"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_xx-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"horizontal:xx-small","size":"xx-small","type":"horizontal"}],"size":{"default":"4","isResponsive":true,"large":"1","medium":"2","small":"3"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_2-of-12 slds-small-size_3-of-12 slds-size_4-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-0","name":"Action","property":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1635329020035-le3wd88yw","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQClearAll}","eventName":"cpq_{recordId}_{Parent.type}","id":"flex-action-1635329021569","message":"multisite_clear_filter","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"}],"card":"{card}","flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"{Label.CPQClearAll}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_clearall-action slds-p-top_xxx-small ","container":{"class":"cpq__multisite-applied-filters_clearall-action"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n        color:#0176D3; ","text":{"align":"","color":"#0176D3"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_clearall-action slds-p-top_xxx-small ","container":{"class":"cpq__multisite-applied-filters_clearall-action"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n        color:#0176D3; ","text":{"align":"","color":"#0176D3"}}}],"type":"element"}]}},"conditions":{"group":[{"field":"Parent.name","hasMergeField":false,"id":"state-new-condition-19","operator":"==","type":"custom","value":"Default_ClearAll"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Clear All Action","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultiSiteAppliedFiltersChild","uniqueKey":"{value}","Id":"a5aDo000001M3PgAAG","vlocity_cmt__GlobalKey__c":"cpqMultiSiteAppliedFiltersChild/Vlocity/1/1632400504380"};
  export default definition