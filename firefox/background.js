browser.browserAction.onClicked.addListener(function (tab) {
    const urlRegex = new RegExp("^https?://.*\\.zportal\\.nl/app/.*$");
    if (urlRegex.test(tab.url)) {
        browser.tabs.executeScript(tab.id, { file: "uitval.js" });
    } else {
        console.log("Uitval.js wordt niet uitgevoerd omdat de URL niet overeenkomt.");
    }
});
