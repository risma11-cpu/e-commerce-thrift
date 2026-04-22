/* ============================================
   DATA PRODUK THRIFT + AKSESORIS
   ============================================ */
var products = [
    { id:1,  name:"Kemeja Pink",             category:"atasan", price:45000,  image:"images/kemeja-pink.jpg",  badge:"New",         rating:4.8, reviews:45,  desc:"Kemeja pink cantik dengan material katun lembut. Cocok untuk tampilan feminin sehari-hari." },
    { id:2,  name:"Blouse",                   category:"atasan", price:30000,  image:"images/baju.jpg",         badge:"Best Seller",  rating:4.9, reviews:120, desc:"Blouse simpel yang bisa dipakai ke mana saja. Material adem dan nyaman sepanjang hari." },
    { id:3,  name:"Cardigan Pink Import",     category:"atasan", price:60000,  image:"images/pink cardigan.jpg",badge:"New",         rating:4.7, reviews:32,  desc:"Cardigan pink import dengan rajutan halus. Perfect layering piece untuk gaya aesthetic." },
    { id:4,  name:"Dress Motif Bunga Jepang", category:"dress",  price:90000,  image:"images/dres.jpg",         badge:"Best Seller",  rating:5.0, reviews:89,  desc:"Dress vintage dengan motif bunga khas Jepang. Sangat elegan untuk acara spesial." },
    { id:5,  name:"Bleazer Oversized",        category:"outer",  price:99000,  image:"images/bezer2.jpg",       badge:null,           rating:4.6, reviews:56,  desc:"Bleazer oversized dengan potongan trendy. Bisa formal maupun kasual." },
    { id:6,  name:"Knit Cardigan Creamy",     category:"atasan", price:95000,  image:"images/sweater.jpg",      badge:"Rare",        rating:4.9, reviews:78,  desc:"Cardigan rajut warna creamy yang super cozy. Barang langka dengan kualitas premium." },
    { id:7,  name:"Oversize Bleazer",         category:"outer",  price:99000,  image:"images/bezer1.jpg",       badge:null,           rating:4.5, reviews:41,  desc:"Bleazer oversize import dengan material tebal dan berkualitas." },
    { id:8,  name:"Rajut Girl",               category:"atasan", price:99000,  image:"images/sweater1.jpg",      badge:null,           rating:4.7, reviews:63,  desc:"Sweater rajut desain girly warna soft. Nyaman dipakai saat cuaca dingin." },
    { id:9,  name:"Dresly",                   category:"dress",  price:45000,  image:"images/cute.jpg",         badge:null,           rating:4.4, reviews:28,  desc:"Dress cute ala vintage dengan potongan simpel. Mudah dipadukan dengan aksesoris." },
    { id:10, name:"Dres Cantik",              category:"dress",  price:70000,  image:"images/dres2.jpg",         badge:null,           rating:4.8, reviews:55,  desc:"Dress cantik dengan detail menarik. Cocok untuk hangout atau date night." },
    { id:11, name:"Dresly Vintage",           category:"dress",  price:65000,  image:"images/dres1.jpg",         badge:null,           rating:4.6, reviews:37,  desc:"Dress vintage dengan siluet klasik. Elegan tanpa berlebihan." },
    { id:12, name:"Rok Pilihan Terbaik",      category:"rok",    price:40000,  image:"images/rok4.jpg",          badge:null,           rating:4.5, reviews:44,  desc:"Rok dengan potongan flattering dan material nyaman. Feminin dan versatile." },
    { id:13, name:"Rok Girly",                category:"rok",    price:40000,  image:"images/rok3.jpg",          badge:null,           rating:4.3, reviews:29,  desc:"Rok girly dengan warna soft dan detail lucu. Perfect OOTD aesthetic." },
    { id:14, name:"Rok Style",                category:"rok",    price:45000,  image:"images/rok2.jpg",          badge:null,           rating:4.6, reviews:51,  desc:"Rok stylish yang mudah dipadukan berbagai atasan. Versatile dan timeless." },
    { id:15, name:"Rok",                      category:"rok",    price:40000,  image:"images/rok.jpg",           badge:null,           rating:4.2, reviews:22,  desc:"Rok simpel material adem. Basic item yang wajib ada di lemari." },
    { id:16, name:"Cardigan Lucu",            category:"atasan", price:50000,  image:"images/cardi.jpg",         badge:null,           rating:4.7, reviews:48,  desc:"Cardigan lucu dengan detail unik. Layering piece yang bikin OOTD makin cute." },
    { id:17, name:"Super Style Denim",        category:"outer",  price:100000, image:"images/denim.jpg",         badge:null,           rating:4.8, reviews:72,  desc:"Jaket denim premium dengan wash sempurna. Statement piece yang standout." },
    { id:18, name:"Bleazer ala Pinterest",    category:"outer",  price:60000,  image:"images/bezer3.jpg",       badge:null,           rating:4.5, reviews:39,  desc:"Bleazer inspired Pinterest aesthetic. Potongan bagus dan material nyaman." },
    { id:19, name:"Bleazer Black",            category:"outer",  price:80000,  image:"images/cardi2.jpg",        badge:null,           rating:4.9, reviews:85,  desc:"Bleazer hitam klasik yang wajib punya. Super versatile untuk segala occasion." },
    { id:20, name:"Gaya Aesthetic",           category:"atasan", price:59000,  image:"images/bju.jpg",           badge:null,           rating:4.4, reviews:33,  desc:"Atasan unisex gaya aesthetic. Tampil beda setiap hari dengan item ini." },
    { id:21, name:"Tas Vintage Kulit",        category:"aksesoris", price:85000,  image:"images/aksesoris-tasvintage.jpg",     badge:"New",         rating:4.9, reviews:34,  desc:"Tas vintage dari kulit sintetis premium. Kompartemen luas, cocok buat hangout maupun ke kampus." },
    { id:22, name:"Bucket Hat Beige",         category:"aksesoris", price:35000,  image:"images/aksesoris-topi.jpg",    badge:null,           rating:4.6, reviews:52,  desc:"Bucket hat warna beige yang lagi tren. Material ringan dan breathable, cocok outdoor." },
    { id:23, name:"Kalung Vintage Pearl",     category:"aksesoris", price:45000,  image:"images/aksesoris-kalung.jpg",  badge:"Best Seller",  rating:4.8, reviews:78,  desc:"Kalung vintage dengan detail mutiara. Elegan dan timeless, bisa casual atau formal." },
    { id:24, name:"Gelang Charm Gold",        category:"aksesoris", price:30000,  image:"images/aksesoris-gelang.jpg",  badge:null,           rating:4.5, reviews:41,  desc:"Gelang charm gold dengan detail unik. Layer-able dengan gelang lainnya." },
    { id:25, name:"Kacamata Retro Cat Eye",   category:"aksesoris", price:55000,  image:"images/aksesoris-kacamata.jpg",badge:"New",         rating:4.7, reviews:63,  desc:"Kacamata retro cat eye dengan lensa UV400. Statement piece yang wajib punya." },
    { id:26, name:"Scarf Floral Premium",     category:"aksesoris", price:40000,  image:"images/aksesoris-scarf.webp",   badge:null,           rating:4.4, reviews:29,  desc:"Scarf floral dengan material satin lembut. Banyak cara pakai, sangat versatile." },
    { id:27, name:"Belt Kulit Vintage",       category:"aksesoris", price:50000,  image:"images/aksesoris-belt.jpg",    badge:null,           rating:4.6, reviews:47,  desc:"Belt kulit vintage dengan buckle antik. Cocok untuk dress, rok, atau celana high-waist." },
    { id:28, name:"Anting Pearl Drop",        category:"aksesoris", price:25000,  image:"images/aksesoris-anting.jpg",  badge:"Rare",        rating:5.0, reviews:56,  desc:"Anting pearl drop yang super elegan. Barang langka, cuma ada beberapa saja." },
    { id:29, name:"Headband Ribbon Pink",     category:"aksesoris", price:20000,  image:"images/aksesoris-headband.jpg",badge:null,          rating:4.3, reviews:38,  desc:"Headband ribbon pink soft. Simple tapi bikin tampilan makin girly dan cute." },
    { id:30, name:"Mini Bag Crossbody",       category:"aksesoris", price:65000,  image:"images/aksesoris-minibag.jpg", badge:"Best Seller",  rating:4.8, reviews:91,  desc:"Mini bag crossbody compact dan stylish. Muat HP, dompet, lipstick. Perfect buat jalan santai." }
    
];

var categories = [
    { key:"all",       label:"Semua",     icon:"mdi:view-grid-outline" },
    { key:"atasan",    label:"Atasan",    icon:"mdi:tshirt-crew-outline" },
    { key:"dress",     label:"Dress",     icon:"mdi:hanger" },
    { key:"rok",       label:"Rok",       icon:"mdi:circle-outline" },
    { key:"outer",     label:"Outer",     icon:"mdi:layers-outline" },
    { key:"aksesoris", label:"Aksesoris", icon:"mdi:shopping-outline" }
];

/* ============================================
   STATE
   ============================================ */
var cart = [];
var wishlist = [];
var currentCategory = "all";
var currentSearch = "";
var priceRange = [0, 150000];
var visibleCount = 30;
var selectedPay = "";
var cdInterval = null;
var modalSelectedSize = null;

/* ============================================
   HELPERS
   ============================================ */
function fmtRp(n) { return "Rp " + n.toLocaleString("id-ID"); }

function stars(r) {
    var h = "";
    for (var i = 1; i <= 5; i++) {
        h += '<span class="iconify ' + (i <= Math.round(r) ? "" : "empty-star") + '" data-icon="mdi:star"></span>';
    }
    return h;
}

function badgeCls(b) {
    if (b === "Best Seller") return "badge-best";
    if (b === "Rare") return "badge-rare";
    return "badge-new";
}

function getSizes(cat) {
    if (cat === "aksesoris") return null;
    if (cat === "rok") return ["M"];
    return ["M",];
}

function isInWish(id) {
    return wishlist.indexOf(id) !== -1;
}

function heartIcon(id) {
    if (isInWish(id)) {
        return '<button class="wish-heart active" onclick="event.stopPropagation(); toggleWishItem(' + id + ')"><span class="iconify" data-icon="mdi:heart"></span></button>';
    }
    return '<button class="wish-heart" onclick="event.stopPropagation(); toggleWishItem(' + id + ')"><span class="iconify" data-icon="mdi:heart-outline"></span></button>';
}

function refreshAll() {
    render();
    renderAksesoris();
}

/* ============================================
   TOAST
   ============================================ */
function toast(msg, type) {
    type = type || "info";
    var ic = { success:"mdi:check-circle", warning:"mdi:alert-circle", error:"mdi:close-circle", info:"mdi:information" };
    var c = document.getElementById("toastContainer");
    var t = document.createElement("div");
    t.className = "toast toast-" + type;
    t.innerHTML = '<span class="iconify" data-icon="' + ic[type] + '"></span><span class="toast-msg">' + msg + '</span><button class="toast-x" onclick="rmToast(this.parentElement)"><span class="iconify" data-icon="mdi:close"></span></button>';
    c.appendChild(t);
    setTimeout(function(){ rmToast(t); }, 3500);
}

function rmToast(t) {
    if (!t || !t.parentElement) return;
    t.classList.add("out");
    setTimeout(function(){ t.remove(); }, 300);
}

/* ============================================
   WISHLIST
   ============================================ */
function toggleWishItem(id) {
    var idx = wishlist.indexOf(id);
    if (idx === -1) {
        wishlist.push(id);
        var p = products.find(function(x) { return x.id === id; });
        if (p) toast(p.name + " ditambahkan ke wishlist", "success");
    } else {
        wishlist.splice(idx, 1);
        toast("Dihapus dari wishlist", "info");
    }
    updateWishUI();
    refreshAll();
}
function updateWishUI() {
    var bd = document.getElementById("wishBadge");
    if (bd) {
        bd.textContent = wishlist.length;
        bd.classList.toggle("show", wishlist.length > 0);
    }
    var wc = document.getElementById("wishCount");
    if (wc) wc.textContent = wishlist.length + " item";

    var el = document.getElementById("wishItems");
    if (!el) return;

    if (wishlist.length === 0) {
        el.innerHTML = '<div class="wish-empty-msg"><span class="iconify" data-icon="mdi:heart-off-outline"></span><p>Wishlist kosong</p><small>Tandai produk favoritmu!</small></div>';
        updateBottomNavBadge();
        return;
    }

        var h = "";
    for (var i = 0; i < wishlist.length; i++) {
        var p = products.find(function(x) { return x.id === wishlist[i]; });
        if (!p) continue;
        h += '<div class="wish-item">' +
            '<div class="wish-item-img" onclick="openModal(' + p.id + ')"><img src="' + p.image + '"></div>' +
            '<div class="wish-item-info">' +
            '<div class="wish-item-name" onclick="openModal(' + p.id + ')">' + p.name + '</div>' +
            '<div class="wish-item-price">' + fmtRp(p.price) + '</div>' +
            '<div class="wish-item-actions">' +
            '<button class="wish-to-cart-btn" onclick="addCart(' + p.id + ', null); toggleWishItem(' + p.id + ')"><span class="iconify" data-icon="mdi:cart-plus"></span> Ke Keranjang</button>' +
            '<button class="wish-del-btn" onclick="toggleWishItem(' + p.id + ')"><span class="iconify" data-icon="mdi:close"></span></button>' +
            '</div></div></div>';
    }
    el.innerHTML = h;
    updateBottomNavBadge();
}


function toggleWish() {
    var sb = document.getElementById("wishSidebar");
    var ov = document.getElementById("wishOverlay");
    if (!sb || !ov) return;
    if (sb.classList.contains("open")) {
        sb.classList.remove("open"); ov.classList.remove("show"); document.body.style.overflow = "";
    } else {
        sb.classList.add("open"); ov.classList.add("show"); document.body.style.overflow = "hidden";
    }
}

/* ============================================
   CATEGORIES
   ============================================ */
function renderCats() {
    var g = document.getElementById("catGrid");
    if (!g) return;
    var h = "";
    for (var i = 0; i < categories.length; i++) {
        var c = categories[i];
        h += '<button class="cat-btn ' + (c.key === currentCategory ? "active" : "") + '" onclick="filterCat(\'' + c.key + '\')">' +
             '<span class="iconify" data-icon="' + c.icon + '"></span><span>' + c.label + '</span></button>';
    }
    g.innerHTML = h;
}

/* ============================================
   FILTER + SORT
   ============================================ */
function filtered() {
    return products.filter(function(p) {
        var mc = currentCategory === "all" || p.category === currentCategory;
        var ms = p.name.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1 || p.category.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1;
        var mp = p.price >= priceRange[0] && p.price <= priceRange[1];
        return mc && ms && mp;
    });
}

function sorted(list) {
    var s = document.getElementById("sortSelect").value;
    var a = list.slice();
    if (s === "price-low")  return a.sort(function(x,y){ return x.price - y.price; });
    if (s === "price-high") return a.sort(function(x,y){ return y.price - x.price; });
    if (s === "rating")     return a.sort(function(x,y){ return y.rating - x.rating; });
    if (s === "newest")     return a.sort(function(x,y){ return y.id - x.id; });
    return a.sort(function(x,y){ return y.reviews - x.reviews; });
}

/* ============================================
   RENDER PRODUCTS
   ============================================ */
function render() {
    var f = sorted(filtered());
    var v = f.slice(0, visibleCount);
    var grid = document.getElementById("productGrid");
    var empty = document.getElementById("emptyState");
    var lm = document.getElementById("loadMoreWrap");
    var pc = document.getElementById("productCount");

    if (pc) pc.textContent = "Menampilkan " + v.length + " dari " + f.length + " produk";
    if (!grid) return;

    if (v.length === 0) {
        grid.innerHTML = "";
        if (empty) empty.style.display = "block";
        if (lm) lm.style.display = "none";
        return;
    }
    if (empty) empty.style.display = "none";
    if (lm) lm.style.display = v.length >= f.length ? "none" : "block";

    var h = "";
    for (var i = 0; i < v.length; i++) {
        var p = v[i];
        var ic = cart.find(function(c){ return c.id === p.id; });
        var bg = p.badge ? '<span class="product-badge ' + badgeCls(p.badge) + '">' + p.badge + '</span>' : "";
        h += '<div class="product-card" style="animation-delay:' + (i*35) + 'ms">' +
            '<div class="product-img-wrap" onclick="openModal(' + p.id + ')">' + bg + heartIcon(p.id) +
            '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
            '<div class="product-img-overlay"><span class="iconify" data-icon="mdi:eye-outline"></span></div></div>' +
            '<div class="product-body"><span class="product-cat">' + p.category + '</span>' +
            '<h3 class="product-name" onclick="openModal(' + p.id + ')">' + p.name + '</h3>' +
            '<div class="product-rating">' + stars(p.rating) + '<span class="rtxt">' + p.rating + ' (' + p.reviews + ')</span></div>' +
            '<div class="product-bottom"><span class="product-price">' + fmtRp(p.price) + '</span>' +
            '<button class="product-add-btn ' + (ic ? "in-cart" : "") + '" onclick="addCart(' + p.id + ', null)">' +
            '<span class="iconify" data-icon="' + (ic ? "mdi:check" : "mdi:plus") + '"></span></button></div></div></div>';
    }
    grid.innerHTML = h;
}

/* ============================================
   RENDER AKSESORIS
   ============================================ */
function renderAksesoris() {
    var aksAll = products.filter(function(p) { return p.category === "aksesoris"; });

    var scrollEl = document.getElementById("aksScroll");
    if (scrollEl) {
        var featured = aksAll.slice(0, 5);
        var sH = "";
        for (var i = 0; i < featured.length; i++) {
            var p = featured[i];
            var ic = cart.find(function(c) { return c.id === p.id; });
            var wishCls = isInWish(p.id) ? "active" : "";
            var wishIco = isInWish(p.id) ? "mdi:heart" : "mdi:heart-outline";
            sH += '<div class="aks-card-h" onclick="openModal(' + p.id + ')">' +
                '<div class="aks-card-h-img"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
                '<button class="aks-card-h-wish ' + wishCls + '" onclick="event.stopPropagation(); toggleWishItem(' + p.id + ')"><span class="iconify" data-icon="' + wishIco + '"></span></button></div>' +
                '<div class="aks-card-h-info">' +
                '<div class="aks-card-h-cat">' + p.category + '</div>' +
                '<div class="aks-card-h-name">' + p.name + '</div>' +
                '<div class="aks-card-h-price">' + fmtRp(p.price) + '</div>' +
                '<button class="aks-card-h-btn ' + (ic ? "in-cart" : "") + '" onclick="event.stopPropagation(); addCart(' + p.id + ', null)">' +
                '<span class="iconify" data-icon="' + (ic ? "mdi:check" : "mdi:cart-plus") + '"></span> ' +
                (ic ? "Di Keranjang" : "Tambah") + '</button></div></div>';
        }
        scrollEl.innerHTML = sH;
    }

    var gridEl = document.getElementById("aksGrid");
    if (gridEl) {
        var gH = "";
        for (var i = 0; i < aksAll.length; i++) {
            var p = aksAll[i];
            var ic = cart.find(function(c) { return c.id === p.id; });
            var bg = p.badge ? '<span class="aks-card-v-badge ' + badgeCls(p.badge) + '">' + p.badge + '</span>' : "";
            gH += '<div class="aks-card-v" style="animation-delay:' + (i * 50) + 'ms">' +
                '<div class="aks-card-v-img" onclick="openModal(' + p.id + ')">' + bg + heartIcon(p.id) +
                '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
                '<div class="aks-card-v-overlay"><span class="iconify" data-icon="mdi:eye-outline"></span></div></div>' +
                '<div class="aks-card-v-body">' +
                '<span class="aks-card-v-cat">' + p.category + '</span>' +
                '<h3 class="aks-card-v-name" onclick="openModal(' + p.id + ')">' + p.name + '</h3>' +
                '<div class="aks-card-v-bottom">' +
                '<span class="aks-card-v-price">' + fmtRp(p.price) + '</span>' +
                '<button class="aks-card-v-btn ' + (ic ? "in-cart" : "") + '" onclick="addCart(' + p.id + ', null)">' +
                '<span class="iconify" data-icon="' + (ic ? "mdi:check" : "mdi:plus") + '"></span></button>' +
                '</div></div></div>';
        }
        gridEl.innerHTML = gH;
    }
}

/* ============================================
   FILTER ACTIONS
   ============================================ */
function filterCat(c) {
    currentCategory = c;
    visibleCount = 30;
    renderCats();
    refreshAll();
    if (c === "aksesoris") {
        var aksSection = document.getElementById("aksesoris");
        if (aksSection) aksSection.scrollIntoView({ behavior: "smooth" });
    } else {
        var prodSection = document.getElementById("products");
        if (prodSection) prodSection.scrollIntoView({ behavior: "smooth" });
    }
}

function togglePriceFilter() {
    var p = document.getElementById("priceFilter");
    var b = document.getElementById("priceToggleBtn");
    if (!p || !b) return;
    if (p.style.display === "none") { p.style.display = "block"; b.classList.add("active"); }
    else { p.style.display = "none"; b.classList.remove("active"); }
}

function updatePriceLabel() {
    var mn = parseInt(document.getElementById("priceMin").value);
    var mx = parseInt(document.getElementById("priceMax").value);
    if (mn > mx) { var t = mn; mn = mx; mx = t; }
    var el = document.getElementById("priceLabel");
    if (el) el.textContent = fmtRp(mn) + " — " + fmtRp(mx);
}

function applyPriceFilter() {
    var mn = parseInt(document.getElementById("priceMin").value);
    var mx = parseInt(document.getElementById("priceMax").value);
    if (mn > mx) { var t = mn; mn = mx; mx = t; }
    priceRange = [mn, mx];
    visibleCount = 30;
    refreshAll();
    toast("Filter harga: " + fmtRp(mn) + " - " + fmtRp(mx), "info");
}

function resetFilters() {
    currentCategory = "all";
    currentSearch = "";
    priceRange = [0, 150000];
    visibleCount = 30;
    var si = document.getElementById("searchInput");
    if (si) si.value = "";
    var ss = document.getElementById("sortSelect");
    if (ss) ss.value = "popular";
    var mnEl = document.getElementById("priceMin");
    if (mnEl) mnEl.value = 0;
    var mxEl = document.getElementById("priceMax");
    if (mxEl) mxEl.value = 150000;
    updatePriceLabel();
    renderCats();
    refreshAll();
}

function loadMore() { visibleCount += 8; refreshAll(); }

var sTO;
document.addEventListener("DOMContentLoaded", function() {
    var si = document.getElementById("searchInput");
    if (si) {
        si.addEventListener("input", function(e) {
            clearTimeout(sTO);
            sTO = setTimeout(function() {
                currentSearch = e.target.value;
                visibleCount = 30;
                refreshAll();
            }, 250);
        });
    }
    var ss = document.getElementById("sortSelect");
    if (ss) {
        ss.addEventListener("change", function() { refreshAll(); });
    }
});
/* ============================================
   NEW ARRIVALS SLIDER
   ============================================ */
function renderSlider() {
    var newItems = products.filter(function(p) { return p.stock > 0; });
    newItems.sort(function(a,b) { return b.id - a.id; });
    var show = newItems.slice(0, 10);

    var el = document.getElementById("sliderTrack");
    if (!el) return;

    var h = "";
    for (var i = 0; i < show.length; i++) {
        var p = show[i];
        var ic = cart.find(function(c) { return c.id === p.id; });
        var wC = isInWish(p.id) ? "active" : "";
        var wI = isInWish(p.id) ? "mdi:heart" : "mdi:heart-outline";
        var stCls = p.stock <= 1 ? "low" : "ok";
        var stTxt = p.stock <= 0 ? "Habis" : "Sisa " + p.stock;
        var dis = p.stock <= 0 ? " disabled" : "";

        h += '<div class="slider-card" onclick="openModal(' + p.id + ')">' +
            '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
            '<span class="slider-badge-new">New Arrival</span>' +
            '<span class="slider-stock ' + stCls + '">' + stTxt + '</span>' +
            '<div class="slider-card-overlay">' +
            '<span class="slider-cat">' + p.category + '</span>' +
            '<h3 class="slider-name">' + p.name + '</h3>' +
            '<div class="slider-price">' + fmtRp(p.price) + '</div>' +
            '</div>' +
            '<div class="slider-actions">' +
            '<button class="slider-heart ' + wC + '" onclick="event.stopPropagation(); toggleWishItem(' + p.id + ')"><span class="iconify" data-icon="' + wI + '"></span></button>' +
            '<button class="slider-cart-btn' + dis + '" onclick="event.stopPropagation(); addCart(' + p.id + ')"><span class="iconify" data-icon="mdi:cart-plus"></span> Tambah</button>' +
            '</div>' +
            '</div>';
    }
    el.innerHTML = h;
}

/* ============================================
   PRODUCT MODAL (dengan size + wishlist)
   ============================================ */
function openModal(id) {
    var p = products.find(function(x) { return x.id === id; });
    if (!p) return;
    var ic = cart.find(function(c) { return c.id === p.id; });
    var icH = ic ? '<div class="modal-in-cart"><span class="iconify" data-icon="mdi:cart-check"></span><span>Di keranjang (' + ic.qty + ')</span><button onclick="addCart(' + p.id + ', modalSelectedSize); openModal(' + p.id + ')">+ Tambah</button></div>' : '';

    var sizes = getSizes(p.category);
    modalSelectedSize = sizes ? sizes[0] : null;
    var sizeHtml = "";
    if (sizes) {
        sizeHtml = '<div class="size-section"><div class="size-label">Pilih Ukuran</div><div class="size-options">';
        for (var s = 0; s < sizes.length; s++) {
            sizeHtml += '<button class="size-btn ' + (s === 0 ? "active" : "") + '" onclick="pickSize(this, \'' + sizes[s] + '\')">' + sizes[s] + '</button>';
        }
        sizeHtml += '</div></div>';
    } else {
        sizeHtml = '<div class="no-size-note">Aksesoris — tidak perlu pilih ukuran</div>';
    }

    var wishLabel = isInWish(p.id) ? "Hapus dari Wishlist" : "Tambah ke Wishlist";
    var wishIco = isInWish(p.id) ? "mdi:heart" : "mdi:heart-outline";
    var wishH = '<button class="btn-ghost-full" onclick="toggleWishItem(' + p.id + '); openModal(' + p.id + ')"><span class="iconify" data-icon="' + wishIco + '"></span> ' + wishLabel + '</button>';

    document.getElementById("modalContent").innerHTML =
        '<button class="modal-close" onclick="closeModal()"><span class="iconify" data-icon="mdi:close"></span></button>' +
        '<div class="modal-grid"><div class="modal-img"><img src="' + p.image + '" alt="' + p.name + '"></div>' +
        '<div class="modal-detail"><span class="modal-cat">' + p.category + '</span>' +
        '<h2 class="modal-name">' + p.name + '</h2>' +
        '<div class="modal-rating">' + stars(p.rating) + '<span class="rnum">' + p.rating + '</span><span class="rcnt">(' + p.reviews + ' ulasan)</span></div>' +
        '<div class="modal-price">' + fmtRp(p.price) + '</div>' +
        '<p class="modal-desc">' + p.desc + '</p>' +
        sizeHtml +
        '<div class="modal-checks">' +
        '<div class="modal-check"><span class="iconify" data-icon="mdi:check-circle"></span> Grade A — Mulus like new</div>' +
        '<div class="modal-check"><span class="iconify" data-icon="mdi:check-circle"></span> Sudah dicuci & diseterilkan</div>' +
        '<div class="modal-check"><span class="iconify" data-icon="mdi:check-circle"></span> Original brand import</div>' +
        '<div class="modal-check"><span class="iconify" data-icon="mdi:check-circle"></span> Gratis ongkir</div></div>' +
        '<div class="modal-actions">' + icH +
        '<button class="btn-primary-full" onclick="addCart(' + p.id + ', modalSelectedSize); openModal(' + p.id + ')"><span class="iconify" data-icon="mdi:cart-plus"></span> Tambah ke Keranjang</button>' +
        '<button class="btn-ghost-full" onclick="addCart(' + p.id + ', modalSelectedSize); closeModal(); toggleCart();"><span class="iconify" data-icon="mdi:lightning-bolt"></span> Beli Sekarang</button>' +
        wishH +
        '</div></div></div>';

    document.getElementById("productModal").classList.add("show");
    document.body.style.overflow = "hidden";
}

function pickSize(btn, size) {
    modalSelectedSize = size;
    var all = btn.parentElement.querySelectorAll(".size-btn");
    for (var i = 0; i < all.length; i++) all[i].classList.remove("active");
    btn.classList.add("active");
}

function closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById("productModal").classList.remove("show");
    if (!document.getElementById("cartSidebar").classList.contains("open") &&
        !document.getElementById("wishSidebar").classList.contains("open")) {
        document.body.style.overflow = "";
    }
}

/* ============================================
   CART (dengan size, index-based)
   ============================================ */
function addCart(id, size) {
    var p = products.find(function(x) { return x.id === id; });
    if (!p) return;
    var ex = cart.find(function(c) { return c.id === id && c.size === size; });
    if (ex) { ex.qty++; } else {
        cart.push({ id:p.id, name:p.name, category:p.category, price:p.price, image:p.image, qty:1, size: size || "-" });
    }
    updateCartUI();
    refreshAll();
    toast(p.name + (size ? " (" + size + ")" : "") + " ditambahkan ke keranjang", "success");
}

function rmCart(idx) {
    var it = cart[idx];
    if (!it) return;
    cart.splice(idx, 1);
    updateCartUI();
    refreshAll();
    toast(it.name + " dihapus", "info");
}

function updQty(idx, d) {
    var it = cart[idx];
    if (!it) return;
    it.qty += d;
    if (it.qty <= 0) { rmCart(idx); return; }
    updateCartUI();
    refreshAll();
}

function clearCart() {
    cart = [];
    updateCartUI();
    refreshAll();
    toast("Keranjang dikosongkan", "info");
}

function updateCartUI() {
    var ti = 0, tp = 0;
    for (var i = 0; i < cart.length; i++) { ti += cart[i].qty; tp += cart[i].price * cart[i].qty; }

    var bd = document.getElementById("cartBadge");
    if (bd) { bd.textContent = ti; bd.classList.toggle("show", ti > 0); }
    var icEl = document.getElementById("cartItemCount");
    if (icEl) icEl.textContent = ti + " item";

    var el = document.getElementById("cartItems");
    var ft = document.getElementById("cartFooter");
    if (!el) return;

    if (cart.length === 0) {
        if (ft) ft.style.display = "none";
        el.innerHTML = '<div class="cart-empty-msg"><span class="iconify" data-icon="mdi:cart-off"></span><p>Keranjang masih kosong</p><small>Yuk mulai belanja!</small></div>';
        return;
    }

    if (ft) ft.style.display = "block";
    var stEl = document.getElementById("cartSubtotal");
    var ttEl = document.getElementById("cartTotal");
    if (stEl) stEl.textContent = fmtRp(tp);
    if (ttEl) ttEl.textContent = fmtRp(tp);

    var h = "";
    for (var i = 0; i < cart.length; i++) {
        var c = cart[i];
        var sizeTag = (c.size && c.size !== "-") ? '<span class="cart-size-tag">' + c.size + '</span>' : '';
        h += '<div class="cart-item"><div class="cart-item-img"><img src="' + c.image + '"></div><div class="cart-item-info">' +
            '<div class="cart-item-name">' + c.name + sizeTag + '</div><div class="cart-item-cat">' + c.category + '</div>' +
            '<div class="cart-item-price">' + fmtRp(c.price) + '</div><div class="cart-item-bottom">' +
            '<div class="qty-wrap"><button class="qty-btn" onclick="updQty(' + i + ',-1)"><span class="iconify" data-icon="mdi:minus"></span></button>' +
            '<span class="qty-val">' + c.qty + '</span><button class="qty-btn" onclick="updQty(' + i + ',1)"><span class="iconify" data-icon="mdi:plus"></span></button></div>' +
            '<button class="cart-item-del" onclick="rmCart(' + i + ')"><span class="iconify" data-icon="mdi:trash-can-outline"></span></button></div></div></div>';
    }
    el.innerHTML = h;
}

function toggleCart() {
    var sb = document.getElementById("cartSidebar");
    var ov = document.getElementById("cartOverlay");
    if (!sb || !ov) return;
    if (sb.classList.contains("open")) {
        sb.classList.remove("open"); ov.classList.remove("show"); document.body.style.overflow = "";
    } else {
        sb.classList.add("open"); ov.classList.add("show"); document.body.style.overflow = "hidden";
    }
}

/* ============================================
   CHECKOUT
   ============================================ */
function openCheckout() {
    if (cart.length === 0) { toast("Keranjang masih kosong!", "warning"); return; }
    toggleCart();
    document.getElementById("checkoutModal").classList.add("show");
    document.body.style.overflow = "hidden";
    resetSteps();
}

function closeCheckout() {
    document.getElementById("checkoutModal").classList.remove("show");
    if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
    document.body.style.overflow = "";
}

function resetSteps() {
    var cf = document.getElementById("checkoutForm");
    var ss = document.getElementById("successState");
    if (cf) cf.style.display = "block";
    if (ss) ss.style.display = "none";
    var s1 = document.getElementById("step1");
    var s2 = document.getElementById("step2");
    var s3 = document.getElementById("step3");
    if (s1) s1.style.display = "block";
    if (s2) s2.style.display = "none";
    if (s3) s3.style.display = "none";
    var d1 = document.getElementById("s1");
    var d2 = document.getElementById("s2");
    var d3 = document.getElementById("s3");
    if (d1) d1.className = "stepper-dot active";
    if (d2) d2.className = "stepper-dot";
    if (d3) d3.className = "stepper-dot";
    if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
}

function nextStep() {
    var n = document.getElementById("custName").value.trim();
    var ph = document.getElementById("custPhone").value.trim();
    var ad = document.getElementById("custAddress").value.trim();
    if (!n || !ph || !ad) { toast("Lengkapi semua data pengiriman ya beb!", "warning"); return; }
    if (!/^[0-9]{10,13}$/.test(ph)) { toast("Nomor WA tidak valid (10-13 digit)", "error"); return; }
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById("s1").className = "stepper-dot done";
    document.getElementById("s2").className = "stepper-dot active";
}

function selectPay(m, el) {
    selectedPay = m;
    var opts = document.querySelectorAll(".pay-option");
    for (var i = 0; i < opts.length; i++) opts[i].classList.remove("selected");
    el.classList.add("selected");
}

function goStep3() {
    if (!selectedPay) { toast("Pilih metode pembayaran dulu!", "warning"); return; }
    var tp = 0;
    for (var i = 0; i < cart.length; i++) tp += cart[i].price * cart[i].qty;
    var bn = { BRI:"Transfer BRI", BSI:"Transfer BSI", EWALLET:"E-Wallet (DANA/GoPay)" };
    var ac = { BRI:"717 7288 289", BSI:"123 4567 890", EWALLET:"0812-3456-7890" };
    var ic = { BRI:"mdi:bank", BSI:"mdi:landmark", EWALLET:"mdi:wallet" };
    document.getElementById("s3amount").textContent = fmtRp(tp);
    document.getElementById("s3bank").textContent = bn[selectedPay];
    document.getElementById("s3account").textContent = ac[selectedPay];
    document.getElementById("s3icon").innerHTML = '<span class="iconify" data-icon="' + ic[selectedPay] + '"></span>';
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
    document.getElementById("s2").className = "stepper-dot done";
    document.getElementById("s3").className = "stepper-dot active";
    startCD();
}

function prevStep() {
    if (document.getElementById("step3").style.display !== "none") {
        document.getElementById("step3").style.display = "none";
        document.getElementById("step2").style.display = "block";
        document.getElementById("s3").className = "stepper-dot";
        document.getElementById("s2").className = "stepper-dot active";
        if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
    } else if (document.getElementById("step2").style.display !== "none") {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step1").style.display = "block";
        document.getElementById("s2").className = "stepper-dot";
        document.getElementById("s1").className = "stepper-dot active";
    }
}

function startCD() {
    if (cdInterval) clearInterval(cdInterval);
    var ts = 23 * 3600 + 59 * 60 + 59;
    var el = document.getElementById("countdown");
    cdInterval = setInterval(function() {
        if (ts <= 0) {
            clearInterval(cdInterval);
            el.textContent = "Waktu Habis";
            document.getElementById("confirmBtn").disabled = true;
            document.getElementById("confirmBtn").style.opacity = "0.5";
            return;
        }
        ts--;
        el.textContent = String(Math.floor(ts / 3600)).padStart(2, "0") + ":" + String(Math.floor((ts % 3600) / 60)).padStart(2, "0") + ":" + String(ts % 60).padStart(2, "0");
    }, 1000);
}

function confirmPay() {
    document.getElementById("checkoutForm").style.display = "none";
    document.getElementById("successState").style.display = "block";
    if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
    cart = [];
    updateCartUI();
    refreshAll();
    toast("Pesanan berhasil! Terima kasih beb 🎉", "success");
}

function finishCheckout() {
    closeCheckout();
    var n = document.getElementById("custName");
    var p = document.getElementById("custPhone");
    var a = document.getElementById("custAddress");
    if (n) n.value = "";
    if (p) p.value = "";
    if (a) a.value = "";
    selectedPay = "";
    var opts = document.querySelectorAll(".pay-option");
    for (var i = 0; i < opts.length; i++) opts[i].classList.remove("selected");
}

function copyAcc(el) {
    var t = el.textContent.replace(/\s/g, "");
    if (navigator.clipboard) {
        navigator.clipboard.writeText(t).then(function() { toast("Nomor disalin!", "success"); });
    } else {
        var ta = document.createElement("textarea");
        ta.value = t;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        toast("Nomor disalin!", "success");
    }
}

/* ============================================
   SUBSCRIBE
   ============================================ */
function subscribe() {
    var el = document.getElementById("emailInput");
    if (!el) return;
    var v = el.value.trim();
    if (!v || v.indexOf("@") === -1) { toast("Masukkan email yang valid", "warning"); return; }
    toast("Berhasil subscribe! 🎉", "success");
    el.value = "";
}

/* ============================================
   KEYBOARD
   ============================================ */
document.addEventListener("keydown", function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        var si = document.getElementById("searchInput");
        if (si) si.focus();
    }
    if (e.key === "Escape") {
        if (document.getElementById("productModal").classList.contains("show")) closeModal();
        else if (document.getElementById("checkoutModal").classList.contains("show")) closeCheckout();
        else if (document.getElementById("cartSidebar").classList.contains("open")) toggleCart();
        else {
            var wb = document.getElementById("wishSidebar");
            if (wb && wb.classList.contains("open")) toggleWish();
        }
    }
});

/* ============================================
   INIT
   ============================================ */
function updateBottomNavBadge() {
    var bd = document.getElementById("bottomWishBadge");
    if (bd) {
        bd.textContent = wishlist.length;
        bd.classList.toggle("show", wishlist.length > 0);
    }
}
