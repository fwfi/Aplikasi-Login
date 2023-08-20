/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* bikin variabel buat elemen view */
/** @module Login-Script */
/**
* bikin variabel buat tampilan form
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/**
* buat variabel utk tampilan input email
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/**
* buat variabel utk tampilan input passw
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* variabel utk nyimpen info email sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
/**
* variabel utk nyimpen info passw sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* aksi klik pd button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * dapetin nilai email dr input
  * @constant {string}
  */
  const email = inputEmailElement.value;
  /**
  * dapetin nilai passw dr input
  * @constant {string}
  */
  const password = inputPasswordElement.value;

  /* ngecek apakah nilainya match apa ngga */
  if (email == expectedEmail && password == expectedPassword) {

    /* klo sesuai ke home */
    goToHome();
  } else {

    /* klo ga, ada pop up */
    showPopUp();
  }
});
