import React from 'react';

export default function BookingSteps() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900">
          Cara Mudah Servis Tanpa Nunggu Lama
        </h2>
        
        {/* Alur Langkah-langkah */}
        <div className="flex flex-col md:flex-row justify-center items-start space-y-10 md:space-y-0 md:space-x-8">
          
          {/* Langkah 1 */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-slate-300">
              1
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3">Pilih Layanan</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cari ban, velg, atau pilih jenis servis (spooring & balancing) yang sesuai dengan kebutuhan mobil Anda di katalog kami.
            </p>
          </div>

          {/* Panah Pemisah 1 (Hanya muncul di Desktop) */}
          <div className="hidden md:flex items-center h-20 text-gray-300 text-4xl">
            ➔
          </div>

          {/* Langkah 2 */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-slate-300">
              2
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3">Tentukan Jadwal</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Klik tombol booking untuk terhubung ke WhatsApp admin kami. Tentukan hari dan jam kedatangan Anda.
            </p>
          </div>

          {/* Panah Pemisah 2 (Hanya muncul di Desktop) */}
          <div className="hidden md:flex items-center h-20 text-gray-300 text-4xl">
            ➔
          </div>

          {/* Langkah 3 */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-yellow-200">
              3
            </div>
            <h4 className="font-bold text-xl text-slate-900 mb-3">Datang & Beres!</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Datang ke bengkel sesuai jadwal yang disepakati. Teknisi ahli kami akan langsung mengerjakan mobil Anda tanpa antre.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}