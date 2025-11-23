
import { CreditCard, Wallet, Landmark } from 'lucide-react';

export default function Payment(){
  return (
    <main className="container max-w-7xl py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="card lg:col-span-2">
        <div className="card-body space-y-3">
          <h1 className="text-xl font-bold">التسديد</h1>
          <p className="text-sm text-slate-600">اختر طريقة التسديد المناسبة لرحلتك.</p>

          <div className="space-y-3">
            <label className="card flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-brand"/>
                <div>
                  <div className="font-medium">بطاقة بنكية</div>
                  <div className="text-xs text-slate-500">Visa / MasterCard</div>
                </div>
              </div>
              <input type="radio" name="pay" defaultChecked/>
            </label>

            <label className="card flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Wallet className="h-5 w-5 text-emerald-600"/>
                <div>
                  <div className="font-medium">نقدًا عند الانطلاق</div>
                  <div className="text-xs text-slate-500">تأكيد إيصال ورقي</div>
                </div>
              </div>
              <input type="radio" name="pay"/>
            </label>

            <label className="card flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Landmark className="h-5 w-5 text-slate-700"/>
                <div>
                  <div className="font-medium">تحويل بنكي</div>
                  <div className="text-xs text-slate-500">إرفاق وصل التحويل</div>
                </div>
              </div>
              <input type="radio" name="pay"/>
            </label>
          </div>

          <button className="btn btn-primary mt-3">متابعة التسديد</button>
        </div>
      </div>

      <aside className="space-y-3">
        <div className="card"><div className="card-body"><div className="text-sm text-slate-500">المبلغ المستحق</div><div className="text-3xl font-semibold">12,000 دج</div></div></div>
        <div className="card"><div className="card-body"><div className="text-sm text-slate-500">رقم الرحلة</div><div className="font-medium">TRP-001</div></div></div>
      </aside>
    </main>
  );
}
