function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach((tab) => tab.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));
  
    document.querySelector(`#${tabId}`).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
  