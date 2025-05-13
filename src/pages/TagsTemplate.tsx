
import { Card } from "@/components/ui/card";

const TagsTemplate = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          🔖 Panduan Tag Template 🔖
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          😄 Penjelasan penggunaan tag di plugins AI berbasis Wordpress dengan gaya bahasa yang mudah dipahami 👇
        </p>

        <div className="mt-8 flex justify-center">
          <img 
            src="/lovable-uploads/71d19634-e893-4bfa-9309-f1103d7be058.png" 
            alt="Tags Template Guide" 
            className="rounded-lg shadow-xl max-w-md w-full"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🏷️</span> Tag Dinamis Penting
            <span className="emoji text-3xl">🏷️</span>
          </h2>
          <p className="mb-4">
            🚀 WP Plugin BardPress, GeminiPress, GPTPress, AIXPress, GroqPress dan OpenRouterPress membawa sejumlah tag dinamis yang memperkaya pengalaman pengguna dalam membuat konten yang menarik dan informatif. 💡
          </p>
          <p className="mb-4">
            ✨ Tag-tag ini memberikan kemampuan tambahan untuk mengelola dan menampilkan konten dengan lebih efisien. 🔍
          </p>

          <div className="mt-6 space-y-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">[TOC]</h3>
              <p>
                📑 Tag [TOC] memungkinkan Anda untuk membuat Table of Content secara langsung tanpa perlu mengandalkan plugin tambahan. 📋
              </p>
              <p>
                🧩 Ini sangat berguna untuk mengatur dan memberikan panduan kepada pembaca tentang struktur artikel. 🔖
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">[RELATED]</h3>
              <p>
                🔄 Dengan tag [RELATED], Anda dapat menampilkan daftar artikel terkait di dalam sebuah postingan. 📚
              </p>
              <p>
                📝 Daftar ini otomatis diambil dari kategori artikel yang sama dan menampilkan hingga 5 postingan terkait, memperkaya pengalaman pembaca dengan konten tambahan yang relevan. 🔗
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">[TITLE]</h3>
              <p>
                📌 Tag [TITLE] digunakan untuk menampilkan judul artikel di dalam postingan. 📢
              </p>
              <p>
                👁️ Ini memudahkan pembaca untuk mengetahui secara langsung topik yang dibahas dalam konten yang mereka baca. 📰
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">[VIDEO]</h3>
              <p>
                🎥 [VIDEO] adalah tag yang memungkinkan Anda menampilkan video terkait artikel. 📺
              </p>
              <p>
                🎬 Plugin akan mencari video teratas berdasarkan judul artikel, memberikan dimensi multimedia pada konten Anda. 🎞️
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🔄</span> Tag Berulang
            <span className="emoji text-3xl">🔄</span>
          </h2>
          <p className="mb-4">
            🧩 WP Plugin BardPress, GeminiPress, GPTPress, AIXPress, GroqPress dan OpenRouterPress membawa kemudahan dalam memecah artikel menjadi bagian-bagian yang lebih terstruktur dan memudahkan pengelolaan konten. 📋
          </p>

          <div className="mt-6 space-y-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">Pemecahan Artikel</h3>
              <p>
                📑 Artikel akan dipecah menjadi 31 bagian di BardPress 2. 📚
              </p>
              <p>
                📝 Bagian 1 hingga 30 adalah paragraf 1 hingga paragraf 30, sementara bagian ke-31 adalah paragraf ke-31 dan seterusnya. 📄
              </p>
              <p>
                🔍 Ini membantu dalam pengorganisasian dan navigasi konten yang lebih baik. 📋
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">Penambahan Gambar</h3>
              <p>
                🖼️ Anda dapat menambahkan hingga 30 gambar di dalam artikel dengan menggunakan tag khusus. 📸
              </p>
              <p>
                🎨 Mulai dari gambar pertama hingga gambar ke-30, setiap gambar memiliki kode khusus yang memudahkan penambahan dan tampilannya dalam konten. 🏞️
              </p>
              <p>
                ⌨️ Kode untuk URL gambar pertama adalah [IMGSRC], sedangkan gambar ke-30 adalah [IMGSRC30]. 🔢
              </p>
              <p>
                💻 Cara penulisan kode gambar adalah dengan menggunakan sintaks HTML, seperti &lt;img src="[IMGSRC]" title="[TITLE]" alt="[TITLE]"&gt;. 📝
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">Penambahan Paragraf</h3>
              <p>
                📄 Gunakan tag paragraf untuk menstrukturkan konten artikel Anda dengan lebih rapi. 📑
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                <div className="bg-gray-50 p-2 rounded">[P1] paragraf pertama</div>
                <div className="bg-gray-50 p-2 rounded">[P2] paragraf kedua</div>
                <div className="bg-gray-50 p-2 rounded">[P3] paragraf ketiga</div>
                <div className="bg-gray-50 p-2 rounded">[P4] paragraf keempat</div>
                <div className="bg-gray-50 p-2 rounded">[P5] paragraf kelima</div>
                <div className="bg-gray-50 p-2 rounded">[P6] paragraf keenam</div>
                <div className="bg-gray-50 p-2 rounded">[P7] paragraf ketujuh</div>
                <div className="bg-gray-50 p-2 rounded">[P8] paragraf kedelapan</div>
                <div className="bg-gray-50 p-2 rounded">[P9] paragraf kesembilan</div>
                <div className="bg-gray-50 p-2 rounded">[P10] paragraf kesepuluh</div>
              </div>
              <div className="mt-2 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  🔍 Lihat semua tag paragraf... 📄
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🔀</span> SPINTAX dan NESTED SPINTAX
            <span className="emoji text-3xl">🔀</span>
          </h2>
          <p className="mb-4">
            🎲 Selain tag-tag dinamis, plugin juga mendukung penggunaan SPINTAX dan NESTED SPINTAX untuk memperkaya variasi konten. 📝
          </p>

          <div className="mt-6 space-y-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">SPINTAX</h3>
              <p>
                🔄 SPINTAX ditulis dengan menggunakan sintaks {"{}"}. 📝
              </p>
              <p>
                🎯 Misalnya, {"{SPIN|TAX}"} akan menghasilkan variasi dengan kata "SPIN" dan "TAX". 🎲
              </p>
              <div className="bg-gray-100 p-3 mt-2 rounded-md">
                <code>Input: Saya {"{suka|senang|gemar}"} membaca.</code>
                <div className="mt-2">
                  <span className="font-bold">Output:</span> Saya suka membaca <strong>atau</strong> Saya senang membaca <strong>atau</strong> Saya gemar membaca
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700">NESTED SPINTAX</h3>
              <p>
                🧩 Nested Spintax digunakan untuk meningkatkan tingkat variasi dengan menyusun SPINTAX di dalam SPINTAX. 🎭
              </p>
              <p>
                🎪 Misalnya, {"{{nes|ted}|{spin|tax}}"} akan menghasilkan kombinasi variasi dari kata-kata di dalamnya. 🎯
              </p>
              <div className="bg-gray-100 p-3 mt-2 rounded-md">
                <code>Input: Saya {"{{sangat|amat} {suka|senang}|gemar}"} membaca.</code>
                <div className="mt-2">
                  <span className="font-bold">Output:</span> Saya sangat suka membaca <strong>atau</strong> Saya amat suka membaca <strong>atau</strong> Saya sangat senang membaca <strong>atau</strong> Saya amat senang membaca <strong>atau</strong> Saya gemar membaca
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-center font-medium">
              🌟 Dengan adanya fitur SPINTAX dan NESTED SPINTAX, pengguna Tool AI saya dapat dengan mudah menciptakan konten yang unik dan menarik secara otomatis, meningkatkan kualitas dan keterlibatan pembaca. ✨
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="emoji">🚀</span> Mulai Gunakan Tag Dinamis Sekarang!
          <span className="emoji">🚀</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          <span className="emoji">💡</span> Dengan memahami tag-tag di atas, Anda dapat mengoptimalkan penggunaan plugin untuk menghasilkan konten yang lebih berstruktur, informatif, dan menarik bagi pembaca Anda
          <span className="emoji">💡</span>
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 mr-4"
          >
            <span className="emoji">📚</span> Lihat Panduan API
            <span className="emoji">📚</span>
          </a>
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="emoji">👨‍💻</span> Tentang Pembuat
            <span className="emoji">👨‍💻</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TagsTemplate;
