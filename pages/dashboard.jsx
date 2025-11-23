
import Link from 'next/link';
import { trips } from '../lib/data';

const tone = { "Scheduled":"badge badge-blue","Draft":"badge badge-slate","In-Progress":"badge badge-amber" };

export default function Dashboard(){
  return (
    <main className="container max-w-7xl py-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card"><div className="card-body"><div className="text-sm text-slate-500">عدد الرحلات القادمة</div><div className="text-3xl font-semibold">{trips.length}</div></div></div>
        <div className="card"><div className="card-body"><div className="text-sm text-slate-500">نسبة موافقات الأولياء</div><div className="text-3xl font-semibold">89%</div></div></div>
        <div className="card"><div className="card-body"><div className="text-sm text-slate-500">مستوى الحوادث</div><div className="text-3xl font-semibold">0</div></div></div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {trips.map(t => (
          <article key={t.id} className="card hover:shadow-md transition">
            <div className="card-body space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{t.title}</h3>
                <span className={tone[t.status]}>{t.status}</span>
              </div>
              <div className="text-sm text-slate-600">{t.date} • {t.school}</div>
              <div className="text-sm text-slate-600">من {t.origin} إلى {t.destination}</div>
              <div className="pt-2 flex gap-2">
                <Link href={`/trips/${t.id}`}><a className="btn btn-primary">التفاصيل</a></Link>
                <Link href="/payment"><a className="btn btn-outline">التسديد</a></Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
