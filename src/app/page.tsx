"use client";

import { InteractiveHero } from "@/components/ui/interactive-hero-backgrounds";

export default function Home() {
  return (
    <main>
      <InteractiveHero
        brandName="АЙЯ"
        heroTitle="Сеть аптечных пунктов Айя"
        heroDescription="Ваше здоровье — наша главная ценность. Розничная торговля лекарственными средствами, изделиями медицинского назначения и парафармацевтикой."
        emailPlaceholder="Ваш email для связи"
        buttonText="Связаться с нами"
        ballpitConfig={{
          count: 150,
          gravity: 0.5,
          friction: 0.99,
          minSize: 0.4,
          maxSize: 0.9,
          lightIntensity: 4,
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Широкий ассортимент</h3>
            <p className="text-muted-foreground">Большой выбор лекарств и товаров для здоровья в наличии и под заказ.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Качество и контроль</h3>
            <p className="text-muted-foreground">Только сертифицированные препараты от проверенных поставщиков.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Профессионализм</h3>
            <p className="text-muted-foreground">Наши фармацевты всегда готовы предоставить квалифицированную консультацию.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">О компании</h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground">
            Фармацевтическая компания «Айя» успешно работает на рынке розничной торговли медицинскими препаратами.
            Мы стремимся обеспечить каждого жителя качественными и доступными средствами для поддержания здоровья и красоты.
          </p>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Фармацевтическая компания «Айя». Все права защищены.</p>
        </div>
      </footer>
    </main>
  );
}
