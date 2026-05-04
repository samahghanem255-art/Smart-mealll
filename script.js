let cart = [];
let total = 0;

let lang = "ar";

const translations = {
ar:{
home:"الرئيسية",
menu:"القائمة",
health:"توصيات صحية",
payment:"الدفع",
contact:"تواصل",
start:"ابدأ الطلب",
add:"إضافة",
cart:"السلة"
},
en:{
home:"Home",
menu:"Menu",
health:"Health",
payment:"Payment",
contact:"Contact",
start:"Start Order",
add:"Add",
cart:"Cart"
}
};

/* ===== LANGUAGE ===== */
function setLang(l){
lang = l;

document.querySelectorAll("[data-lang]").forEach(el=>{
let key = el.getAttribute("data-lang");
el.innerText = translations[lang][key];
});
}

/* ===== CART ===== */
function addToCart(name,price){
cart.push({name,price});
total += price;

document.getElementById("cartCount").innerText = cart.length;
updateCart();
}

function updateCart(){
let box = document.getElementById("cartItems");

if(cart.length===0){
box.innerHTML = "السلة فارغة";
return;
}

box.innerHTML = cart.map((i,idx)=>`
<div>
${i.name} - ${i.price} دج
<button onclick="removeItem(${idx})">❌</button>
</div>
`).join("");

document.getElementById("total").innerText = total + " دج";
}

function removeItem(i){
total -= cart[i].price;
cart.splice(i,1);
document.getElementById("cartCount").innerText = cart.length;
updateCart();
}

/* ===== CART TOGGLE ===== */
function toggleCart(){
let box = document.getElementById("cartBox");
box.style.display = box.style.display==="block"?"none":"block";
}

/* ===== CHECKOUT ===== */
function checkout(){
if(cart.length===0){
alert("السلة فارغة");
return;
}

let items = cart.map(i=>`${i.name} - ${i.price} دج`).join("%0A");

window.open(`https://wa.me/213671070943?text=طلب جديد:%0A${items}%0Aالمجموع:${total} دج`);
}
