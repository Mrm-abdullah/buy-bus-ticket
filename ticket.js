let amount = 0
const seats = document.querySelectorAll(".seats");
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener('click', function(){
        const seatOff = document.getElementById('seat-off');
        const seatCount = document.getElementById('seat-count');
        const seatList = document.getElementById('seat-list');
        const idAmount = document.getElementById('amount');
        const grandamount = document.getElementById('grandamount');
        const seatNum = parseInt(seatOff.innerText);
        const countNum = parseInt(seatCount.innerText);

        if (countNum < 4 ) {
            if (!seat.classList.contains('bg-green-500')) {
                amount = amount + 550
                idAmount.innerText = amount;
                grandamount.innerText = amount;
                seatOff.innerText = seatNum - 1;
                seatCount.innerText = countNum + 1;
                const getSeatNo = seat.innerText;
                
                seat.classList.add('bg-green-500')
                
                const div0 = document.createElement('div');
                const div1 = document.createElement('div');
                const div2 = document.createElement('div');
                const div3 = document.createElement('div');
                
                div0.classList.add("flex");
                div0.classList.add("justify-between");
                div0.classList.add("p-5");
                
                div1.innerText = getSeatNo;
                div2.innerText = 'Economoy';
                div3.innerText = 550;
                div0.appendChild(div1);
                div0.appendChild(div2);
                div0.appendChild(div3);
                seatList.appendChild(div0);
                
                
            }else{
                alert('Already Selected')
            }
        }else{
            alert('Already 4 items Selected')
        }
    })
}
document.getElementById('couponButton').addEventListener('click',function () {
    const coupon =  document.getElementById('coupon').value;
    
    const seatCount = document.getElementById('seat-count');
    const countNum = parseInt(seatCount.innerText);
    if (countNum > 0) {
        if (coupon === 'NEW15' || coupon === 'Couple 20') {
            const couponMain =  document.getElementById('couponMain');
            couponMain.classList.add('hidden');
            
            const total = amount;
            if (coupon === 'NEW15') {
                const discount = total * 0.15
                
                const grandtotal = amount - discount;
                
                const grandamount = document.getElementById('grandamount');
                grandamount.innerText = grandtotal;
                
                console.log('15%')
            }
            if (coupon === 'Couple 20') {
                const discount = total * 0.20;
                const grandtotal = amount - discount;
                
                const grandamount = document.getElementById('grandamount');
                grandamount.innerText = grandtotal;
                console.log('20%')
            }
            
            }else{
                alert('Please enter valid coupon')
            }
    }else{
        alert('please selected minimum 1 items')
    }
})



// // document.getElementById('play-now-button').addEventListener('click', function(){
// //     document.body.style.backgroundColor = 'goldenrod';
// // })