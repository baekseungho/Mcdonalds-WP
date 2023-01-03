const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const overlay=document.querySelector('.overlay');
const sidebar=document.querySelector('.sidebar');

function openSidebar(){
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

function closeSidebar(){
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

sidebarMenuButton.addEventListener('click',openSidebar);
overlay.addEventListener('click',closeSidebar);