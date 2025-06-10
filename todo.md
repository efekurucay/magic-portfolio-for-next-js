# Proje Geliştirme Görevleri

- [x] **Adım 1: Proje Kurulumu ve Başlatma**
  - [x] Proje dosyaları incelendi.
  - [x] Gerekli paketlerin kurulumu (`npm install`).
  - [x] Projenin geliştirme modunda başlatılması (`npm run dev`).
  - [x] `next.config.mjs` dosyasındaki `output: 'export'` hatası giderildi.

- [x] **Adım 2: Mevcut Sayfaların İncelenmesi**
  - [x] Ana Sayfa (`/`)
  - [x] Hakkında Sayfası (`/about`)
  - [x] Blog Sayfası ve Yazı Detayları (`/blog` ve `/blog/[slug]`)
  - [x] Galeri Sayfası (`/gallery`)
  - [x] Çalışmalar Sayfası ve Proje Detayları (`/work` ve `/work/[slug]`)

- [x] **Adım 3: AI Sohbet Özelliği Geliştirme**
  - [x] Navigasyon çubuğuna "AI Chat" linki ve ikonu eklendi.
  - [x] Temel sohbet arayüzü (`/chat`) oluşturuldu.
  - [x] Google Gemini API entegrasyonu için backend rotası (`/api/chat`) yazıldı.
  - [x] Konuşma geçmişi ve kalıcılık için Firebase Firestore entegrasyonu yapıldı.
  - [x] Kod blokları için Markdown ve Syntax Highlighting desteği eklendi.
  - [x] Yapay zeka, portfolyo içeriğiyle (MDX dosyaları) eğitildi.
  - [x] `/contact` sayfası ve API rotası oluşturuldu.
  - [x] Yapay zeka, "Function Calling" ile akıllı hale getirildi; artık doğal dildeki mesajları anlayıp iletişim formunu kendi kendine doldurabiliyor.

- [ ] **Adım 4: Sonraki Adımlar**
  - [ ] Yeni özellikler ekleme veya mevcut özellikleri geliştirme (Kullanıcı ile kararlaştırılacak).
  - [ ] Kod kalitesini artırma ve yeniden düzenleme (refactoring).
  - [ ] Hata yönetimi ve testler. 