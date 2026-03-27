export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">COFFEE✦TIME</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ТВОЙ КОФЕ,
              <br />
              ТВОЙ <span>РИТМ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Качественный specialty-кофе, уютная атмосфера и всё необходимое для продуктивного дня.
              Для студентов, профессионалов и тех, кто ценит вкус.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                О нас
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage:
                "url('https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/1cad370b-bd0f-46b9-8830-b4b2541a343b.jpg')",
            }}
          >
            <div className="sticker">
              СВЕЖИЙ
              <br />
              ОБЖАР
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СПЕЦИАЛТИ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С ДУШОЙ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КОФЕ С ХАРАКТЕРОМ * УЮТНО КАК ДОМА * ОТКРЫТЫ КАЖДЫЙ ДЕНЬ * SPECIALTY РОАСТЫ * ДЛЯ ТЕХ КТО ЦЕНИТ ВКУС
            * КОФЕ С ХАРАКТЕРОМ * УЮТНО КАК ДОМА * ОТКРЫТЫ КАЖДЫЙ ДЕНЬ * SPECIALTY РОАСТЫ * ДЛЯ ТЕХ КТО ЦЕНИТ ВКУС
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/0c96d3bb-c23d-47e1-8c57-abc398453eda.jpg"
                alt="Флэт уайт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Флэт Уайт</h3>
                  <span className="price">280 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойной эспрессо на бархатистом молоке. Насыщенный вкус без лишней воды.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/0b53532a-0240-4329-8e4a-53a2e23def1d.jpg"
                alt="Айс Латте"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Айс Латте</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Холодный эспрессо на льду с молоком. Идеально для жаркого дня или долгой учёбы.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/0eef002e-9ac0-4afe-a325-1fdbe268c60a.jpg"
                alt="Фильтр-кофе"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Фильтр дня</h3>
                  <span className="price">220 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Авторский фильтр от нашего бариста. Меняется каждый день — всегда интересно.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ТУТ ХОЧЕТСЯ ОСТАТЬСЯ.</h2>
            <p className="vibe-text">
              Coffee Time — это не просто кофейня. Это место, где студенты пишут курсовые, фрилансеры ведут переговоры,
              а друзья встречаются после долгого дня. Уютный интерьер, быстрый Wi-Fi и кофе, который вдохновляет.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @COFFEE.TIME
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/1cad370b-bd0f-46b9-8830-b4b2541a343b.jpg"
                alt="Coffee Time атмосфера"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/0c96d3bb-c23d-47e1-8c57-abc398453eda.jpg"
                alt="Наш кофе"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/0b53532a-0240-4329-8e4a-53a2e23def1d.jpg"
                alt="Айс напитки"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ec6a0b08-43e7-4b68-93f2-e7dd032ffbb6/files/0eef002e-9ac0-4afe-a325-1fdbe268c60a.jpg"
                alt="Лatte art"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">COFFEE✦TIME</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Современная кофейня для тех, кто ценит качество. Specialty-кофе, уютная атмосфера и всё для продуктивного дня.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Атмосфера
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Каждый день: 7:00 — 22:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 COFFEE TIME</span>
          <span>КОФЕ С ХАРАКТЕРОМ</span>
          <a href="https://vk.ru/club236977020" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>ВКонтакте</a>
        </div>
      </footer>
    </>
  );
}