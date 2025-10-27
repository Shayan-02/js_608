// Add your JavaScript code here
const settings = {
    theme: 'dark',
    language: 'fa',
  };
  
  localStorage.setItem('settings', JSON.stringify(settings));
  
  // هنگام بارگذاری
  const saved = JSON.parse(localStorage.getItem('settings'));
  console.log(saved.theme); // dark
