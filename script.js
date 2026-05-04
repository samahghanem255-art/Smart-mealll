let cart = [];

// إضافة للسلة
function addToCart(name, price){
cart.push({name, price});
updateCart();
toast("تمت الإضافة");
}

// تحديث
function updateCart(){
document.getElementById("cartCount").textContent = cart.length;

let total = cart.reduce((a,b)=>a+b.price,0);
document.getElementById("total").textContent = total + " دج";

let box = document.getElementById("cartItems");

box.innerHTML = cart.map((item,i)=>`
<div style="display:flex;justify-content:space-between;margin:5px 0">
${item.name} - ${item.price} دج
<button onclick="removeItem(${i})">❌</button>
</div>
`).join("");
}

// حذف
function removeItem(i){
cart.splice(i,1);
updateCart();
}

// فتح/غلق السلة
function toggleCart(){
let m = document.getElementById("cartModal");
m.style.display = m.style.display === "flex" ? "none" : "flex";
}

// Toast
function toast(msg){
let t = document.createElement("div");
t.textContent = msg;
t.style.position="fixed";
t.style.bottom="20px";
t.style.right="20px";
t.style.background="gold";
t.style.padding="10px";
t.style.borderRadius="8px";
document.body.appendChild(t);
setTimeout(()=>t.remove(),1500);
}

// تأكيد الطلب
function checkout(){
if(cart.length===0){
alert("السلة فارغة");
return;
}
alert("تم تأكيد الطلب ✔️");
cart=[];
updateCart();
toggleCart();
}
