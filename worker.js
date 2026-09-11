const products = [
  { id: 1, name: "Wireless Headphones", price: 2500, seller: "TechFlow Store", category: "Electronics" },
  { id: 2, name: "Classic Hoodie", price: 1800, seller: "Urban Style", category: "Fashion" },
  { id: 3, name: "Office Backpack", price: 2200, seller: "Daily Essentials", category: "Accessories" }
];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SokoFlow</title>
<style>
*{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;background:#f6f7f9;color:#18202a}
header{background:#fff;border-bottom:1px solid #e4e7eb;padding:16px 5%;display:flex;gap:14px;align-items:center;position:sticky;top:0}
.brand{font-size:25px;font-weight:900}.brand span{color:#e48b25}input{flex:1;padding:11px;border:1px solid #d8dde3;border-radius:8px}
button{border:0;border-radius:8px;padding:11px 15px;background:#f1a23d;font-weight:bold;cursor:pointer}
main{max-width:1100px;margin:auto;padding:25px 5% 90px}.hero{background:#14212e;color:#fff;padding:38px;border-radius:16px}
.hero h1{font-size:clamp(34px,6vw,58px);margin:8px 0}.payment{margin-top:20px;background:#fff;color:#18202a;padding:18px;border-radius:10px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px}.card{background:#fff;border:1px solid #e1e5e9;padding:18px;border-radius:12px}
.image{height:115px;background:#e9eef3;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#657382;font-weight:bold}
.price{font-size:19px;font-weight:bold;margin:10px 0}.meta{color:#687684;font-size:13px}
section{display:none}section.active{display:block}.cartItem{background:#fff;border:1px solid #e1e5e9;padding:14px;border-radius:10px;margin:10px 0}
.coming{padding:18px;background:#fff8ed;border:1px dashed #d47b18;border-radius:9px;margin:15px 0}
nav{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #e1e5e9;padding:9px;display:flex;justify-content:center;gap:10px}
nav button{background:#fff;color:#394653}@media(max-width:700px){.grid{grid-template-columns:1fr}.hero{padding:25px}}
</style>
</head>
<body>
<header><div class="brand">SOKO<span>FLOW</span></div><input id="search" placeholder="Search products"><button onclick="showPage('cart')">Cart <span id="count">0</span></button></header>
<main>
<section id="home" class="active">
<div class="hero"><div>MARKETPLACE & DELIVERY PLATFORM</div><h1>Discover. Connect. Trade. Deliver.</h1><p>A simple multi-vendor marketplace connecting customers and sellers.</p><button onclick="showPage('shop')">Explore Marketplace</button>
<div class="payment"><b>PAYMENT INTEGRATION</b><h2>Coming Soon</h2><p>Online payment options will be added in a future update.</p></div></div>
<h2>Popular Products</h2><div id="featured" class="grid"></div>
</section>
<section id="shop"><h1>Explore Marketplace</h1><div id="products" class="grid"></div></section>
<section id="cart"><h1>Your Cart</h1><div id="cartItems"></div><h2 id="total">Total: KSh 0</h2><div class="coming"><b>PAYMENTS — COMING SOON</b><br><small>Online payment integration is currently being prepared.</small></div><button onclick="placeOrder()">Place Order</button></section>
</main>
<nav><button onclick="showPage('home')">Home</button><button onclick="showPage('shop')">Explore</button><button onclick="showPage('cart')">Cart</button></nav>
<script>
const products=${JSON.stringify(products)};let cart=[];
const money=n=>'KSh '+Number(n).toLocaleString();
function card(p){return '<article class="card"><div class="image">'+p.category+'</div><h3>'+p.name+'</h3><div class="meta">'+p.seller+'</div><div class="price">'+money(p.price)+'</div><button onclick="add('+p.id+')">Add to Cart</button></article>'}
function render(){document.getElementById('products').innerHTML=products.map(card).join('');document.getElementById('featured').innerHTML=products.map(card).join('')}
function add(id){cart.push(products.find(p=>p.id===id));document.getElementById('count').textContent=cart.length}
function showPage(id){document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');if(id==='cart')renderCart()}
function renderCart(){document.getElementById('cartItems').innerHTML=cart.length?cart.map((p,i)=>'<div class="cartItem"><b>'+p.name+'</b><br>'+money(p.price)+' <button onclick="removeItem('+i+')">Remove</button></div>').join(''):'Your cart is empty.';document.getElementById('total').textContent='Total: '+money(cart.reduce((s,p)=>s+p.price,0))}
function removeItem(i){cart.splice(i,1);document.getElementById('count').textContent=cart.length;renderCart()}
function placeOrder(){alert(cart.length?'Order created. Payment integration is coming soon.':'Please add a product first.')}
document.getElementById('search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.getElementById('products').innerHTML=products.filter(p=>(p.name+p.seller+p.category).toLowerCase().includes(q)).map(card).join('')||'No products found.';showPage('shop')});
render();
</script></body></html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return Response.json({ ok: true, app: "SokoFlow", status: "running" });
    }
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" }
    });
  }
};
