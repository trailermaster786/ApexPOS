/* ═══════════════════════════════════════════════════════
   ApexPOS — Restaurant Management System
   8 DB Tables • 11 Screens • Full CRUD
   ═══════════════════════════════════════════════════════ */

// ─── Default Data ───
const DEF = {
  users: [
    { id: 1, name: 'Admin', email: 'Admin123', role: 'admin', active: true },
  ],
  menu: [
    { id:1, name:'Grilled Chicken', price:14.99, category:'Mains', emoji:'🍗', available:true, prepTime:12 },
    { id:2, name:'Caesar Salad', price:9.99, category:'Starters', emoji:'🥗', available:true, prepTime:5 },
    { id:3, name:'Margherita Pizza', price:12.99, category:'Mains', emoji:'🍕', available:true, prepTime:15 },
    { id:4, name:'Salmon Fillet', price:18.99, category:'Mains', emoji:'🐟', available:true, prepTime:18 },
    { id:5, name:'Tomato Soup', price:6.99, category:'Starters', emoji:'🍲', available:true, prepTime:8 },
    { id:6, name:'Burger Deluxe', price:13.99, category:'Mains', emoji:'🍔', available:true, prepTime:10 },
    { id:7, name:'Fish & Chips', price:11.99, category:'Mains', emoji:'🍟', available:true, prepTime:12 },
    { id:8, name:'Pasta Carbonara', price:13.49, category:'Mains', emoji:'🍝', available:true, prepTime:14 },
    { id:9, name:'Tiramisu', price:7.99, category:'Desserts', emoji:'🍰', available:true, prepTime:3 },
    { id:10,name:'Ice Cream Sundae', price:5.99, category:'Desserts', emoji:'🍨', available:true, prepTime:2 },
    { id:11,name:'Chocolate Cake', price:8.49, category:'Desserts', emoji:'🎂', available:true, prepTime:3 },
    { id:12,name:'Fresh Lemonade', price:3.99, category:'Drinks', emoji:'🍋', available:true, prepTime:2 },
    { id:13,name:'Iced Coffee', price:4.49, category:'Drinks', emoji:'☕', available:true, prepTime:2 },
    { id:14,name:'Sparkling Water', price:2.99, category:'Drinks', emoji:'💧', available:true, prepTime:1 },
    { id:15,name:'Wine Red Glass', price:8.99, category:'Drinks', emoji:'🍷', available:true, prepTime:1 },
    { id:16,name:'Garlic Bread', price:4.99, category:'Sides', emoji:'🥖', available:true, prepTime:5 },
    { id:17,name:'French Fries', price:4.49, category:'Sides', emoji:'🍟', available:true, prepTime:6 },
    { id:18,name:'Onion Rings', price:5.49, category:'Sides', emoji:'🧅', available:true, prepTime:7 },
  ],
  customers: [
    { id:1, name:'Alice Morgan', email:'alice@mail.com', phone:'555-0101', visits:24, spent:486.50, loyalty:240, joined:'2025-01-15' },
    { id:2, name:'Bob Carter', email:'bob@mail.com', phone:'555-0102', visits:18, spent:312.00, loyalty:180, joined:'2025-02-20' },
    { id:3, name:'Clara Davis', email:'clara@mail.com', phone:'555-0103', visits:31, spent:724.80, loyalty:510, joined:'2024-11-05' },
    { id:4, name:'David Lee', email:'david@mail.com', phone:'555-0104', visits:9, spent:156.30, loyalty:90, joined:'2025-04-10' },
    { id:5, name:'Eva Martinez', email:'eva@mail.com', phone:'555-0105', visits:42, spent:1023.60, loyalty:840, joined:'2024-08-12' },
  ],
  staff: [
    { id:1, name:'Sarah Wilson', email:'sarah@store', role:'manager', salary:4500, status:'active', phone:'555-1001', joined:'2024-06-01' },
    { id:2, name:'Mike Johnson', email:'mike@store', role:'cashier', salary:2800, status:'active', phone:'555-1002', joined:'2024-09-15' },
    { id:3, name:'Emily Chen', email:'emily@store', role:'chef', salary:3800, status:'active', phone:'555-1003', joined:'2024-07-20' },
    { id:4, name:'James Brown', email:'james@store', role:'waiter', salary:2500, status:'active', phone:'555-1004', joined:'2025-01-10' },
    { id:5, name:'Lisa Park', email:'lisa@store', role:'cashier', salary:2800, status:'on-leave', phone:'555-1005', joined:'2024-11-05' },
  ],
  tables: [
    { id:1, seats:2, status:'free', zone:'Indoor' },
    { id:2, seats:2, status:'occupied', zone:'Indoor', orderId:101, since:'7:15 PM' },
    { id:3, seats:4, status:'free', zone:'Indoor' },
    { id:4, seats:4, status:'reserved', zone:'Indoor', guest:'Alice M.', at:'8:00 PM' },
    { id:5, seats:6, status:'occupied', zone:'Indoor', orderId:102, since:'6:45 PM' },
    { id:6, seats:2, status:'free', zone:'Patio' },
    { id:7, seats:4, status:'cleaning', zone:'Patio' },
    { id:8, seats:8, status:'free', zone:'Private' },
    { id:9, seats:4, status:'occupied', zone:'Patio', orderId:103, since:'7:30 PM' },
    { id:10,seats:6, status:'free', zone:'Private' },
  ],
  orders: [],
  inventory: [
    { id:1, name:'Chicken Breast', unit:'kg', stock:25, minStock:10, cost:8.50, supplier:'Fresh Farms' },
    { id:2, name:'Salmon Fillet', unit:'kg', stock:12, minStock:5, cost:22.00, supplier:'Ocean Catch' },
    { id:3, name:'Lettuce', unit:'heads', stock:30, minStock:10, cost:1.50, supplier:'Green Valley' },
    { id:4, name:'Tomatoes', unit:'kg', stock:18, minStock:8, cost:3.20, supplier:'Green Valley' },
    { id:5, name:'Cheese Mozzarella', unit:'kg', stock:8, minStock:5, cost:12.00, supplier:'Dairy Best' },
    { id:6, name:'Pasta Spaghetti', unit:'kg', stock:20, minStock:8, cost:2.80, supplier:'Italiano Supply' },
    { id:7, name:'Flour', unit:'kg', stock:15, minStock:10, cost:1.20, supplier:'Mill & Co' },
    { id:8, name:'Olive Oil', unit:'liters', stock:6, minStock:4, cost:9.50, supplier:'Italiano Supply' },
    { id:9, name:'Coffee Beans', unit:'kg', stock:4, minStock:3, cost:18.00, supplier:'Bean Roasters' },
    { id:10,name:'Wine Red', unit:'bottles', stock:24, minStock:10, cost:12.00, supplier:'Vineyard Direct' },
  ],
  expenses: [
    { id:1, category:'Salaries', description:'Monthly staff payroll', amount:16400, date:'2025-06-01' },
    { id:2, category:'Supplies', description:'Kitchen supplies restock', amount:1250, date:'2025-06-05' },
    { id:3, category:'Utilities', description:'Electricity bill', amount:480, date:'2025-06-10' },
    { id:4, category:'Utilities', description:'Water bill', amount:220, date:'2025-06-10' },
    { id:5, category:'Maintenance', description:'AC unit repair', amount:350, date:'2025-06-12' },
    { id:6, category:'Marketing', description:'Social media ads', amount:200, date:'2025-06-15' },
    { id:7, category:'Supplies', description:'Cleaning products', amount:85, date:'2025-06-18' },
  ],
};

// ─── State ───
const S = {
  user: null,
  db: {},
  cart: [],
  discount: 0,
  discountType: 'percent',
  taxRate: 0.085,
  page: 'dashboard',
  holdOrders: [],
  holdCounter: 0,
  nextId: {},
  posCategory: 'all',
  posSearch: '',
  posTable: null,
  settings: { storeName:'ApexPOS Restaurant', address:'123 Food Street, NY 10001', phone:'(555) 123-4567', receiptNote:'Thank you for dining with us!' },
};

// ─── Persistence ───
function save(key) { localStorage.setItem('apex_' + key, JSON.stringify(S.db[key])); }
function loadAll() {
  ['users','menu','customers','staff','tables','orders','inventory','expenses'].forEach(k => {
    try { const v = localStorage.getItem('apex_' + k); S.db[k] = v ? JSON.parse(v) : [...DEF[k]]; }
    catch(e) { S.db[k] = [...DEF[k]]; }
  });
  try { const st = localStorage.getItem('apex_settings'); if(st) S.settings = JSON.parse(st); } catch(e){}
  // Compute next IDs
  Object.keys(S.db).forEach(k => {
    const ids = S.db[k].map(r => r.id || 0);
    S.nextId[k] = ids.length ? Math.max(...ids) + 1 : 1;
  });
}
function saveAll() { Object.keys(S.db).forEach(k => save(k)); localStorage.setItem('apex_settings', JSON.stringify(S.settings)); }

// ─── Helpers ───
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
function fmt(n) { return '$' + Number(n).toFixed(2); }
function uid(key) { return S.nextId[key]++; }
function today() { return new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }); }
function now() { return new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' }); }
function toast(msg, type='success') {
  const t = document.createElement('div'); t.className = 'toast ' + type; t.textContent = msg;
  $('#toastContainer').appendChild(t);
  setTimeout(() => { t.classList.add('exiting'); setTimeout(() => t.remove(), 300); }, 2500);
}
function initials(n) { return n.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase(); }

// ─── Animation Utilities ───
function addRipple(e, el) {
  const r = el.getBoundingClientRect();
  const size = Math.max(r.width, r.height) * 2;
  const x = e.clientX - r.left - size / 2;
  const y = e.clientY - r.top - size / 2;
  const rip = document.createElement('span');
  rip.className = 'ripple-effect';
  rip.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  el.appendChild(rip);
  setTimeout(() => rip.remove(), 600);
}
document.addEventListener('click', e => {
  const el = e.target.closest('.btn, .btn-login, .btn-pay, .btn-complete, .btn-hold, .btn-new, .btn-print, .sidebar-link, .method-btn, .cash-btn, .key, .login-tab, .tbl-btn, .icon-btn, .sidebar-toggle, .sidebar-logout, .btn-clear, .btn-apply, .product-card, .table-tile, .hold-card');
  if (el) addRipple(e, el);
});

function animateCounter(el, target, duration = 800) {
  const start = parseFloat(el.textContent.replace(/[^0-9.-]/g, '')) || 0;
  if (start === target) { el.textContent = fmt(target); return; }
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * ease;
    el.textContent = fmt(current);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = fmt(target);
  }
  requestAnimationFrame(update);
}

function animateCounterInt(el, target, duration = 800) {
  const start = parseInt(el.textContent.replace(/[^0-9]/g, '')) || 0;
  if (start === target) return;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (target - start) * ease);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

function pulseBadge(el) {
  if (!el) return;
  el.classList.remove('badge-pulse');
  void el.offsetWidth;
  el.classList.add('badge-pulse');
}

function bounceCartBadge() {
  const b = $('#cartBadge');
  if (b) { b.classList.remove('bounce'); void b.offsetWidth; b.classList.add('bounce'); }
}

// ─── Clock ───
function tickClock() {
  const d = new Date();
  const s = d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}) + ' • ' + d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const el1 = $('#adminClock'), el2 = $('#clock');
  if(el1) el1.textContent = s; if(el2) el2.textContent = s;
}

// ─── Theme ───
function initTheme() { const t = localStorage.getItem('apex_theme'); if(t) document.documentElement.setAttribute('data-theme', t); }
function toggleTheme() { const n = document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme',n); localStorage.setItem('apex_theme',n); }
function setAccent(c, el) {
  document.documentElement.style.setProperty('--accent', c);
  document.documentElement.style.setProperty('--accent-hover', c+'dd');
  document.documentElement.style.setProperty('--accent-light', c+'1f');
  document.documentElement.style.setProperty('--accent-glow', c+'40');
  $$('.color-dot').forEach(d => d.classList.remove('active'));
  if(el) el.classList.add('active');
}

// ═══════════════ LOGIN ═══════════════
function switchLoginTab(role) {
  $$('.login-tab').forEach(t => t.classList.toggle('active', t.dataset.role===role));
  const forms = { customer: '#customerForm', staff: '#staffForm', admin: '#adminForm' };
  Object.values(forms).forEach(f => { const el = $(f); if(el) { el.style.opacity = '0'; el.style.transform = 'translateY(6px)'; } });
  setTimeout(() => {
    Object.entries(forms).forEach(([r, f]) => { const el = $(f); if(el) el.style.display = r===role ? 'flex' : 'none'; });
    const active = $(forms[role]);
    if(active) { void active.offsetWidth; active.style.opacity = '1'; active.style.transform = 'translateY(0)'; }
  }, 150);
  $$('.login-error').forEach(e => e.remove());
}
function loginErr(form, msg) {
  const d = document.createElement('div'); d.className='login-error'; d.textContent=msg;
  form.prepend(d);
}
function handleLogin(e, role) {
  e.preventDefault(); $$('.login-error').forEach(x => x.remove());
  if(role==='customer') {
    const n = $('#customerName').value.trim();
    if(!n) { loginErr($('#customerForm'),'Enter your name'); return; }
    S.user = { role:'customer', name:n };
    enterPOS(n);
  }
  if(role==='staff') {
    const em = $('#staffEmail').value.trim(), pw = $('#staffPassword').value;
    if(!em) { loginErr($('#staffForm'),'Email required'); return; }
    if(!/^[a-zA-Z@.]+$/.test(em)) { loginErr($('#staffForm'),'Letters, @ and . only'); return; }
    if(!pw) { loginErr($('#staffForm'),'Password required'); return; }
    const s = S.db.staff.find(s => s.email===em);
    S.user = { role:'staff', name: s ? s.name : em.split('@')[0] };
    enterPOS(S.user.name);
  }
  if(role==='admin') {
    if($('#adminEmail').value.trim()!=='Admin123' || $('#adminPassword').value!=='Admin123') {
      loginErr($('#adminForm'),'Invalid credentials'); return;
    }
    S.user = { role:'admin', name:'Admin' };
    enterAdmin();
  }
}
function handleLogout() {
  S.user = null; S.cart = []; S.discount = 0;
  const loginCard = $('.login-card');
  if (loginCard) loginCard.style.animation = 'none';
  $('#loginScreen').style.display='flex'; $('#adminLayout').style.display='none'; $('#posWrapper').style.display='none';
  if (loginCard) { void loginCard.offsetWidth; loginCard.style.animation = ''; }
  $$('.login-error').forEach(e=>e.remove());
  ['customerName','staffEmail','staffPassword','adminEmail','adminPassword'].forEach(id => { const el=$('#'+id); if(el) el.value=''; });
}
function enterAdmin() {
  $('#loginScreen').style.display='none'; $('#posWrapper').style.display='none'; $('#adminLayout').style.display='flex';
  $('#adminDisplayName').textContent = S.user.name;
  goTo('dashboard');
}
function enterPOS(name) {
  $('#loginScreen').style.display='none'; $('#adminLayout').style.display='none'; $('#posWrapper').style.display='block';
  $('#posAvatar').textContent = initials(name);
  $('#posUsername').textContent = name;
  renderPOS();
}

// ═══════════════ NAVIGATION ═══════════════
function goTo(page) {
  S.page = page;
  $$('.sidebar-link').forEach(l => l.classList.toggle('active', l.dataset.page===page));
  $$('.admin-page').forEach(p => p.classList.remove('active'));
  const el = $('#pg-'+page); if(el) el.classList.add('active');
  const titles = {dashboard:'Dashboard',neworder:'New Order',orders:'Orders',tables:'Table Map',menu:'Menu Items',customers:'Customers',staff:'Staff',inventory:'Inventory',expenses:'Expenses',reports:'Reports',settings:'Settings'};
  const titleEl = $('#pageTitle');
  if(titleEl) { titleEl.style.opacity = '0'; setTimeout(() => { titleEl.textContent = titles[page]||page; titleEl.style.opacity = '1'; }, 100); }
  renderPage(page);
}
function toggleSidebar() { $('#adminSidebar').classList.toggle('collapsed'); }

function renderPage(page) {
  const r = {dashboard:renderDashboard,neworder:renderNewOrder,orders:renderOrders,tables:renderTables,menu:renderMenu,customers:renderCustomers,staff:renderStaff,inventory:renderInventory,expenses:renderExpenses,reports:renderReports,settings:renderSettings};
  if(r[page]) r[page]();
}

// ═══════════════ MODAL ═══════════════
function openModal(html) { $('#modalContainer').innerHTML = html; $('#modalOverlay').classList.add('active'); }
function closeModal() { $('#modalOverlay').classList.remove('active'); }

// ═══════════════ 01 DASHBOARD ═══════════════
function renderDashboard() {
  const orders = S.db.orders;
  const todayOrders = orders.filter(o => o.date === today());
  const rev = todayOrders.reduce((s,o) => s+o.total, 0);
  const totalOrders = orders.length;
  const menuCount = S.db.menu.length;
  const staffCount = S.db.staff.filter(s=>s.status==='active').length;
  const custCount = S.db.customers.length;

  // Revenue by day (last 7 days)
  const days = []; const dayLabels = [];
  for(let i=6;i>=0;i--) { const d=new Date(); d.setDate(d.getDate()-i); const ds=d.toLocaleDateString('en-US',{month:'short',day:'numeric'}); dayLabels.push(ds); days.push(orders.filter(o=>o.date===ds).reduce((s,o)=>s+o.total,0)); }
  const maxDay = Math.max(...days,1);

  // Orders by category
  const cats = {};
  orders.forEach(o => o.items.forEach(i => { const m=S.db.menu.find(x=>x.id===i.id); if(m){cats[m.category]=(cats[m.category]||0)+i.qty;} }));
  const catEntries = Object.entries(cats);
  const catColors = { Mains:'#f97316', Starters:'#6366f1', Desserts:'#f472b6', Drinks:'#c084fc', Sides:'#fb923c' };
  const totalCat = catEntries.reduce((s,[,v])=>s+v,0)||1;

  // Payment methods
  const methods = {};
  orders.forEach(o => { methods[o.method]=(methods[o.method]||0)+1; });
  const methodColors = { cash:'#f97316', card:'#6366f1', digital:'#c084fc' };

  let html = `
    <div class="stats-row">
      <div class="stat-card"><div class="stat-icon" style="background:var(--accent-light);color:var(--accent)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div><div class="stat-label">Today's Revenue</div><div class="stat-value">${fmt(rev)}</div></div><span class="stat-badge up">+12.5%</span></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--blue-light);color:var(--blue)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><div><div class="stat-label">Total Orders</div><div class="stat-value">${totalOrders}</div></div><span class="stat-badge up">+8.2%</span></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--orange-light);color:var(--orange)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/></svg></div><div><div class="stat-label">Menu Items</div><div class="stat-value">${menuCount}</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--pink-light);color:var(--pink)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div><div class="stat-label">Customers</div><div class="stat-value">${custCount}</div></div></div>
    </div>

    <div class="chart-grid">
      <div class="chart-card">
        <h3>Revenue (Last 7 Days)</h3>
        <div class="chart-bar">
          ${dayLabels.map((l,i) => `<div class="chart-bar-col"><div class="chart-bar-val">${fmt(days[i])}</div><div class="chart-bar-fill" style="height:${(days[i]/maxDay)*130}px;background:var(--accent)"></div><div class="chart-bar-label">${l}</div></div>`).join('')}
        </div>
      </div>

      <div class="chart-card">
        <h3>Orders by Category</h3>
        <div style="display:flex;align-items:center;gap:30px;">
          <div class="donut-chart" style="background:conic-gradient(${catEntries.map(([k],i)=>{const pct=(catEntries[i][1]/totalCat)*100;const offset=catEntries.slice(0,i).reduce((s,[,v])=>s+v/totalCat*100,0);return `${catColors[k]||'#666'} ${offset}% ${offset+pct}%`;}).join(',')})">
            <div class="donut-center"><span class="val">${totalCat}</span><span class="lbl">Items</span></div>
          </div>
          <div class="chart-legend">
            ${catEntries.map(([k,v]) => `<div class="legend-item"><div class="legend-dot" style="background:${catColors[k]||'#666'}"></div>${k} (${v})</div>`).join('')}
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>Payment Methods</h3>
        <div style="display:flex;align-items:center;gap:30px;">
          ${(() => {
            const totalM = Object.values(methods).reduce((s,v)=>s+v,0)||1;
            return `<div class="donut-chart" style="background:conic-gradient(${Object.entries(methods).map(([k,v],i)=>{const pct=(v/totalM)*100;const offset=Object.entries(methods).slice(0,i).reduce((s,[,v2])=>s+v2/totalM*100,0);return `${methodColors[k]||'#666'} ${offset}% ${offset+pct}%`;}).join(',')})">
              <div class="donut-center"><span class="val">${totalM}</span><span class="lbl">Payments</span></div>
            </div>
            <div class="chart-legend">
              ${Object.entries(methods).map(([k,v]) => `<div class="legend-item"><div class="legend-dot" style="background:${methodColors[k]||'#666'}"></div>${k.charAt(0).toUpperCase()+k.slice(1)} (${v})</div>`).join('')}
            </div>`;
          })()}
        </div>
      </div>

      <div class="chart-card">
        <h3>Staff Overview</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${S.db.staff.slice(0,5).map(s => `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:var(--bg-3);border-radius:var(--radius-sm);">
            <div style="display:flex;align-items:center;gap:10px;">
              <div class="entity-avatar" style="width:36px;height:36px;font-size:.7rem;background:${s.role==='manager'?'var(--blue-light);color:var(--blue)':s.role==='chef'?'var(--orange-light);color:var(--orange)':'var(--accent-light);color:var(--accent)'}">${initials(s.name)}</div>
              <div><div style="font-weight:600;font-size:.85rem">${s.name}</div><div style="font-size:.72rem;color:var(--tx-4)">${s.role}</div></div>
            </div>
            <span class="badge ${s.status==='active'?'badge-green':'badge-yellow'}">${s.status}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="chart-card" style="margin-bottom:16px">
      <h3>Recent Orders</h3>
      ${orders.length === 0 ? '<div class="empty"><p>No orders yet</p></div>' : `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Order</th><th>Table</th><th>Items</th><th>Method</th><th>Total</th><th>Status</th></tr></thead><tbody>
      ${orders.slice(-8).reverse().map(o => `<tr><td style="font-weight:600;color:var(--accent)">${o.id}</td><td>Table ${o.tableId||'-'}</td><td>${o.items.length} item${o.items.length>1?'s':''}</td><td><span class="badge badge-blue">${o.method}</span></td><td style="font-weight:700">${fmt(o.total)}</td><td><span class="badge ${o.status==='completed'?'badge-green':o.status==='preparing'?'badge-yellow':'badge-blue'}">${o.status}</span></td></tr>`).join('')}
      </tbody></table></div>`}
    </div>`;

  $('#pg-dashboard').innerHTML = html;
}

// ═══════════════ 02 NEW ORDER ═══════════════
function renderNewOrder() {
  const cats = ['All', ...new Set(S.db.menu.map(m=>m.category))];
  let items = S.db.menu.filter(m => m.available);
  if(S.posCategory!=='all') items = items.filter(m => m.category===S.posCategory);
  if(S.posSearch) { const q=S.posSearch.toLowerCase(); items = items.filter(m => m.name.toLowerCase().includes(q)); }

  const freeTables = S.db.tables.filter(t=>t.status==='free');

  let html = `
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="search-bar"><svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="posSearchInput" placeholder="Search menu..." value="${S.posSearch}" oninput="S.posSearch=this.value;renderNewOrder()"/></div>
        <select class="filter-select" onchange="S.posCategory=this.value==='All'?'all':this.value;renderNewOrder()">
          ${cats.map(c => `<option value="${c}" ${S.posCategory===c||(c==='All'&&S.posCategory==='all')?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="font-size:.82rem;color:var(--tx-2)">Table:</span>
        <select class="filter-select" id="posTableSelect" onchange="S.posTable=this.value?parseInt(this.value):null" style="width:140px">
          <option value="">No table</option>
          ${freeTables.map(t => `<option value="${t.id}" ${S.posTable===t.id?'selected':''}>Table ${t.id} (${t.seats} seats)</option>`).join('')}
        </select>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 360px;gap:20px;height:calc(100vh - 180px);">
      <div style="overflow-y:auto;">
        <div class="product-grid">
          ${items.map(m => `<div class="product-card ${m.available?'':'sold-out'}" onclick="posAddItem(${m.id})">
            <div class="product-add-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
            <div class="product-img">${m.emoji}</div>
            <div class="product-info"><div class="product-name">${m.name}</div><div class="product-price">${fmt(m.price)}</div><div class="product-tag">${m.category} • ${m.prepTime}min</div></div>
          </div>`).join('')}
        </div>
      </div>
      <div style="background:var(--bg-1);border:1px solid var(--bd-1);border-radius:var(--radius-md);display:flex;flex-direction:column;overflow:hidden;">
        <div style="padding:16px;border-bottom:1px solid var(--bd-1);display:flex;justify-content:space-between;align-items:center;">
          <h3 style="font-size:1rem;font-weight:700;">Order Summary</h3>
          <span class="cart-badge" style="background:var(--accent);color:#fff;padding:2px 10px;border-radius:12px;font-size:.75rem;font-weight:700">${S.cart.reduce((s,i)=>s+i.qty,0)}</span>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;" id="posCartItems">
          ${S.cart.length===0 ? '<div class="empty"><p>No items</p><span>Select menu items</span></div>' : S.cart.map(ci => {
            const m = S.db.menu.find(x=>x.id===ci.id);
            return `<div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg-2);border:1px solid var(--bd-1);border-radius:var(--radius-sm);margin-bottom:8px;">
              <div style="font-size:1.3rem">${m.emoji}</div>
              <div style="flex:1"><div style="font-weight:600;font-size:.82rem">${m.name}</div><div style="font-size:.78rem;color:var(--tx-2)">${fmt(m.price*ci.qty)}</div></div>
              <div style="display:flex;align-items:center;gap:4px;">
                <button class="qty-btn" onclick="posQty(${m.id},-1)" style="width:24px;height:24px;border-radius:4px;background:var(--bg-3);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--tx-2)">−</button>
                <span style="width:28px;text-align:center;font-weight:700;font-size:.85rem">${ci.qty}</span>
                <button class="qty-btn" onclick="posQty(${m.id},1)" style="width:24px;height:24px;border-radius:4px;background:var(--bg-3);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--tx-2)">+</button>
              </div>
            </div>`;
          }).join('')}
        </div>
        <div style="padding:16px;border-top:1px solid var(--bd-1);background:var(--bg-1);">
          <div style="display:flex;justify-content:space-between;padding:3px 0;font-size:.85rem;color:var(--tx-2)"><span>Subtotal</span><span id="posSub">${fmt(getSubtotal())}</span></div>
          <div style="display:flex;justify-content:space-between;padding:3px 0;font-size:.85rem;color:var(--tx-2)"><span>Tax (8.5%)</span><span id="posTax">${fmt(getSubtotal()*S.taxRate)}</span></div>
          <div style="display:flex;justify-content:space-between;padding:3px 0;font-size:.85rem;color:var(--tx-2)"><span>Discount</span><span id="posDisc" style="color:var(--accent)">${S.discount>0?'-'+fmt(S.discount):'$0.00'}</span></div>
          <div style="height:1px;background:var(--bd-1);margin:6px 0"></div>
          <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:1.05rem;font-weight:800"><span>Total</span><span id="posTotal">${fmt(getTotal())}</span></div>
          <div style="display:flex;gap:8px;margin-top:12px;">
            <button class="btn btn-outline" style="flex:1" onclick="posClear()">Clear</button>
            <button class="btn" style="flex:1;background:var(--accent);color:#fff;font-weight:700" onclick="posCheckout()">Pay ${fmt(getTotal())}</button>
          </div>
        </div>
      </div>
    </div>`;
  $('#pg-neworder').innerHTML = html;
}

function posAddItem(id) {
  const m = S.db.menu.find(x=>x.id===id); if(!m||!m.available) return;
  const ci = S.cart.find(x=>x.id===id);
  if(ci) ci.qty++; else S.cart.push({id,qty:1});
  toast(`${m.emoji} ${m.name} added`);
  bounceCartBadge();
  const cards = $$('.product-card');
  cards.forEach(c => { if (c.getAttribute('onclick')?.includes(`posAddItem(${id})`)) { c.classList.remove('flash'); void c.offsetWidth; c.classList.add('flash'); } });
  if($('#posWrapper')?.style.display==='block') renderCustomerCart();
  else renderNewOrder();
}
function posQty(id, d) {
  const ci = S.cart.find(x=>x.id===id); if(!ci) return;
  ci.qty += d;
  if(ci.qty<=0) S.cart = S.cart.filter(x=>x.id!==id);
  if($('#posWrapper')?.style.display==='block') renderCustomerCart();
  else renderNewOrder();
}
function posClear() { S.cart=[]; S.discount=0; renderNewOrder(); }
function getSubtotal() { return S.cart.reduce((s,ci) => { const m=S.db.menu.find(x=>x.id===ci.id); return s+(m?m.price*ci.qty:0); },0); }
function getTotal() { const sub=getSubtotal(); const disc=S.discount>0?(S.discountType==='percent'?sub*S.discount/100:S.discount):0; const taxable=sub-disc; return taxable+(taxable*S.taxRate); }
function posCheckout() {
  if(S.cart.length===0) { toast('Cart is empty','error'); return; }
  openModal(`
    <div class="modal-header"><h2>Complete Payment</h2><button class="modal-close" onclick="closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
    <div class="modal-body">
      <div class="pay-grid">
        <div class="pay-left">
          <div class="pay-total"><span class="lbl">Amount Due</span><span class="amt" id="payAmt">${fmt(getTotal())}</span></div>
          <span class="section-lbl">Payment Method</span>
          <div class="method-grid">
            <button class="method-btn active" data-m="cash" onclick="payMethod('cash',this)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="12" cy="12" r="3"/></svg>Cash</button>
            <button class="method-btn" data-m="card" onclick="payMethod('card',this)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>Card</button>
            <button class="method-btn" data-m="digital" onclick="payMethod('digital',this)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="3"/><circle cx="12" cy="18" r="1"/></svg>Wallet</button>
          </div>
          <div id="payCashSection" style="margin-top:16px;">
            <span class="section-lbl">Quick Cash</span>
            <div class="cash-btns">
              ${[5,10,20,50,100].map(a=>`<button class="cash-btn" onclick="payCash(${a})">$${a}</button>`).join('')}
              <button class="cash-btn" onclick="payCash('exact')">Exact</button>
            </div>
            <div class="cash-input-row"><label>Tendered</label><div class="cash-wrap"><span class="currency-sign">$</span><input type="text" id="payTendered" placeholder="0.00" oninput="payChange()"/></div></div>
            <div class="change-box"><span>Change Due</span><span class="change-val" id="payChange">$0.00</span></div>
          </div>
        </div>
        <div class="pay-right">
          <span class="section-lbl">Keypad</span>
          <div class="keypad">
            ${[1,2,3,4,5,6,7,8,9].map(k=>`<button class="key" onclick="payKey('${k}')">${k}</button>`).join('')}
            <button class="key" onclick="payKey('0')">0</button>
            <button class="key" onclick="payKey('.')">.</button>
            <button class="key key-del" onclick="payKey('del')"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg></button>
          </div>
          <button class="btn-complete" onclick="payComplete()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Complete Transaction</button>
        </div>
      </div>
    </div>`);
}
let _payMethod = 'cash';
function payMethod(m, el) {
  _payMethod = m;
  $$('.method-btn').forEach(b=>b.classList.toggle('active',b.dataset.m===m));
  const cs = $('#payCashSection'); if(cs) cs.style.display = m==='cash'?'block':'none';
}
function payCash(a) { const i=$('#payTendered'); if(i){i.value=a==='exact'?getTotal().toFixed(2):a.toFixed(2); payChange();} }
function payChange() { const t=parseFloat($('#payTendered')?.value)||0; const due=getTotal(); const ch=t-due; const el=$('#payChange'); if(el){el.textContent=fmt(Math.abs(ch)); el.className='change-val '+(ch>=0?'pos':'neg');} }
function payKey(v) { const i=$('#payTendered'); if(!i)return; if(v==='del'){i.value=i.value.slice(0,-1);} else if(v==='.'){if(!i.value.includes('.')){i.value=i.value||'0';i.value+='.';}} else {const p=i.value.split('.');if(p.length===2&&p[1].length>=2)return;if(i.value.length>10)return;i.value+=v;} payChange(); }
function payComplete() {
  const total = getTotal();
  if(_payMethod==='cash') { const t=parseFloat($('#payTendered')?.value)||0; if(t<total){toast('Insufficient amount','error');return;} }
  // Create order
  const oid = uid('orders');
  const order = {
    id: oid, tableId: S.posTable, items: [...S.cart], subtotal: getSubtotal(),
    discount: S.discount, discountType: S.discountType, total,
    method: _payMethod, status:'completed', cashier: S.user?.name||'System',
    date: today(), time: now()
  };
  S.db.orders.push(order);
  // Update table
  if(S.posTable) { const tbl=S.db.tables.find(t=>t.id===S.posTable); if(tbl){tbl.status='occupied';tbl.orderId=oid;tbl.since=now();} }
  // Update customer loyalty
  if(S.cart.length>0) {
    const cust = S.db.customers[0]; // Assign to first customer for demo
    if(cust) { cust.visits++; cust.spent+=total; cust.loyalty+=Math.floor(total); }
  }
  saveAll();
  S.cart=[]; S.discount=0; S.posTable=null;
  closeModal();
  showReceipt(order);
}
function showReceipt(o) {
  openModal(`
    <div class="receipt-modal" style="width:min(400px,95vw);margin:0 auto;">
      <div class="receipt">
        <div class="receipt-header"><div class="receipt-brand">${S.settings.storeName}</div><p>${S.settings.address}<br/>Tel: ${S.settings.phone}</p></div>
        <div class="receipt-divider"></div>
        <div class="receipt-meta"><span>Order #${o.id}</span><span>${o.date} ${o.time}</span><span>Cashier: ${o.cashier}</span><span>Table: ${o.tableId||'N/A'}</span></div>
        <div class="receipt-divider"></div>
        ${o.items.map(ci=>{const m=S.db.menu.find(x=>x.id===ci.id);return `<div class="ri-row"><span>${m?m.emoji:'?'} ${m?m.name:'Unknown'} x${ci.qty}</span><span>${fmt(m?m.price*ci.qty:0)}</span></div>`;}).join('')}
        <div class="receipt-divider"></div>
        <div class="rt-row"><span>Subtotal</span><span>${fmt(o.subtotal)}</span></div>
        ${o.discount>0?`<div class="rt-row"><span>Discount</span><span>-${fmt(o.discount)}</span></div>`:''}
        <div class="rt-row"><span>Tax</span><span>${fmt(o.subtotal*S.taxRate)}</span></div>
        <div class="rt-row rt-total"><span>TOTAL</span><span>${fmt(o.total)}</span></div>
        <div class="receipt-divider"></div>
        <div class="receipt-footer"><p>${S.settings.receiptNote}</p><div class="barcode-lines"></div></div>
      </div>
      <div class="receipt-actions">
        <button class="btn-print" onclick="window.print()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>Print</button>
        <button class="btn-new" onclick="closeModal();if($('#posWrapper')?.style.display==='block'){renderPOS();}else{renderNewOrder();}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>New Order</button>
      </div>
    </div>`);
}

// ═══════════════ 03 ORDERS ═══════════════
function renderOrders() {
  const orders = S.db.orders;
  let html = `<div class="toolbar"><div class="toolbar-left">
    <select class="filter-select" id="orderFilter" onchange="filterOrders()"><option value="all">All Orders</option><option value="completed">Completed</option><option value="preparing">Preparing</option><option value="pending">Pending</option></select>
    <div class="search-bar"><svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="orderSearch" placeholder="Search orders..." oninput="filterOrders()"/></div>
  </div><div style="font-size:.85rem;color:var(--tx-2)">${orders.length} total orders</div></div>
  <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Order ID</th><th>Date & Time</th><th>Table</th><th>Items</th><th>Cashier</th><th>Method</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead><tbody id="orderTbody"></tbody></table></div>`;
  $('#pg-orders').innerHTML = html;
  filterOrders();
}
function filterOrders() {
  let orders = S.db.orders;
  const f = $('#orderFilter')?.value||'all';
  const q = ($('#orderSearch')?.value||'').toLowerCase();
  if(f!=='all') orders = orders.filter(o=>o.status===f);
  if(q) orders = orders.filter(o => String(o.id).includes(q) || (o.cashier||'').toLowerCase().includes(q));
  const tb = $('#orderTbody'); if(!tb) return;
  if(orders.length===0) { tb.innerHTML = '<tr><td colspan="9" class="empty">No orders found</td></tr>'; return; }
  tb.innerHTML = orders.map(o => `<tr>
    <td style="font-weight:600;color:var(--accent)">#${o.id}</td>
    <td>${o.date} ${o.time}</td>
    <td>${o.tableId?'Table '+o.tableId:'-'}</td>
    <td>${o.items.length} item${o.items.length>1?'s':''}</td>
    <td>${o.cashier||'-'}</td>
    <td><span class="badge badge-blue">${o.method}</span></td>
    <td style="font-weight:700">${fmt(o.total)}</td>
    <td><span class="badge ${o.status==='completed'?'badge-green':o.status==='preparing'?'badge-yellow':'badge-blue'}">${o.status}</span></td>
    <td><div class="tbl-actions"><button class="tbl-btn" onclick="toggleOrderStatus(${o.id})" title="Toggle status"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></button></div></td>
  </tr>`).join('');
}
function toggleOrderStatus(id) {
  const o = S.db.orders.find(x=>x.id===id); if(!o) return;
  const cycle = ['pending','preparing','completed'];
  o.status = cycle[(cycle.indexOf(o.status)+1)%3];
  saveAll('orders'); renderOrders();
}

// ═══════════════ 04 TABLE MAP ═══════════════
function renderTables() {
  const statusColors = { free:'badge-green', occupied:'badge-red', reserved:'badge-yellow', cleaning:'badge-gray' };
  let html = `<div class="toolbar"><div class="toolbar-left">
    <div class="legend-item" style="margin-right:16px"><div class="legend-dot" style="background:var(--accent)"></div>Free</div>
    <div class="legend-item" style="margin-right:16px"><div class="legend-dot" style="background:var(--danger)"></div>Occupied</div>
    <div class="legend-item" style="margin-right:16px"><div class="legend-dot" style="background:var(--orange)"></div>Reserved</div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--tx-4)"></div>Cleaning</div>
  </div></div>
  <div class="table-map">
    ${S.db.tables.map(t => `<div class="table-tile ${t.status}" onclick="cycleTableStatus(${t.id})">
      <div class="table-tile-num">${t.id}</div>
      <div class="table-tile-seats">${t.seats} seats • ${t.zone}</div>
      <span class="table-tile-status badge ${statusColors[t.status]}">${t.status}</span>
      ${t.guest?`<div style="font-size:.75rem;color:var(--tx-3);margin-top:6px">${t.guest} @ ${t.at}</div>`:''}
      ${t.orderId?`<div style="font-size:.75rem;color:var(--accent);margin-top:4px">Order #${t.orderId}</div>`:''}
    </div>`).join('')}
  </div>`;
  $('#pg-tables').innerHTML = html;
}
function cycleTableStatus(id) {
  const t = S.db.tables.find(x=>x.id===id); if(!t) return;
  const cycle = ['free','occupied','reserved','cleaning'];
  const next = cycle[(cycle.indexOf(t.status)+1)%4];
  t.status = next;
  if(next==='free') { delete t.orderId; delete t.since; delete t.guest; delete t.at; }
  saveAll('tables'); renderTables();
  toast(`Table ${id} → ${next}`);
}

// ═══════════════ 05 MENU ITEMS ═══════════════
function renderMenu() {
  let items = S.db.menu;
  const q = ($('#menuSearch')?.value||'').toLowerCase();
  const cat = $('#menuCatFilter')?.value||'all';
  if(cat!=='all') items = items.filter(m=>m.category===cat);
  if(q) items = items.filter(m=>m.name.toLowerCase().includes(q));

  let html = `<div class="toolbar"><div class="toolbar-left">
    <div class="search-bar"><svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="menuSearch" placeholder="Search menu..." value="${q}" oninput="renderMenu()"/></div>
    <select class="filter-select" id="menuCatFilter" onchange="renderMenu()">
      <option value="all" ${cat==='all'?'selected':''}>All Categories</option>
      ${[...new Set(S.db.menu.map(m=>m.category))].map(c=>`<option value="${c}" ${cat===c?'selected':''}>${c}</option>`).join('')}
    </select>
  </div><button class="btn btn-primary" onclick="openMenuModal()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>Add Item</button></div>
  <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Category</th><th>Price</th><th>Prep Time</th><th>Status</th><th>Actions</th></tr></thead><tbody>
  ${items.map(m => `<tr>
    <td><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1.3rem">${m.emoji}</span><span style="font-weight:600">${m.name}</span></div></td>
    <td><span class="badge badge-gray">${m.category}</span></td>
    <td style="font-weight:700">${fmt(m.price)}</td>
    <td>${m.prepTime} min</td>
    <td><span class="badge ${m.available?'badge-green':'badge-red'}">${m.available?'Available':'Sold Out'}</span></td>
    <td><div class="tbl-actions">
      <button class="tbl-btn" onclick="toggleAvail(${m.id})" title="Toggle availability"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="16 8 10 16 7 13"/></svg></button>
      <button class="tbl-btn" onclick="openMenuModal(${m.id})" title="Edit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
      <button class="tbl-btn danger" onclick="delMenu(${m.id})" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
    </div></td>
  </tr>`).join('')}
  </tbody></table></div>`;
  $('#pg-menu').innerHTML = html;
}
function toggleAvail(id) { const m=S.db.menu.find(x=>x.id===id); if(m){m.available=!m.available; saveAll('menu'); renderMenu();} }
function openMenuModal(id) {
  const m = id ? S.db.menu.find(x=>x.id===id) : null;
  openModal(`<div class="modal-header"><h2>${m?'Edit':'Add'} Menu Item</h2><button class="modal-close" onclick="closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  <div class="modal-body"><form onsubmit="saveMenuItem(event,${id||'null'})">
    <div class="form-row">
      <div class="form-group"><label>Name</label><input type="text" id="miName" value="${m?m.name:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
      <div class="form-group"><label>Emoji</label><input type="text" id="miEmoji" value="${m?m.emoji:'🍽️'}" maxlength="4" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Price</label><input type="number" id="miPrice" value="${m?m.price:''}" step="0.01" min="0" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
      <div class="form-group"><label>Prep Time (min)</label><input type="number" id="miPrep" value="${m?m.prepTime:10}" min="1" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
    </div>
    <div class="form-group"><label>Category</label><select id="miCat" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none">
      ${['Starters','Mains','Sides','Desserts','Drinks'].map(c=>`<option ${m&&m.category===c?'selected':''}>${c}</option>`).join('')}
    </select></div>
    <div class="form-actions"><button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">${m?'Update':'Add'} Item</button></div>
  </form></div>`);
}
function saveMenuItem(e, id) {
  e.preventDefault();
  const data = { name:$('#miName').value.trim(), emoji:$('#miEmoji').value.trim()||'🍽️', price:parseFloat($('#miPrice').value), category:$('#miCat').value, prepTime:parseInt($('#miPrep').value), available:true };
  if(id) { const m=S.db.menu.find(x=>x.id===id); if(m) Object.assign(m,data); toast('Item updated'); }
  else { data.id=uid('menu'); S.db.menu.push(data); toast('Item added'); }
  saveAll('menu'); closeModal(); renderMenu();
}
function delMenu(id) { if(!confirm('Delete this item?'))return; S.db.menu=S.db.menu.filter(m=>m.id!==id); saveAll('menu'); renderMenu(); toast('Item deleted','info'); }

// ═══════════════ 06 CUSTOMERS ═══════════════
function renderCustomers() {
  let html = `<div class="toolbar"><div class="toolbar-left">
    <div class="search-bar"><svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="custSearch" placeholder="Search customers..." oninput="filterCustomers()"/></div>
  </div><button class="btn btn-primary" onclick="openCustModal()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>Add Customer</button></div>
  <div class="card-grid" id="custGrid"></div>`;
  $('#pg-customers').innerHTML = html;
  filterCustomers();
}
function filterCustomers() {
  let c = S.db.customers;
  const q = ($('#custSearch')?.value||'').toLowerCase();
  if(q) c = c.filter(x=>x.name.toLowerCase().includes(q)||x.email.toLowerCase().includes(q));
  const g = $('#custGrid'); if(!g) return;
  g.innerHTML = c.map(x => `<div class="entity-card">
    <div class="entity-top"><div class="entity-avatar" style="background:var(--purple-light);color:var(--purple)">${initials(x.name)}</div><div><div class="entity-name">${x.name}</div><div class="entity-sub">${x.email}</div></div></div>
    <div class="entity-meta">
      <div class="entity-meta-item"><strong>${x.visits}</strong> visits</div>
      <div class="entity-meta-item"><strong>${fmt(x.spent)}</strong> spent</div>
      <div class="entity-meta-item"><strong>${x.loyalty}</strong> pts</div>
    </div>
    <div class="entity-actions"><button class="btn btn-outline btn-sm" onclick="openCustModal(${x.id})">Edit</button><button class="btn btn-danger btn-sm" onclick="delCust(${x.id})">Remove</button></div>
  </div>`).join('');
}
function openCustModal(id) {
  const c = id ? S.db.customers.find(x=>x.id===id) : null;
  openModal(`<div class="modal-header"><h2>${c?'Edit':'Add'} Customer</h2><button class="modal-close" onclick="closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  <div class="modal-body"><form onsubmit="saveCust(event,${id||'null'})">
    <div class="form-row"><div class="form-group"><label>Name</label><input type="text" id="cuName" value="${c?c.name:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div><div class="form-group"><label>Email</label><input type="email" id="cuEmail" value="${c?c.email:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-group"><label>Phone</label><input type="text" id="cuPhone" value="${c?c.phone:''}" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
    <div class="form-actions"><button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">${c?'Update':'Add'}</button></div>
  </form></div>`);
}
function saveCust(e, id) {
  e.preventDefault(); const d = { name:$('#cuName').value.trim(), email:$('#cuEmail').value.trim(), phone:$('#cuPhone').value.trim() };
  if(id) { const c=S.db.customers.find(x=>x.id===id); if(c) Object.assign(c,d); toast('Customer updated'); }
  else { d.id=uid('customers'); d.visits=0; d.spent=0; d.loyalty=0; d.joined=today(); S.db.customers.push(d); toast('Customer added'); }
  saveAll('customers'); closeModal(); renderCustomers();
}
function delCust(id) { if(!confirm('Remove customer?'))return; S.db.customers=S.db.customers.filter(c=>c.id!==id); saveAll('customers'); renderCustomers(); toast('Customer removed','info'); }

// ═══════════════ 07 STAFF ═══════════════
function renderStaff() {
  let html = `<div class="toolbar"><div class="toolbar-left">
    <select class="filter-select" id="staffFilter" onchange="filterStaff()"><option value="all">All Roles</option><option value="manager">Managers</option><option value="chef">Chefs</option><option value="cashier">Cashiers</option><option value="waiter">Waiters</option></select>
  </div><button class="btn btn-primary" onclick="openStaffModal()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>Add Staff</button></div>
  <div class="card-grid" id="staffGrid"></div>`;
  $('#pg-staff').innerHTML = html;
  filterStaff();
}
function filterStaff() {
  let s = S.db.staff;
  const f = $('#staffFilter')?.value||'all';
  if(f!=='all') s = s.filter(x=>x.role===f);
  const g = $('#staffGrid'); if(!g) return;
  g.innerHTML = s.map(x => {
    const roleColor = x.role==='manager'?'badge-blue':x.role==='chef'?'badge-yellow':x.role==='cashier'?'badge-green':'badge-purple';
    return `<div class="entity-card">
      <div class="entity-top"><div class="entity-avatar" style="background:${x.role==='manager'?'var(--blue-light);color:var(--blue)':x.role==='chef'?'var(--orange-light);color:var(--orange)':'var(--accent-light);color:var(--accent)'}">${initials(x.name)}</div><div><div class="entity-name">${x.name}</div><div class="entity-sub">${x.email}</div></div></div>
      <div style="display:flex;gap:8px"><span class="badge ${roleColor}">${x.role}</span><span class="badge ${x.status==='active'?'badge-green':'badge-yellow'}">${x.status}</span></div>
      <div class="entity-meta"><div class="entity-meta-item">Salary: <strong>${fmt(x.salary)}/mo</strong></div><div class="entity-meta-item">Phone: <strong>${x.phone}</strong></div></div>
      <div class="entity-actions"><button class="btn btn-outline btn-sm" onclick="openStaffModal(${x.id})">Edit</button><button class="btn btn-danger btn-sm" onclick="delStaff(${x.id})">Remove</button></div>
    </div>`;
  }).join('');
}
function openStaffModal(id) {
  const s = id ? S.db.staff.find(x=>x.id===id) : null;
  openModal(`<div class="modal-header"><h2>${s?'Edit':'Add'} Staff</h2><button class="modal-close" onclick="closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  <div class="modal-body"><form onsubmit="saveStaff(event,${id||'null'})">
    <div class="form-row"><div class="form-group"><label>Name</label><input type="text" id="stName" value="${s?s.name:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div><div class="form-group"><label>Email</label><input type="text" id="stEmail" value="${s?s.email:''}" required oninput="this.value=this.value.replace(/[^a-zA-Z@.]/g,'')" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-row"><div class="form-group"><label>Role</label><select id="stRole" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"><option ${s&&s.role==='manager'?'selected':''}>manager</option><option ${s&&s.role==='chef'?'selected':''}>chef</option><option ${s&&s.role==='cashier'?'selected':''}>cashier</option><option ${s&&s.role==='waiter'?'selected':''}>waiter</option></select></div><div class="form-group"><label>Salary</label><input type="number" id="stSalary" value="${s?s.salary:2800}" min="0" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-group"><label>Phone</label><input type="text" id="stPhone" value="${s?s.phone:''}" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
    <div class="form-actions"><button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">${s?'Update':'Add'}</button></div>
  </form></div>`);
}
function saveStaff(e, id) {
  e.preventDefault(); const d = { name:$('#stName').value.trim(), email:$('#stEmail').value.trim(), role:$('#stRole').value, salary:parseInt($('#stSalary').value), phone:$('#stPhone').value.trim() };
  if(id) { const s=S.db.staff.find(x=>x.id===id); if(s) Object.assign(s,d); toast('Staff updated'); }
  else { d.id=uid('staff'); d.status='active'; d.joined=today(); S.db.staff.push(d); toast('Staff added'); }
  saveAll('staff'); closeModal(); renderStaff();
}
function delStaff(id) { if(!confirm('Remove staff member?'))return; S.db.staff=S.db.staff.filter(s=>s.id!==id); saveAll('staff'); renderStaff(); toast('Staff removed','info'); }

// ═══════════════ 08 INVENTORY ═══════════════
function renderInventory() {
  let items = S.db.inventory;
  const q = ($('#invSearch')?.value||'').toLowerCase();
  if(q) items = items.filter(x=>x.name.toLowerCase().includes(q)||x.supplier.toLowerCase().includes(q));
  let html = `<div class="toolbar"><div class="toolbar-left">
    <div class="search-bar"><svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="invSearch" placeholder="Search inventory..." value="${q}" oninput="renderInventory()"/></div>
  </div><button class="btn btn-primary" onclick="openInvModal()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>Add Item</button></div>
  <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Stock</th><th>Level</th><th>Min Stock</th><th>Unit Cost</th><th>Supplier</th><th>Status</th><th>Actions</th></tr></thead><tbody>
  ${items.map(x => {
    const pct = Math.min(100, (x.stock/x.minStock)*100);
    const low = x.stock <= x.minStock;
    return `<tr>
      <td style="font-weight:600">${x.name}</td>
      <td>${x.stock} ${x.unit}</td>
      <td><div class="inv-bar"><div class="inv-track"><div class="inv-fill" style="width:${pct}%;background:${low?'var(--danger)':pct<60?'var(--orange)':'var(--accent)'}"></div></div><span class="inv-pct" style="color:${low?'var(--danger)':'var(--tx-3)'}">${Math.round(pct)}%</span></div></td>
      <td>${x.minStock} ${x.unit}</td>
      <td>${fmt(x.cost)}</td>
      <td style="color:var(--tx-2)">${x.supplier}</td>
      <td><span class="badge ${low?'badge-red':'badge-green'}">${low?'Low Stock':'OK'}</span></td>
      <td><div class="tbl-actions">
        <button class="tbl-btn" onclick="openInvModal(${x.id})" title="Edit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
        <button class="tbl-btn danger" onclick="delInv(${x.id})" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
      </div></td>
    </tr>`;}).join('')}
  </tbody></table></div>`;
  $('#pg-inventory').innerHTML = html;
}
function openInvModal(id) {
  const x = id ? S.db.inventory.find(i=>i.id===id) : null;
  openModal(`<div class="modal-header"><h2>${x?'Edit':'Add'} Inventory Item</h2><button class="modal-close" onclick="closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  <div class="modal-body"><form onsubmit="saveInv(event,${id||'null'})">
    <div class="form-row"><div class="form-group"><label>Name</label><input type="text" id="ivName" value="${x?x.name:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div><div class="form-group"><label>Unit</label><input type="text" id="ivUnit" value="${x?x.unit:'kg'}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-row"><div class="form-group"><label>Stock</label><input type="number" id="ivStock" value="${x?x.stock:0}" min="0" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div><div class="form-group"><label>Min Stock</label><input type="number" id="ivMin" value="${x?x.minStock:5}" min="0" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-row"><div class="form-group"><label>Unit Cost</label><input type="number" id="ivCost" value="${x?x.cost:0}" step="0.01" min="0" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div><div class="form-group"><label>Supplier</label><input type="text" id="ivSupp" value="${x?x.supplier:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-actions"><button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">${x?'Update':'Add'}</button></div>
  </form></div>`);
}
function saveInv(e, id) {
  e.preventDefault(); const d = { name:$('#ivName').value.trim(), unit:$('#ivUnit').value.trim(), stock:parseInt($('#ivStock').value), minStock:parseInt($('#ivMin').value), cost:parseFloat($('#ivCost').value), supplier:$('#ivSupp').value.trim() };
  if(id) { const x=S.db.inventory.find(i=>i.id===id); if(x) Object.assign(x,d); toast('Inventory updated'); }
  else { d.id=uid('inventory'); S.db.inventory.push(d); toast('Inventory item added'); }
  saveAll('inventory'); closeModal(); renderInventory();
}
function delInv(id) { if(!confirm('Delete item?'))return; S.db.inventory=S.db.inventory.filter(i=>i.id!==id); saveAll('inventory'); renderInventory(); toast('Item deleted','info'); }

// ═══════════════ 09 EXPENSES ═══════════════
function renderExpenses() {
  let exps = S.db.expenses;
  const q = ($('#expSearch')?.value||'').toLowerCase();
  if(q) exps = exps.filter(x=>x.description.toLowerCase().includes(q)||x.category.toLowerCase().includes(q));
  const totalExp = exps.reduce((s,x)=>s+x.amount,0);
  const byCat = {};
  exps.forEach(x => { byCat[x.category]=(byCat[x.category]||0)+x.amount; });

  let html = `<div class="toolbar"><div class="toolbar-left">
    <div class="search-bar"><svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="expSearch" placeholder="Search expenses..." value="${q}" oninput="renderExpenses()"/></div>
  </div><button class="btn btn-primary" onclick="openExpModal()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>Add Expense</button></div>
  <div class="stats-row" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">
    ${Object.entries(byCat).map(([k,v]) => `<div class="stat-card"><div><div class="stat-label">${k}</div><div class="stat-value" style="font-size:1.2rem">${fmt(v)}</div></div></div>`).join('')}
    <div class="stat-card" style="border-color:var(--accent)"><div><div class="stat-label">Total Expenses</div><div class="stat-value" style="font-size:1.3rem;color:var(--danger)">${fmt(totalExp)}</div></div></div>
  </div>
  <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Date</th><th>Category</th><th>Description</th><th>Amount</th><th>Actions</th></tr></thead><tbody>
  ${exps.map(x => `<tr>
    <td>${x.date}</td>
    <td><span class="badge badge-blue">${x.category}</span></td>
    <td>${x.description}</td>
    <td style="font-weight:700;color:var(--danger)">${fmt(x.amount)}</td>
    <td><div class="tbl-actions"><button class="tbl-btn" onclick="openExpModal(${x.id})" title="Edit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button><button class="tbl-btn danger" onclick="delExp(${x.id})" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div></td>
  </tr>`).join('')}
  </tbody></table></div>`;
  $('#pg-expenses').innerHTML = html;
}
function openExpModal(id) {
  const x = id ? S.db.expenses.find(e=>e.id===id) : null;
  openModal(`<div class="modal-header"><h2>${x?'Edit':'Add'} Expense</h2><button class="modal-close" onclick="closeModal()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  <div class="modal-body"><form onsubmit="saveExp(event,${id||'null'})">
    <div class="form-row"><div class="form-group"><label>Category</label><select id="exCat" style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none">
      ${['Salaries','Supplies','Utilities','Maintenance','Marketing','Other'].map(c=>`<option ${x&&x.category===c?'selected':''}>${c}</option>`).join('')}
    </select></div><div class="form-group"><label>Amount</label><input type="number" id="exAmt" value="${x?x.amount:''}" step="0.01" min="0" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div></div>
    <div class="form-group"><label>Description</label><input type="text" id="exDesc" value="${x?x.description:''}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
    <div class="form-group"><label>Date</label><input type="text" id="exDate" value="${x?x.date:today()}" required style="width:100%;height:40px;padding:0 12px;background:var(--bg-3);border:1px solid var(--bd-1);border-radius:var(--radius-sm);color:var(--tx-1);outline:none"/></div>
    <div class="form-actions"><button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">${x?'Update':'Add'}</button></div>
  </form></div>`);
}
function saveExp(e, id) {
  e.preventDefault(); const d = { category:$('#exCat').value, amount:parseFloat($('#exAmt').value), description:$('#exDesc').value.trim(), date:$('#exDate').value.trim() };
  if(id) { const x=S.db.expenses.find(e=>e.id===id); if(x) Object.assign(x,d); toast('Expense updated'); }
  else { d.id=uid('expenses'); S.db.expenses.push(d); toast('Expense added'); }
  saveAll('expenses'); closeModal(); renderExpenses();
}
function delExp(id) { if(!confirm('Delete expense?'))return; S.db.expenses=S.db.expenses.filter(e=>e.id!==id); saveAll('expenses'); renderExpenses(); toast('Expense deleted','info'); }

// ═══════════════ 10 REPORTS ═══════════════
function renderReports() {
  const orders = S.db.orders;
  const totalRev = orders.reduce((s,o)=>s+o.total,0);
  const totalExp = S.db.expenses.reduce((s,e)=>s+e.amount,0);
  const profit = totalRev - totalExp;

  // Monthly revenue (last 6 months)
  const months = []; const monthLabels = [];
  for(let i=5;i>=0;i--) { const d=new Date(); d.setMonth(d.getMonth()-i); const ml=d.toLocaleDateString('en-US',{month:'short',year:'2-digit'}); monthLabels.push(ml); months.push(orders.filter(o=>{const od=new Date(o.date);return od.getMonth()===d.getMonth()&&od.getFullYear()===d.getFullYear();}).reduce((s,o)=>s+o.total,0)); }
  const maxMonth = Math.max(...months,1);

  // Category revenue
  const catRev = {};
  orders.forEach(o => o.items.forEach(i => { const m=S.db.menu.find(x=>x.id===i.id); if(m) catRev[m.category]=(catRev[m.category]||0)+m.price*i.qty; }));
  const catEntries = Object.entries(catRev).sort((a,b)=>b[1]-a[1]);

  // Top items
  const itemQty = {};
  orders.forEach(o => o.items.forEach(i => { itemQty[i.id]=(itemQty[i.id]||0)+i.qty; }));
  const topItems = Object.entries(itemQty).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([id,qty])=>{const m=S.db.menu.find(x=>x.id===parseInt(id));return m?{name:m.name,emoji:m.emoji,qty,revenue:m.price*qty}:null;}).filter(Boolean);

  let html = `
    <div class="stats-row">
      <div class="stat-card"><div class="stat-icon" style="background:var(--accent-light);color:var(--accent)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div><div class="stat-label">Total Revenue</div><div class="stat-value">${fmt(totalRev)}</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:rgba(239,68,68,.12);color:var(--danger)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div><div class="stat-label">Total Expenses</div><div class="stat-value" style="color:var(--danger)">${fmt(totalExp)}</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--blue-light);color:var(--blue)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div><div class="stat-label">Net Profit</div><div class="stat-value" style="color:${profit>=0?'var(--accent)':'var(--danger)'}">${fmt(profit)}</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--orange-light);color:var(--orange)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><div><div class="stat-label">Total Orders</div><div class="stat-value">${orders.length}</div></div></div>
    </div>

    <div class="chart-grid">
      <div class="chart-card">
        <h3>Monthly Revenue (Last 6 Months)</h3>
        <div class="chart-bar">
          ${monthLabels.map((l,i) => `<div class="chart-bar-col"><div class="chart-bar-val">${fmt(months[i])}</div><div class="chart-bar-fill" style="height:${(months[i]/maxMonth)*130}px;background:var(--blue)"></div><div class="chart-bar-label">${l}</div></div>`).join('')}
        </div>
      </div>
      <div class="chart-card">
        <h3>Revenue by Category</h3>
        ${catEntries.map(([k,v]) => {
          const pct = totalRev>0?(v/totalRev*100):0;
          return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="width:80px;font-size:.82rem;font-weight:500">${k}</span>
            <div style="flex:1;height:8px;background:var(--bg-4);border-radius:4px;overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--accent);border-radius:4px;transition:width .5s"></div></div>
            <span style="font-size:.82rem;font-weight:600;width:70px;text-align:right">${fmt(v)}</span>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="chart-card">
      <h3>Top Selling Items</h3>
      ${topItems.length===0?'<div class="empty"><p>No sales data</p></div>':`
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Quantity Sold</th><th>Revenue</th></tr></thead><tbody>
      ${topItems.map((x,i) => `<tr><td style="display:flex;align-items:center;gap:8px"><span style="font-size:1.2rem">${x.emoji}</span><span style="font-weight:600">${x.name}</span></td><td>${x.qty}</td><td style="font-weight:700">${fmt(x.revenue)}</td></tr>`).join('')}
      </tbody></table></div>`}
    </div>`;
  $('#pg-reports').innerHTML = html;
}

// ═══════════════ 11 SETTINGS ═══════════════
function renderSettings() {
  let html = `<div class="settings-grid">
    <div class="settings-card">
      <h3>Restaurant Info</h3>
      <div class="setting-row"><span>Store Name</span><input type="text" class="setting-input" value="${S.settings.storeName}" id="setStoreName"/></div>
      <div class="setting-row"><span>Address</span><input type="text" class="setting-input" value="${S.settings.address}" id="setAddress"/></div>
      <div class="setting-row"><span>Phone</span><input type="text" class="setting-input" value="${S.settings.phone}" id="setPhone"/></div>
      <div class="setting-row"><span>Receipt Note</span><input type="text" class="setting-input" value="${S.settings.receiptNote}" id="setReceiptNote" style="width:260px"/></div>
    </div>
    <div class="settings-card">
      <h3>POS Preferences</h3>
      <div class="setting-row"><span>Tax Rate (%)</span><input type="number" class="setting-input" value="${(S.taxRate*100).toFixed(1)}" step="0.1" id="setTaxRate"/></div>
      <div class="setting-row"><span>Currency</span><input type="text" class="setting-input" value="$" style="width:60px"/></div>
      <div class="setting-row"><button class="btn btn-primary" onclick="saveSettings()">Save Settings</button></div>
    </div>
    <div class="settings-card">
      <h3>Appearance</h3>
      <div class="setting-row"><span>Theme</span><button class="btn btn-outline" onclick="toggleTheme()">Toggle Dark / Light</button></div>
      <div class="setting-row"><span>Accent Color</span><div class="color-picks">
        <button class="color-dot active" style="background:#f97316" onclick="setAccent('#f97316',this)"></button>
        <button class="color-dot" style="background:#6366f1" onclick="setAccent('#6366f1',this)"></button>
        <button class="color-dot" style="background:#c084fc" onclick="setAccent('#c084fc',this)"></button>
        <button class="color-dot" style="background:#fb923c" onclick="setAccent('#fb923c',this)"></button>
        <button class="color-dot" style="background:#ef4444" onclick="setAccent('#ef4444',this)"></button>
      </div></div>
    </div>
    <div class="settings-card">
      <h3>System</h3>
      <div class="setting-row"><span>Version</span><span style="color:var(--tx-2)">ApexPOS v3.0</span></div>
      <div class="setting-row"><span>Menu Items</span><span style="color:var(--tx-2)">${S.db.menu.length}</span></div>
      <div class="setting-row"><span>Staff Members</span><span style="color:var(--tx-2)">${S.db.staff.length}</span></div>
      <div class="setting-row"><span>Total Orders</span><span style="color:var(--tx-2)">${S.db.orders.length}</span></div>
      <div class="setting-row"><button class="btn btn-danger" onclick="if(confirm('Reset all data to defaults?')){localStorage.clear();location.reload();}">Reset All Data</button></div>
    </div>
  </div>`;
  $('#pg-settings').innerHTML = html;
}
function saveSettings() {
  S.settings.storeName = $('#setStoreName')?.value || S.settings.storeName;
  S.settings.address = $('#setAddress')?.value || S.settings.address;
  S.settings.phone = $('#setPhone')?.value || S.settings.phone;
  S.settings.receiptNote = $('#setReceiptNote')?.value || S.settings.receiptNote;
  const tr = parseFloat($('#setTaxRate')?.value);
  if(!isNaN(tr) && tr>=0 && tr<=50) S.taxRate = tr/100;
  saveAll(); toast('Settings saved');
}

// ═══════════════ POS MENU FILTER ═══════════════
function filterPosMenu() { S.posSearch = $('#posSearch')?.value||''; renderPOS(); }
function renderPOS() {
  const cats = ['All', ...new Set(S.db.menu.map(m=>m.category))];
  let items = S.db.menu.filter(m=>m.available);
  if(S.posCategory!=='all') items = items.filter(m=>m.category===S.posCategory);
  if(S.posSearch) { const q=S.posSearch.toLowerCase(); items=items.filter(m=>m.name.toLowerCase().includes(q)); }
  const g = $('#posGrid'); if(!g) return;
  g.innerHTML = items.map(m => `<div class="product-card" onclick="posAddItem(${m.id})">
    <div class="product-add-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
    <div class="product-img">${m.emoji}</div>
    <div class="product-info"><div class="product-name">${m.name}</div><div class="product-price">${fmt(m.price)}</div><div class="product-tag">${m.category}</div></div>
  </div>`).join('');
  renderCustomerCart();
}

// ═══════════════ CUSTOMER POS CART ═══════════════
function renderCustomerCart() {
  const badge = $('#cartBadge');
  const items = $('#cartItems');
  const empty = $('#cartEmpty');
  const summary = $('#cartSummary');
  if(!items) return;
  const totalQty = S.cart.reduce((s,c)=>s+c.qty,0);
  if(badge) { badge.textContent = totalQty; pulseBadge(badge); }
  if(S.cart.length === 0) {
    if(empty) empty.style.display = 'flex';
    if(summary) summary.style.display = 'none';
    items.innerHTML = '';
    if(empty) items.appendChild(empty);
    return;
  }
  if(empty) empty.style.display = 'none';
  if(summary) { summary.style.display = 'block'; summary.classList.remove('show'); void summary.offsetWidth; summary.classList.add('show'); }
  items.innerHTML = S.cart.map((ci, idx) => {
    const m = S.db.menu.find(x=>x.id===ci.id);
    const isLast = idx === S.cart.length - 1;
    return `<div class="cart-item${isLast ? ' just-added' : ''}">
      <div class="cart-item-img">${m.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${m.name}</div>
        <div class="cart-item-price">${fmt(m.price * ci.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="posQty(${m.id},-1)">−</button>
        <span style="width:28px;text-align:center;font-weight:700;font-size:.85rem">${ci.qty}</span>
        <button class="qty-btn" onclick="posQty(${m.id},1)">+</button>
      </div>
    </div>`;
  }).join('');
  const sub = getSubtotal();
  const tax = sub * S.taxRate;
  const disc = S.discount > 0 ? (S.discountType === 'percent' ? sub * S.discount / 100 : S.discount) : 0;
  const total = sub - disc + tax;
  $('#subtotal').textContent = fmt(sub);
  $('#taxAmt').textContent = fmt(tax);
  $('#totalAmt').textContent = fmt(total);
  const dr = $('#discountRow');
  if(dr) { dr.style.display = disc > 0 ? 'flex' : 'none'; }
  $('#discountAmt').textContent = '-' + fmt(disc);
}

function clearCart() { S.cart = []; S.discount = 0; renderCustomerCart(); }
function applyDiscount() {
  const v = $('#discountInput')?.value.trim();
  if(!v) return;
  if(v.endsWith('%')) { S.discount = parseFloat(v) || 0; S.discountType = 'percent'; }
  else { S.discount = parseFloat(v) || 0; S.discountType = 'fixed'; }
  renderCustomerCart();
}
function holdOrder() {
  if(S.cart.length === 0) { toast('Cart is empty','error'); return; }
  S.holdOrders.push({ items: [...S.cart], discount: S.discount, discountType: S.discountType, time: new Date().toISOString() });
  S.cart = []; S.discount = 0;
  renderCustomerCart();
  toast('Order held');
}
function openPayModal() {
  if(S.cart.length === 0) { toast('Cart is empty','error'); return; }
  posCheckout();
}

// ═══════════════ INIT ═══════════════
function init() {
  initTheme();
  loadAll();
  tickClock(); setInterval(tickClock, 1000);
  // Login screen
  $('#loginScreen').style.display='flex';
  $('#adminLayout').style.display='none';
  $('#posWrapper').style.display='none';
  // Generate demo orders if empty
  if(S.db.orders.length===0) generateDemoOrders();
}
function generateDemoOrders() {
  const statuses = ['completed','completed','completed','preparing','pending'];
  const methods = ['cash','card','digital','cash','card'];
  for(let i=0;i<12;i++) {
    const items = [];
    const count = Math.floor(Math.random()*3)+1;
    for(let j=0;j<count;j++) {
      const m = S.db.menu[Math.floor(Math.random()*S.db.menu.length)];
      const existing = items.find(x=>x.id===m.id);
      if(existing) existing.qty+=1; else items.push({id:m.id,qty:Math.floor(Math.random()*2)+1});
    }
    const sub = items.reduce((s,it)=>{const m=S.db.menu.find(x=>x.id===it.id);return s+(m?m.price*it.qty:0);},0);
    const d = new Date(); d.setDate(d.getDate()-Math.floor(Math.random()*14));
    S.db.orders.push({
      id: 100+i, tableId: Math.floor(Math.random()*10)+1, items, subtotal: sub, discount: 0, discountType: 'percent',
      total: sub+(sub*S.taxRate), method: methods[i%5], status: statuses[i%5],
      cashier: S.db.staff[i%4]?.name||'System', date: d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}),
      time: `${Math.floor(Math.random()*6)+6}:${String(Math.floor(Math.random()*60)).padStart(2,'0')} PM`
    });
  }
  saveAll();
}

document.addEventListener('DOMContentLoaded', init);
