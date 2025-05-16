// src/TypesPage.jsx
import React from 'react';

function TypesPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-12 text-right" dir="rtl">
      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">أنواع الرهاب وتأثيره</h2>
        <h3 className="text-xl font-semibold text-sky-600 mb-4 text-center">أنواع الرهاب الاجتماعي</h3>

        <div className="grid md:grid-cols-2 gap-6 bg-sky-50 p-4 rounded-xl shadow-md">
          <div className="border-r-2 border-sky-300 pr-4">
            <h4 className="text-lg font-semibold text-sky-700 mb-2">الرهاب الاجتماعي المعمم</h4>
            <ul className="list-disc pr-5 space-y-2">
              <li>قلق مفرط ومستمر بشأن أمور حياتية متعددة دون سبب واضح.</li>
              <li>يؤثر بشكل كبير على الحياة اليومية.</li>
              <li>يشعر بالخوف من معظم التفاعلات الاجتماعية.</li>
            </ul>
          </div>
          <div className="pl-4">
            <h4 className="text-lg font-semibold text-sky-700 mb-2">الرهاب الاجتماعي المحدد</h4>
            <ul className="list-disc pr-5 space-y-2">
              <li>الخوف موجه إلى مواقف اجتماعية محددة فقط.</li>
              <li>مثل التحدث أمام الجمهور أو إجراء مقابلة عمل.</li>
              <li>تأثيره على الحياة اليومية أقل من المعمم.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <h3 className="text-xl font-semibold text-sky-600 mb-4 text-center">تأثير الرهاب الاجتماعي على حياة الأفراد</h3>
        <ul className="list-disc pr-5 space-y-2">
          <li>صعوبة طلب المساعدة، حتى في الأمور البسيطة.</li>
          <li>القلق المستمر قبل المواقف الاجتماعية.</li>
          <li>الاكتئاب وفقدان الاهتمام بالأنشطة اليومية.</li>
          <li>العزلة الاجتماعية وتجنب التفاعل.</li>
          <li>انخفاض الثقة بالنفس وتقدير الذات.</li>
          <li>صعوبة في بناء العلاقات وتطويرها.</li>
          <li>تجنب الأنشطة الاجتماعية مثل المناسبات والحفلات.</li>
          <li>صعوبة في العمل الجماعي أو تقديم العروض.</li>
          <li>تجنب المناصب القيادية بسبب الخوف من المسؤولية.</li>
          <li>أعراض جسدية مثل التعرق، احمرار الوجه، وتسارع ضربات القلب.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section>
        <h3 className="text-xl font-semibold text-sky-600 mb-4 text-center">الرهاب الاجتماعي وعلاقته بالتحصيل لدى الطلبة</h3>

        <div className="space-y-6 bg-sky-50 p-4 rounded-xl shadow-md">
          <div>
            <h4 className="text-lg font-semibold text-sky-700 mb-2">تأثير الرهاب الاجتماعي</h4>
            <ul className="list-disc pr-5 space-y-2">
              <li>صعوبات في الأداء الأكاديمي بسبب القلق من التقييم أو النقد.</li>
              <li>تجنب الأنشطة الصفية والمشاركة داخل الفصل.</li>
              <li>درجات أقل من الطلبة غير المصابين بالرهاب الاجتماعي.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-sky-700 mb-2">العوامل المؤثرة</h4>
            <ul className="list-disc pr-5 space-y-2">
              <li>القلق العام وانخفاض الثقة بالنفس يزيدان من صعوبة إنجاز المهام الدراسية.</li>
              <li>الخوف من الفشل قد يؤدي إلى التسويف وتأجيل الدراسة.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-sky-700 mb-2">فروق الجنسين</h4>
            <ul className="list-disc pr-5 space-y-2">
              <li>الإناث يظهرن مستويات أعلى من القلق الاجتماعي مقارنة بالذكور.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TypesPage;
