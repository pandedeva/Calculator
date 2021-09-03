// Insert angka ke textview
function insert(number) {
  document.form.textarea.value = document.form.textarea.value + number;
  // value dari text area diubah jadi value dari textarea ditambahkan dengan parameter number, yaitu tombol tombol yang ada
}
// document.form karna dia menggunakan tag form

// Fungsi Hitung
function equal() {
  let hasil = document.form.textarea.value;
  // hasil itu diambil dari value dari textarea
  document.form.textarea.value = eval(hasil);
  // menggunakan evaluation
}

// Clean
function clean() {
  document.form.textarea.value = "";
  // ubah menjadi string kosong
}
// untuk menghapus semua yang ada di textarea

// Delete
function back() {
  let hasil = document.form.textarea.value;
  // membuat variable hasil dengan value yang ada
  document.form.textarea.value = hasil.substring(0, hasil.length - 1);
  // substring berfungsing untuk memotong karakter string
  // substring, dengan nilai awal 0, lalu n nya panjang text yang ada lalu dikurangin 1
}
// untuk mendelete angka satu persatu
