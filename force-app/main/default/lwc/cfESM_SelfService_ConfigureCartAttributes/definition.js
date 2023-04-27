let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfESM_SelfService_ConfigureCartAttributes_6_salesforce","Id":"0RbDo000000RFKo0AA","ManageableState":"unmanaged","MasterLabel":"cfESM_SelfService_ConfigureCartAttributes_6_salesforce","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"states":[{"actions":[],"childCards":["ESM_SelfService_ConfigureAttributesFilters"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BName%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"ESM_SelfService_ConfigureAttributesFilters","cardNode":"{record.productAttributes.records}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{id}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"esm_selfservice_product_attributes","view":"browse"},"recordId":"{recordId}","selectedState":"Text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"ParentisReadOnly","id":"state-condition-3","operator":"==","type":"custom","value":"false"},{"field":"ParentisReadOnly","id":"state-condition-4","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"},{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-13","logicalOperator":"&&","operator":"!=","type":"custom","value":"bulkChange"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"b2b-selfservice-attributes-container","container":{"class":""},"customClass":"b2b-selfservice-attributes-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["ESM_SelfService_ConfigureBulkAttributes","ESM_SelfService_ConfigureAttributesFilters"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-2","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BName%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"ESM_SelfService_ConfigureBulkAttributes","cardNode":"{record.productAttributes.records}","data-conditions":{"group":[{"field":"Parent.bulkAction","hasMergeField":false,"id":"state-new-condition-37","operator":"!=","type":"custom","value":"ADD"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{id}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"esm_selfservice_product_attributes_macd"},"recordId":"{recordId}","selectedState":"Text"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1-clone-0","name":"FlexCard","property":{"cardName":"ESM_SelfService_ConfigureAttributesFilters","cardNode":"{record.productAttributes.records}","data-conditions":{"group":[{"field":"Parent.bulkAction","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"ADD"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{id}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"esm_selfservice_product_attributes_macd","view":"browse"},"recordId":"{recordId}","selectedState":"Text"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"Parent.isReadOnly","id":"state-condition-2","operator":"==","type":"custom","value":"false"},{"field":"Parent.isReadOnly","id":"state-condition-3","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"},{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-0","logicalOperator":"&&","operator":"==","type":"custom","value":"bulkChange"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"b2b-selfservice-attributes-container","container":{"class":""},"customClass":"b2b-selfservice-attributes-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"ESM_SelfService_ConfigureCartAttributes","uniqueKey":"id","Id":"a5aDo000001M3U9AA2","vlocity_cmt__GlobalKey__c":"ESM_SelfService_ConfigureCartAttributes/salesforce/6/1664306495994"};
  export default definition