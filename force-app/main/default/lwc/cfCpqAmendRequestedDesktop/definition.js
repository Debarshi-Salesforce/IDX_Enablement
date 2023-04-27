let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1625913503583-4mkmdqfkr","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1625913520818","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqAmendRequestedDesktop_4_Vlocity","Id":"0RbDo000000RFLuCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqAmendRequestedDesktop_4_Vlocity","NamespacePrefix":"c"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-4","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-244","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1644312550127-gmcmnirs8","label":"Action","record":"{record}","sObjectType":"Order","stateAction":{"channelName":"close_modal","displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"Contextid":"{Id}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1644312553027","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-244","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"hideActionIcon":true,"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","record":"{record}","sObjectType":"Order","showSpinner":"false","stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-4-clone-0","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1644312560689-nd7h96pme","label":"Action","record":"{record}","sObjectType":"Order","stateAction":{"Attachments":"","ContentDocumentLinks":"","displayName":"{Label.CPQDiscard}","id":"flex-action-1644312563075","name":"Discard","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"icon-v-document1-line","label":"{Label.CPQDiscard}","record":"{record}","sObjectType":"Order","showSpinner":"false","stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-6","name":"Menu","property":{"card":"{card}","iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443192973","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443192973","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","iconPosition":"","label":"{Label.CPQViewRecord}","name":"menu-item-1613651528336-0","showSpinner":"false","status":""},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629443195832","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629443195832","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1613651548678-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629443200706","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629443200706","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1613651587144-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629443203058","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629443203058","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1613651611190-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/vlocity_cmt__XOMViewOrderDecomposition?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQViewDecomposition}","id":"flex-action-1627055455993","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/vlocity_cmt__XOMViewOrderDecomposition?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQViewDecomposition}","id":"flex-action-1627055455993","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQViewDecomposition}","name":"menu-item-1614518191126-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewOrchestrationPlan}","eventName":"cpqutils","extraParams":{"cartId":"{Id}","ipMethod":"CPQ_OrderActionUtil","utilMethod":"viewOrchestrationPlan"},"hasExtraParams":true,"id":"flex-action-1627055476338","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewOrchestrationPlan}","eventName":"cpqutils","extraParams":{"cartId":"{Id}","ipMethod":"CPQ_OrderActionUtil","utilMethod":"viewOrchestrationPlan"},"hasExtraParams":true,"id":"flex-action-1627055476338","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQViewOrchestrationPlan}","name":"menu-item-1614518248355-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1627055514886","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1627055514886","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1614572486167-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-142","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-149","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631187593958","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631187593958","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1614572579211-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-159","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-168","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631187623177","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631187623177","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1615201390031-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-178","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-185","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631187651318","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631187651318","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631186939234-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-195","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-208","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631187679440","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631187679440","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631186969630-0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1645805281677-rin89tu6f","label":"Action","sObjectType":"Order","stateAction":{"Attachments":"","ContentDocumentLinks":"","displayName":"{Label.CPQEdit}","id":"flex-action-1645805281720","name":"Edit Record","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"}}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQEdit}","name":"menu-item-1645805281674-0","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-1","operator":"==","type":"custom","value":"Order"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-2","logicalOperator":"&&","operator":"==","type":"custom","value":"Amend Requested"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Amend Requested","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-4","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-244","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1644312575269-c1euub5ir","label":"Action","record":"{record}","sObjectType":"Order","stateAction":{"channelName":"close_modal","displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{Id}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1644312577272","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-244","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"hideActionIcon":true,"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","record":"{record}","sObjectType":"Order","showSpinner":"false","stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-6","name":"Menu","property":{"card":"{card}","iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443225340","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443225340","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1613651528336-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629443229007","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629443229007","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1613651548678-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629443232130","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629443232130","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1613651587144-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629443234688","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629443234688","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1613651611190-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1627055762720","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1627055762720","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1614572486167-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"actionConditions":null,"displayName":"{Label.CPQClone}","id":"flex-action-1627055779159","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"actionConditions":null,"displayName":"{Label.CPQClone}","id":"flex-action-1627055779159","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQClone}","name":"menu-item-1615201956960-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-218","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-225","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631188693976","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631188693976","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1631187037171-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-218","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-225","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631187052205","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631187052205","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631187052189-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-218","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-225","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631187067299","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631187067299","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1631187067281-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-218","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-225","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631187176219","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631187176219","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631187176199-1","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1645805319843-qx306vug0","label":"Action","sObjectType":"Order","stateAction":{"Attachments":"","ContentDocumentLinks":"","displayName":"{Label.CPQEdit}","id":"flex-action-1645805319891","name":"Edit Record","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"}}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQEdit}","name":"menu-item-1645805319841-1","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-5","operator":"==","type":"custom","value":"Order"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-6","logicalOperator":"&&","operator":"==","type":"custom","value":"Rejected"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Rejected","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAmendRequestedDesktop","Id":"a5aDo000001M3QtAAG","vlocity_cmt__GlobalKey__c":"cpqAmendRequestedDesktop/Vlocity/4/1644312538685"};
  export default definition