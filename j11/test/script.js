function changeBackgroundColor() {
  // گرفتن رنگ انتخابی از پالت
  const colorInput = document.getElementById("colorInput").value;

  // اعمال رنگ پس‌زمینه
  document.body.style.backgroundColor = colorInput;
}
