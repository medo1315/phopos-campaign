import React from 'react';

function CausesPage() {
  return (
    <div className="min-h-screen bg-sky-100" dir="rtl">
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="p-6 bg-blue-50 shadow-lg rounded-lg">
            <div className="text-right mb-8">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">أسباب الرهاب الإجتماعي</h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                تتعدد وتتنوع أسباب الرهاب الإجتماعي وهي عوامل منفصلة تشمل:
              </p>

              <ol className="list-decimal list-inside text-gray-700 leading-relaxed text-lg space-y-3">
                <li>
                  <span className="text-lg font-semibold text-sky-700">العوامل الوراثية:</span> 
                  قد تلعب العوامل الجينية دورًا في حدوث الرهاب الإجتماعي، حيث يزداد خطر الإصابة إذا كان أحد أفراد الأسرة مصابًا به.
                </li>
                <li>
                  <span className="text-lg font-semibold text-sky-700">اختلال توازن النواقل العصبية:</span> 
                  من أسباب الإصابة أيضًا وجود خلل في توازن بعض النواقل العصبية في المخ مثل: الدوبامين، والسيروتونين، والغلوتامات.
                </li>
                <li>
                  <span className="text-lg font-semibold text-sky-700">العوامل البيئية:</span>
                  <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                    <li>المرور بأحداث صادمة أو تجارب مؤلمة.</li>
                    <li>التعرض للتنمر أو الإهانة أمام الآخرين.</li>
                    <li>المشاكل الأسرية.</li>
                    <li>المعاناة من مرض مزمن.</li>
                    <li>المبالغة في حماية الطفل أو التحكم فيه.</li>
                    <li>اعتياد الخجل أو الانسحاب من المواقف اليومية.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* الصورة أسفل النص */}
            <div className="flex justify-center">
             <img
  src="/assets/causes-illustrations.png"
  alt="أسباب الرهاب الإجتماعي - رسم توضيحي"
  className="rounded-lg shadow-md w-full max-w-4xl h-[400px] object-contain"
/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CausesPage;
