import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, Star, ChevronRight, Menu, X, Utensils, Flame, PartyPopper, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О нас', href: '#about' },
    { name: 'Заказ', href: '#process' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-brown-primary/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brown-primary rounded-full flex items-center justify-center">
            <Utensils className="text-gold-bright w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-lg tracking-widest uppercase text-brown-primary whitespace-nowrap">Русская Пекарня</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-custom mt-1 whitespace-nowrap">Магнитогорск · с 2015</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold tracking-widest uppercase text-neutral-500 hover:text-brown-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="tel:+7952513235" className="bg-brown-primary text-white rounded px-6 py-2.5 text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-black transition-colors">
            <Phone className="w-3.5 h-3.5 text-gold-bright fill-current" />
            Позвонить
          </a>
        </div>

        <button className="md:hidden p-2 text-brown-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-cream border-b border-brown-primary/10 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold tracking-widest uppercase text-neutral-600">
                {link.name}
              </a>
            ))}
            <a href="tel:+7952513235" className="bg-brown-primary text-white rounded py-3 text-center text-xs font-bold tracking-widest uppercase">
              Позвонить нам
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[720px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms]"
        style={{ 
          backgroundImage: `linear-gradient(105deg, rgba(26,10,2,0.8) 0%, rgba(26,10,2,0.5) 55%, rgba(26,10,2,0.2) 100%), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80')` 
        }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-gold-bright text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
          >
            <div className="w-8 h-px bg-gold-bright" />
            Русская Пекарня · Магнитогорск
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl font-black text-white leading-tight mb-8"
          >
            Печём<br />с душой —<br /><span className="italic text-gold-bright font-normal">каждый день</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-md leading-relaxed mb-10"
          >
            Домашние пироги, хлеб на закваске и праздничная выпечка. Только натуральные ингредиенты, только ручной труд.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="tel:+7952513235" className="bg-gold-custom text-white px-10 py-5 rounded-sm text-xs font-bold tracking-widest uppercase flex items-center gap-3 hover:bg-brown-primary transition-all hover:-translate-y-1">
              <Phone className="w-4 h-4 fill-current" />
              Заказать по телефону
            </a>
            <a href="#about" className="border border-white/40 text-white px-10 py-5 rounded-sm text-xs font-medium tracking-widest uppercase hover:bg-white/10 transition-all">
              Узнать больше
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden lg:flex">
        {[
          { num: '10', label: 'Лет работаем' },
          { num: '30+', label: 'Видов выпечки' },
          { num: '4.9★', label: 'Рейтинг' },
        ].map((item, i) => (
          <div key={i} className="bg-cream/95 backdrop-blur px-10 py-8 text-center border-l border-brown-primary/10 min-w-[160px]">
            <div className="font-serif text-4xl font-bold text-brown-primary mb-1">{item.num}</div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* USER requested image replacement 2 (cookies -> pastries close up) */}
          <img 
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl" 
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80" 
            alt="Свежая выпечка" 
          />
          <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-brown-primary border-[6px] border-cream flex flex-col items-center justify-center text-center shadow-2xl">
            <span className="font-serif text-5xl font-black text-gold-bright">10</span>
            <span className="text-[9px] font-bold tracking-widest uppercase text-white/70 mt-1 max-w-[100px]">лет в Магнитогорске</span>
          </div>
        </motion.div>

        <div>
          <div className="text-gold-custom text-[10px] font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
            О нас
            <div className="w-8 h-px bg-gold-custom" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 leading-tight mb-8">
            Семейная пекарня<br />с <span className="italic text-brown-secondary font-normal underline decoration-gold-custom/30 underline-offset-8">настоящим вкусом</span>
          </h2>
          <div className="space-y-6 text-neutral-500 leading-relaxed text-lg mb-10">
            <p>Мы — небольшая семейная пекарня в самом сердце Магнитогорска. Каждое утро мастера приходят задолго до открытия, чтобы вы получили горячую выпечку прямо из печи.</p>
            <p>Используем только натуральное сырьё: муку высшего сорта, домашние яйца, настоящее сливочное масло. Никаких улучшителей и консервантов.</p>
          </div>
          <a href="tel:+7952513235" className="inline-flex items-center gap-3 bg-brown-primary text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-black transition-all mb-12">
            <Phone className="w-4 h-4" />
            Позвонить нам
          </a>

          <div className="grid grid-cols-2 gap-px bg-brown-primary/10 border border-brown-primary/10">
            {[
              { icon: '🌾', title: 'Натуральные продукты', text: 'Только мука, масло, яйца и душа — без химии' },
              { icon: '🔥', title: 'Горячо из печи', text: 'Начинаем печь в 5 утра для максимальной свежести' },
              { icon: '🎉', title: 'Праздничные заказы', text: 'Каравай, именные пироги для вашего торжества' },
              { icon: '💛', title: 'С любовью', text: '500+ семей возвращаются к нам ежемесячно' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-serif font-bold text-neutral-900 mb-1">{item.title}</div>
                <div className="text-xs text-neutral-500 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-gold-bright text-[10px] font-bold tracking-[0.3em] uppercase mb-4 justify-center flex items-center gap-3">
             <div className="w-8 h-px bg-gold-bright" />
             Почему выбирают нас
             <div className="w-8 h-px bg-gold-bright" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Мы печём так,<br />как <span className="text-sand italic font-normal">пекли бабушки</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { num: '01', icon: '🏠', title: 'Домашний вкус', text: 'Рецепты, проверенные поколениями. Именно такой вкус хочется чувствовать снова и снова.' },
            { num: '02', icon: '⚡', title: 'Быстро и удобно', text: 'Позвоните — и через несколько часов горячая выпечка будет ждать вас. Без очередей.' },
            { num: '03', icon: '✨', title: 'Гарантия качества', text: '10 лет на рынке Магнитогорска и рейтинг 4.9 — лучшая рекомендация нашей работы.' },
          ].map((card, i) => (
            <div key={i} className="bg-black p-12 relative group overflow-hidden transition-all duration-500 hover:bg-zinc-900">
               <div className="absolute top-0 left-0 right-0 h-0.5 bg-brown-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="font-serif text-8xl font-black text-white/[0.03] absolute top-4 right-10 leading-none">{card.num}</div>
               <div className="text-4xl mb-6 relative z-10">{card.icon}</div>
               <h3 className="font-serif text-2xl font-bold mb-4 relative z-10">{card.title}</h3>
               <p className="text-white/40 text-sm leading-relaxed relative z-10">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-gold-custom text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Как сделать заказ</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900">Просто позвоните —<br />мы <span className="text-brown-secondary italic font-normal">всё устроим</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-brown-primary/10">
          {[
            { num: '01', title: 'Позвоните нам', text: 'Набирайте с 8:00 до 20:00. Расскажем, что сейчас есть в наличии.', link: '+7 952 513-23-5' },
            { num: '02', title: 'Выберите выпечку', text: 'Скажите тип пирога, хлеб или сдобу. Уточним вес и состав.' },
            { num: '03', title: 'Мы испечём', text: 'Готовим специально под вас. Уведомим, когда всё будет готово.' },
            { num: '04', title: 'Заберите тёплым', text: 'Приходите на улицу Труда в удобное время. Ваш заказ будет свежим.' },
          ].map((step, i) => (
            <div key={i} className="p-10 border-r border-brown-primary/10 last:border-r-0 hover:bg-warm/30 transition-colors text-brown-primary">
              <div className="font-serif text-5xl font-black text-brown-primary/10 mb-6">{step.num}</div>
              <div className="font-serif text-xl font-bold text-neutral-900 mb-3">{step.title}</div>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">{step.text}</p>
              {step.link && (
                <a href="tel:+7952513235" className="text-[10px] font-bold tracking-widest uppercase text-gold-custom flex items-center gap-2 group">
                  {step.link} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ReviewCardProps {
  name: string;
  date: string;
  text: string;
  initial: string;
  colorClass: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, text, initial, colorClass }) => (
  <div className="w-[360px] flex-shrink-0 bg-white p-8 border border-brown-primary/10 relative group">
    <div className="absolute top-4 right-8 font-serif text-8xl text-sand/20 leading-none group-hover:text-sand/40 transition-colors">“</div>
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-gold-custom fill-current" />)}
    </div>
    <p className="font-serif italic text-brown-primary leading-relaxed mb-8 relative z-10 whitespace-normal">{text}</p>
    <div className="pt-6 border-t border-brown-primary/10 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${colorClass}`}>
        {initial}
      </div>
      <div>
        <div className="text-sm font-bold text-neutral-900">{name}</div>
        <div className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">{date}</div>
      </div>
    </div>
  </div>
);

const ReviewsList = () => {
  const reviews = [
    { name: "Светлана К.", date: "апрель 2025", text: "Заказала пирог с яблоком на день рождения мамы — все гости были в восторге. Тесто воздушное, начинки много, вкус как в детстве.", initial: "СК", color: "bg-warm text-brown-primary" },
    { name: "Андрей М.", date: "март 2025", text: "Хлеб на закваске — это нечто особенное. Хрустящая корочка, пористый мякиш, натуральный вкус. Теперь я ваш постоянный клиент.", initial: "АМ", color: "bg-sand text-white" },
    { name: "Екатерина В.", date: "апрель 2025", text: "Брали пирог с мясом на корпоратив. Коллеги мгновенно съели и просили добавки. Начинка щедрая, тесто золотистое.", initial: "ЕВ", color: "bg-brown-primary text-white" },
    { name: "Татьяна Л.", date: "февраль 2025", text: "Пирог с вишней — моя еженедельная традиция. Кисло-сладкая начинка в нежном тесте — лучший десерт к чаю.", initial: "ТЛ", color: "bg-gold-custom text-white" },
  ];

  return (
    <section id="reviews" className="section-padding bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <div className="text-gold-custom text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Отзывы гостей</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">Нас рекомендуют</h2>
        </div>
        <div className="text-right border-l md:border-l-0 md:border-r border-brown-primary/10 pl-6 md:pl-0 md:pr-6">
          <div className="font-serif text-6xl font-black text-brown-primary leading-none mb-2">4.9</div>
          <div className="flex justify-end gap-1 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 text-gold-custom fill-current" />)}
          </div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">Средняя оценка</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-warm to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-warm to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} name={r.name} date={r.date} text={r.text} initial={r.initial} colorClass={r.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 min-h-[560px] bg-brown-primary">
      <div className="relative h-80 lg:h-auto overflow-hidden">
        {/* USER requested image replacement 1 (pasta -> bread shelves) */}
        <img 
          className="w-full h-full object-cover brightness-90 contrast-125" 
          src="https://images.unsplash.com/photo-1544681230-05047b1981cc?w=1200&q=80" 
          style={{ objectPosition: 'center 30%' }}
          alt="Полки с хлебом" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brown-primary/60 hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center p-10 lg:p-20 text-white">
        <div className="text-sand text-[10px] font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
          Свяжитесь с нами
          <div className="w-8 h-px bg-sand" />
        </div>
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">Хотите пирог<br /><span className="italic text-sand font-normal text-[#E0C070]">к ужину?</span></h2>
        <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-sm">Звоните — и через несколько часов горячая выпечка будет ждать вас. Принимаем заказы с 8 утра.</p>
        <a href="tel:+7952513235" className="font-serif text-4xl font-bold text-gold-bright hover:text-white transition-colors mb-2">+7 952 513-23-5</a>
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-10">Ежедневно с 8:00 до 21:00</div>
        <a href="tel:+7952513235" className="inline-flex bg-white text-brown-primary hover:bg-gold-bright hover:text-white transition-all px-10 py-5 rounded-sm text-xs font-bold tracking-widest uppercase self-start">
          Позвонить сейчас
        </a>
      </div>
    </section>
  );
};

const Contacts = () => {
  return (
    <section id="contacts" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-gold-custom text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Где нас найти</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">Адрес и <span className="text-brown-secondary italic font-normal">контакты</span></h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
          <div className="space-y-1">
            {[
              { icon: <MapPin className="w-5 h-5 text-brown-primary" />, label: 'Адрес', value: <strong>Магнитогорск</strong>, sub: 'ул. Труда, Челябинская область' },
              { icon: <Clock className="w-5 h-5 text-brown-primary" />, label: 'Режим работы', value: <strong>Ежедневно, без выходных</strong>, sub: 'с 8:00 до 21:00' },
              { icon: <Phone className="w-5 h-5 text-brown-primary" />, label: 'Телефон', value: <a href="tel:+7952513235" className="font-serif text-2xl font-bold text-brown-primary whitespace-nowrap">+7 952 513-23-5</a> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-brown-primary/10 flex gap-6 items-start">
                <div className="w-12 h-12 bg-warm rounded-sm flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gold-custom mb-2">{item.label}</div>
                  <div className="text-lg text-neutral-900 leading-tight">{item.value}</div>
                  {item.sub && <div className="text-sm text-neutral-400 mt-1">{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-brown-primary/10 bg-white">
            <div className="h-[400px] bg-neutral-200">
              <iframe
                title="Карта"
                className="w-full h-full grayscale-[0.3] contrast-[0.9]"
                src="https://yandex.ru/map-widget/v1/?ll=58.9752%2C53.3648&z=17&pt=58.9752%2C53.3648%2Cpm2rdm&l=map"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex flex-col sm:flex-row border-t border-brown-primary/10">
              <a href="https://yandex.ru/maps/235/magnitogorsk/?ll=58.9752,53.3648&z=17&pt=58.9752,53.3648" target="_blank" rel="noreferrer" className="flex-1 px-8 py-5 text-center text-[10px] font-bold tracking-widest uppercase bg-brown-primary text-white hover:bg-black transition-colors">
                Открыть в Яндекс Картах
              </a>
              <a href="https://yandex.ru/maps/235/magnitogorsk/?ll=58.9752,53.3648&z=17&l=stv%2Csta" target="_blank" rel="noreferrer" className="flex-1 px-8 py-5 text-center text-[10px] font-bold tracking-widest uppercase bg-brown-secondary text-white/90 hover:bg-black transition-colors">
                📷 Панорама
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white/30 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-16">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
             <Utensils className="w-5 h-5 text-gold-bright" />
          </div>
          <span className="font-serif text-xl font-bold tracking-widest uppercase text-white/70">Русская Пекарня</span>
        </a>
        <div className="text-center text-sm">
          ул. Труда, Магнитогорск · <a href="tel:+7952513235" className="text-gold-bright hover:text-white transition-colors">+7 952 513-23-5</a>
        </div>
        <div className="text-xs uppercase tracking-widest">
          © 2025 Русская Пекарня.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Marquee Strip */}
        <div className="bg-brown-primary py-4 overflow-hidden border-y border-gold-custom/20">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  'Свежая выпечка ежедневно',
                  'Без консервантов',
                  'Пироги на заказ',
                  'Хлеб на закваске',
                  'Праздничные караваи',
                  'Работаем с 8:00 до 21:00',
                  'Ручная работа',
                ].map((text, j) => (
                  <span key={j} className="inline-flex items-center px-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                    <span className="text-gold-bright text-lg mr-4">✦</span> {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <About />
        <WhyUs />
        <Process />
        <ReviewsList />
        <CTASection />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
