// 1. تفعيل القائمة المنبثقة للهواتف (Responsive Menu)
const menuBar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// إغلاق القائمة عند الضغط على أي رابط 
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuBar.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});


// 2. تفعيل الوضع الليلي والنهاري (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // تغيير شكل الأيقونة بناءً على الوضع الحالي
    if(document.body.classList.contains('dark-theme')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    }
});


// 3. تفعيل رابط القائمة النشط عند التمرير (Active Scroll Link)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const targetLink = document.querySelector('.navbar a[href*=' + id + ']');
                if(targetLink) targetLink.classList.add('active');
            });
        }
    });
};


// 4. نظام الترجمة التلقائي الثنائي (العربية / الإنجليزية)
const langToggle = document.getElementById('lang-toggle');
const htmlDoc = document.documentElement;

// نصوص الاستمارات (Placeholders) للتغيير الديناميكي
const placeholders = {
    ar: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "موضوع الرسالة",
        message: "رسالتك هنا..."
    },
    en: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Message Subject",
        message: "Your Message Here..."
    }
};

langToggle.addEventListener('click', () => {
    const currentLang = htmlDoc.getAttribute('lang');
    
    if (currentLang === 'ar') {
        // التحويل إلى الإنجليزية
        htmlDoc.setAttribute('lang', 'en');
        htmlDoc.setAttribute('dir', 'ltr');
        
        // تبديل العناوين التي تحتوي على Span مزخرف
        document.getElementById('about-heading').innerHTML = 'About <span>Me</span>';
        document.getElementById('portfolio-heading').innerHTML = 'Latest <span>Projects</span>';
        document.getElementById('contact-heading').innerHTML = 'Contact <span>Me</span>';
        document.getElementById('footer-text').innerHTML = 'Developed with passion by <a href="mailto:shiftdev.contact.me@gmail.com">ShiftDev</a> team | Hazem Khaled &copy; 2026';
        
        // تحديث عناصر حقول نصوص المدخلات بالفورم
        document.getElementById('form-name').placeholder = placeholders.en.name;
        document.getElementById('form-email').placeholder = placeholders.en.email;
        document.getElementById('form-phone').placeholder = placeholders.en.phone;
        document.getElementById('form-subject').placeholder = placeholders.en.subject;
        document.getElementById('form-message').placeholder = placeholders.en.message;
        
    } else {
        // العودة إلى العربية
        htmlDoc.setAttribute('lang', 'ar');
        htmlDoc.setAttribute('dir', 'rtl');
        
        // إرجاع العناوين المزخرفة للعربية
        document.getElementById('about-heading').innerHTML = 'من <span>أنا</span>';
        document.getElementById('portfolio-heading').innerHTML = 'آخر <span>أعمالي</span>';
        document.getElementById('contact-heading').innerHTML = 'اتصل <span>بي</span>';
        document.getElementById('footer-text').innerHTML = 'تم التطوير بكل شغف بواسطة فريق <a href="mailto:shiftdev.contact.me@gmail.com">ShiftDev</a> | حازم خالد &copy; 2026';
        
        // تحديث حقول نصوص المدخلات للفورم للعربية
        document.getElementById('form-name').placeholder = placeholders.ar.name;
        document.getElementById('form-email').placeholder = placeholders.ar.placeholder;
        document.getElementById('form-phone').placeholder = placeholders.ar.phone;
        document.getElementById('form-subject').placeholder = placeholders.ar.subject;
        document.getElementById('form-message').placeholder = placeholders.ar.message;
    }
    
    // تبديل بقية النصوص العامة التي تمتلك خواص data-lang
    document.querySelectorAll('[data-lang-ar]').forEach(el => {
        const lang = htmlDoc.getAttribute('lang');
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-lang-en');
        } else {
            el.textContent = el.getAttribute('data-lang-ar');
        }
    });
});
