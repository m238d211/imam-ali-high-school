// script.js
var loader = document.getElementById('loader');
window.addEventListener("load",function(){
loader.style.display ="none"

})


document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}




// Get reference to language select element
var languageSelect = document.getElementById('language-select');

// Event listener for language select change
languageSelect.addEventListener('change', function() {
  var selectedLanguage = languageSelect.value;
  if (selectedLanguage === 'arabic') {
    switchToArabic();
  } else if (selectedLanguage === 'english') {
    switchToEnglish();
  }
});




// Get references to language selector buttons
var arabicBtn = document.getElementById('arabic-btn');
var englishBtn = document.getElementById('english-btn');

// Set initial language to English
var currentLanguage = 'english';

// Function to switch language to Arabic
function switchToArabic() {
  // Add Arabic translations here
  document.getElementById('menu').innerText = 'الصفحة الرئيسية';
  document.getElementById('join').innerText = 'انضم الأن';
  document.getElementById('About').innerText = 'حول';
  document.getElementById('contact').innerText = 'اتصل بنا';
  document.getElementById('header').innerText = 'مرحبا بكم في ثانوية الامام علي';
  document.getElementById('a1').innerText = 'من نحن ؟';
  document.getElementById('a2').innerText = 'ما هي فكرتنا عن النجاح ؟';
  document.getElementById('a3').innerText = 'ما هي خطتنا المستقبليه؟';
  document.getElementById('p1').innerText = 'ثانوية الامام علي تقف شاهدة على النصر التربوي. تقع في قلب مجتمعنا، ذلك يشع النجاح في كل جانب. على الرغم من بداياتها المتواضعة، ارتقت مدرسة الإمام علي الثانوية إلى مستوى متميز المرتفعات، وتنتج علماء متميزين سنة بعد سنة. ما يميز مدرسة الإمام علي الثانوية هو تفانيها الذي لا يتزعزع في نمو الطلاب وإنجازاتهم. خلال مجموعة متنوعة من البرامج الأكاديمية والأنشطة اللامنهجية، يتم تمكين الطلاب لاستكشاف شغفهم وإطلاق العنان لإمكاناتهم الكاملة. يقدم أعضاء هيئة التدريس وموظفي الدعم بالمدرسة تعليمات شخصية، ضمان حصول كل طالب على الاهتمام والتشجيع الذي يحتاجه لتحقيق النجاح. علاوة على ذلك، فإن التزام مدرسة الإمام علي الثانوية بخدمة المجتمع والمسؤولية الاجتماعية يغرس قيم الرحمة والتعاطف لدى طلابها، وتعزيز ثقافة العطاء وإحداث الأثر الإيجابي. تجسد مدرسة الإمام علي الثانوية في جوهرها التميز، وتشكيل قادة المستقبل وإلهام الأجيال القادمة.';
  document.getElementById('p2').innerText = 'تقع مدرسة الإمام علي الثانوية ضمن مجتمع نابض بالحياة، وتجسد الإنجاز التعليمي. ومع التركيز على النمو الشامل، فإنه يمكّن الطلاب من استكشاف الاهتمامات والمواهب. يقدم أعضاء هيئة التدريس المتفانون دعمًا شخصيًا، مما يضمن ازدهار كل طالب أكاديميًا وشخصيًا. من خلال أساليب التدريس المبتكرة والمناهج المتنوعة، تعمل مدرسة الإمام علي الثانوية على تعزيز الأفراد ذوي الخبرة المستعدين للنجاح. بالإضافة إلى الجانب الأكاديمي، تغرس الثانوية قيم المشاركة المجتمعية والمسؤولية الاجتماعية، مع التأكيد على أهمية العطاء. في جوهرها، ثانوية الإمام علي هي أكثر من مجرد مدرسة ثانوية؛ فهو يحفز الأحلام، ويشكل قادة المستقبل، ويلهم التغيير الإيجابي.';                                                                                                                                                                                                                                                                                                                                                                                      
  document.getElementById('p3').innerText = 'تتصور مدرسة الامام علي الثانوية بيئة تعليمية يحقق فيها كل طالب التميز الأكاديمي، النمو الشخصي، والمساهمة بشكل إيجابي في المجتمع. بيان المهمة: مهمتنا هي توفير تجربة تعليمية راعية وشاملة تعزز التفكير النقدي، الإبداع والمسؤولية الاجتماعية، وتمكين الطلاب ليصبحوا متعلمين مدى الحياة وقادة متعاطفين.';
  document.getElementById('mn').innerText = 'علي محمد صالح';
  document.getElementById('mp').innerText = 'مدير مدرسة الامام علي الثانوية والذي شغل هذا المنصب منذ عام 2015 حتى يومنا هذا حيث بسبب له، أصبحت مدرسة الإمام علي من أفضل المدارس الإعدادية في العراق ومحافظة بابل بشكل خاص.. منذ ذلك الحين وصول السيد علي محمد صالح وإلى يومنا هذا فازت مدرسة الإمام علي الإعدادية بالمركز الأول أربع مرات والمركز الثاني مرة واحدة حيث تنافست المدرسة الإعدادية الجامعية على هذا المركز.';
  document.getElementById('s').innerText = 'بعض الاسماء الامعه في الثانوية';
  // Add more translations as needed
  
  // Update current language
  currentLanguage = 'arabic';
}

// Function to switch language to English
function switchToEnglish() {
  // Add English translations here
  document.getElementById('menu').innerText = 'Home';
  document.getElementById('join').innerText = 'Join Now';
  document.getElementById('About').innerText = 'About';
  document.getElementById('contact').innerText = 'Contact';
  document.getElementById('header').innerText = 'Welcome to Al-Imam Ali High School';
  document.getElementById('a1').innerText = 'Who Are We ?';
  document.getElementById('a2').innerText = 'What Is Our Idea About Success ?';
  document.getElementById('a3').innerText = 'What IS Our Plan ?';
  document.getElementById('p1').innerText = 'Imam Ali High School stands as a witness to the educational victory. Located at the heart of our community, itradiates success in every aspect. Despite its humble beginnings, Imam Ali High School has risen to remarkableheights, producing outstanding scholars year after year.What distinguishes Imam Ali High School is its unwavering dedication to student growth and achievement. Through a variety of academic programs and extracurricular activities, students are empowered to explore their passions and unleash their full potential. The schools faculty and support staff provide personalized instruction,ensuring each student receives the attention and encouragement they need to succeed.Furthermore, Imam Ali High School’s commitment to community service and social responsibility instills thevalues of compassion and empathy in its students, enhancing a culture of giving and making a positive impact.At its core, Sunset High School embodies excellence, shaping future leaders and inspiring generations to come.';
  document.getElementById('p2').innerText = 'Imam Ali High School, located within a vibrant community, embodies educational achievement. With an emphasis onall-round growth, it enables students to explore interests and talents. Dedicated faculty provide personalizedsupport, ensuring every student thrives academically and personally. Through innovative teaching methods and a diverse curriculum, Imam Ali High School fosters experiencedindividuals who are prepared for success. In addition to the academic aspect, the high school instills thevalues of community participation and social responsibility, with an emphasis on the importance of giving.In essence, Imam Ali High School is more than just a high school; It catalyzes dreams, shapes future leaders,and inspires positive change.';                                                                                                                                                                                                                                                                                                                                                                                      
  document.getElementById('p3').innerText = 'Al-Imam Ali High School envisions a learning environment where every student achieves academic excellence,personal growth, and contributes positively to society.Mission Statement:Our mission is to provide a nurturing and inclusive educational experience that fosters critical thinking,creativity, and social responsibility, empowering students to become lifelong learners and compassionate leaders.';
  document.getElementById('mn').innerText = 'Ali Mohmmed Saleh';
  document.getElementById('mp').innerText = 'Director of Imam Ali Secondary School, who held the position from 2015 until the present day, where because ofhim, Imam Ali became one of the best preparatory schools in Iraq and Babil Governorate in particular..Since the arrival of Mr. Ali Muhammad Saleh and to this day, Imam Ali Preparatory School has won first place four timesand second place once, as it competed with University Preparatory School for this position.';
  document.getElementById('s').innerText ='Some Of Our Teachers';
  // Add more translations as needed
  
  // Update current language
  currentLanguage = 'english';
}

// Event listeners for language selector buttons
arabicBtn.addEventListener('click', function() {
  if (currentLanguage !== 'arabic') {
    switchToArabic();
  }
});

englishBtn.addEventListener('click', function() {
  if (currentLanguage !== 'english') {
    switchToEnglish();
  }
});

  
  