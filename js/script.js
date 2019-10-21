//bookmarks
let countBookmarks = 0;
let bookmarksLink = document.querySelector(".link-bookmarks");
let addBookmarks = document.querySelectorAll(".add-bookmarks");
if (bookmarksLink && addBookmarks.length !== 0) {
  for (let i = 0; i < addBookmarks.length; i++) {
    addBookmarks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      countBookmarks++;
      bookmarksLink.innerHTML = "Закладки: " + countBookmarks
      bookmarksLink.classList.add("full");
    })
  }
}

//cart

let modalAddCart = document.querySelector(".modal-add-cart");
if (modalAddCart) {
  let closeButtonAddCart = modalAddCart.querySelector(".close-button");
  closeButtonAddCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAddCart.classList.remove("modal-show");
  })
}

let countItems = 0;
let buyLinks = document.querySelectorAll(".buy-button");
let cartLink = document.querySelector(".link-cart");
if (buyLinks.length !== 0 && modalAddCart && cartLink) {
  for (let i = 0; i < buyLinks.length; i++) {
    buyLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      countItems++;
      cartLink.innerHTML = "Корзина: " + countItems;
      cartLink.classList.add("full");
      modalAddCart.classList.add("modal-show");
    })
  }
  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (modalAddCart.classList.contains("modal-show")) {
          evt.preventDefault();
          modalAddCart.classList.remove("modal-show")
        }
      }
    }
  )
}

//message

let modalMessage = document.querySelector(".modal-message");
if (modalMessage) {
  let closeButtonMessage = modalMessage.querySelector(".close-button");
  closeButtonMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMessage.classList.remove("modal-show");
    modalMessage.classList.remove("modal-error");
  })
}

let contactLink = document.querySelector(".contacts-link");
if (contactLink && modalMessage) {
  let messageName = modalMessage.querySelector(".message-name");
  let messageEmail = modalMessage.querySelector(".message-email");
  let messageText = modalMessage.querySelector(".message-text");
  contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMessage.classList.add("modal-show");
    messageName.focus();
  })

  let messageForm = modalMessage.querySelector("form")
  messageForm.addEventListener("submit", function (evt) {
    if (!messageName.value || !messageEmail.value) {
      evt.preventDefault();
      modalMessage.classList.add("modal-error");
      setTimeout(function() {
        modalMessage.classList.remove("modal-error")
      }, 600)
      console.log("Необходимо ввести имя и email")
    } else {
      evt.preventDefault();
      console.log(
        'Имя:' + messageName.value + '\n' +
        'Email:' + messageEmail.value + '\n' +
        'Text:' + messageText.value + '\n'
      )
    }
  })
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMessage.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMessage.classList.remove("modal-show")
        modalMessage.classList.remove("modal-error");
      }
    }
  })
}

//map

let modalMap = document.querySelector(".modal-map")

if (modalMap) {
  let closeMap = modalMap.querySelector(".map-close");
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show")
  })
}

let mapLink = document.querySelector(".map-link")
if (mapLink && modalMap) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  })
  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (modalMap.classList.contains("modal-show")) {
          evt.preventDefault();
          modalMap.classList.remove("modal-show")
        }
      }
    }
  )
}
