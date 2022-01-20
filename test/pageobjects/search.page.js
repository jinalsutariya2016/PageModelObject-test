

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {

    open() {
        return super.open('https://www.ebay.com/'); // can set the baseUrl in wdio.cong.js file 
    }
  
    /**
     * define selectors using getter methods
     */
    get searchInputBar() {
        return $('#gh-ac');
    }

    get searchBtn() {
        return $('#gh-btn');
    }

    get fashionLink() {
        return $('.hl-cat-nav__js-tab a[href*="Fashion"]');
    }

    get watchesLink() {
        return $('.hl-cat-nav__sub-cats a[href*="Watches"]');
    }

    get categoryName() {
        return $('//*[@id="gh-cat"]/option[1]');
    }

    get mobileName() {
        return $('//*[@id="srp-river-results"]/ul/li[1]/div/div[2]/a/h3');
    }

    get watchPageBanner() {
     return $('.b-pageheader__text');
    }
    
    get mobileCategoryNames() {
        return 	$$('#x-refine__group__0 > ul > li> ul > li >ul > li span'); 
    }

    get moreBtn() {
        return $('button[aria-label="More of category - Cell Phones & Accessories"]');
    }

}

module.exports = new SearchPage();
