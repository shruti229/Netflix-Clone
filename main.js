const tabItems = document.querySelectorAll('.tab-item');  //When we click on the icons
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select Item on clicking it
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');

  //Grab the content
  const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}
function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click',selectItem));  //Listen for tab click
