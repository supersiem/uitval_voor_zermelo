if (typeof chrome.scripting === 'undefined') {
    console.error("chrome.scripting is undefined.  Possible issue with service worker registration.");
}


chrome.action.onClicked.addListener(function (tab) {
    const urlRegex = new RegExp("^https?://.*\\.zportal\\.nl/app/.*$");
    if (urlRegex.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["uitval.js"]
        });
    } else {
        console.log("Uitval.js wordt niet uitgevoerd omdat de URL niet overeenkomt.");
    }
});
