let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":"","value":{}},"enableLwc":true,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCpqCartConfiguratorContainer_1_Vlocity","Id":"0RbDo000000RFKvSAE","ManageableState":"unmanaged","MasterLabel":"cfCpqCartConfiguratorContainer_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqCartErrorPanel","cpqConfigureCart","cpqCartFlexTable"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqCartErrorPanel","cardNode":"{record.configuratorAlertMessages}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"WarningMessage"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqConfigureCart","cardNode":"{record.cartItems}","data-conditions":{"group":[{"field":"isSummary","hasMergeField":false,"id":"state-new-condition-11","operator":"!=","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"cartType":"{Parent.cartType}","saveAttributesOnly":"{Parent.saveAttributesOnly}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-3","name":"FlexCard","property":{"cardName":"cpqCartFlexTable","cardNode":"{record.cartItems}","data-conditions":{"group":[{"field":"isSummary","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"cartType":"{Parent.cartType}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"CpqCartConfiguratorContainer","Id":"a5aDo000001M3V7IAO","vlocity_cmt__GlobalKey__c":"CpqCartConfiguratorContainer/Vlocity/1/1663153533777"};
  export default definition