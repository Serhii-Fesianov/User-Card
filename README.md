                                          User Card

Цей проект є веб-додатком на React для відображення списку користувачів та їхніх
профілів. Проєкт включає різні компоненти, такі як Header, UserList, UserCard,
ContentImage, та інші.

                                      Вміст User Card

HomePageContent Компонент, який відображає вміст домашньої сторінки.

LogoComponent Компонент для відображення логотипу.

UserCard Компонент для відображення профілю користувача.

UserList Компонент, який відповідає за відображення списку користувачів.

App Основний компонент, який об'єднує інші компоненти та налаштовує роутинг.

API Додаток використовує моковий API для отримання списку користувачів та
оновлення їхніх профілів.

                                        Функціонал

В даному додатку є можливість переходу з домашньої сторінки на сторінку з
користувачами та взаємодіяти з ними шляхом підписки. Після підписки можна
побачити що поточна кількість користувачів змінилась з урахування вашого
відслідковування даного користувача. За бажання можна перестати слідкувати за
користувачем і відповідно його кількість підписників зміниться до попередньої.
Стилі виконані з урахуванням ТЗ, кольори гармонійно поєднані(основний колір
сторінки та навігація, а також вітання на домашній сторінці). Після оновлення
сторінки інформація щодо дій користувача зберігається а саме за якими
користувачами слідкує гість сторінки. Ну і відповідно при повторному
відвідуванні оскільки оновлені дані зберігаються на серверу.