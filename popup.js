document.getElementById('highlight').addEventListener('click', () => {
    const word = document.getElementById('word').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: highlightWord,
        args: [word]
      });
    });
  });
  
  function highlightWord(word) {
    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${word})`, 'gi');
    document.body.innerHTML = bodyText.replace(regex, '<span style="background-color: yellow;">$1</span>');
  }