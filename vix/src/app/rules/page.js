'use client';
import "../styles/globals.css";
import "../styles/main_page.css";
import * as images from "../../app/images.js";
import Image from 'next/image';
import "../styles/rules.css";
import useThemeStore from "@/stores/theme_store.js";



export default function Home() {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
      <main className="text-left text-2xl pt-8">
        <div className="rules-list">
          <h2 className="pl-2 text-white text-4xl font-bold">1. Общие правила</h2>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.1</span>
            Незнание правил не освобождает от ответственности.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.2</span>
            Начав играть на нашем проекте, вы автоматически подтверждаете своё согласие с данным сводом правил.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.3</span>
            Администрация имеет полное право наказывать игроков проекта без объяснения причины, но обязуется действовать адекватно.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.4</span>
            Администрация не несет ответственности за временную или постоянную невозможность игры на проекте конкретным лицом или группой лиц.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.5</span>
            Игрокам следует выполнять требования Администрации и предписания данных правил, во избежание наказаний.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.6</span>
            Администрация ведет логи всех действий игроков на проекте и всех сообщений чата.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.7</span>
            Все игроки и донатеры равны перед правилами без исключений.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.8</span>
            Меры наказания за нарушения правил могут изменяться в конкретном случае Администрацией проекта.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.9</span>
            В случае несъемного перманентного бана, никакие ресурсы, а также донат, возвращены не будут.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.10</span>
            Персонал имеет право наказать игрока по предоставленным видео или фотоматериалам, содержащим в них дату, ник игрока и само нарушение. Видео или фотоматериалу не должно быть больше одного месяца, но в некоторых случаях это ограничение не действует.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.11</span>
            Если в этих правилах конкретно не указано наказание, время наказания, то это означает, что персонал в праве выбрать такой вид наказания и его длительность, исходя из своих моральных правил и принципов, но обязуется действовать адекватно. В случае повтора одного и того же нарушения Персонал и Администрация имеют право на свое усмотрение увеличить меру наказания.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.12</span>
            Если игроком было допущено два или более нарушений одновременно, то они суммируются. Примеры: «Пункт 3.1 и 3.3, 30 мин + 2 часа мута». В случае серьезных или не суммируемых наказаний (Мут + бан) выбирается самое серьезное из двух или более нарушений. Пример: "Пункт 1.12 и 1.18, Перманентный бан и мут на 4 часа. Производится только перманентный бан."
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.13</span>
            Запрещено причинение вреда проекту и его онлайну. (Например: Хочешь алмазы? Жми ALT+F4) <br />
            Наказание: Предупреждение ⇒ Бан на 5-30 минут ⇒ Бан на усмотрение.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.14</span>
            Использование неточностей в правилах ради собственной выгоды. <br />
            Наказание: Бан на усмотрение.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.15</span>
            Запрещено намеренно подставлять персонал и саботировать их деятельность. <br />
            Наказание: Предупреждение ⇒ Бан на 1 час ⇒ Бан на усмотрение.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.16</span>
            Запрещается использовать любые модификации клиента, а также сторонние ПО, облегчающие получение внутриигровых ресурсов, дающие дополнительные способности персонажу и так далее. К этому правилу также относится использование макросов и кликеров. Модератор в праве вызвать игрока на проверку. Если подозреваемый отказывается идти на проверку в течение 10 минут, модератор в праве наказать подозреваемого. Во время вызова на проверку, подозреваемому запрещено перезаходить на сервер. Особо сложные случаи проверяются модератором в дискорде или других способах коммуникаций по регламенту. Вы можете отказаться от проверки, мы не настаиваем, но за это вы получите наказание. <br />
            Наказание: Бан на 7 дней ⇒ Перманентный бан.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.17</span>
            Запрещено обходить каким-либо образом выданные наказания (мут/бан). <br />
            Наказание: Бан (срок обойдённого наказания * 2) ⇒ Перманентный бан ⇒ Бан по IP.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.18</span>
            Запрещена передача/продажа/покупка аккаунта. Не передавайте чеки платежей тем более. Передачей является смена IP адреса на новый (не подходящий под некоторые критерии, на которые обращают внимание, если у игрока динамический айпи). <br />
            Наказание: Обнуление аккаунта и перманентный бан.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.19</span>
            Если игрока обманули на реальные деньги (при участии Vixoma в какой-либо части махинации), то модератор обязан передать вопрос высшему руководству (Старшим Модераторам, Куратору, а те Администрации). После этого разбирательство будет проводить Админ-состав, и если обман будет доказан, то игрок-обманщик получит наказание. К сожалению, вернуть украденные денежные средства не представляется возможным.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>1.20</span>
            Если вы не согласны с выданным вам наказанием членами Персонала, то вы в праве написать в поддержку группы ВК или создать тикет на официальном Discord сервере, разъяснить ситуацию, предоставив доказательства. Если ваше обращение будет корректным и обоснованным, с вас снимут наказание.
          </p>
          <p className={"text-4xl font-bold " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>
            Решение Администрации проекта имеет большую силу, чем действующий свод правил.
          </p>
        </div>
        <div className="rules-list">
          <h2 className="pl-2 text-white text-4xl font-bold">2. Аккаунт</h2>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>2.1</span>
            Ник не должен содержать нецензурных слов, мата, оскорблений игроков, оскорбления проекта. (X*iMan*a, 4m*TbI). А также запрещены ники, которые намекают на принадлежность игрока к администрации и/или персоналу проекта. Например: _An1eaR_, _Melbe4q_, _9vilazy_. В случае с персоналом - только должности. <br />
            Наказание: Перманентный бан.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>2.2</span>
            Запрещено находиться на сервере со скином, содержащим порнографию (цензура будет оцениваться персоналом), любые религиозные, языческие, идеологические и национальные символы. Такие же требования относятся и к установке плащей. <br />
            Наказание: Предупреждение ⇒ Бан на 1 день ⇒ Перманентный бан.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>2.3</span>
            За аккаунт отвечаете только вы, любая продажа/покупка аккаунтов, а также продажа чего-либо в игре за реальную валюту является нарушением. Донатить на ник другого игрока НЕ ЗАПРЕЩЕНО. <br />
            Наказание: Бан на 7 дней. При повторных случаях навсегда (возможен сразу перманентный бан).
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>2.4</span>
            Запрещено использование более 2 аккаунтов. <br />
            Наказание: Бан 3-го аккаунта навсегда. 1 и 2 аккаунт будут заблокированы на 12 часов.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>2.5</span>
            Запрещено выдавать себя за персонал и Администрацию проекта в любом виде. <br />
            Наказание: Бан на 1 день ⇒ Бан на 7 дней ⇒ Перманентный бан.
          </p>
        </div>
        <div className="rules-list">
          <h2 className="pl-2 text-white text-4xl font-bold">3. Общение в чате</h2>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.1</span>
            Запрещено выпрашивание каких-либо ресурсов у персонала и/или Администрации. <br />
            Наказание: Мут 30 минут.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.2</span>
            Запрещено обсуждение действий Персонала (Например: "Найс замутил просто так..."). <br />
            Наказание: Мут на 30 минут.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.3</span>
            Запрещены все виды дискриминации и пропаганда идеологических взглядов. <br />
            Наказание: Мут на 2 часа.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.4</span>
            Запрещена пропаганда нацизма, расизма, наркотиков, алкоголизма, табакокурения и других видов ксенофобии. К этому правилу также относится НАВЯЗЫВАНИЕ И/ИЛИ ПРОДВИЖЕНИЕ мнения меньшинств, таких как ЛГБТ, Black lives matter, Body Positive и т.п. <br />
            Наказание: Мут на 2 часа.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.5</span>
            Запрещено разжигание ненависти между нациями, странами, народами и пр. <br />
            Наказание: Мут на 2 часа.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.6</span>
            Запрещены оскорбления игроков в грубой форме, а также любые угрозы в чью-либо сторону. (сюда же относится "ez", "L", "noob"). Если игрок не против оскорбления, то мут не выдаётся. <br />
            Наказание: Мут на 1 час.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.7</span>
            Запрещено оскорбление (упоминание) родственников в грубой форме. Если игрок не против оскорбления, то мут не выдаётся. <br />
            Наказание: Мут на 4 часа.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.8</span>
            Запрещено оскорбление проекта в любом виде. <br />
            Наказание: Мут на 6 часов.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.9</span>
            Запрещён организованный хейт. Если игрок не против хейта, то мут не выдаётся. <br />
            Наказание: Мут на 4 часа всех оскорбляющих.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.10</span>
            Запрещен флуд и спам в любой форме: <br />
            ● Спамом является от более 3 сообщений одинакового содержания в течение одной минуты. <br />
            ● Флуд символами от 8 символов в одном сообщении (флуд буквами, знаками, цифрами). <br />
            ● Мультипост от 7 сообщений парцелляции в течение одной минуты. <br />
            ● Злоупотребление чатом лс/флуд в лс (Рекомендуется отправить такого игрока в /ignore). <br />
            Наказание: Мут от 30 минут до 6 часов.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.11</span>
            Запрещено вводить в заблуждение игроков, распространять дезинформацию. <br />
            Наказание: Мут на 30 минут. В вопросе «Читали ли правила нашего проекта?» в заявке на модератора напишите следующий код: hwihg134hi190sad (Обновлено 07.05.2024)
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.12</span>
            Запрещена реклама сторонних интернет-ресурсов. Игрокам со статусом YouTube разрешается рекламировать только свой канал или стрим, если он в данный момент идет. Также запрещено упоминание/реклама других серверов. <br />
            Наказание: Мут от 6 часов до 1 дня ⇒ Мут до вайпа ⇒ Бан навсегда.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.13</span>
            Запрещена провокация игроков на нарушение правил. Если спровоцировал модератор, а игрок отреагировал, то последний не получает наказание, а член персонала снимается в большинстве случаев. <br />
            Наказание: Мут на 2 часа.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.14</span>
            Запрещено любое обсуждение/пропаганда ситуации вокруг Украины, специальной военной операции Российских войск и т.п. <br />
            Наказание: Мут на 4 часа.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>3.15</span>
            Запрещено оскорблять/намеренно осуждать действия Персонала проекта. Сюда же относится провокация сотрудников на конфликт. <br />
            Наказание: Мут на 6 часов.
          </p>
        </div>
        <div className="rules-list">
          <h2 className="pl-2 text-white text-4xl font-bold">4. Донат</h2>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>4.1</span>
            Администрация не переносит купленные услуги на другие аккаунты.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>4.2</span>
            Совершая покупку, вы соглашаетесь со всеми правилами нашего проекта и обязуетесь их соблюдать, также вы подтверждаете, что ваше желание пожертвовать деньги проекту является добровольным.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>4.3</span>
            Пожертвованные средства не могут быть возвращены.
          </p>
          <p>
            <span className={"mr-4 " + (isDarkMode ? "text-cyan-200" : "text-purple-950")}>4.4</span>
            Если вы совершите серьёзное нарушение правил, то Администрация в праве лишить вас приобретённых за донат привилегий и т.п.
          </p>
        </div>
      </main>
    );    
}