let cart = JSON.parse(localStorage.getItem("cart")) || [];
let lang = localStorage.getItem("lang") || "ar";

const t = {
ar:{
title:"Smart Meal",
brand:"Smart Meal",
home:"الرئيسية",
menu:"القائمة",
health:"صحي",
payment:"الدفع",
contact:"تواصل",
heroTitle:"Smart Meal",
heroDesc:"اختيارات صحية • توصيات ذكية • توصيل سريع",
start:"ابدأ الطلب",
menuTitle:"القائمة",
healthTitle:"توصيات صحية",
payTitle:"الدفع",
payDesc:"الدفع عبر البطاقة الذهبية",
pay:"ادفع الآن",
add:"أضف للسلة",
added:"تمت الإضافة"
},
en:{
title:"Smart Meal",
brand:"Smart Meal",
home:"Home",
menu:"Menu",
health:"Health",
payment:"Payment",
contact:"Contact",
heroTitle:"Smart Meal",
heroDesc:"Healthy smart meals",
start:"Start Order",
menuTitle:"Menu",
healthTitle:"Health Tips",
payTitle:"Payment",
payDesc:"Card payment",
pay:"Pay Now",
add:"Add to cart",
added:"Added"
}
};

function setLang(l){
lang=l;
localStorage.setItem("lang",l);

document.querySelectorAll("[data-key]").forEach(el=>{
let k=el.getAttribute("data-key");
if(t[l][k]) el.innerText=t[l][k];
});
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
document.getElementById("cartCount").innerText=cart.length;
alert(`${t[lang].added} ${name}`);
}

function openCart(){
if(cart.length===0){
alert("السلة فارغة");
return;
}
let items = cart.map(i=>`${i.name} - ${i.price} دج`).join("\n");
alert(items);
}

function confirmOrder(){
alert("تم تأكيد الطلب");
}

setLang(lang);
document.getElementById("cartCount").innerText = cart.length;
