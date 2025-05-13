
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  image: string;
  price: number;
  url: string;
  description: string;
}

const About = () => {
  const products: Product[] = [
    {
      name: "GeminiPress Personal",
      image: "https://ebot.my.id/wp-content/uploads/2025/05/45a57f83-0d8c-4c07-afac-5cdb8baad048.png",
      price: 310000,
      url: "https://ebot.my.id/product/geminipress/",
      description: "⚡ GeminiPress adalah plugin WordPress 2-in-1 yang menggabungkan Autoblog & Bulk Article Generator langsung dari dashboard WordPress Anda! 🧠 Didukung Semua Model Gemini Flash, Artikel yang dibuat sudah lengkap dengan Featured Image, Insert hingga 30 gambar, 1 video, dan TOC secara otomatis. 🚀"
    },
    {
      name: "GeminiPress Reseller",
      image: "https://ebot.my.id/wp-content/uploads/2025/05/45a57f83-0d8c-4c07-afac-5cdb8baad048.png",
      price: 1200000,
      url: "https://ebot.my.id/product/geminipress-lifetime/",
      description: "⚡ GeminiPress adalah plugin WordPress 2-in-1 yang menggabungkan Autoblog & Bulk Article Generator langsung dari dashboard WordPress Anda! 🧠 🚀 Terdiri dari 2 Plugin yaitu GeminiPress yang berbasis Keyword / Judul untuk membuat Artikel dari Nol hanya modal Judul atau Keyword, atau GeminiPress Rewriter bermodalkan URL web lain untuk ditulis Ulang dalam bahasa yang sama dengan Gaya bahasa baru atau ke dalam Bahasa lain (Translate Rewrite)."
    },
    {
      name: "OpenRouterPress",
      image: "https://ebot.my.id/wp-content/uploads/2025/02/OpenRouterPress1.png",
      price: 690000,
      url: "https://ebot.my.id/product/openrouterpress/",
      description: "OpenRouterPress - WP Plugin Autoblog Generator Bulk Post dengan Multi Models AI! 🚀 Buat artikel otomatis dengan 300+ Model AI, termasuk 30+ model gratis tanpa biaya!"
    },
    {
      name: "PHP Encoder Sekali Bayar",
      image: "https://ebot.my.id/wp-content/uploads/2025/02/PHP-Encoder-1.png",
      price: 195000,
      url: "https://ebot.my.id/product/encoder/",
      description: "Lindungi Kode PHP Anda dengan Mudah, Sekali Bayar, Tanpa Ribet! Apakah Anda khawatir kode PHP Anda dicuri, dimodifikasi tanpa izin, atau disalin tanpa sepengetahuan Anda? Kini, dengan PHP Encoder Sekali Bayar, Anda bisa mengenkripsi file PHP dengan mudah dan aman tanpa perlu loader tambahan di server!"
    },
    {
      name: "GPTPress",
      image: "https://ebot.my.id/wp-content/uploads/2025/02/gpt-press.png",
      price: 650000,
      url: "https://ebot.my.id/product/gptpress/",
      description: "Plugin WordPress berbasis GPT untuk membuat artikel massal berkualitas tinggi."
    },
    {
      name: "Gemini AI Semi AutoBlog",
      image: "https://ebot.my.id/wp-content/uploads/2025/01/Gemini-AI-Semi-Autoblog.png",
      price: 150000,
      url: "https://ebot.my.id/product/geminiai/",
      description: "Tingkatkan produktivitas Anda dengan Gemini AI Semi AutoBlog, plugin cerdas untuk membuat artikel otomatis langsung di draft WordPress, siap Anda edit agar lebih sempurna!"
    },
    {
      name: "DeepSeekPress",
      image: "https://ebot.my.id/wp-content/uploads/2025/01/DeepSeekPress.png",
      price: 599000,
      url: "https://ebot.my.id/product/deepseekpress/",
      description: "DeepSeekPress adalah plugin WordPress berbasis DeepSeek AI Premium untuk membuat artikel massal sesuai custom prompt."
    },
    {
      name: "ClaudePress Sekali Bayar",
      image: "https://ebot.my.id/wp-content/uploads/2025/01/ClaudePress.png",
      price: 499900,
      url: "https://ebot.my.id/product/claudepress/",
      description: "ClaudePress adalah plugin WordPress berbasis Claude AI Premium untuk membuat artikel massal sesuai custom prompt."
    },
    {
      name: "AIXPRESS Unlimited Domain",
      image: "https://ebot.my.id/wp-content/uploads/2024/12/aixpress.png",
      price: 200000,
      url: "https://ebot.my.id/product/aixpress-unlimited/",
      description: "Gunakan Kupon NANA, Diskon 101rb Semua AIXPRESS Unlimited. Sekali Bayar, Pakai Selamanya!"
    },
    {
      name: "AIXPress Sekali Bayar",
      image: "https://ebot.my.id/wp-content/uploads/2024/12/aixpress.png",
      price: 1200000,
      url: "https://ebot.my.id/product/aixpress/",
      description: "Gunakan Kupon BABYNANA, Anda akan mendapatkan Diskon Spesial Rp.701.000, Jadi Hanya Membayar Rp.499rb"
    },
    {
      name: "NEWS AI SAAS AUTOBLOG",
      image: "https://ebot.my.id/wp-content/uploads/2024/10/news-ai.png",
      price: 2000000,
      url: "https://ebot.my.id/product/news-ai-saas-autoblog/",
      description: "Tool untuk membuat blog berita otomatis dengan AI."
    },
    {
      name: "GroqPress WP Plugin Reseller Right",
      image: "https://ebot.my.id/wp-content/uploads/2024/09/GroqPress1.png",
      price: 900000,
      url: "https://ebot.my.id/product/groqpress-wp-plugin-reseller-right/",
      description: "Mau Beli Lisensi Lifetime 1 Domain Saja? Bisa! Rp.50.000 Saja!"
    },
    {
      name: "GroqPress WP Plugin",
      image: "https://ebot.my.id/wp-content/uploads/2024/07/GroqPress.png",
      price: 300000,
      url: "https://ebot.my.id/product/groqpress-plugin/",
      description: "Plugin WordPress untuk membuat artikel otomatis dengan Groq AI."
    },
    {
      name: "GroqPress SAAS",
      image: "https://ebot.my.id/wp-content/uploads/2024/07/GroqPress.png",
      price: 300000,
      url: "https://ebot.my.id/product/groqpress/",
      description: "SAAS untuk membuat artikel otomatis dengan Groq AI."
    },
    {
      name: "BelanjaSuite Malaysia",
      image: "https://ebot.my.id/wp-content/uploads/2024/06/MyBelanjaSuite.png",
      price: 250000,
      url: "https://ebot.my.id/product/mybelanjasuite/",
      description: "Tool untuk affiliate marketing di Malaysia."
    },
    {
      name: "BardPress - AI AUTOBLOG",
      image: "https://ebot.my.id/wp-content/uploads/2024/01/BardPress.png",
      price: 350000,
      url: "https://ebot.my.id/product/bardpress/",
      description: "Perkenalkan BardPress: 2 in 1 Tool Artikel Otomatis Gemini AI yaitu BardPress SAAS dan BardPress WP Plugin."
    },
    {
      name: "WallSuite",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/wallsuite-1.png",
      price: 350000,
      url: "https://ebot.my.id/product/wallsuite/",
      description: "WallSuite is an Autoblog Tool For WallSpot, Wordpress and Static (HTML Sites)."
    },
    {
      name: "ALIPIN",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/alipin-500x5001-1.png",
      price: 300000,
      url: "https://ebot.my.id/product/alipin/",
      description: "ALIPIN berguna untuk membuat Blog AliExpress dengan API Resmi AliExpress Khusus untuk Produk yang ada Videonya saja."
    },
    {
      name: "DailySuite",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/DailySuite1.png",
      price: 300000,
      url: "https://ebot.my.id/product/dailysuite/",
      description: "DailySuite adalah Tool Autoblog WhiteHat API DailyMotion dengan 2 jalur monetize atau monetize Ganda."
    },
    {
      name: "BookSuite",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/41747978_1116631568513029_4608497786894155776_n.jpg",
      price: 200000,
      url: "https://ebot.my.id/product/booksuite/",
      description: "Tool untuk membuat blog buku otomatis."
    },
    {
      name: "TubeSpot",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/TUBESPOT.png",
      price: 200000,
      url: "https://ebot.my.id/product/tubespot/",
      description: "TubeSpot, Tool Autoblog Blogspot dan WP Untuk menjejali Blogspot dan WP Anda dengan Ratusan - Ribuan Artikel Niche Video Youtube."
    },
    {
      name: "KarirSpot",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/KarirSpot.png",
      price: 300000,
      url: "https://ebot.my.id/product/karirspot/",
      description: "KarirSpot adalah Tool Autoblog 2 Sumber (Karir.com & CareerJet.com), 2 Platform (Blogspot & WP), 2 Metode Posting."
    },
    {
      name: "WallSpot Plus",
      image: "https://ebot.my.id/wp-content/uploads/2023/01/spiderman.png",
      price: 300000,
      url: "https://ebot.my.id/product/wallspotplus/",
      description: "WallSpot Plus: 1 Tool Autoblog Komplit dengan 7 Sumber Search Engine untuk menjejali Unlimited Blogspot & WP Anda dengan Unlimited Artikel Wallpaper."
    },
    {
      name: "TMDBSpot Plus",
      image: "https://ebot.my.id/wp-content/uploads/2022/12/tmdb.jpg",
      price: 300000,
      url: "https://ebot.my.id/product/tmdbspot/",
      description: "Tool untuk membuat blog film otomatis dari TMDB."
    },
    {
      name: "CreativeSpot",
      image: "https://ebot.my.id/wp-content/uploads/2022/12/creativefabrica.png",
      price: 300000,
      url: "https://ebot.my.id/product/creativespot/",
      description: "Evan Faturrohman menghasilkan 400 USD/minggu dari Affiliate Creative Fabrica, Apakah Anda Ingin menghasilkan juga dari Creative Fabrica? Cara Mudahnya Mulainya Pakai CreativeSpot saja."
    },
    {
      name: "Belanja Suite",
      image: "https://ebot.my.id/wp-content/uploads/2022/12/BelanjaSuite1.png",
      price: 299900,
      url: "https://ebot.my.id/product/belanjasuite/",
      description: "Tool Autoblog Blogspot dan WP Untuk Affiliate Shopee Multi Negara."
    },
    {
      name: "WallSpot",
      image: "https://ebot.my.id/wp-content/uploads/2022/12/default-1.png",
      price: 200000,
      url: "https://ebot.my.id/product/wallspot/",
      description: "Cara Tercepat dan Termudah Menjejali Blogspot dan Wordpress Anda dengan Ribuan Artikel Wallpaper Unik tanpa Install, tanpa beli domain, tanpa bayar hosting dan tanpa repot."
    },
    {
      name: "AliSuite",
      image: "https://ebot.my.id/wp-content/uploads/2020/09/default-2.png",
      price: 300000,
      url: "https://ebot.my.id/product/alisuite/",
      description: "Tool untuk affiliate marketing dengan AliExpress."
    },
    {
      name: "FlickrSpot Plus",
      image: "https://ebot.my.id/wp-content/uploads/2020/09/20150512091832_Manjakan_112_Juta_Penggunanya__Flickr_Hadirkan_Tiga_Fitur_Terbaru.jpg",
      price: 10,
      url: "https://ebot.my.id/product/flickrspot-plus/",
      description: "FlickrSpot adalah Tool Autoblog yang berbentu Aplikasi Online / Saas yang bisa membuat Ratusan - Ribuan Artikel Wallpaper dengan sumber Flickr untuk Blogspot dan WP dengan 1 X Klik dan dalam hitungan detik saja."
    },
    {
      name: "SPINPRESS",
      image: "https://ebot.my.id/wp-content/uploads/2020/09/Simple-Drink-Water-Photo-Instagram-Post.png",
      price: 200000,
      url: "https://ebot.my.id/product/spinpress/",
      description: "SPINPRESS adalah Plugin Wordpress yang berguna untuk membuat Ratusan – Ribuan Artikel Unik dengan bermodalkan 1 Template Artikel Spintaxt / Nested Spintaxt."
    },
    {
      name: "TomtopSpot Plus",
      image: "https://ebot.my.id/wp-content/uploads/2020/07/Tomtop.png",
      price: 250000,
      url: "https://ebot.my.id/product/tomtopspot-plus/",
      description: "TomtopSpot adalah Tool Saas / Online yang dengan 1 X Klik membuat Ratusan Artikel Affiliate Produk – Produk Tomtop dalam beberapa detik saja."
    },
    {
      name: "AzonSpot Lite Plus (1 Tahun)",
      image: "https://ebot.my.id/wp-content/uploads/2020/07/AzonSpot.png",
      price: 150000,
      url: "https://ebot.my.id/product/azon/",
      description: "Tool untuk affiliate marketing dengan Amazon (1 tahun)."
    },
    {
      name: "AzonSpot Lite Plus 1 Bulan",
      image: "https://ebot.my.id/wp-content/uploads/2020/07/AzonSpot.png",
      price: 20000,
      url: "https://ebot.my.id/product/azonspot-lite-plus/",
      description: "Tool untuk affiliate marketing dengan Amazon (1 bulan)."
    },
  ];

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

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
            <h3 className="text-2xl font-semibold mb-6">Produk Saya</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-1 text-blue-700">{product.name}</h4>
                    <p className="text-green-600 font-semibold mb-2">{formatPrice(product.price)}</p>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {product.description}
                    </p>
                    <a 
                      href={product.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full">
                        Lihat Detail
                      </Button>
                    </a>
                  </div>
                </Card>
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
