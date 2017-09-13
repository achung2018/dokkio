import Homepage from "../pages/Homepage.js";
var assert = require('assert');

describe('webdriver.io page', function() {
    it('should display QA Job Description only when QA Engineer button is clicked', function() {
         var expectedJobHeader = "QA Engineer\nDo you love high quality software, testing, writing code, and learning new things? Do frustration-free user experiences and an empty bug queue make you smile? If so, Dokkio is looking for you to help test and prevent bugs in our flagship collaboration product.";

         // navigate to Dokkio website 
         browser.url('http://dokkio.com/');
         
         // Verify page is displayed with the correct title
         assert.equal(Homepage.getPageTitle(), 'Dokkio :: Find, Organize and Understand all of your files');
         
        // Verify that QA Engineer job description is not displayed
         assert.ok(!Homepage.isQAJobDescriptionDisplayed());

         // Verify that job header for QA Engineer is empty
         assert.equal(Homepage.getQAJobHeaderText(),"");        

         // Click the 'QA Engineer' button
         Homepage.clickQAEngineerButton();

         // Verify that QA Engineer job description is displayed
         assert.ok(Homepage.isQAJobDescriptionDisplayed());

         // Verify that job header for QA Engineer contains the expected text
         assert.equal(Homepage.getQAJobHeaderText(),expectedJobHeader);
    });
});
