// .                For + break/continue ga oid masalalar (4 ta):


// 1 ) 1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).

// for ( let i = 1; i<= 100; i++){
//     console.log(i);
//     if(i == 50 ){
//         break
//     }
    
// }

// 2)1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).

// for( let i = 1; i<= 20 ; i++){
//     if( i % 3 ==0){
//         continue
//     }
//     console.log(i);
// }

// 3)1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).
// 
// for ( let i = 1; i<=30; i++){
//     console.log(i); 
//     if( i == 5){
//         break
//     }
// }


// 4 )1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.

// let x =0;
// for(let i = 1; i<=50; i++){
//     if( i % 7 == 0){
//         console.log(i);
//         x++;
//         if( x ==3){
//             break
//         }
        
//     }
// }


//  Switch-case ga oid masalalar (4 ta):


// 1)Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.

// let x = +prompt( 'son kirting')
// switch (x) {
//     case 1:
//         console.log('Dushanba');
        
//     break;
//     case 2 :
//         console.log('Seshanba ');
        
//     break;
//     case 3:
//         console.log('chorshanaba ');
        
//     break;
//     case 4 :
//         console.log('payshanba ');
        
//     break;
//     case 5 :
//         console.log('juma');
        
//     break;
//     case 6:
//         console.log('shanba ');
        
//     break;
//     case 7:
//         console.log('yakshanba');
        
//     break;

//     default:
//         console.log('bunday hafta kun mavjud emas');
        
//     break;
// }


// 2)Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.

// let x = +prompt('son kirting')

// switch (x) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('qish');
        
//     break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('bahor');
        
//     break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('yoz');
        
//     break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('kuz');
        
//     break;

//     default:
//         console.log('bunday mavjud emas');
        
//     break;
// }


// 3)Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.

// let x = +prompt('son kirting ')

// if( x % 2 ==0 ){
//     console.log('juft son');
    
// }
// else{
//     console.log('toq son');
    
// }

// 4)Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

// let x = +prompt('son kirting')
// switch (x) {
//     case 5:
//         console.log("a'lo");
//     break;
//     case 4:
//         console.log("yaxshi");
//     break;
//     case 3:
//         console.log("qoniqarli");
//     break;
//     case 2:
//         console.log("qoniqarsiz");
//     break;
//     case 1:
//         console.log("yomon");
//     break;

//     default:
//         console.log('1-5 oraligida kirting');
        
//         break;
// }


// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

// 1)1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.

// let x = 1;
// while(x<=10){
//     console.log(x);
//     x++
    
// }

// 2)10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.

// let x = 10;
// while(x>=1){
//     console.log(x);
//     x--
    
// }

// 3)Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.

// let x = +prompt('son kirting')

// let sum = 0;

// while( x !=0  ){
//     sum+=x;
//     x = +prompt('yangi son kirting')
//     console.log(sum);
// }

// 4) Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.


// let x = +prompt('son kirting')

// while( x <!0  ){
//     x = +prompt('yangi son kirting')
// }
// console.log(x);

// 5)Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.

// let x = +prompt('son kirting')
// let sum = 0;

// while( x >= 1){
//     let lastname = ( x %10 )
//     sum += lastname;
//     x = Math.trunc(x/10)
// }
// console.log(sum);


// 6)Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.

// let x = +prompt('son kirting')

// let counter =0;

// while(true){
//     let x = +prompt( ' son kirting')
//     if(x % 2 == 0){
//         counter++;

//     }
//     if(x<0){
//         break
//     }
// }
// console.log(counter);


// 7)1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.

// let i = 1;
// while(i<= 20){
//     console.log(i);
//     i+=2
    
// }

// 8)1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.

// let i =1; 
// while( i<=50 ){
//     if(i % 5 ==0){
//         console.log(i);
//     }
//     i++
// }

// 10)100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.

// let x = 100;

// while(x>=1){
//     if(x % 10 ==0){
//         console.log(x);
//     }
//     x--;
// }


// 11)1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.

// let i = 1;
// while( i<=100 ){
//     let x = i*i
//     console.log(x);
//     i++
// }


// 12)Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.

// let x  = +prompt('son kirting')

// while(x !=5){
//     let x = +prompt('son kirting')
//     if( x % 5 ==0){
//         break
//     }
    
// }
// console.log(x);

// 13)Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.
// let x = +prompt( 'son kirtig')

// while(x<10){
//     let x = +prompt('son kirting')
//     if( x> 10 ){
//         console.log(x);
//         break;
//     }
    
// }

// 14)Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.

// let x = 0;
// let counter = 0;

// while (x != "stop") {
//     x = prompt("Son kiriting ");
    
//     if (x == "") {
//         counter++;
//     }
// }
// console.log(counter);


// 15)Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).

// Ternary operator ga oid masalalar (5 ta):

//  1)Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.


// let x = +prompt( 'son kirting')
// x > 0 ? console.log('musbat son'): console.log('manfiy son');

// 2)Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.

// let x = +prompt('son kirting')
// x % 2 ==0 ? console.log('juft son') : console.log('toq son');

// 3)Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.

// let x = +prompt( 'son kirting ')
// x > 100 ? console.log('100 dan katta son kitildi ') : console.log('100 dan kichik son kirtildi');

// 5)Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.

// let x = +prompt('son kirting')
// x % 3 ==0 ; x % 5 == 0? console.log('bolinadi'):console.log('bolinmaydi');


// Math methods ga oid masalalar (4 ta):

// 1 ) 0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga /chiqarib bering.

// console.log(Math.trunc(Math.random() *100));

// 2)Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).

// let x = +prompt('haqiqiy son kirting')
// console.log(Math.trunc(x));

// 3)Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).

// let x = +prompt('haqiqiy son kirting')
// console.log(Math.ceil(x));

// 4)Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).

// let x  = +prompt('haqiqiy son kirting')
// console.log(math.abs(x));

// For ga oid masalalar (15 ta):

// 1)1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.

// for ( let i = 1; i<=50; i++0){
//     console.log(i);
    
// }

// 2)10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.

// for( let i =10; i>=1; i--){
//     console.log(i);
    
// }

// 3)1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.

// for(let i = 1; i<=100; i+=2){
//     console.log(i);
    
// }

// 4)1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.

// for(let i = 2; i<=50; i+=2)[
//     console.log(i);
    
// ]

// 5)1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.

// let sum = 0;
// for( let i = 1 ; i<=100; i++){
//     sum+=i;
// }
// console.log(sum);

// 6)Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.

// let x = +prompt('son kirting')

// let p =1;
// for( let i = 1; i<=x; i++){
//     p*=i;
// }
// console.log(p);

// 7)1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.

// for( let i = 1; i<= 20; i++){
//     console.log(i*i);
    
// }

// 8)Foydalanuvchi kiritgan sonning faktorialini hisoblang.

// let x = +prompt('son kiritng ')

// let p = 1;
// for(let i = 1; i<= x; i++){
//     p*=i;
    
// }
// console.log(p); 

// 9)1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.

// for( let i = 1; i<= 100; i++){
//     if(i % 5 ==0){
//         console.log(i);
        
//     }
// }

// 10)Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.

// let x = +prompt('son kirting')

// for( let i = 1; i<=x; i++){
//     console.log(i*i*i);
    
// }

// 11)1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.

// let sum = 0 ;
// for ( let i = 1; i<=100; i++){
//     if(i % 2 ==0){
//         sum+=i;
        
//     }
// }
// console.log(sum);

// 12)1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.

// let counter =0;
// for( let i = 1; i<=50; i++){
//     if(i % 3 ==0){
//         counter++;
//         console.log(i);
//     }
//     if(counter == 10 ){
//         break
//     }
// }

// 13)Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.

// let x = +prompt( 'son kirting')

// let sum = 0;
// for(let i = 1; i<= x; i++){
//     sum+=i;
// }
// console.log(sum);


// 14)1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.

// let sum =0;
// for ( let i = 1; i<= 10; i++){
//     sum+=i*i;
// }
// console.log(sum);

// 15)Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.

// let x = +prompt('son kirting')

// if(x> 0){
//     for(let i = 1; i<= x; i++){
//         if(x % i == 0){
//             console.log(i);
            
//         }
//     }
// }

// Barcha mavzularni qamrab oluvchi masalalar (10 ta)

// 1)Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.

// let x = +prompt('son kirting')

// x % 3 == 0 ? console.log(`bolinadi `): console.log(`bolinmadi`);
// for(let i = 1; i<= x; i++){
//     console.log(i);
    
// }

// 2)Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.

// let x = +prompt('son kirting')
// switch (x) {
//     case 1:
//     case 2:
//     case 12:
//     console.log('qish');
        
//     break;
//     case 3:
//     case 4:
//     case 5:
//     console.log('bahor');
        
//     break;
//     case 6:
//     case 7:
//     case 8:
//     console.log('yoz');
        
//     break;
//     case 9:
//     case 10:
//     case 11:
//     console.log('kuz');
        
//     break;

//     default:
//         console.log('bunday fasl mavjud emas');
//         break;
// }

// for( let i = 1; i<=x; i++){
//     console.log(i);
    
// }

// 3)Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).

// let x = (Math.trunc(Math.random() *100));

// if( x % 2 ==0 ){
// for(let i = 1; i<= 20 ; i++){
//     console.log(i);
    
// }
// }
// else{
//     console.log('randomga toq son tanlandi');
    
// }


// 4)Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).

// let x = +prompt('son kirting')

// let p = 1;
// for ( let i = 1 ; i<= x; i++){
//     p*=i;
    
// }
// console.log(Math.abs(p));


// 5)Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

// let x = +prompt('son kirting')

// switch (x) {
//     case 1:
//         console.log('Dushanba ');
        
//     break;
//     case 2:
//         console.log('seshanba');
        
//     break;
//     case 3:
//         console.log('chorshanba');
        
//     break;
//     case 4:
//         console.log('payshanba');
        
//     break;
//     case 5:
//         console.log('juma');
        
//     break;
//     case 6:
//         console.log('shanba');
        
//     break;
//     case 7:
//         console.log('yakshanba');
        
//     break;

//     default:
//         console.log('bunday hafta kuni yoq');
        
//         break;
// }

// if( x % 2 == 0){
//     for(let i =1; i<= 10; i++){
//         console.log(i);
        
//     }
    
// }


// 6) Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).

// let x = (Math.trunc(Math.random()*100))

// let sum = 0;
// let i = 1;
// while (i<= x ){
//     sum+=x;
//     i++;
// }
// console.log(sum);

// 7)Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.

// let sum = 0,
// counter = 0,
// x = "";

// do {
//     x = +prompt("Son kiriting");
//     if (x >= 0) {
//         sum += x, 
//         counter++;
//     }
// } while (x >= 0);

// console.log(counter ? `O'rtachasi=> ${sum / counter}` : "Son kiritilmadi");

// 8)Foydalanuvchidan 1 dan 7 gacha son kiritishni so‘rang (switch-case). Agar son 3 yoki 6


// masala toliq berilmagan

