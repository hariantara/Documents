// Select <button> dengan id alert-on-click-button
var alertOnClickButton = document.getElementById('alert-on-click-button');

// Tambahkan Event Listener ke <button> alertOnClickButton, dengan trigger atau pemicu nya adalah click dan memanggil function sebagai parameter kedua.
alertOnClickButton.addEventListener('click', function() {
  alert('Hello There!');
});

// Select <button> dengan id alert-on-click-button
var logOnHoverButton = document.getElementById('log-on-hover-button');

// Tambahkan Event Listener ke <button> alertOnHoverButton, dengan trigger atau pemicu nya adalah mouseenter dan memanggil function sebagai parameter kedua.
logOnHoverButton.addEventListener('mouseenter', function() {
  console.log('Hello, saya sedang melakukan hover atau mouseenter ke button!');
});

// Select <button> dengan id alert-on-leave-button
var logOnLeaveButton = document.getElementById('log-on-leave-button');

// Tambahkan Event Listener ke <button> alertOnHoverButton, dengan trigger atau pemicu nya adalah mouseenter dan memanggil function sebagai parameter kedua.
logOnLeaveButton.addEventListener('mouseleave', function() {
  console.log('Hello, saya sedang kelar dari button!');
});


//////////////////////////////////////////////////////////////////////////

// Select <input> dengan id on-input
var onChangeInput = document.getElementById('on-input');

// Select <span id="on-input-content">
var inputContent = document.getElementById('on-input-content');

onChangeInput.addEventListener('input', function(event) {
  inputContent.innerHTML = event.target.value;
});

//input id
var onChangeBlur = document.getElementById('on-blur');
//span id
var onBlur = document.getElementById('on-blur-content');

onChangeBlur.addEventListener('blur', function(event) {
  onBlur.innerHTML = event.target.value;
});

////////////////////////////////////////////////////////////////////////

// Select <form> dengan id main-form
var mainForm = document.getElementById('main-form');

// Tambahkan Event Listener dengan trigger submit ke <form id="main-form">
mainForm.addEventListener('submit', function() {
  alert('Sukses Submit!');
});

// percobaan

var inputan = document.getElementById('on-input');
var valuenya = inputan.value;
console.log(valuenya);
