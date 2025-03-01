# just a tempalete 
# آية - Ayah

إضافة متصفح إسلامية تعرض آية قرآنية أو حديثًا نبويًا كلما فتحت نافذة جديدة في المتصفح.

![أيقونة الإضافة](icons/icon128.png)

## المميزات

- عرض آية قرآنية عشوائية عند فتح نافذة جديدة.
- واجهة بسيطة وسهلة الاستخدام. 
- دعم للغة العربية.
- عرض حديث نبوي عشوائي عند فتح نافذة جديدة. [x]
## كيفية التثبيت

1. قم بتنزيل ملفات الإضافة من هذا المستودع.
2. افتح متصفح Chrome وانتقل إلى `chrome://extensions/`.
3. قم بتشغيل وضع المطور (Developer Mode) في الزاوية العلوية اليمنى.
4. انقر على "تحميل غير معبأ" (Load Unpacked) وحدد المجلد الذي يحتوي على ملفات الإضافة.
5. تم تثبيت الإضافة بنجاح! افتح نافذة جديدة لرؤية الآية أو الحديث.

## هيكل الملفات

```
ayah-extension/
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── popup/
│   └── popup.html
├── home/
│   └── index.html
├── manifest.json
└── README.md
```

## كيفية المساهمة

نرحب بجميع المساهمات لتحسين هذه الإضافة! إذا كنت ترغب في المساهمة، يرجى اتباع الخطوات التالية:

1. قم بعمل Fork لهذا المستودع.
2. أنشئ فرعًا جديدًا (`git checkout -b feature/YourFeatureName`).
3. قم بإجراء التغييرات المطلوبة وأضفها (`git add .`).
4. قم بعمل commit للتغييرات (`git commit -m 'Add some feature'`).
5. ادفع التغييرات إلى الفرع (`git push origin feature/YourFeatureName`).
6. افتح طلب سحب (Pull Request).

## الرخصة

هذا المشروع مرخص تحت [رخصة MIT](LICENSE).

## التواصل

إذا كان لديك أي أسئلة أو اقتراحات، يرجى فتح [Issue](https://github.com/yourusername/ayah-extension/issues) أو التواصل معي عبر البريد الإلكتروني.
