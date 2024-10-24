<h1 align="center">Занятие 2 - Сети, JS (Типы данных, приведение типов)</h1>
<h2>Домашнее занятие:</h2>
<h3>1) Подробно прочитать про метод запроса OPTIONS - и кратко его описать, когда вызывается, где используется, что передает и принимает. </h3>
<p>Метод HTTP OPTIONS используется для описания параметров соединения с целевым ресурсом. Он позволяет клиенту узнать, какие методы и заголовки поддерживаются сервером для данного ресурса.</p>
	<ul>
		<li>Когда вызывается: Обычно перед выполнением фактического запроса, чтобы определить, какие операции разрешены.</li>
		<li>Где используется: Применяется в механизме CORS (Cross-Origin Resource Sharing) для выполнения предварительных запросов.</li>
		<li>Что передает: Отдельный URL для обработки или * (звездочку) для сервера целиком.</li>
		<li>Что принимает: Сервер отвечает списком поддерживаемых методов и заголовков, используя заголовки Allow или Access-Control-Allow-*.</li>
	</ul>
<h3>2) Прочитать и описать ключевые особенности "HTTP" Версии 3.0</h3>
<p>
HTTP/3 — это новая версия протокола HTTP, которая работает поверх протокола транспортного уровня QUIC (Quick UDP Internet Connections), разработанного Google.
	<ul>
		<li>Переход с TCP на QUIC (основанный на UDP) для улучшения скорости и безопасности.</li>
		<li>Улучшенная производительность благодаря уменьшению круговой задержки (round-trip time, RTT) при установке соединения.</li>
		<li>Мультиплексирование. QUIC может передавать несколько потоков параллельно, чего не умеет TCP.</li>
		<li>Обязательное использование TLS 1.3, повышающее безопасность соединения.</li>
		<li>Лучшая обработка потерь пакетов по сравнению с TCP. Если часть информации была утеряна, он не будет передавать весь пакет заново, а отправит только утерянный фрагмент.</li>
	</ul>
</p>
<h3>3) Прочитать про способы отмены запроса, включая объект "AbortController"</h3>
<p>
<pre>let controller = new AbortController();
let signal = controller.signal;
setTimeout(() => controller.abort(), 1000);

try {
  let response = await fetch('someurl.com', { signal });
} catch(err) {
  if (err.name == 'AbortError') { // обработать ошибку от вызова abort()
    alert("Прервано!");
  } else {
    throw err;
  }
}

let isCancelled = false; //также ранее использовалась отмена промиса через пользовательские флаги (булевую переменную)
</pre>
</p>
<h3>3) Написать по 2 примера создания примитивных значений (если есть несколько способов - использовать) (string, number, boolean, null, undefined, symbol, bigInt)</h3>
<p>
<pre>
//String
const str1 = 'Hello';
const str2 = String('World'); //также вариации кавычек - двойные, одинарные и обратные

//Number
const num1 = 42;
const num2 = Number('24');

//Boolean
const bool1 = true;
const bool2 = Boolean(0);

//Null
const null1 = null; // Второго способа нет, null является литералом

//Undefined
let undef1;
const undef2 = undefined;

//Symbol
const sym1 = Symbol('id');
const sym2 = Symbol();

//BigInt
const bigInt1 = 123456789012345678901234567890n;
const bigInt2 = BigInt('123456789012345678901234567890');
</pre>
</p>
<h3>4) Почему, если обратиться к переменным созданным через let, const до их объявления - мы получаем ReferenceError?</h3>
<p>Переменные, объявленные с помощью let и const, находятся во временной мёртвой зоне (Temporal Dead Zone) от начала их области видимости до момента их инициализации. Они недоступны до того, как интерпретатор достигнет строки их объявления, а попытка доступа к таким переменным до их объявления приводит к ReferenceError. Это поведение предотвращает возможные ошибки, связанные с использованием необъявленных или неинициализированных переменных.</p>
<h3>5) Решить: 
	<pre>
		const res = "B" + "a" + (1 - "hello");
		console.log(res); //

		const res2 = (true && 3) + "d";
		console.log(res2); //

		const res3 = Boolean(true && 3) + "d";
		console.log(res3); //
	</pre>
</h3>
<p>
	<pre>
		const res = "B" + "a" + (1 - "hello");
		console.log(res); // "BaNaN"

		const res2 = (true && 3) + "d";
		console.log(res2); // "3d"

		const res3 = Boolean(true && 3) + "d";
		console.log(res3); // "trued"
	</pre>
</p>