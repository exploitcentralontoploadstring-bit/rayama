"use client";

import { InteractiveHero } from "@/components/ui/interactive-hero-backgrounds";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Лекарственные средства",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    count: "5000+ товаров"
  },
  {
    title: "Витамины и БАДы",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400",
    count: "1200+ товаров"
  },
  {
    title: "Гигиена и косметика",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400",
    count: "3500+ товаров"
  },
  {
    title: "Медтехника",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400",
    count: "800+ товаров"
  }
];

const locations = [
  {
    name: "Айя Центральная",
    address: "ул. Абая, 45",
    phone: "+7 (727) 123-45-67",
    hours: "Круглосуточно"
  },
  {
    name: "Айя Север",
    address: "пр. Достык, 120",
    phone: "+7 (727) 765-43-21",
    hours: "08:00 - 22:00"
  },
  {
    name: "Айя Запад",
    address: "мкр. Орбита-3, 15",
    phone: "+7 (727) 111-22-33",
    hours: "09:00 - 21:00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <InteractiveHero
        brandName="АЙЯ"
        heroTitle="Сеть аптечных пунктов Айя"
        heroDescription="Ваше здоровье — наша главная ценность. Розничная торговля лекарственными средствами, изделиями медицинского назначения и парафармацевтикой."
        buttonText="Связаться с нами"
        emailPlaceholder="Ваш email для связи"
      />

      {/* Popular Categories */}
      <section className="py-20 bg-background px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Популярные категории</h2>
              <p className="text-muted-foreground">Широкий выбор сертифицированных товаров для вашего здоровья</p>
            </div>
            <Link href="/innovation" className="text-primary hover:underline flex items-center gap-1 font-medium">
              Innovation Lab <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-muted/30 px-4 border-y">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Широкий ассортимент</h3>
              <p className="text-muted-foreground">Более 15 000 наименований товаров в наличии и под заказ.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Только сертифицированные препараты от надежных поставщиков.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Профессионализм</h3>
              <p className="text-muted-foreground">Наши фармацевты всегда готовы предоставить квалифицированную консультацию.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Наши аптеки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="p-6 rounded-2xl border bg-card space-y-4">
                <h3 className="text-xl font-bold">{loc.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted border-t px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">АЙЯ</h2>
              <p className="text-muted-foreground max-w-sm">
                Фармацевтическая компания «Айя» — ваш надежный партнер в вопросах здоровья и красоты с 2025 года.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Меню</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">О компании</Link></li>
                <li><Link href="/innovation" className="hover:text-foreground">Innovation Lab</Link></li>
                <li><Link href="#" className="hover:text-foreground">Каталог</Link></li>
                <li><Link href="#" className="hover:text-foreground">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Phone className="h-3 w-3" /> +7 (727) 123-45-67</li>
                <li className="flex items-center gap-2"><Mail className="h-3 w-3" /> info@aiya.kz</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2026 Фармацевтическая компания «Айя». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
