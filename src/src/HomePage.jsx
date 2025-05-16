import React, { useState } from 'react';

function HomePage() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // This state is managed in App.jsx now
  // navItems are also managed in App.jsx

  return (
    <>
      {/* Hero Section */}
      <header 
        className="bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white relative"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            فوبوس مش حملة، دي رسالة لكل قلب حاسس إنه لوحده.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light">
            الرهاب الاجتماعي له علاج… والدعم يبدأ من هنا.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Introduction (User calls this Section 2) */}
          <section className="mb-16 p-6 bg-blue-50 shadow-lg rounded-lg text-center">
         <div className="mt-6 text-right max-w-4xl mx-auto mb-8">
  <h2 className="text-2xl font-semibold text-sky-700 mb-3">القراء الأعزاء..</h2>
  <p className="text-gray-700 leading-relaxed text-lg">
    نقدم لحضراتكم مشروع التخرج الذي قدمه (اثنان وعشرون) طالبًا بالفرقة الرابعة بالمعهد الدولي العالي للإعلام بأكاديمية الشروق قسم العلاقات العامة والإعلان حيث نقدم حملة بعنوان (فوبوس) بهدف زيادة وعي المجتمع بالرهاب وأعراضه وتأثيراته ومساعدة المتضررين من الرهاب للبحث عن الطرق المناسبة للعلاج وتزويد أهل المصابين بالمعلومات والأساليب في مواجهة الرهاب الإجتماعي.
  </p>
</div>

  <img
    src="/assets/team-image.png"
    alt="Phopos Team"
    className="rounded-lg shadow-md w-full max-w-4xl mx-auto h-auto"
  />
  
</section>


          {/* Section 2: About Social Phobia (User calls this Section 3) */}
          <section className="p-6 bg-blue-50 shadow-lg rounded-lg flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 md:pr-8 text-right flex flex-col justify-between">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  الرهاب الإجتماعي هو اضطراب نفسي شائع يتسم بالخوف الشديد والمستمر من المواقف الإجتماعية أو الأداء أمام الآخرين يشعر الأشخاص الذين يعانون منه بقلق مفرط من أن يُحكم عليهم أو يُنتقدوا مما يؤدي إلى تجنب المواقف التي قد تُعرضهم لذلك مثل التحدث أمام مجموعة أو التفاعل مع الغرباء أو حتى القيام بمهام بسيطة في وجود الآخرين.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  يؤثرالرهاب الإجتماعي بشكل كبيرعلى حياة الشخص اليومية سواء على مستوى العمل أوالدراسة أو العلاقات الإجتماعية قد يرافقه أعراض جسدية مثل التعرق، تسارع ضربات القلب، والإرتجاف مما يزيد من حدة التوتر.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  يتجاوزالرهاب الإجتماعي كونه مجرد خجل طبيعي؛ فهو حالة نفسية تحتاج إلى التفاهم والدعم وقد يتطلب علاجًا متخصصًا من خلال العلاج السلوكي أوالأدوية لتحسين جودة حياة المصاب.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  كما يُنصح الأشخاص المحيطون بالفرد الذي يعاني من الرهاب الإجتماعي بتقديم الدعم العاطفي والتشجيع على طلب المساعدة المهنية، حيث يُمكن لتدخل مبكر أن يُحدث فرقًا كبيرًا في حياة الشخص.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-y-4 md:space-x-0">
              <img src="/assets/info-image1.png" alt="Social Phobia Illustration 1" className="rounded-lg shadow-md w-full sm:w-1/2 md:w-full max-w-xs" />
              <img src="/assets/info-image2.png" alt="Social Phobia Illustration 2" className="rounded-lg shadow-md w-full sm:w-1/2 md:w-full max-w-xs" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HomePage;

