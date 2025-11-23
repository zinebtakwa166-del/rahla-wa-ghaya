
import Link from 'next/link';

export default function Home(){
  return (
    <main>
      <section className="bg-brand-light">
        <div className="container max-w-7xl py-14">
          <h1 className="text-3xl font-bold text-slate-900">رحلة وغاية — إدارة الرحلات المدرسية بسهولة وأمان</h1>
          <p className="text-slate-700 mt-2">أنشئ الرحلات، اجمع موافقات أولياء الأمور، وتتبع الحافلات لحظيًا.</p>
          <div className="mt-5 flex gap-2">
            <Link href="/dashboard"><a className="btn btn-primary">ابدأ الآن</a></Link>
            <Link href="/contact"><a className="btn btn-outline">تواصل معنا</a></Link>
          </div>
        </div>
      </section>

      <section className="container max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 -mt-6">
        <div className="card"><div className="card-body"><h3 className="font-semibold">سلامة</h3><p className="text-sm text-slate-600 mt-1">قائمة تحقق وسجل حوادث وتنبيهات فورية.</p></div></div>
        <div className="card"><div className="card-body"><h3 className="font-semibold">تتبّع مباشر</h3><p className="text-sm text-slate-600 mt-1">مشاركة موقع الحافلة مع أولياء الأمور.</p></div></div>
        <div className="card"><div className="card-body"><h3 className="font-semibold">تقارير</h3><p className="text-sm text-slate-600 mt-1">حضور، رضا، وتكلفة تشغيل.</p></div></div>
      </section>
    </main>
  );
}
