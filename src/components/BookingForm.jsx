import { useState } from "react";
import { business, services } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

const initialForm = {
  name: "",
  phone: "",
  vehicle: "",
  service: services[0].title,
  date: "",
  note: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      `Halo Admin ${business.shortName}, saya ingin booking servis.`,
      `Nama: ${form.name || "-"}`,
      `No. HP: ${form.phone || "-"}`,
      `Kendaraan: ${form.vehicle || "-"}`,
      `Layanan: ${form.service}`,
      `Tanggal: ${form.date || "-"}`,
      `Catatan: ${form.note || "-"}`,
    ].join("\n");

    window.open(createWhatsAppLink(business.phoneWa, message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="booking" className="bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-400">Booking Online</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Tidak perlu antre panjang. Tentukan jadwal lebih dulu.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Isi data singkat, lalu sistem akan mengarahkan pelanggan ke WhatsApp admin dengan format pesan otomatis. Cocok untuk prototype UTS karena alurnya sederhana dan mudah dipahami.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Pilih layanan", "Isi jadwal", "Datang ke bengkel"].map((step, index) => (
              <div key={step} className="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/10">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 text-slate-950 shadow-2xl md:p-8">
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
              <span className="text-sm font-bold text-slate-700">Nomor HP</span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Kendaraan</span>
              <input
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                placeholder="Contoh: Avanza 2018"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Tanggal Booking</span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">Layanan</span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>{service.title}</option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">Catatan Tambahan</span>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              rows="4"
              placeholder="Contoh: ingin tanya ukuran ban 185/65 R15"
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-black text-slate-950 transition hover:bg-yellow-300"
          >
            Kirim Booking via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
