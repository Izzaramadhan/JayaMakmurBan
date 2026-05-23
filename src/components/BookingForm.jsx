import { useState } from "react";
import { business, services, branches } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

const initialForm = {
  name: "",
  phone: "",
  vehicle: "",
  service: services[0]?.title || "Tanya Stok via WhatsApp",
  branch: branches[0]?.name || "Cabang terdekat",
  note: "",
};

const stockInquirySteps = [
  {
    title: "Isi kebutuhan",
    description: "Masukkan data kendaraan dan kebutuhan ban.",
  },
  {
    title: "Kirim WhatsApp",
    description: "Pesan otomatis akan dikirim ke admin.",
  },
  {
    title: "Datang ke cabang",
    description: "Kunjungi cabang setelah stok dikonfirmasi.",
  },
];

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      `Halo Admin ${business.shortName}, saya ingin bertanya tentang stok dan harga ban.`,
      `Nama: ${form.name || "-"}`,
      `No. HP: ${form.phone || "-"}`,
      `Kendaraan: ${form.vehicle || "-"}`,
      `Kebutuhan: ${form.service || "-"}`,
      `Cabang tujuan: ${form.branch || "-"}`,
      `Catatan: ${form.note || "-"}`,
    ].join("\n");

    window.open(
      createWhatsAppLink(business.phoneWa, message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="booking" className="bg-slate-100 px-4 py-24 text-slate-950">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Tanya Stok
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            Cek stok, ukuran, dan harga ban lebih mudah lewat WhatsApp.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Pelanggan dapat mengisi data singkat untuk menanyakan ketersediaan
            ban, pilihan ukuran, harga, atau cabang Jaya Makmur Ban Klaten yang
            ingin dikunjungi. Setelah dikirim, sistem akan membuka WhatsApp
            dengan format pesan otomatis.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stockInquirySteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-4 text-center shadow-md ring-1 ring-slate-200"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-black text-slate-950">
                  {index + 1}
                </div>

                <p className="text-sm font-bold text-slate-900">
                  {step.title}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 text-slate-950 shadow-2xl ring-1 ring-slate-200 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Nama</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama pelanggan"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Nomor HP
              </span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Kendaraan
              </span>
              <input
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                placeholder="Contoh: Vario 125, Beat, NMAX"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                Cabang Tujuan
              </span>
              <select
                name="branch"
                value={form.branch}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              >
                {branches.map((branch) => (
                  <option key={branch.name} value={branch.name}>
                    {branch.name} - {branch.location}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">
              Kebutuhan
            </span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">
              Catatan Tambahan
            </span>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              rows="4"
              placeholder="Contoh: ingin tanya ban tubeless untuk Vario ukuran 90/80"
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-black text-slate-950 transition hover:bg-yellow-300"
          >
            Tanya Stok via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}