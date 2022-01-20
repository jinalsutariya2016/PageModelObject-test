const SearchPage = require('../pageobjects/search.page');
// const { waitForTextChange } = require('../utilities/helper');


describe('ebay search page case ',  () => {
    
     /** all the other HOOKS you can find in the wdio.conf.js file search: "hooks".
        I have uncomment the beforeTest hook in the wdio.conf.js file */
     
    //before start testing open the URl 
    before(() => {
        SearchPage.open();
    });

    it('should have page title',  async () => {
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });

    it('should search for the product and check search bar value',  () => {
        SearchPage.searchInputBar.addValue('mobile');
        SearchPage.searchBtn.click();
        expect(SearchPage.searchInputBar).toHaveValue('mobile');
      
    });


    it('should have samsung on top', async () => {
        await expect(SearchPage.mobileName).toHaveTextContaining('Samsung');
    });


    it('after test', async () => {
      
        await browser.url('https://www.ebay.com/sch/i.html?_from=R40&_trksid=.m570.l1313&_nkw=mobile&_sacat=0&LH_TitleDesc=0&_odkw=mobile&_osacat=0');
        await SearchPage.moreBtn.click();
        await SearchPage.mobileCategoryNames.filter(x => {
        x.getText().then((y) => console.log("value = " + y))
    })
    });
   
   
});
