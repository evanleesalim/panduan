
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Bank = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 3000);
    
    toast({
      title: "Berhasil disalin!",
      description: `Nomor ${name} telah disalin ke clipboard.`,
      duration: 3000,
    });
  };

  const bankAccounts = [
    {
      name: "ShopeePay Rif'an Muazin",
      account: "085643434382",
    },
    {
      name: "DANA Rif'an Muazin",
      account: "085643434382",
    },
    {
      name: "Gopay Rif'an Muazin",
      account: "085643434382",
    },
    {
      name: "BRI LINA IRAWAN",
      account: "023601036972505",
    },
    {
      name: "OVO Rifan Muazin",
      account: "085643434382",
    },
    {
      name: "Paypal Rif'an Muazin",
      account: "boss@bosspulsa.com",
    },
    {
      name: "BCA Rif'an Muazin",
      account: "0981-644-564",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          💳 Data Rekening 💳
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          <span className="emoji">🏦</span> Informasi rekening untuk melakukan pembayaran
          <span className="emoji">🏦</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-center">QRIS</h3>
                <div className="flex justify-center">
                  <img
                    src="https://pbs.twimg.com/media/GoCDOvlaAAAb97D?format=jpg&name=large"
                    alt="QRIS Rifan Muazin"
                    className="max-w-full rounded-lg border border-gray-200"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-gray-600">
                  Scan QR code untuk pembayaran melalui QRIS
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">Informasi Rekening</h3>
              <div className="space-y-4">
                {bankAccounts.map((bank, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div>
                      <p className="font-medium">{bank.name}</p>
                      <p className="text-blue-600 font-mono">{bank.account}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bank.account, bank.name)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${
                        copied === bank.account
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                      } transition-colors`}
                    >
                      {copied === bank.account ? (
                        <>
                          <span className="emoji">✅</span>
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-center text-blue-700">
              <span className="emoji">💡</span> Klik tombol "Salin" di samping nomor rekening untuk menyalin nomor ke clipboard
              <span className="emoji">💡</span>
            </p>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="emoji">📞</span> Butuh Bantuan?
            <span className="emoji">📞</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            <span className="emoji">📲</span> Silahkan hubungi kami melalui kontak berikut
            <span className="emoji">📲</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/085643434382"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="emoji">💬</span> WhatsApp
            </a>
            <a
              href="https://facebook.com/rifanmuazin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="emoji">👍</span> Facebook
            </a>
            <a
              href="https://ebot.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="emoji">🌐</span> Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
