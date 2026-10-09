// =====================
//  DATA
// =====================
let cart = [];
let total = 0;
let totalCalories = 0;
let dailyCalorieGoal = 0;
let currentGoal = 'maintain';
let currentLang = 'ar';

// =====================
//  TRANSLATIONS
// =====================
const i18n = {
  ar: {
    nav_home:'الرئيسية', nav_menu:'قائمة الطعام', nav_calories:'السعرات',
    nav_health:'توصيات صحية', nav_payment:'الدفع', nav_contact:'تواصل',
    hero_badge:'🌿 وجبات طازجة يومياً', hero_sub:'اختيارات صحية • توصيات ذكية • توصيل سريع',
    hero_cta:'ابدأ الطلب',
    menu_title:'🍽️ قائمة الطعام', menu_sub:'اختر من أشهى الوجبات المحضّرة بعناية',
    filter_all:'الكل', filter_grills:'مشويات', filter_rice:'أرز',
    filter_pasta:'باستا', filter_salads:'سلطات', filter_drinks:'مشروبات',
    badge_healthy:'صحي', badge_low:'منخفض السعرات',
    cal_label:'سعرات:', n_protein:'بروتين', n_carbs:'كربوهيدرات', n_fat:'دهون',
    currency:'دج', add_cart:'أضف للسلة',
    item_chicken:'دجاج مشوي', item_rice:'وجبة أرز', item_pasta:'باستا بالدجاج',
    item_salad:'سلطة خضراء', item_juice:'عصير طازج', item_beef:'مشوى لحم',
    cal_section_title:'🔥 حاسبة السعرات الحرارية',
    cal_section_sub:'اعرف احتياجك اليومي واتحكّم في وجباتك',
    cal_age:'العمر', cal_weight:'الوزن (كغ)', cal_height:'الطول (سم)',
    cal_gender:'الجنس', cal_male:'ذكر', cal_female:'أنثى',
    cal_activity:'مستوى النشاط',
    act_sedentary:'خامل (بدون رياضة)', act_light:'خفيف (1-3 أيام/أسبوع)',
    act_moderate:'معتدل (3-5 أيام/أسبوع)', act_active:'نشيط (6-7 أيام/أسبوع)',
    act_veryactive:'رياضي شديد',
    cal_goal:'الهدف', goal_maintain:'الحفاظ على الوزن',
    goal_lose:'خسارة الوزن', goal_gain:'زيادة الكتلة',
    calc_btn:'احسب الآن 🔢',
    result_title:'نتيجتك اليومية', kcal_day:'سعرة/يوم',
    cart_consumed:'سعرات سلتك الحالية:',
    advice_ok:'✅ وجبات سلتك ضمن حدودك اليومية، ممتاز!',
    advice_over:'⚠️ تجاوزت حدك اليومي من السعرات!',
    advice_under:'💡 لا يزال بإمكانك إضافة المزيد من الوجبات.',
    health_title:'🤖 توصيات صحية ذكية', health_sub:'نصائح مخصصة لنمط حياة أفضل',
    h1_title:'وجبات منخفضة السعرات', h1_desc:'اختر وجباتنا الصحية التي تحتوي على أقل من 300 سعرة حرارية',
    h2_title:'شرب كميات كافية من الماء', h2_desc:'اشرب 8 أكواب يومياً لتحسين الهضم وتعزيز الطاقة',
    h3_title:'بروتين متوازن', h3_desc:'تناول ما بين 1.2 – 2g من البروتين لكل كيلو من وزنك',
    h4_title:'ممارسة الرياضة', h4_desc:'30 دقيقة يومياً تكفي للحفاظ على صحتك ورشاقتك',
    h5_title:'نوم كافٍ', h5_desc:'النوم 7-8 ساعات يساعد على تنظيم الشهية وحرق الدهون',
    h6_title:'خضروات يومية', h6_desc:'أضف حصتين من الخضروات لكل وجبة لتحصل على الألياف الكافية',
    pay_title:'💳 الدفع الإلكتروني', pay_sub:'دفع آمن وسريع عبر البطاقة الذهبية',
    pay_desc:'بياناتك محمية بتشفير SSL · دفع فوري آمن', pay_cta:'ادفع الآن',
    contact_title:'📍 تواصل معنا – سكيكدة', contact_sub:'نحن هنا لخدمتك في أي وقت',
    footer_copy:'© 2026 Smart Meal – جميع الحقوق محفوظة',
    cart_title:'🛒 سلة المشتريات', cart_total:'المجموع:',
    cart_cal_total:'إجمالي السعرات:', cart_confirm:'تأكيد الطلب',
    cart_empty:'السلة فارغة', cart_add_notify:'تمت الإضافة للسلة',
    remove:'حذف', fill_fields:'يرجى ملء جميع الحقول',
    add_first:'أضف عناصر أولاً',
    order_msg:'أريد تأكيد طلبي، المجموع'
  },

  fr: {
    nav_home:'Accueil', nav_menu:'Menu', nav_calories:'Calories',
    nav_health:'Santé', nav_payment:'Paiement', nav_contact:'Contact',
    hero_badge:'🌿 Repas frais chaque jour', hero_sub:'Choix sains • Recommandations intelligentes • Livraison rapide',
    hero_cta:'Commander',
    menu_title:'🍽️ Notre Menu', menu_sub:'Choisissez parmi nos meilleurs plats',
    filter_all:'Tout', filter_grills:'Grillades', filter_rice:'Riz',
    filter_pasta:'Pâtes', filter_salads:'Salades', filter_drinks:'Boissons',
    badge_healthy:'Sain', badge_low:'Faible calorie',
    cal_label:'Cal:', n_protein:'Protéines', n_carbs:'Glucides', n_fat:'Graisses',
    currency:'DZD', add_cart:'Ajouter au panier',
    item_chicken:'Poulet grillé', item_rice:'Plat de riz', item_pasta:'Pâtes au poulet',
    item_salad:'Salade verte', item_juice:'Jus frais', item_beef:'Grillade de bœuf',
    cal_section_title:'🔥 Calculateur de Calories',
    cal_section_sub:'Connaissez vos besoins quotidiens',
    cal_age:'Âge', cal_weight:'Poids (kg)', cal_height:'Taille (cm)',
    cal_gender:'Sexe', cal_male:'Homme', cal_female:'Femme',
    cal_activity:'Niveau d\'activité',
    act_sedentary:'Sédentaire', act_light:'Léger (1-3 j/sem)',
    act_moderate:'Modéré (3-5 j/sem)', act_active:'Actif (6-7 j/sem)',
    act_veryactive:'Très actif',
    cal_goal:'Objectif', goal_maintain:'Maintenir le poids',
    goal_lose:'Perdre du poids', goal_gain:'Prendre de la masse',
    calc_btn:'Calculer 🔢',
    result_title:'Votre résultat', kcal_day:'kcal/jour',
    cart_consumed:'Calories dans votre panier:',
    advice_ok:'✅ Vos repas sont dans votre limite journalière !',
    advice_over:'⚠️ Vous avez dépassé votre limite calorique !',
    advice_under:'💡 Vous pouvez encore ajouter des repas.',
    health_title:'🤖 Recommandations Santé', health_sub:'Conseils personnalisés pour un meilleur mode de vie',
    h1_title:'Repas faibles en calories', h1_desc:'Choisissez nos plats sains avec moins de 300 kcal',
    h2_title:'Boire suffisamment d\'eau', h2_desc:'8 verres par jour pour améliorer la digestion',
    h3_title:'Protéines équilibrées', h3_desc:'Prenez 1.2-2g de protéines par kg de votre poids',
    h4_title:'Faire du sport', h4_desc:'30 minutes par jour suffisent pour rester en forme',
    h5_title:'Sommeil suffisant', h5_desc:'7-8 heures de sommeil aident à réguler l\'appétit',
    h6_title:'Légumes quotidiens', h6_desc:'2 portions de légumes par repas pour les fibres nécessaires',
    pay_title:'💳 Paiement Électronique', pay_sub:'Paiement sécurisé et rapide',
    pay_desc:'Données protégées par SSL · Paiement instantané sécurisé', pay_cta:'Payer maintenant',
    contact_title:'📍 Contactez-nous – Skikda', contact_sub:'Nous sommes là pour vous',
    footer_copy:'© 2026 Smart Meal – Tous droits réservés',
    cart_title:'🛒 Votre Panier', cart_total:'Total:',
    cart_cal_total:'Total calories:', cart_confirm:'Confirmer la commande',
    cart_empty:'Panier vide', cart_add_notify:'Ajouté au panier',
    remove:'Suppr', fill_fields:'Veuillez remplir tous les champs',
    add_first:'Ajoutez des articles d\'abord',
    order_msg:'Je veux confirmer ma commande, total'
  },

  en: {
    nav_home:'Home', nav_menu:'Menu', nav_calories:'Calories',
    nav_health:'Health', nav_payment:'Payment', nav_contact:'Contact',
    hero_badge:'🌿 Fresh meals every day', hero_sub:'Healthy choices • Smart recommendations • Fast delivery',
    hero_cta:'Start Order',
    menu_title:'🍽️ Our Menu', menu_sub:'Choose from our finest prepared dishes',
    filter_all:'All', filter_grills:'Grills', filter_rice:'Rice',
    filter_pasta:'Pasta', filter_salads:'Salads', filter_drinks:'Drinks',
    badge_healthy:'Healthy', badge_low:'Low Calorie',
    cal_label:'Cal:', n_protein:'Protein', n_carbs:'Carbs', n_fat:'Fat',
    currency:'DZD', add_cart:'Add to Cart',
    item_chicken:'Grilled Chicken', item_rice:'Rice Dish', item_pasta:'Chicken Pasta',
    item_salad:'Green Salad', item_juice:'Fresh Juice', item_beef:'Beef Grill',
    cal_section_title:'🔥 Calorie Calculator',
    cal_section_sub:'Know your daily needs and control your meals',
    cal_age:'Age', cal_weight:'Weight (kg)', cal_height:'Height (cm)',
    cal_gender:'Gender', cal_male:'Male', cal_female:'Female',
    cal_activity:'Activity Level',
    act_sedentary:'Sedentary (no exercise)', act_light:'Light (1-3 days/week)',
    act_moderate:'Moderate (3-5 days/week)', act_active:'Active (6-7 days/week)',
    act_veryactive:'Very Active',
    cal_goal:'Goal', goal_maintain:'Maintain Weight',
    goal_lose:'Lose Weight', goal_gain:'Build Muscle',
    calc_btn:'Calculate 🔢',
    result_title:'Your Daily Result', kcal_day:'kcal/day',
    cart_consumed:'Calories in your cart:',
    advice_ok:'✅ Your cart meals are within your daily limit!',
    advice_over:'⚠️ You have exceeded your daily calorie limit!',
    advice_under:'💡 You can still add more meals.',
    health_title:'🤖 Smart Health Tips', health_sub:'Personalized tips for a better lifestyle',
    h1_title:'Low Calorie Meals', h1_desc:'Choose our healthy dishes with less than 300 calories',
    h2_title:'Drink Enough Water', h2_desc:'8 glasses a day to improve digestion and boost energy',
    h3_title:'Balanced Protein', h3_desc:'Take 1.2-2g of protein per kg of your body weight',
    h4_title:'Exercise Regularly', h4_desc:'30 minutes a day is enough to stay healthy',
    h5_title:'Enough Sleep', h5_desc:'7-8 hours of sleep helps regulate appetite and burn fat',
    h6_title:'Daily Vegetables', h6_desc:'Add 2 servings of vegetables per meal for necessary fiber',
    pay_title:'💳 Electronic Payment', pay_sub:'Safe and fast payment via Gold Card',
    pay_desc:'Your data is SSL protected · Instant secure payment', pay_cta:'Pay Now',
    contact_title:'📍 Contact Us – Skikda', contact_sub:'We are here to serve you anytime',
    footer_copy:'© 2026 Smart Meal – All rights reserved',
    cart_title:'🛒 Shopping Cart', cart_total:'Total:',
    cart_cal_total:'Total Calories:', cart_confirm:'Confirm Order',
    cart_empty:'Cart is empty', cart_add_notify:'Added to cart',
    remove:'Remove', fill_fields:'Please fill all fields',
    add_first:'Add items first',
    order_msg:'I want to confirm my order, total'
  }
};

// =====================
//  LANGUAGE SWITCHER
// =====================
function setLang(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('data-lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update select options
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (t[key]) opt.textContent = t[key];
  });

  // Update page title
  const titles = { ar:'Smart Meal | منصة الوجبات الذكية', fr:'Smart Meal | Repas Intelligents', en:'Smart Meal | Smart Meals Platform' };
  document.title = titles[lang];

  // Re-render cart if open
  if (document.getElementById('cartModal').classList.contains('open')) renderCart();
}

// =====================
//  CART
// =====================
function addToCart(name, price, calories) {
  const t = i18n[currentLang];
  cart.push({ name, price, calories });
  total += price;
  totalCalories += calories;
  document.getElementById('cartCount').textContent = cart.length;

  // Toast notification
  showToast(`🛒 ${t.cart_add_notify}: ${name}`);

  // Update calorie progress if result visible
  updateCalorieProgress();
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 2500);
}

function openCart() {
  const t = i18n[currentLang];
  if (cart.length === 0) { showToast('🛒 ' + t.cart_empty); return; }
  document.getElementById('cartModal').classList.add('open');
  renderCart();
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('open');
}

function renderCart() {
  const t = i18n[currentLang];
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  cart.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        <small>${item.price} ${t.currency} &nbsp;|&nbsp; 🔥 ${item.calories} kcal</small>
      </div>
      <button onclick="removeFromCart(${i})">✕</button>`;
    container.appendChild(div);
  });
  document.getElementById('cartTotal').textContent = total;
  document.getElementById('cartCalTotal').textContent = totalCalories;
}

function removeFromCart(index) {
  total -= cart[index].price;
  totalCalories -= cart[index].calories;
  cart.splice(index, 1);
  document.getElementById('cartCount').textContent = cart.length;
  renderCart();
  updateCalorieProgress();
}

function confirmOrder() {
  const t = i18n[currentLang];
  if (cart.length === 0) { showToast('⚠️ ' + t.add_first); return; }
  const items = cart.map(i => `${i.name} - ${i.price} ${t.currency}`).join('%0A');
  window.open(`https://wa.me/213671070943?text=${t.order_msg} ${total} ${t.currency}%0A${items}`);
}

// =====================
//  MENU FILTER
// =====================
function filterMenu(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    const show = cat === 'all' || card.dataset.category === cat;
    card.style.display = show ? 'block' : 'none';
  });
}

// =====================
//  CALORIE CALCULATOR
// =====================
function setGoal(btn, goal) {
  currentGoal = goal;
  document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function calculateCalories() {
  const t = i18n[currentLang];
  const age    = parseFloat(document.getElementById('calAge').value);
  const weight = parseFloat(document.getElementById('calWeight').value);
  const height = parseFloat(document.getElementById('calHeight').value);
  const gender = document.getElementById('calGender').value;
  const factor = parseFloat(document.getElementById('calActivity').value);

  if (!age || !weight || !height) { showToast('⚠️ ' + t.fill_fields); return; }

  // Mifflin-St Jeor
  let bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  let tdee = Math.round(bmr * factor);

  if (currentGoal === 'lose') tdee -= 500;
  if (currentGoal === 'gain') tdee += 300;

  dailyCalorieGoal = tdee;

  const protein = Math.round((tdee * 0.30) / 4);
  const carbs   = Math.round((tdee * 0.45) / 4);
  const fat     = Math.round((tdee * 0.25) / 9);

  document.getElementById('resultCalories').textContent = tdee;
  document.getElementById('resultProtein').textContent  = protein + 'g';
  document.getElementById('resultCarbs').textContent    = carbs   + 'g';
  document.getElementById('resultFat').textContent      = fat     + 'g';

  const result = document.getElementById('calResult');
  result.style.display = 'block';

  // Animate ring
  const circumference = 314;
  const percent = Math.min(tdee / 3000, 1);
  const offset  = circumference - circumference * percent;
  setTimeout(() => {
    document.getElementById('ringProgress').style.transition = 'stroke-dashoffset 1s ease';
    document.getElementById('ringProgress').setAttribute('stroke-dashoffset', offset);
  }, 100);

  updateCalorieProgress();
}

function updateCalorieProgress() {
  if (!dailyCalorieGoal) return;
  const t = i18n[currentLang];
  const percent = Math.min((totalCalories / dailyCalorieGoal) * 100, 100);
  const fill = document.getElementById('calProgress');
  const display = document.getElementById('cartCalDisplay');
  const advice  = document.getElementById('calAdvice');

  if (fill)    fill.style.width = percent + '%';
  if (display) display.textContent = totalCalories;
  if (fill)    fill.style.background = percent > 100 ? '#ef4444' : percent > 80 ? '#f97316' : '#f4c542';

  if (advice) {
    if (totalCalories === 0)          advice.textContent = '';
    else if (totalCalories > dailyCalorieGoal) advice.textContent = t.advice_over;
    else if (percent < 70)            advice.textContent = t.advice_under;
    else                              advice.textContent = t.advice_ok;
  }
}

// Close modal on overlay click
document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) closeCart();
});
