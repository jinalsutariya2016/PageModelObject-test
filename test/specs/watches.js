const SearchPage = require('../pageobjects/search.page');


describe('ebay search page case ',  () => {
    it('should open watches page', async () => {
         SearchPage.open();
         SearchPage.fashionLink.moveTo();
         SearchPage.watchesLink.waitForDisplayed({ timeout: 1000 });
         SearchPage.watchesLink.click();
      
    });   
       it('should have banner', async () => {
          browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
           await expect(SearchPage.watchPageBanner).toHaveText('Watches, Parts & Accessories');
       
       });
       
   });

