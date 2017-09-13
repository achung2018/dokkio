export default class Homepage {

   static getPageTitle() {
      return browser.getTitle();
   }

   static clickQAEngineerButton() {
     this.qaEngineerButton().waitForEnabled(3000);
     this.qaEngineerButton().click(); 
   }

   static getQAEngineerJobContent() {
      return this.qaJobContentElement().getText(); 
   }
   
   static isQAJobDescriptionDisplayed() {
     return browser.isVisible(this.qaJobContentSelector());
   }
 
   static getQAJobHeaderText() {
     return this.qaJobHeader().getText();
   }

   /******* Locator Functions Below ******/

   static qaEngineerButton() {
       browser.waitForVisible('#Jobs-2',60000);
       return browser.element('#Jobs-2');
   }

   static qaJobContentElement() {
       browser.waitForExist('#Jobs-2-content',60000);
       return browser.element('#Jobs-2-content');
   }

   static qaJobContentSelector() {
      return "#Jobs-2-content";
   }
 
   static qaJobHeader() {
      browser.waitForExist('#Jobs-2-content > div',60000);
      return browser.element('#Jobs-2-content > div');
   }
}
