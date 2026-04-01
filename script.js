// ===== DATA PRODUK =====
const produkData = [
  { id:1,  nama:"Kampas Rem Depan Honda Beat",      merk:"honda",    jenis:"rem",         harga:45000,  hargaOri:60000,  stok:25, rating:4.8, terjual:320, badge:"sale", desc:"Kampas rem depan OEM untuk Honda Beat, daya cengkram optimal dan tahan lama. Cocok untuk pemakaian harian.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:2,  nama:"Oli Mesin Yamalube 10W-40 800ml",  merk:"yamaha",   jenis:"oli",         harga:65000,  hargaOri:75000,  stok:50, rating:4.9, terjual:512, badge:"sale", desc:"Oli mesin semi-sintetik khusus motor Yamaha. Menjaga performa mesin tetap optimal.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:3,  nama:"Busi NGK CR7HSA Universal",        merk:"universal",jenis:"mesin",       harga:28000,  hargaOri:null,   stok:100,rating:4.7, terjual:890, badge:"",     desc:"Busi standar NGK cocok untuk berbagai jenis motor bebek & matic. Pengapian stabil.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:4,  nama:"Rantai Motor Yamaha NMAX 428H",    merk:"yamaha",   jenis:"mesin",       harga:185000, hargaOri:220000, stok:15, rating:4.6, terjual:145, badge:"sale", desc:"Rantai motor 428H panjang 130 mata, cocok untuk Yamaha NMAX. Material baja berkualitas.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:5,  nama:"Aki Kering GS Astra 12V 5Ah",     merk:"universal",jenis:"kelistrikan", harga:235000, hargaOri:260000, stok:20, rating:4.5, terjual:203, badge:"",     desc:"Aki kering maintenance-free 12V 5Ah untuk motor matic. Tahan lama dan bebas perawatan.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:6,  nama:"Ban Luar IRC NR77 80/90-14",       merk:"universal",jenis:"ban",         harga:320000, hargaOri:null,   stok:8,  rating:4.7, terjual:98,  badge:"new",  desc:"Ban tubeless IRC ukuran 80/90-14 untuk motor matic ring 14. Grip kuat di segala kondisi.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:7,  nama:"Filter Udara Honda Vario 125/150", merk:"honda",    jenis:"mesin",       harga:55000,  hargaOri:65000,  stok:30, rating:4.8, terjual:267, badge:"sale", desc:"Filter udara OEM Honda Vario 125/150. Menjaga performa mesin dan efisiensi bahan bakar.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:8,  nama:"Lampu LED Headlamp H4 35W 6000K",  merk:"universal",jenis:"kelistrikan", harga:125000, hargaOri:150000, stok:0,  rating:4.4, terjual:178, badge:"",     desc:"Lampu LED H4 35W 6000K, terang dan hemat daya. Plug & play untuk semua motor.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:9,  nama:"Knalpot Racing Suzuki GSX-R150",   merk:"suzuki",   jenis:"body",        harga:850000, hargaOri:null,   stok:5,  rating:4.6, terjual:42,  badge:"new",  desc:"Knalpot racing full system stainless steel untuk Suzuki GSX-R150. Suara sporty, performa meningkat.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:10, nama:"Kopling Set Kawasaki KLX 150",     merk:"kawasaki", jenis:"rem",         harga:420000, hargaOri:480000, stok:12, rating:4.7, terjual:87,  badge:"sale", desc:"Set kampas kopling lengkap 6 lembar untuk Kawasaki KLX 150. Material premium, daya tahan tinggi.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:11, nama:"Velg Jari-Jari Honda CB150R R17",  merk:"honda",    jenis:"ban",         harga:680000, hargaOri:750000, stok:7,  rating:4.5, terjual:56,  badge:"",     desc:"Velg jari-jari ring 17 depan untuk Honda CB150R, warna hitam. Material aluminium alloy.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:12, nama:"Cairan Radiator Coolant 1 Liter",  merk:"universal",jenis:"oli",         harga:38000,  hargaOri:null,   stok:60, rating:4.6, terjual:445, badge:"",     desc:"Cairan radiator coolant siap pakai 1 liter. Cocok semua motor berpendingin air.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:13, nama:"Shock Absorber Belakang Yamaha",   merk:"yamaha",   jenis:"mesin",       harga:275000, hargaOri:310000, stok:18, rating:4.5, terjual:134, badge:"sale", desc:"Shock absorber belakang untuk Yamaha Mio/Fino/Soul GT. Nyaman dan tahan lama.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:14, nama:"Spion Kiri Kanan Honda PCX 160",   merk:"honda",    jenis:"body",        harga:95000,  hargaOri:null,   stok:22, rating:4.3, terjual:189, badge:"new",  desc:"Spion kiri kanan OEM Honda PCX 160. Desain aerodinamis, kaca anti-silau.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
  { id:15, nama:"Karburator Suzuki Satria FU",      merk:"suzuki",   jenis:"mesin",       harga:340000, hargaOri:390000, stok:9,  rating:4.7, terjual:73,  badge:"sale", desc:"Karburator standar untuk Suzuki Satria FU 150. Suplai bahan bakar optimal.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { id:16, nama:"Grip Stang Racing Universal",      merk:"universal",jenis:"body",        harga:35000,  hargaOri:null,   stok:75, rating:4.4, terjual:623, badge:"",     desc:"Grip stang racing anti-slip, cocok untuk semua motor. Bahan karet premium.", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75" },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('mp_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('mp_wishlist') || '[]');
let activeFilter = { merk:'', jenis:'', harga:'', rating:0, q:'' };
let activeSort = 'default';

// ===== UTILS =====
const rupiah = n => 'Rp ' + n.toLocaleString('id-ID');
const diskon = (ori, harga) => ori ? Math.round((1 - harga/ori)*100) + '%' : null;

function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.className = 'toast' + (type ? ' '+type : '');
  t.innerHTML = `<i class="fa-solid fa-${type==='success'?'circle-check':type==='error'?'circle-xmark':'bell'}"></i> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

function saveCart() { localStorage.setItem('mp_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('mp_wishlist', JSON.stringify(wishlist)); }

function renderStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) s += '<i class="fa-solid fa-star"></i>';
    else if (rating >= i - 0.5) s += '<i class="fa-solid fa-star-half-stroke"></i>';
    else s += '<i class="fa-regular fa-star"></i>';
  }
  return s;
}

// ===== HERO SLIDER =====
(function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('sliderDots');
  let current = 0, timer;

  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i+1));
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('sliderPrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('sliderNext').addEventListener('click', () => goTo(current + 1));
  resetTimer();
})();

// ===== RENDER PRODUK =====
function getFilteredSorted() {
  let data = produkData.filter(p => {
    const qMatch = !activeFilter.q ||
      p.nama.toLowerCase().includes(activeFilter.q) ||
      p.merk.toLowerCase().includes(activeFilter.q) ||
      p.jenis.toLowerCase().includes(activeFilter.q);
    const merkMatch = !activeFilter.merk || p.merk === activeFilter.merk;
    const jenisMatch = !activeFilter.jenis || p.jenis === activeFilter.jenis;
    const ratingMatch = p.rating >= activeFilter.rating;
    let hargaMatch = true;
    if (activeFilter.harga) {
      const [min, max] = activeFilter.harga.split('-').map(Number);
      hargaMatch = p.harga >= min && p.harga <= max;
    }
    return qMatch && merkMatch && jenisMatch && ratingMatch && hargaMatch;
  });

  switch (activeSort) {
    case 'harga-asc':  data.sort((a,b) => a.harga - b.harga); break;
    case 'harga-desc': data.sort((a,b) => b.harga - a.harga); break;
    case 'rating-desc':data.sort((a,b) => b.rating - a.rating); break;
    case 'nama-asc':   data.sort((a,b) => a.nama.localeCompare(b.nama)); break;
  }
  return data;
}

function renderProduk() {
  const data = getFilteredSorted();
  const grid = document.getElementById('produkGrid');
  const noResult = document.getElementById('noResult');
  const count = document.getElementById('produkCount');

  count.textContent = `Menampilkan ${data.length} produk`;
  grid.innerHTML = '';

  if (!data.length) { noResult.classList.remove('hidden'); return; }
  noResult.classList.add('hidden');

  data.forEach(p => {
    const disc = diskon(p.hargaOri, p.harga);
    const isWish = wishlist.includes(p.id);
    const habis = p.stok === 0;

    const art = document.createElement('article');
    art.className = 'produk-card';
    art.innerHTML = `
      ${p.badge ? `<span class="card-badge ${p.badge}">${p.badge==='sale'?'SALE':p.badge==='new'?'BARU':p.badge}</span>` : ''}
      <button class="wishlist-btn ${isWish?'active':''}" data-id="${p.id}" aria-label="Wishlist">
        <i class="fa-${isWish?'solid':'regular'} fa-heart"></i>
      </button>
      <div class="produk-img-wrap">
        <img class="produk-img" src="${p.img}" alt="${p.nama}" loading="lazy"/>
      </div>
      <div class="produk-body">
        <span class="merk-tag ${p.merk}">${p.merk.charAt(0).toUpperCase()+p.merk.slice(1)}</span>
        <h3 class="produk-nama">${p.nama}</h3>
        <div class="produk-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span>${p.rating} (${p.terjual} terjual)</span>
        </div>
        <p class="produk-harga">${rupiah(p.harga)}${disc?` <small style="background:var(--primary-light);color:var(--primary);padding:.1rem .35rem;border-radius:4px;font-size:.7rem;font-weight:700">-${disc}</small>`:''}</p>
        ${p.hargaOri ? `<p class="produk-harga-ori">${rupiah(p.hargaOri)}</p>` : ''}
        <p class="produk-stok ${habis?'habis':''}">${habis?'Stok Habis':'Stok: '+p.stok}</p>
        <div class="card-actions">
          <button class="btn btn-outline" onclick="openDetail(${p.id})">Detail</button>
          <button class="btn btn-primary" onclick="addToCart(${p.id})" ${habis?'disabled style="opacity:.5;cursor:not-allowed"':''}>
            <i class="fa-solid fa-cart-plus"></i> Beli
          </button>
        </div>
      </div>`;
    grid.appendChild(art);
  });

  // wishlist buttons
  grid.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleWishlist(+btn.dataset.id);
    });
  });
}

// ===== SIDEBAR REKOMENDASI =====
function renderSidebarRek() {
  const wrap = document.getElementById('sidebarRek');
  const picks = [...produkData].sort((a,b) => b.terjual - a.terjual).slice(0,5);
  wrap.innerHTML = picks.map(p => `
    <div class="rek-item" onclick="openDetail(${p.id})">
      <img src="${p.img}" alt="${p.nama}" loading="lazy"/>
      <div class="rek-item-info">
        <h5>${p.nama}</h5>
        <p>${rupiah(p.harga)}</p>
      </div>
    </div>`).join('');
}

// ===== CART =====
function addToCart(id) {
  const p = produkData.find(x => x.id === id);
  if (!p || p.stok === 0) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    if (existing.qty >= p.stok) { showToast('Stok tidak mencukupi!', 'error'); return; }
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`${p.nama} ditambahkan ke keranjang`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartBadge(); renderCartDrawer();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  const p = produkData.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  if (item.qty > p.stok) { item.qty = p.stok; showToast('Stok tidak mencukupi!', 'error'); }
  saveCart(); renderCartDrawer();
}

function updateCartBadge() {
  const total = cart.reduce((s,c) => s + c.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCartDrawer() {
  const body = document.getElementById('cartItems');
  if (!cart.length) {
    body.innerHTML = `<div class="empty-cart"><i class="fa-solid fa-cart-shopping"></i><p>Keranjang masih kosong.</p></div>`;
    updateSummary(0); return;
  }
  let subtotal = 0;
  body.innerHTML = cart.map(c => {
    const p = produkData.find(x => x.id === c.id);
    if (!p) return '';
    subtotal += p.harga * c.qty;
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.nama}" loading="lazy"/>
        <div class="cart-item-info">
          <h4>${p.nama}</h4>
          <p>${rupiah(p.harga)} / pcs</p>
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <span class="qty-num">${c.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.3rem">
          <span class="cart-item-price">${rupiah(p.harga * c.qty)}</span>
          <button class="cart-remove" onclick="removeFromCart(${p.id})" title="Hapus">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>`;
  }).join('');
  updateSummary(subtotal);
}

function updateSummary(subtotal) {
  const ongkir = subtotal >= 200000 ? 0 : 15000;
  document.getElementById('cartSubtotal').textContent = rupiah(subtotal);
  document.getElementById('cartOngkir').textContent = ongkir === 0 ? 'GRATIS 🎉' : rupiah(ongkir);
  document.getElementById('cartTotal').textContent = rupiah(subtotal + ongkir);
}

// ===== WISHLIST =====
function toggleWishlist(id) {
  const p = produkData.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    showToast(`${p.nama} dihapus dari wishlist`);
  } else {
    wishlist.push(id);
    showToast(`${p.nama} ditambahkan ke wishlist ❤️`, 'success');
  }
  saveWishlist();
  renderProduk();
}

// ===== DETAIL MODAL =====
function openDetail(id) {
  const p = produkData.find(x => x.id === id);
  if (!p) return;
  const disc = diskon(p.hargaOri, p.harga);
  document.getElementById('detailContent').innerHTML = `
    <img class="detail-img" src="${p.img}" alt="${p.nama}"/>
    <div class="detail-body">
      <span class="merk-tag ${p.merk}">${p.merk.charAt(0).toUpperCase()+p.merk.slice(1)}</span>
      <h2>${p.nama}</h2>
      <div class="produk-rating" style="margin:.4rem 0">
        <span class="stars">${renderStars(p.rating)}</span>
        <span>${p.rating} · ${p.terjual} terjual</span>
      </div>
      <p class="produk-harga">${rupiah(p.harga)} ${disc?`<small style="background:var(--primary-light);color:var(--primary);padding:.15rem .4rem;border-radius:4px;font-size:.75rem;font-weight:700">-${disc}</small>`:''}</p>
      ${p.hargaOri ? `<p class="produk-harga-ori">${rupiah(p.hargaOri)}</p>` : ''}
      <p>${p.desc}</p>
      <p class="produk-stok ${p.stok===0?'habis':''}" style="margin-bottom:1rem">${p.stok===0?'Stok Habis':'Stok tersedia: '+p.stok}</p>
      <button class="btn btn-primary" onclick="addToCart(${p.id});document.getElementById('detailModal').classList.add('hidden')" ${p.stok===0?'disabled style="opacity:.5"':''}>
        <i class="fa-solid fa-cart-plus"></i> Tambah ke Keranjang
      </button>
    </div>`;
  document.getElementById('detailModal').classList.remove('hidden');
}

// ===== SEARCH DROPDOWN =====
const globalSearch = document.getElementById('globalSearch');
const searchDropdown = document.getElementById('searchDropdown');

function updateSearchDropdown(q) {
  if (!q) { searchDropdown.classList.add('hidden'); return; }
  const results = produkData.filter(p =>
    p.nama.toLowerCase().includes(q) || p.merk.toLowerCase().includes(q)
  ).slice(0, 6);
  if (!results.length) { searchDropdown.classList.add('hidden'); return; }
  searchDropdown.innerHTML = results.map(p => `
    <div class="search-item" onclick="openDetail(${p.id});searchDropdown.classList.add('hidden');globalSearch.value=''">
      <i class="fa-solid fa-magnifying-glass"></i>
      <span>${p.nama}</span>
      <span style="margin-left:auto;color:var(--primary);font-weight:700;font-size:.82rem">${rupiah(p.harga)}</span>
    </div>`).join('');
  searchDropdown.classList.remove('hidden');
}

globalSearch.addEventListener('input', e => {
  activeFilter.q = e.target.value.toLowerCase().trim();
  updateSearchDropdown(activeFilter.q);
  renderProduk();
});

document.getElementById('searchBtn').addEventListener('click', () => {
  searchDropdown.classList.add('hidden');
  document.getElementById('produk').scrollIntoView({ behavior:'smooth' });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) searchDropdown.classList.add('hidden');
});

// ===== FILTER EVENTS =====
document.getElementById('filterMerk').addEventListener('change', e => { activeFilter.merk = e.target.value; renderProduk(); });
document.getElementById('filterJenis').addEventListener('change', e => { activeFilter.jenis = e.target.value; renderProduk(); });
document.getElementById('filterHarga').addEventListener('change', e => { activeFilter.harga = e.target.value; renderProduk(); });
document.getElementById('sortProduk').addEventListener('change', e => { activeSort = e.target.value; renderProduk(); });

document.querySelectorAll('.star-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter.rating = +btn.dataset.rating;
    renderProduk();
  });
});

document.getElementById('resetFilter').addEventListener('click', () => {
  activeFilter = { merk:'', jenis:'', harga:'', rating:0, q:'' };
  activeSort = 'default';
  document.getElementById('filterMerk').value = '';
  document.getElementById('filterJenis').value = '';
  document.getElementById('filterHarga').value = '';
  document.getElementById('sortProduk').value = 'default';
  document.querySelectorAll('.star-btn').forEach((b,i) => b.classList.toggle('active', i===0));
  renderProduk();
  showToast('Filter direset');
});

// Kategori chips
document.querySelectorAll('.kat-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.kat-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter.jenis = chip.dataset.jenis;
    document.getElementById('filterJenis').value = chip.dataset.jenis;
    renderProduk();
    document.getElementById('produk').scrollIntoView({ behavior:'smooth' });
  });
});

// Nav dropdown filter
document.querySelectorAll('.dropdown a[data-jenis]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    activeFilter.jenis = a.dataset.jenis;
    document.getElementById('filterJenis').value = a.dataset.jenis;
    renderProduk();
    document.getElementById('produk').scrollIntoView({ behavior:'smooth' });
  });
});

// Promo btn filter
document.querySelectorAll('.btn-white[data-jenis]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    activeFilter.jenis = btn.dataset.jenis;
    document.getElementById('filterJenis').value = btn.dataset.jenis;
    renderProduk();
    document.getElementById('produk').scrollIntoView({ behavior:'smooth' });
  });
});

// ===== CART DRAWER TOGGLE =====
function openCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('hidden');
  document.getElementById('drawerOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.add('hidden');
  document.getElementById('drawerOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}
document.getElementById('openCart').addEventListener('click', openCartDrawer);
document.getElementById('closeCart').addEventListener('click', closeCartDrawer);
document.getElementById('drawerOverlay').addEventListener('click', closeCartDrawer);

document.getElementById('clearCartBtn').addEventListener('click', () => {
  if (!cart.length) return;
  cart = []; saveCart(); updateCartBadge(); renderCartDrawer();
  showToast('Keranjang dikosongkan');
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!cart.length) { showToast('Keranjang masih kosong!', 'error'); return; }
  closeCartDrawer();
  document.getElementById('checkoutModal').classList.remove('hidden');
});

document.getElementById('closeCheckout').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.add('hidden');
  cart = []; saveCart(); updateCartBadge(); renderCartDrawer();
});

// ===== AUTH MODAL =====
document.getElementById('openLogin').addEventListener('click', () => {
  document.getElementById('authModal').classList.remove('hidden');
});
document.getElementById('closeAuth').addEventListener('click', () => {
  document.getElementById('authModal').classList.add('hidden');
});
document.getElementById('authModal').addEventListener('click', e => {
  if (e.target === document.getElementById('authModal'))
    document.getElementById('authModal').classList.add('hidden');
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
    document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
  });
});

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('authModal').classList.add('hidden');
  showToast('Login berhasil! (Demo UI)', 'success');
});
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('authModal').classList.add('hidden');
  showToast('Registrasi berhasil! (Demo UI)', 'success');
});

// Toggle password visibility
document.querySelectorAll('.toggle-pass').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    btn.innerHTML = `<i class="fa-solid fa-eye${isPass?'-slash':''}"></i>`;
  });
});

// ===== DETAIL MODAL CLOSE =====
document.getElementById('closeDetail').addEventListener('click', () => {
  document.getElementById('detailModal').classList.add('hidden');
});
document.getElementById('detailModal').addEventListener('click', e => {
  if (e.target === document.getElementById('detailModal'))
    document.getElementById('detailModal').classList.add('hidden');
});

// ===== KONTAK & NEWSLETTER =====
document.getElementById('kontakForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Pesan terkirim! Kami akan segera menghubungi Anda.', 'success');
  e.target.reset();
});
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Berhasil berlangganan newsletter!', 'success');
  e.target.reset();
});

// ===== MOBILE NAV =====
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => document.getElementById('mainNav').classList.remove('open'));
});

// ===== ACTIVE NAV ON SCROLL =====
const navSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  navSections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#'+cur);
  });
  // back to top
  document.getElementById('backTop').classList.toggle('hidden', window.scrollY < 400);
}, { passive:true });

document.getElementById('backTop').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

// ===== HEADER SHADOW ON SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('siteHeader').style.boxShadow =
    window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,.35)' : '0 2px 16px rgba(0,0,0,.25)';
}, { passive:true });

// ===== INIT =====
renderProduk();
renderSidebarRek();
renderCartDrawer();
updateCartBadge();
