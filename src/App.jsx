import React, { useRef, useState } from 'react';


function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const menuRef = useRef(null);
  const branchesRef = useRef(null);

  const [showAll, setShowAll] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (ref, sectionName) => {
    setActiveSection(sectionName);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 1, name: "Classic Cheese", price: "35,000", desc: "Mol go'shti, pishloq va maxsus sous.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500" },
    { id: 2, name: "Double King", price: "55,000", desc: "Ikki barobar go'sht va qo'shaloq pishloq.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500", dark: true },
    { id: 3, name: "Family Fries", price: "18,000", desc: "Oltin rangli, qarsildoq kartoshka fri.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500" },
    { id: 4, name: "Ice Refresh", price: "12,000", desc: "Muzdek Coca-Cola, burger bilan birga.", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=500" },
    { id: 5, name: "BBQ Smoke", price: "42,000", desc: "Dudlangan go'sht va maxsus BBQ sousi.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500" },
    { id: 6, name: "Mexican Chili", price: "38,000", desc: "Xalapeno va achchiq chili sousi.", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=500" },
    { id: 7, name: "Crispy Chicken", price: "32,000", desc: "Yumshoq tovuq go'shti va qarsildoq qobiq.", img: "https://imageproxy.wolt.com/menu/menu-images/693d25155cd4abdca9203ad0/340dc202-ed47-11f0-9732-eae79b718912_6589b6de_32c2_4378_8096_f35ab524c02a" },
    { id: 8, name: "Family Mini", price: "25,000", desc: "Kichkina o'lcham, lekin katta lazzat.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500" },
    { id: 9, name: "Steak Burger", price: "62,000", desc: "Premium go'sht bo'laklari bilan.", img: "https://imageproxy.wolt.com/assets/683ea72e10dcc9d77bebd017" },
    { id: 10, name: "Cheese Nuggets", price: "22,000", desc: "Erib turuvchi pishloqli nugetslar.", img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500" },
    { id: 11, name: "Family Juice", price: "15,000", desc: "Tabiiy yangi siqilgan sharbatlar.", img: "https://zamin.uz/uploads/posts/2017-02/1486875839_soki.jpeg" },
    { id: 12, name: "Hot Dog XL", price: "20,000", desc: "Uzun kolbasa va achchiq sousli.", img: "https://img.freepik.com/premium-photo/hot-dog-with-sausage-cucumber-tomato-lettuce_2829-3566.jpg" }
  ];

  const branches = [
    { id: 1, name: "Kadeshva", tel: "334980077" },
    { id: 2, name: "Selxoz", tel: "334890077" },
    { id: 3, name: "Ibinsino", tel: "331890077" },
    { id: 4, name: "O'rikzor", tel: "976530077" },
    { id: 5, name: "Xasanboy", tel: "974750077" },
    { id: 6, name: "Tuzel", tel: "885960077" }
  ];

  const visibleItems = showAll ? menuItems : menuItems.slice(0, 8);

  return (
    <main className="pt-20 md:pt-24 bg-white min-h-screen pb-20 md:pb-0 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 h-20 md:h-24 bg-white/95 backdrop-blur-md z-[1000] border-b border-gray-100 flex justify-between items-center px-4 md:px-16 shadow-sm">
        <div
          onClick={() => handleNavClick(heroRef, 'hero')}
          className="text-3xl font-black italic tracking-tighter cursor-pointer flex items-center"
        >
          <div className="md:hidden flex">
            <span className="text-black">F</span>
            <span className="text-orange-600">B</span>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-orange-600">FAMILY</span>
            <span className="text-black ml-1 tracking-normal">BURGER</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-[0.2em] text-gray-500">
          {['hero', 'services', 'menu', 'branches'].map((sec) => (
            <li
              key={sec}
              onClick={() => {
                const ref = sec === 'hero' ? heroRef : sec === 'services' ? servicesRef : sec === 'menu' ? menuRef : branchesRef;
                handleNavClick(ref, sec);
              }}
              className={`cursor-pointer transition-all pb-1 border-b-2 ${activeSection === sec ? 'text-orange-600 border-orange-600' : 'border-transparent hover:text-orange-600'}`}
            >
              {sec === 'hero' ? 'Asosiy' : sec === 'services' ? 'Xizmatlar' : sec === 'menu' ? 'Menyu' : 'Manzillar'}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 md:gap-4 items-center">
          <a
            href="https://www.instagram.com/familyburger.uz/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 md:p-2.5 rounded-xl md:rounded-2xl transition-all shadow-lg active:scale-90 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

          <a
            href="https://t.me/Familyburgeruz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0088cc] p-2 md:p-2.5 rounded-xl md:rounded-2xl transition-all shadow-lg active:scale-90 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </a>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-[1000] flex justify-around items-center h-16 px-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {[
          { id: 'hero', ref: heroRef, label: 'Asosiy' },
          { id: 'services', ref: servicesRef, label: 'Xizmatlar' },
          { id: 'menu', ref: menuRef, label: 'Menyu' },
          { id: 'branches', ref: branchesRef, label: 'Manzillar' }
        ].map(nav => (
          <button
            key={nav.id}
            onClick={() => handleNavClick(nav.ref, nav.id)}
            className={`flex flex-col items-center justify-center transition-colors ${activeSection === nav.id ? 'text-orange-600' : 'text-gray-400'}`}
          >
            <div className={`w-1 h-1 rounded-full mb-1 ${activeSection === nav.id ? 'bg-orange-600' : 'bg-transparent'}`}></div>
            <span className="text-[10px] font-black uppercase italic tracking-tighter">{nav.label}</span>
          </button>
        ))}
      </div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="scroll-mt-24 px-4 md:px-16 py-8 md:py-16 gap-10 md:gap-16 relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="w-full lg:w-1/2 text-left space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            Lazzatli <br /><span className="text-orange-600">Burger</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-gray-400 max-w-sm border-l-4 md:border-l-8 border-orange-500 pl-4 md:pl-6">
            Family Burger - bu nafaqat fast-food, balki oilangiz uchun xavfsiz va mazali taom.
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4 items-start">
          <div className="h-48 md:h-[400px] overflow-hidden rounded-[30px] md:rounded-[40px] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 active:scale-110" alt="Burger 1" />
          </div>
          <div className="h-48 md:h-[400px] mt-8 md:mt-12 overflow-hidden rounded-[30px] md:rounded-[40px] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 active:scale-110" alt="Burger 2" />
          </div>
        </div>
      </section>


      {/* XIZMATLAR */}
      <section
        ref={servicesRef}
        className="relative scroll-mt-24 px-4 md:px-16 py-12 md:pt-24 md:pb-44 min-h-[700px] rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20 overflow-hidden"
      >
        {/* Orqa fon rasmi va qatlam (Overlay) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')", // O'zingizni rasmingiz manzilini qo'ying
          }}
        >
          {/* Rasmni biroz xiralashtirish (darken) uchun overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Kontent (Z-index bilan rasm ustiga chiqarish) */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 place-items-center max-w-7xl mx-auto">


          {/* ... boshqa kartochkalarni ham shu yerga qo'shing ... */}
          {/* 1 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">🌙</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">100% Halol</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">Faqat halol go'sht ishlatiladi.</p>
          </div>

          {/* 2 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">🚀</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Tez Yetkazish</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">35 daqiqa ichida yetkazamiz.</p>
          </div>

          {/* 3 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">🕒</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Ish Vaqti</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">10:00 dan 03:00 gacha.</p>
          </div>

          {/* 4 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">👨‍🍳</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Ochiq Oshxona</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">Tayyorlanishni ko‘rishingiz mumkin.</p>
          </div>

          {/* 5 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">🔥</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Issiq Taomlar</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">Har doim yangi pishiriladi.</p>
          </div>

          {/* 6 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">🥤</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Ichimliklar</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">Sovuq va mazali ichimliklar.</p>
          </div>

          {/* 7 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">🍟</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Snacks</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">Kartoshka fri va boshqalar.</p>
          </div>

          {/* 8 */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-[300px] group hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center">
            <span className="text-4xl mb-4 block">⭐️</span>
            <h4 className="text-xl font-black italic uppercase group-hover:text-white">Yuqori Sifat</h4>
            <p className="text-gray-400 mt-2 group-hover:text-orange-100 text-sm">Eng sifatli mahsulotlar.</p>
          </div>

        </div>
      </section>

      {/* MENU */}
      <section
        ref={menuRef}
        className="scroll-mt-24 py-16 md:py-24 px-4 md:px-16 bg-white relative z-10"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-orange-600 font-black italic uppercase text-5xl md:text-7xl tracking-tighter">
            Family Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className={`p-5 md:p-6 rounded-[35px] md:rounded-[45px] transition-all duration-500 border border-orange-500/30 hover:border-orange-600 ${item.dark ? 'bg-gray-900 text-white shadow-2xl scale-[1.02]' : 'bg-gray-50 hover:bg-white hover:shadow-xl'}`}
            >
              <div className="h-40 md:h-52 overflow-hidden rounded-[25px] md:rounded-[35px] mb-4 md:mb-6">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  alt={item.name}
                />
              </div>
              <h4 className="text-lg md:text-xl font-black italic uppercase leading-tight">{item.name}</h4>
              <p className="text-[10px] font-bold text-gray-500 my-2 uppercase tracking-widest">{item.desc}</p>
              <div className="text-xl md:text-2xl font-black pt-3 border-t border-gray-100/10 text-orange-600">
                {item.price} <small className="text-xs font-normal text-gray-400 italic">UZS</small>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full md:w-auto bg-black text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-black uppercase italic hover:bg-orange-600 transition shadow-lg active:scale-95"
          >
            {showAll ? "Yopish" : "Hamma Burgerlarni Ko'rish"}
          </button>
        </div>
      </section>

      {/* MANZILLAR */}
      <section ref={branchesRef} className="scroll-mt-24 py-16 md:py-24 px-4 md:px-16 bg-gray-950 text-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-8 md:mb-12 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <h2 className="text-orange-500 font-black italic uppercase text-4xl md:text-6xl leading-none">Bizning <br className="hidden md:block" /> Manzillar</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-sm max-w-xs border-l border-orange-600 pl-4">Toshkent shahrining 6 ta nuqtasida sizni kutamiz.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {branches.map((b, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 p-6 md:p-8 rounded-[35px] md:rounded-[45px] group hover:border-orange-500 transition-all cursor-pointer">
              <div className="flex justify-between mb-4 md:mb-6">
                <h4 className="text-xl md:text-2xl font-black italic uppercase text-orange-500 group-hover:text-white">{b.name}</h4>
                <span className="text-gray-700 font-black italic">#{i + 1}</span>
              </div>
              <a href={`tel:${b.tel}`} className="flex items-center gap-3 text-lg md:text-2xl font-black transition-transform active:scale-95">
                <span className="w-10 h-10 md:w-14 md:h-14 bg-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition shadow-lg">📞</span>
                <span className="text-sm md:text-2xl group-hover:text-orange-500">{b.tel}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 md:pb-16 text-center px-4">
        <div className="h-px bg-gray-100 w-full mb-8"></div>
        <p className="text-gray-400 font-black uppercase italic tracking-[0.2em] text-[9px] md:text-[10px]">
          FAMILY BURGER Chain © 2016-2026
        </p>
      </footer>
    </main>
  );
}

export default App;