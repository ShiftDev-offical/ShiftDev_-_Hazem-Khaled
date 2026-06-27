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
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
