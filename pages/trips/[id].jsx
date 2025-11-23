
import { useRouter } from 'next/router';
import Link from 'next/link';
import { trips } from '../../lib/data';

export default function TripDetails(){
  const { query } = useRouter();
  const trip = trips.find(t => t.id === query.id) || trips[0];

  return (
    <main className="container max-w-7xl py-8 space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{trip.title}</h1>
            <span className="badge badge-blue">{trip.status}</span>
          </div>
          <div className="text-slate-600 mt-2 text-sm">
            التاريخ: {trip.date} • المدرسة: {trip.school} • السائق: {trip.driver}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="card"><div className="card-body"><div className="text-sm text-slate-500">المغادرة</div><div className="font-medium">{trip.origin}</div></div></div>
            <div className="card"><div className="card-body"><div className="text-sm text-slate-500">الوصول</div><div className="font-medium">{trip.destination}</div></div></div>
            <div className="card"><div className="card-body"><div className="text-sm text-slate-500">الطلاب</div><div className="font-medium">{trip.students} • موافقات: {trip.optin}</div></div></div>
          </div>

          <div className="mt-4 card">
            <div className="card-body">
              <h3 className="font-semibold">الخط الزمني</h3>
              <ol className="list-decimal pr-5 text-sm text-slate-700 space-y-1 mt-2">
                <li>08:00 — تجميع الطلاب</li>
                <li>08:30 — انطلاق الحافلة</li>
                <li>10:00 — استراحة</li>
                <li>11:00 — الوصول</li>
                <li>15:30 — العودة</li>
                <li>17:00 — إنهاء الرحلة</li>
              </ol>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Link href="/dashboard"><a className="btn btn-outline">العودة</a></Link>
            <Link href="/payment"><a className="btn btn-primary">التسديد</a></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
