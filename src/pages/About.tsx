
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          👨‍💻 Tentang Saya 👨‍💻
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Developer, Programmer, dan Pencipta Tools SAAS Autoblog
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="lg:col-span-1">
          <Card className="p-6 rounded-xl shadow-md overflow-hidden">
            <div className="flex justify-center mb-6">
              <img
                src="/lovable-uploads/9a3002d3-3bbc-444b-9744-470372682f20.png"
                alt="Rifan Muazin dan Istri"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-blue-700">Rifan Muazin</h2>
              <p className="text-gray-600">
                <span className="font-medium">Nama Lengkap:</span> Rifan Muazin Ibnu Asro Ibnu Basiran Ibnu Sagoh Ibnu Suro Senen Ar-Rifai
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Lahir:</span> Pati, 12 April 1982
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Asal:</span> Sundoluhur, Kayen, Pati, Jateng, Indonesia
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Tinggal:</span> Bantul
              </p>
              <p className="text-gray-600">
                <span className="font-medium">No. HP / WA:</span> 085643434382
              </p>
              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://facebook.com/rifanmuazin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    FB - Evan Lee Salim
                  </a>
                  <a
                    href="https://facebook.com/sundoluhur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    FB - Rifan Muazin
                  </a>
                  <a
                    href="https://ebot.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-xl shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Data Pribadi</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Istri:</span> Lina Irawan, dari Sukabumi, Palabuhan Ratu
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Anak:</span> 3 Ray, Azzam, Ammar
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Saudara:</span> Kak Muslim, Kak Ali Ikhwan, Mbak Iskozi
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-xl shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Pendidikan</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600 text-sm">🎓</span>
                </div>
                <div>
                  <p className="font-medium">RA, MI & MTs Miftahul Muhtadin Sundoluhur</p>
                  <p className="text-sm text-gray-500">1989 - 1999</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600 text-sm">🎓</span>
                </div>
                <div>
                  <p className="font-medium">SMA 2 Pati</p>
                  <p className="text-sm text-gray-500">1999 - 2002</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600 text-sm">🎓</span>
                </div>
                <div>
                  <p className="font-medium">Kimia, FMIPA, UGM</p>
                  <p className="text-sm text-gray-500">2002</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Keahlian</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600">💻</span>
                </div>
                <span>PHP Coder Specialis SAAS Autoblog</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600">🔧</span>
                </div>
                <span>Modifikasi WP Plugin</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600">🧩</span>
                </div>
                <span>Creator WP Plugin Autoblog</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600">🎨</span>
                </div>
                <span>Modifikasi WP Themes agar menjadi AGC</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600">🔨</span>
                </div>
                <span>Creator AGC Script dengan PHP Murni / Stand Alone</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <span className="text-blue-600">📝</span>
                </div>
                <span>Native PHP Coder</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-xl shadow-md mt-8">
            <h3 className="text-2xl font-semibold mb-6">Karya</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  name: "WallSpot",
                  description:
                    "Tool SAAS Autoblog Niche Wallpaper untuk Blogspot dan WP, di mana sekali Klik akan menghasilkan 1000 Artikel dalam 30 detik dalam bentuk XML",
                },
                {
                  name: "WallSpot Plus",
                  description:
                    "Tool SAAS Autoblog Niche Wallpaper untuk Blogspot dan WP, di mana sekali Klik akan menghasilkan artikel sesuai keyword yang diberikan, lebih lambat dari pada WallSpot namun lebih bagus dari Sisi Keyword dan Judul karena tidak Random",
                },
                {
                  name: "TubeSpot",
                  description:
                    "Tool SAAS Autoblog Niche Video Youtube untuk Blogspot dan WP, di mana sekali Klik akan menghasilkan 500 Artikel dalam 60 detik dalam bentuk XML",
                },
                {
                  name: "TMDBSpot",
                  description:
                    "Tool SAAS Autoblog Niche Review FILM dari API TMDB.com untuk Blogspot dan WP, di mana sekali Klik akan menghasilkan 1000 Artikel dalam 30 detik dalam bentuk XML",
                },
                {
                  name: "AliSuite",
                  description:
                    "Tool SAAS Autoblog AliExpress Affiliate untuk Blogspot dan WP, di mana sekali Klik akan menghasilkan 500 Artikel dalam 60 detik dalam bentuk XML",
                },
                {
                  name: "BardPress",
                  description:
                    "WP Plugin AutoBlog AI sistem Bulk Post memakai API AI Gemini yang setiap artikel bisa dipasang 30 Gambar dan 1 Video, sudah Auto SEO dan Auto Feature Images / Thumbnail",
                },
                {
                  name: "GPTPress",
                  description:
                    "WP Plugin AutoBlog AI sistem Bulk Post memakai API AI ChatGPT yang setiap artikel bisa dipasang 30 Gambar dan 1 Video, sudah Auto SEO dan Auto Feature Images / Thumbnail",
                },
                {
                  name: "ClaudePress",
                  description:
                    "WP Plugin AutoBlog AI sistem Bulk Post memakai API AI Claude yang setiap artikel bisa dipasang 30 Gambar dan 1 Video, sudah Auto SEO dan Auto Feature Images / Thumbnail",
                },
                {
                  name: "AIXPress",
                  description:
                    "WP Plugin AutoBlog AI sistem Bulk Post memakai API XAI / AI Twitter yang setiap artikel bisa dipasang 30 Gambar dan 1 Video, sudah Auto SEO dan Auto Feature Images / Thumbnail",
                },
                {
                  name: "GroqPress",
                  description:
                    "WP Plugin AutoBlog AI sistem Bulk Post memakai API AI Groq.com Multi Models dengan AI Utama Meta AI / LLAMA yang setiap artikel bisa dipasang 30 Gambar dan 1 Video, sudah Auto SEO dan Auto Feature Images / Thumbnail",
                },
                {
                  name: "OpenRouterPress",
                  description:
                    "WP Plugin AutoBlog AI sistem Bulk Post memakai API AI OpenRouter.AI yang setiap artikel bisa dipasang 30 Gambar dan 1 Video, sudah Auto SEO dan Auto Feature Images / Thumbnail",
                },
                {
                  name: "BelanjaSuite",
                  description:
                    "All in One Tool, Autoblog di WP & Blogspot (SAAS), Auto Post Video di Telegram, dan SAAS RSS untuk IFTTT berisi Konten Affiliate Shopee Indonesia.",
                },
                {
                  name: "PHP Encoder",
                  description: "Tanpa Loader, sekali bayar untuk semua Project PHP Anda",
                },
                {
                  name: "KarirSpot",
                  description: "Autoblog Blogspot & WP untuk Bikin Situs Lowongan Kerja",
                },
                {
                  name: "TomTopSpot",
                  description:
                    "SAAS Autoblog Affiliate TomTop.com untuk Blogspot & WP dalam bentuk Generator XML yang nantinya di-Import mirip WallSpot dll",
                },
                {
                  name: "BookSuite",
                  description: "Autoblog untuk GoogleBook di Blogspot & WP (XML)",
                },
                {
                  name: "AzonSpot",
                  description: "untuk Amazon",
                },
                {
                  name: "SPINPRESS",
                  description: "Bikin Artikel Massal modal Spintaxt",
                },
                {
                  name: "FlickerSpot",
                  description: "Autoblog WP & Blogspot dengan data dari Flickr API",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600">{index + 1}. {item.name}</h4>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="emoji">💳</span> Tertarik dengan Produk Saya?
          <span className="emoji">💳</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          <span className="emoji">🔍</span> Lihat informasi rekening untuk melakukan pembayaran
          <span className="emoji">🔍</span>
        </p>
        <div className="flex justify-center">
          <a
            href="/bank"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="emoji">💳</span> Lihat Rekening
            <span className="emoji">💳</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
