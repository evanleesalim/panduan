
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          🤖 Panduan Penggunaan API AI 🤖
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          😄 Penjelasan parameter API disertai dengan beberapa model AI populer seperti GPT-4, Gemini, Claude, Mistral, LLaMA, ditulis dengan gaya bahasa yang mudah dipahami 👇
        </p>

        <div className="mt-8 flex justify-center">
          <img 
            src="/lovable-uploads/a6e050b0-ee4b-43bc-88e8-acab172a9bfa.png" 
            alt="Panduan API AI" 
            className="rounded-lg shadow-xl max-w-md w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🔥</span> 1. Temperature
            <span className="emoji text-3xl">🔥</span>
          </h2>
          <p className="mb-4">
            Mengontrol tingkat kreativitas atau keacakan output AI
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-2 px-4 text-left">Model AI</th>
                  <th className="py-2 px-4 text-left">Support</th>
                  <th className="py-2 px-4 text-left">Catatan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">ChatGPT (GPT-4 / GPT-3.5)</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">Sering digunakan: 0.2 (tepat) – 0.8 (bebas)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Gemini (Google)</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">Sama fungsinya seperti GPT</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Claude (Anthropic)</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">Biasa default di 0.7</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Mistral / Mixtral</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">Sama seperti GPT</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">LLaMA</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">Bisa digunakan di inference</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p>
                <span className="emoji">💧</span> Rendah (mis. 0.1): Output sangat tepat, konservatif, dan konsisten
                <span className="emoji">💧</span>
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p>
                <span className="emoji">🔥</span> Tinggi (mis. 0.9): Output lebih bebas, kreatif, bahkan absurd
                <span className="emoji">🔥</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">📏</span> 2. Max Tokens
            <span className="emoji text-3xl">📏</span>
          </h2>
          <p className="mb-4">
            <span className="emoji">✂️</span> Batas maksimum jumlah token yang boleh digunakan dalam output model
            <span className="emoji">✂️</span>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-2 px-4 text-left">Model AI</th>
                  <th className="py-2 px-4 text-left">Batas Maksimum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">GPT-4-turbo</td>
                  <td className="py-2 px-4">128k token</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Gemini 1.5 Pro</td>
                  <td className="py-2 px-4">1 juta token (konteks), output ratusan ribu</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Claude 3 Opus</td>
                  <td className="py-2 px-4">200k token</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Mistral / Mixtral</td>
                  <td className="py-2 px-4">32k token</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">LLaMA 3</td>
                  <td className="py-2 px-4">8k–32k token</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p>
                <span className="emoji">📉</span> Rendah (mis. 100): Jawaban bisa terputus atau tidak lengkap
                <span className="emoji">📉</span>
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p>
                <span className="emoji">📈</span> Tinggi (mis. 2000++): Jawaban lebih lengkap dan mendalam, tapi hati-hati penggunaan kuota
                <span className="emoji">📈</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🧠</span> 3. Top-p (Nucleus Sampling)
            <span className="emoji text-3xl">🧠</span>
          </h2>
          <p className="mb-4">
            <span className="emoji">🎯</span> Mengontrol kumpulan token berdasarkan probabilitas kumulatif
            <span className="emoji">🎯</span>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-2 px-4 text-left">Model AI</th>
                  <th className="py-2 px-4 text-left">Support</th>
                  <th className="py-2 px-4 text-left">Default Umum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">GPT (OpenAI)</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">1.0</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Gemini</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">0.95</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Claude</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">1.0</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Mistral / LLaMA</td>
                  <td className="py-2 px-4">✅</td>
                  <td className="py-2 px-4">0.9–1.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <span className="emoji">🔒</span> Rendah (mis. 0.2): Pilihan output sangat terbatas dan fokus
                <span className="emoji">🔒</span>
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p>
                <span className="emoji">🌀</span> Tinggi (mis. 0.95): Model bebas pilih kata dari banyak kemungkinan
                <span className="emoji">🌀</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🪜</span> 4. Top-k
            <span className="emoji text-3xl">🪜</span>
          </h2>
          <p className="mb-4">
            <span className="emoji">📊</span> Membatasi pilihan hanya pada "k" token teratas sebelum sampling
            <span className="emoji">📊</span>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-2 px-4 text-left">Model AI</th>
                  <th className="py-2 px-4 text-left">Support</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">GPT</td>
                  <td className="py-2 px-4">❌ (digunakan Top-p saja)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Gemini</td>
                  <td className="py-2 px-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Claude</td>
                  <td className="py-2 px-4">❌</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Mistral / LLaMA</td>
                  <td className="py-2 px-4">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <span className="emoji">📉</span> Rendah (mis. 10): Output aman, familiar, dan logis
                <span className="emoji">📉</span>
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p>
                <span className="emoji">📈</span> Tinggi (mis. 100–200): Output bisa unik atau eksentrik
                <span className="emoji">📈</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-xl shadow-md card-hover bg-gradient-to-br from-blue-50 to-white col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="emoji text-3xl">🔁</span> 5. Stream
            <span className="emoji text-3xl">🔁</span>
          </h2>
          <p className="mb-4">
            <span className="emoji">💨</span> Mengatur apakah output dikirim secara real-time atau sekaligus
            <span className="emoji">💨</span>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-2 px-4 text-left">Model AI</th>
                  <th className="py-2 px-4 text-left">Support Streaming</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">GPT-4 / 3.5</td>
                  <td className="py-2 px-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Gemini 1.5</td>
                  <td className="py-2 px-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Claude 3</td>
                  <td className="py-2 px-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Mistral</td>
                  <td className="py-2 px-4">✅</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">LLaMA</td>
                  <td className="py-2 px-4">✅ (di lingkungan khusus)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p>
                <span className="emoji">🚫</span> False: Jawaban muncul sekaligus di akhir, cocok untuk batch atau log
                <span className="emoji">🚫</span>
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p>
                <span className="emoji">✅</span> True: Jawaban dikirim bagian per bagian secara live, seperti mengetik langsung
                <span className="emoji">✅</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="emoji">✅</span> Singkatnya Soal Parameter itu adalaha : 
          <span className="emoji">🚀</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          <span className="emoji">💡</span> Semakin tinggi nilai maka semakin panjang artikel, semakin santai artikel, semakin kreatif AI, meski resikonya bisa ngaco / ngarang bebas serta kurang hati - hati alias Santai / Santui
          <span className="emoji">💡</span>
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="emoji">🚀</span> Mulai Gunakan API AI Sekarang!
          <span className="emoji">🚀</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          <span className="emoji">💡</span> Dengan memahami parameter-parameter di atas, Anda dapat mengoptimalkan penggunaan API AI untuk berbagai kebutuhan
          <span className="emoji">💡</span>
        </p>
        <div className="flex justify-center">
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

export default Index;
