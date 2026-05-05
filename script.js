let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
let lang = localStorage.getItem("lang") || "ar";

const t = {
ar:{
title:"Smart Meal",
subtitle:"وجبات صحية وذكية",
menu:"القائمة",
health:"صحي",
payment:"الدفع",
start:"ابدأ الطلب",
menuTitle:"القائمة",
healthTitle:"توصيات صحية",
paymentTitle:"الدفع",
add:"أضف للسلة",
calories:"سعرات",
pay:"ادفع الآن",
added:"تمت الإضافة"
},
en:{
title:"Smart Meal",
subtitle:"Healthy Smart Meals",
menu:"Menu",
health:"Health",
payment:"Payment",
start:"Start Order",
menuTitle:"Menu",
healthTitle:"Health Tips",
paymentTitle:"Payment",
add:"Add to Cart",
calories:"Calories",
pay:"Pay Now",
added:"Added"
}
};

// ===== لغة =====
function changeLanguage(l){
lang=l;
localStorage.setItem("lang",l);

document.querySelectorAll("[data-key]").forEach(el=>{
let k=el.getAttribute("data-key");
if(t[l][k]) el.innerText=t[l][k];
});
}

// ===== سلة =====
function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
document.getElementById("cartCount").innerText=cart.length;
notify(`${t[lang].added} ${name}`);
}

// ===== فتح السلة =====
function openCart(){
if(cart.length===0){
alert("السلة فارغة");
return;
}
let text=cart.map(i=>`${i.name} - ${i.price}`).join("\n");
alert(text);
}

// ===== الدفع =====
function confirmOrder(){
alert("تم تأكيد الطلب");
}

// ===== إشعار =====
function notify(msg){
let n=document.getElementById("notif");
n.innerText=msg;
n.style.opacity=1;
setTimeout(()=>n.style.opacity=0,2000);
}

// ===== Dark Mode =====
function toggleDark(){
document.body.classList.toggle("dark");
}

// تشغيل اللغة
changeLanguage(lang);
