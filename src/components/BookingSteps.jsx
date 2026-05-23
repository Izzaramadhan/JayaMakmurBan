const inquirySteps = [
  {
    number: "1",
    title: "Isi Kebutuhan Ban",
    description:
      "Pelanggan mengisi informasi kendaraan, jenis ban yang dicari, atau ukuran ban yang dibutuhkan melalui form Tanya Stok.",
    highlight: false,
  },
  {
    number: "2",
    title: "Kirim Pesan WhatsApp",
    description:
      "Setelah form dikirim, sistem akan otomatis membuka WhatsApp dengan format pesan yang sudah rapi untuk admin Jaya Makmur Ban.",
    highlight: false,
  },
  {
    number: "3",
    title: "Datang ke Cabang",
    description:
      "Setelah stok, harga, dan ukuran ban dikonfirmasi oleh admin, pelanggan dapat datang ke cabang Jaya Makmur Ban Klaten terdekat.",
    highlight: true,
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
          Alur Tanya Stok
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
          Cara mudah cek stok dan harga ban sebelum datang ke cabang.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Website ini membantu pelanggan menanyakan ketersediaan ban, ukuran,
          harga, dan cabang tujuan secara lebih praktis melalui WhatsApp.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
          {inquirySteps.map((step, index) => (
            <div key={step.number} className="flex items-center md:items-start">
              <div className="flex max-w-xs flex-col items-center">
                <div
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl font-black shadow-lg ${
                    step.highlight
                      ? "bg-yellow-400 text-slate-950 shadow-yellow-200"
                      : "bg-slate-900 text-white shadow-slate-300"
                  }`}
                >
                  {step.number}
                </div>

                <h4 className="mb-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h4>

                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>

              {index < inquirySteps.length - 1 && (
                <div className="hidden h-20 items-center px-4 text-4xl text-slate-300 md:flex">
                  ➔
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}