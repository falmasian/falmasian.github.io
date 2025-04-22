document.addEventListener('DOMContentLoaded', function() {
    // مدیریت تغییر صفحات
    function showPage(pageId) {
        // مخفی کردن تمام صفحات
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // نمایش صفحه انتخاب شده
        document.getElementById(pageId).classList.add('active');

        // به روزرسانی وضعیت فعال منو
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`.nav-links a[href="#${pageId}"]`).classList.add('active');
    }

    // رویداد کلیک برای منو
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showPage(targetId);
        });
    });

    // نمایش صفحه About به صورت پیش‌فرض
    showPage('about');
});