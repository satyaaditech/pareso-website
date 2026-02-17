import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-sage-green/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3iO1HpUZYYOn4_fVunkTQk8cYwL1KGWWAw&s"
              alt="PARESO Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-playfair text-2xl font-bold text-deep-teal">PARESO</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-deep-teal">
            <Link href="#tentang" className="hover:text-terracotta transition">Tentang</Link>
            <Link href="#program" className="hover:text-terracotta transition">Program</Link>
            <Link href="#umkm" className="hover:text-terracotta transition">UMKM</Link>
            <Link href="#produk" className="hover:text-terracotta transition">Produk</Link>
            <Link href="#kontak" className="hover:text-terracotta transition">Kontak</Link>
          </div>
          <button className="bg-terracotta text-cream px-6 py-2 rounded-full hover:bg-deep-teal transition font-medium">
            Bergabung
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-green/20 to-cream z-0" />
        <Image
          src="/images/hero-spices.png"
          alt="Indonesian Spices"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-deep-teal mb-6 leading-tight">
            Menjadikan Herbal<br />Indonesia Mendunia
          </h1>
          <p className="text-xl md:text-2xl text-terracotta mb-8 font-medium">
            Pawon Rempah Surakarta - Pusat Pengembangan UMKM Herbal Terkemuka
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-terracotta text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-teal transition shadow-lg">
              Bergabung Bersama Kami
            </button>
            <button className="bg-cream text-deep-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage-green hover:text-cream transition border-2 border-deep-teal">
              Lihat Produk
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-deep-teal mb-4">Tentang PARESO</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-deep-teal/80 leading-relaxed mb-6">
                <strong className="text-terracotta">PARESO (Pawon Rempah Surakarta)</strong> adalah organisasi pembina UMKM berbasis rempah dan herbal yang menaungi sekitar <strong>100 UMKM</strong> di wilayah eks-Karesidenan Surakarta.
              </p>
              <p className="text-lg text-deep-teal/80 leading-relaxed mb-6">
                Kami berkomitmen untuk bertransformasi menjadi organisasi yang terstruktur, produktif, dan berkelanjutan—menjadikan produk herbal Indonesia setara dengan <strong className="text-terracotta">Traditional Chinese Medicine (TCM)</strong> dalam hal kualitas, standardisasi, dan kepercayaan konsumen.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-sage-green/10 rounded-lg">
                  <div className="font-playfair text-4xl font-bold text-terracotta">100+</div>
                  <div className="text-sm text-deep-teal mt-2">UMKM Binaan</div>
                </div>
                <div className="text-center p-4 bg-sage-green/10 rounded-lg">
                  <div className="font-playfair text-4xl font-bold text-terracotta">50%</div>
                  <div className="text-sm text-deep-teal mt-2">Target BPOM 2027</div>
                </div>
                <div className="text-center p-4 bg-sage-green/10 rounded-lg">
                  <div className="font-playfair text-4xl font-bold text-terracotta">10+</div>
                  <div className="text-sm text-deep-teal mt-2">Target Ekspor 2029</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/workshop.png"
                alt="PARESO Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-24 bg-gradient-to-b from-sage-green/10 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-deep-teal mb-4">Program Unggulan</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
            <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
              Sistem pembinaan bertahap untuk mengembangkan UMKM dari pemula hingga champion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: "Starter", color: "pastel-coral", desc: "UMKM baru memulai", benefits: "2 pelatihan/tahun" },
              { level: "Growing", color: "sage-green", desc: "Berkembang aktif", benefits: "4 pelatihan/tahun" },
              { level: "Established", color: "dusty-rose", desc: "Stabil & ber-BPOM", benefits: "6 pelatihan/tahun" },
              { level: "Champion", color: "terracotta", desc: "Siap ekspor", benefits: "Unlimited access" },
            ].map((program, idx) => (
              <div key={idx} className={`bg-${program.color}/20 border-2 border-${program.color} rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-2`}>
                <div className={`w-16 h-16 bg-${program.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold text-cream">{idx + 1}</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-deep-teal mb-2">{program.level}</h3>
                <p className="text-deep-teal/70 mb-4">{program.desc}</p>
                <div className="text-sm font-semibold text-terracotta">{program.benefits}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UMKM Highlights */}
      <section id="umkm" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-deep-teal mb-4">UMKM Binaan Kami</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
            <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
              Kisah sukses UMKM yang telah berkembang bersama PARESO
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jamu Sehat Ibu Sari", category: "Minuman Herbal", achievement: "BPOM Certified 2025" },
              { name: "Sabun Ekoenzim Lestari", category: "Produk Kecantikan", achievement: "Omzet +200%" },
              { name: "Rempah Nusantara", category: "Rempah Tradisional", achievement: "Ekspor ke Malaysia" },
            ].map((umkm, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-48 bg-gradient-to-br from-sage-green to-pastel-coral"></div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-deep-teal mb-2">{umkm.name}</h3>
                  <p className="text-terracotta font-medium mb-3">{umkm.category}</p>
                  <div className="flex items-center gap-2 text-sm text-deep-teal/70">
                    <svg className="w-5 h-5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {umkm.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-24 bg-gradient-to-b from-cream to-sage-green/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-deep-teal mb-4">Produk Unggulan</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
            <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
              Produk herbal berkualitas tinggi dari UMKM binaan PARESO
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/images/products-showcase.png"
              alt="PARESO Products"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Jamu Tradisional", "Minuman Herbal", "Sabun Ekoenzim", "Produk Kecantikan"].map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-terracotta/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold text-deep-teal">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-deep-teal text-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "UMKM Binaan" },
              { number: "300+", label: "Produk Herbal" },
              { number: "50+", label: "Pelatihan/Tahun" },
              { number: "20+", label: "Mitra Strategis" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="font-playfair text-5xl font-bold text-pastel-coral mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-deep-teal mb-4">Mitra Kami</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["UNS", "Pemkot Surakarta", "Solo Technopark", "Shopee"].map((partner, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center h-32">
                <span className="font-playfair text-xl font-bold text-deep-teal">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-terracotta to-pastel-coral text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-5xl font-bold mb-6">Bergabung dengan PARESO</h2>
          <p className="text-xl mb-8 opacity-90">
            Mari bersama-sama mengembangkan bisnis herbal Anda dan menjadikan produk Indonesia mendunia
          </p>
          <button className="bg-cream text-terracotta px-10 py-4 rounded-full text-lg font-bold hover:bg-deep-teal hover:text-cream transition shadow-xl">
            Daftar Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-deep-teal text-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">PARESO</h3>
              <p className="text-cream/70">Pawon Rempah Surakarta</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-cream/70">
                <li><Link href="#tentang" className="hover:text-pastel-coral transition">Tentang</Link></li>
                <li><Link href="#program" className="hover:text-pastel-coral transition">Program</Link></li>
                <li><Link href="#umkm" className="hover:text-pastel-coral transition">UMKM</Link></li>
                <li><Link href="#produk" className="hover:text-pastel-coral transition">Produk</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-cream/70">
                <li>Solo Technopark</li>
                <li>Surakarta, Jawa Tengah</li>
                <li>info@pareso.id</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "YouTube"].map((social, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-pastel-coral transition">
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 text-center text-cream/50">
            <p>&copy; 2026 PARESO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
