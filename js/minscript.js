let countBookmarks=0,bookmarksLink=document.querySelector(".link-bookmarks"),addBookmarks=document.querySelectorAll(".add-bookmarks");if(bookmarksLink&&0!==addBookmarks.length)for(let e=0;e<addBookmarks.length;e++)addBookmarks[e].addEventListener("click",function(e){e.preventDefault(),countBookmarks++,bookmarksLink.innerHTML="Закладки: "+countBookmarks,bookmarksLink.classList.add("full")});let modalAddCart=document.querySelector(".modal-add-cart");if(modalAddCart){modalAddCart.querySelector(".close-button").addEventListener("click",function(e){e.preventDefault(),modalAddCart.classList.remove("modal-show")})}let countItems=0,buyLinks=document.querySelectorAll(".buy-button"),cartLink=document.querySelector(".link-cart");if(0!==buyLinks.length&&modalAddCart&&cartLink){for(let e=0;e<buyLinks.length;e++)buyLinks[e].addEventListener("click",function(e){e.preventDefault(),countItems++,cartLink.innerHTML="Корзина: "+countItems,cartLink.classList.add("full"),modalAddCart.classList.add("modal-show")});window.addEventListener("keydown",function(e){27===e.keyCode&&modalAddCart.classList.contains("modal-show")&&(e.preventDefault(),modalAddCart.classList.remove("modal-show"))})}let modalMessage=document.querySelector(".modal-message");if(modalMessage){modalMessage.querySelector(".close-button").addEventListener("click",function(e){e.preventDefault(),modalMessage.classList.remove("modal-show"),modalMessage.classList.remove("modal-error")})}let contactLink=document.querySelector(".contacts-link");if(contactLink&&modalMessage){let e=modalMessage.querySelector(".message-name"),a=modalMessage.querySelector(".message-email"),o=modalMessage.querySelector(".message-text");contactLink.addEventListener("click",function(a){a.preventDefault(),modalMessage.classList.add("modal-show"),e.focus()}),modalMessage.querySelector("form").addEventListener("submit",function(t){e.value&&a.value?(t.preventDefault(),console.log(`Имя: ${e.value}`+"\n"+`Email: ${a.value}`+"\n"+`Text: ${o.value}`+"\n")):(t.preventDefault(),modalMessage.classList.add("modal-error"),setTimeout(()=>{modalMessage.classList.remove("modal-error")},600),console.log("Необходимо ввести имя и email"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalMessage.classList.contains("modal-show")&&(e.preventDefault(),modalMessage.classList.remove("modal-show"),modalMessage.classList.remove("modal-error"))})}let modalMap=document.querySelector(".modal-map");if(modalMap){modalMap.querySelector(".map-close").addEventListener("click",function(e){e.preventDefault(),modalMap.classList.remove("modal-show")})}let mapLink=document.querySelector(".map-link");mapLink&&modalMap&&(mapLink.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalMap.classList.contains("modal-show")&&(e.preventDefault(),modalMap.classList.remove("modal-show"))}));
