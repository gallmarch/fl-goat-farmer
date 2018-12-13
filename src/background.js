const urls = [
  '*://*.api.fallenlondon.com/api/exchange/sell',
  '*://api.fallenlondon.com/api/exchange/sell',
  '*://*.api.fallenlondon.com/api/exchange/buy',
  '*://api.fallenlondon.com/api/exchange/buy',
];

function onTransactionComplete() {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs) => {
      const [{ id }] = tabs;
      chrome.tabs.sendMessage(id, { type: 'TRANSACTION_COMPLETE' });
    },
  );
}

chrome.webRequest.onCompleted.addListener(onTransactionComplete, { urls });