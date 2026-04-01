// ===== DATA PRODUK =====
const produkData = [
  {
    id: 1, nama: "Kampas Rem Depan Honda Beat",
    merk: "honda", jenis: "rem",
    harga: 45000, stok: 25,
    desc: "Kampas rem depan OEM untuk Honda Beat, daya cengkram optimal.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70"
  },
  {
    id: 2, nama: "Oli Mesin Yamalube 10W-40",
    merk: "yamaha", jenis: "oli",
    harga: 65000, stok: 50,
    desc: "Oli mesin semi-sintetik khusus motor Yamaha, 800ml.",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=70"
  },
  {
    id: 3, nama: "Busi NGK CR7HSA Universal",
    merk: "universal", jenis: "mesin",
    harga: 28000, stok: 100,
    desc: "Busi standar NGK cocok untuk berbagai jenis motor bebek & matic.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70"
  },
  {
    id: 4, nama: "Rantai Motor Yamaha NMAX",
    merk: "yamaha", jenis: "mesin",
    harga: 185000, stok: 15,
    desc: "Rantai motor 428H panjang 130 mata, cocok untuk Yamaha NMAX.",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=70"
  },
  {
    id: 5, nama: "Aki Kering GS Astra 5Ah",
    merk: "universal", jenis: "kelistrikan",
    harga: 235000, stok: 20,
    desc: "Aki kering maintenance-free 12V 5Ah untuk motor matic.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70"
  },
  {
    id: 6, nama: "Ban Luar IRC NR77 80/90-14",
    merk: "universal", jenis: "ban",
    harga: 320000, stok: 8,
    desc: "Ban tubeless IRC ukuran 80/90-14 untuk motor matic ring 14.",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=70"
  },
  {
    id: 7, nama: "Filter Udara Honda Vario 125",
    merk: "honda", jenis: "mesin",
    harga: 55000, stok: 30,
    desc: "Filter udara OEM Honda Vario 125/150, menjaga performa mesin.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70"
  },
  {
    id: 8, nama: "Lampu LED Headlamp H4 35W",
    merk: "universal", jenis: "kelistrikan",
    harga: 125000, stok: 0,
    desc: "Lampu LED H4 35W 6000K, terang dan hemat daya untuk semua motor.",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=70"
  },
  {
    id: 9, nama: "Knalpot Racing Suzuki GSX",
    merk: "suzuki", jenis: "body",
    harga: 850000, stok: 5,
    desc: "Knalpot racing full system stainless steel untuk Suzuki GSX-R150.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70"
  },
  {
    id: 10, nama: "Kopling Set Kawasaki KLX",
    merk: "kawasaki", jenis: "rem",
    harga: 420000, stok: 12,
    desc: "Set kampas kopling lengkap 6 lembar untuk Kawasaki KLX 150.",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=70"
  },
  {
    id: 11, nama: "Velg Jari-Jari Honda CB150R",
    merk: "honda", jenis: "ban",
    harga: 680000, stok: 7,
    desc: "Velg jari-jari ring 17 depan untuk Honda CB150R, warna hitam.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70"
  },
  {
    id: 12, nama: "Cairan Radiator Coolant 1L",
    merk: "universal", jenis: "oli",
    harga: 38000, stok: 60,
    desc: "Cairan radiator coolant siap pakai 1 liter, cocok semua motor berpendingin air.",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=70"
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('motorparts_cart') || '[]');

// ===== UTILS =====
const rupiah = n => 'Rp ' + n.toLocaleString('id-ID');

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function saveCart() {
  localStorage.setItem('motorparts_cart', JSON.stringify(cart));
}

// ===== RENDER PRODUK =====
function renderProduk(data) {
  const grid = document.getElementById('produkGrid');
  const noResult = document.getElementById('noResult');
  grid.innerHTML = '';

  if (!data.length) {
    noResult.classList.remove('hidden');
    return;
  }
  noResult.classList.add('hidden');

  data.forEach(p => {
    const stokLabel = p.stok > 0 ? `Stok: ${p.stok}` : 'Habis';
    const stokClass = p.stok === 0 ? 'habis' : '';
    const btnDisabled = p.stok === 0 ? 'disabled style="opacity:.5;cursor:not-allowed"' : '';

    const card = document.createElement('article');
    card.className = 'produk-card';
    card.innerHTML = `
      <img class="produk-img" src="${p.img}" alt="${p.nama}" loading="lazy" />
      <div class="produk-body">
        <span class="produk-badge ${p.merk}">${p.merk.charAt(0).toUpperCase()+p.merk.slice(1)}</span>
        <h3 class="produk-nama">${p.nama}</h3>
        <p class="produk-desc">${p.desc}</p>
        <p class="produk-harga">${rupiah(p.harga)}</p>
        <p class="produk-stok ${stokClass}">${stokLabel}</p>
        <div class="produk-actions">
          <button class="btn btn-outline" onclick="addToCart(${p.id})" ${btnDisabled}>
            <i class="fa-solid fa-cart-plus"></i> Keranjang
          </button>
          <button class="btn btn-primary" onclick="addToCart(${p.id})" ${btnDisabled}>
            Beli
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ===== FILTER =====
function applyFilter() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const merk = document.getElementById('filterMerk').value;
  const jenis = document.getElementById('filterJenis').value;
  const hargaRange = document.getElementById('filterHarga').value;

  let result = produkData.filter(p => {
    const matchQ = p.nama.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchMerk = !merk || p.merk === merk;
    const matchJenis = !jenis || p.jenis === jenis;
    let matchHarga = true;
    if (hargaRange) {
      const [min, max] = hargaRange.split('-').map(Number);
      matchHarga = p.harga >= min && p.harga <= max;
    }
    return matchQ && matchMerk && matchJenis && matchHarga;
  });

  renderProduk(result);
}

// ===== CART =====
function addToCart(id) {
  const produk = produkData.find(p => p.id === id);
  if (!produk || produk.stok === 0) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    if (existing.qty < produk.stok) {
      existing.qty++;
    } else {
      showToast('Stok tidak mencukupi!');
      return;
    }
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  renderCart();
  showToast(`${produk.nama} ditambahkan ke keranjang`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  const produk = produkData.find(p => p.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  if (item.qty > produk.stok) {
    item.qty = produk.stok;
    showToast('Stok tidak mencukupi!');
  }
  saveCart();
  renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const container = document.getElementById('keranjangItems');
  const emptyMsg = document.getElementById('emptyCart');

  if (!cart.length) {
    container.innerHTML = '<p class="empty-cart" id="emptyCart">Keranjang masih kosong.</p>';
    updateSummary(0);
    return;
  }

  container.innerHTML = '';
  let subtotal = 0;

  cart.forEach(c => {
    const p = produkData.find(x => x.id === c.id);
    if (!p) return;
    const total = p.harga * c.qty;
    subtotal += total;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${p.img}" alt="${p.nama}" />
      <div class="cart-item-info">
        <h4>${p.nama}</h4>
        <p>${rupiah(p.harga)} / pcs</p>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
        </div>
      </div>
      <div>
        <p class="cart-item-price">${rupiah(total)}</p>
        <button class="cart-remove" onclick="removeFromCart(${p.id})" title="Hapus">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`;
    container.appendChild(item);
  });

  updateSummary(subtotal);
}

function updateSummary(subtotal) {
  const ongkir = subtotal >= 200000 ? 0 : 15000;
  document.getElementById('subtotal').textContent = rupiah(subtotal);
  document.getElementById('ongkir').textContent = ongkir === 0 ? 'GRATIS' : rupiah(ongkir);
  document.getElementById('totalHarga').textContent = rupiah(subtotal + ongkir);
}

// ===== REKOMENDASI =====
function renderRekomendasi() {
  const grid = document.getElementById('rekGrid');
  const picks = produkData.filter(p => p.stok > 0).slice(0, 4);
  picks.forEach(p => {
    const card = document.createElement('div');
    card.className = 'rek-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nama}" loading="lazy" />
      <div class="rek-card-body">
        <h4>${p.nama}</h4>
        <p>${rupiah(p.harga)}</p>
      </div>`;
    card.addEventListener('click', () => {
      document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
    });
    grid.appendChild(card);
  });
}

// ===== KATEGORI SHORTCUT =====
document.querySelectorAll('.kategori-card').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.getElementById('filterJenis').value = filter;
    applyFilter();
    document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== FILTER EVENTS =====
['searchInput', 'filterMerk', 'filterJenis', 'filterHarga'].forEach(id => {
  document.getElementById(id).addEventListener('input', applyFilter);
});
document.getElementById('resetFilter').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterMerk').value = '';
  document.getElementById('filterJenis').value = '';
  document.getElementById('filterHarga').value = '';
  renderProduk(produkData);
});

// ===== CHECKOUT =====
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!cart.length) { showToast('Keranjang masih kosong!'); return; }
  document.getElementById('checkoutModal').classList.remove('hidden');
});
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.add('hidden');
  cart = [];
  saveCart();
  updateCartBadge();
  renderCart();
});
document.getElementById('clearCartBtn').addEventListener('click', () => {
  if (!cart.length) return;
  cart = [];
  saveCart();
  updateCartBadge();
  renderCart();
  showToast('Keranjang dikosongkan');
});

// ===== AUTH TABS =====
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
  showToast('Login berhasil! (Demo UI)');
});
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Registrasi berhasil! (Demo UI)');
});

// ===== KONTAK FORM =====
document.getElementById('kontakForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Pesan terkirim! Kami akan segera menghubungi Anda.');
  e.target.reset();
});

// ===== MOBILE NAV =====
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mainNav').classList.remove('open');
  });
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id], aside[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ===== INIT =====
renderProduk(produkData);
renderCart();
updateCartBadge();
renderRekomendasi();
