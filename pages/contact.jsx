
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact(){
  return (
    <main className="container max-w-7xl py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="card lg:col-span-2">
        <div className="card-body space-y-3">
          <h1 className="text-xl font-bold">اتصل بنا</h1>
          <p className="text-sm text-slate-600">يسعدنا تواصلكم لأي استفسارات حول منصة رحلة وغاية.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="card-body rounded-2xl border border-slate-300" placeholder="الاسم الكامل"/>
            <input className="card-body rounded-2xl border border-slate-300" placeholder="البريد الإلكتروني"/>
            <input className="card-body rounded-2xl border border-slate-300 md:col-span-2" placeholder="رقم الهاتف (اختياري)"/>
            <textarea className="card-body rounded-2xl border border-slate-300 md:col-span-2" rows="4" placeholder="رسالتك..."></textarea>
            <button className="btn btn-primary md:col-span-2">إرسال</button>
          </form>
        </div>
      </div>

      <aside className="space-y-3">
        <div className="card"><div className="card-body flex items-center gap-3"><Phone className="h-5 w-5 text-brand"/> <span>الهاتف:0658081859</span></div></div>
        <div className="card"><div className="card-body flex items-center gap-3"><Mail className="h-5 w-5 text-brand"/> <span>البريد: support@rihla-wa-ghaya.example</span></div></div>
        <div className="card"><div className="card-body flex items-center gap-3"><MessageCircle className="h-5 w-5 text-emerald-600"/> <span>واتساب: 0658081859s
    </main>
  );
}
