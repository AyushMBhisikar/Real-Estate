let people= document.getElementById('people');
let people_less= document.getElementById('people_less');
let people_More = document.getElementById('people_More');

let people_index = 4;
people_less.addEventListener('click',()=>{
    people_index -=1;
    if(people_index<=0){
        people_index = 1;
        people.value = people_index+' People';

    }else{

        people.value = people_index+' People';
    }
})
people_More.addEventListener('click',()=>{
    people_index +=1;
    if(people_index>=4){
        people_index = 4;
        people.value = people_index+' People';

    }else{
        
        people.value = people_index+' People';
    }
})

let checkout_data= document.getElementById('checkout_data');
let checkout= document.getElementById('checkout');
let checkin_data= document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');
checkin.addEventListener('change',()=>{
    let checkin_value=checkin.value;
    // console.log(checkin_value);


    let dates= new Date(checkin_value);
    let dates2 = new Date();
    const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    // let day=dates.getDay;
    let day = week[dates.getDay()]
    // console.log(day); 
    // let date = checkin_value.slice(8,10);
    let date = tommarow.getDay();
    // console.log(date);
    let months = ['jan','feb','mar','api','may','jun','july','aug','sep','oct','nov','dec'];

    let month = months[dates.getMonth()];
    // console.log(month);

    if (dates < dates2) {
        console.log('No Date');
    }else{
        checkin_data.innerText = day +','+date +' '+month;
    }
})

checkout.addEventListener('change',()=>{
    let checkout_value=checkout.value;
    let checkin_value=checkin.value;
    // console.log(checkin_value);


    let dates= new Date(checkout_value);
    let dates2 = new Date(checkin_value);
    const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    // let day=dates.getDay;
    let day = week[dates.getDay()]
    // console.log(day); 
    // let date = checkout_value.slice(8,10);
    let date = tommarow.getDay();
    // console.log(date);
    var months = ['jan','feb','mar','api','may','jun','july','aug','sep','oct','nov','dec'];

    let month = months[dates.getMonth()];
    // console.log(month);

    if (dates < dates2) {
        console.log('No Date');
    }else{
        console.log(day +','+date +' '+month);
        checkout_data.innerText = day +','+date +' '+month;
    }
})

let checkin_less = document.getElementById('checkin_less');
let checkin_more = document.getElementById('checkin_more');
let checkout_less = document.getElementById('checkout_less');
let checkout_more = document.getElementById('checkout_more');

checkin_more.addEventListener('click',()=>{
    const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['jan','feb','mar','api','may','jun','july','aug','sep','oct','nov','dec'];
    let today = new Date();
    let tommarow = new Date(today);

    tommarow.setDate(tommarow.getDate()+1);
    let day = week[tommarow.getDay()];
    let date = tommarow.getDay();
    let month = months[tommarow.getMonth()];

    checkin_data.innerText = day +','+date +' '+month;

})
checkin_less.addEventListener('click',()=>{
    const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['jan','feb','mar','api','may','jun','july','aug','sep','oct','nov','dec'];
    let today = new Date();
    // let tommarow = new Date(today);

    // tommarow.setDate(tommarow.getDate()+1);
    let day = week[today.getDay()];
    let date = today.getDay();
    let month = months[today.getMonth()];

    checkin_data.innerText = day +','+date +' '+month;

})



checkout_more.addEventListener('click',()=>{
    const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['jan','feb','mar','api','may','jun','july','aug','sep','oct','nov','dec'];
    let today = new Date();
    let tommarow = new Date(today);

    tommarow.setDate(tommarow.getDate()+2);
    let day = week[tommarow.getDay()];
    let date = tommarow.getDay();
    let month = months[tommarow.getMonth()];

    checkout_data.innerText = day +','+date +' '+month;

})
checkout_less.addEventListener('click',()=>{
    const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['jan','feb','mar','api','may','jun','july','aug','sep','oct','nov','dec'];
    let today = new Date();
    let tommarow = new Date(today);

    tommarow.setDate(tommarow.getDate()+1);
    let day = week[tommarow.getDay()];
    let date = tommarow.getDay();
    let month = months[tommarow.getMonth()];

    checkout_data.innerText = day +','+date +' '+month;

})

const image=[
   " url(img/bg.png) no-repeat center/cover",
   " url(img/bg1.jpg) no-repeat center/cover",
   " url(img/banglow2.jpg) no-repeat center/cover",
   " url(img/banglow3.jpg) no-repeat center/cover",
   " url(img/1.png) no-repeat center/cover",
   " url(img/2.jpg) no-repeat center/cover",
]
let index = 1;
let h6 = document.getElementById('h6');
h6.innerText="+" + image.length;
let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;
btn_left.addEventListener('click',()=>{
    index -=1;
    if(index < 0){
        index = (image.length)-1;
    }
    style.setProperty('--background',image[index])
})

btn_right.addEventListener('click',()=>{
    index ++;
    if(index > (image.length)-1){
        index = 0;
    }
    style.setProperty('--background',image[index])
})


