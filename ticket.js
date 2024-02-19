let amount = 0
const seats = document.querySelectorAll(".seats");
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener('click', function(){
        const seatOff = document.getElementById('seat-off');
        const seatCount = document.getElementById('seat-count');
        const seatList = document.getElementById('seat-list');
        const idAmount = document.getElementById('amount');
        const seatNum = parseInt(seatOff.innerText);
        const countNum = parseInt(seatCount.innerText);

        if (countNum < 4 ) {
            amount = amount + 550
            idAmount.innerText = amount;
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

            console.log(div0);
            console.log(getSeatNo);
            // console.log(seatList);
            
        }else{
        }
        

        // console.log(seatCount);
        // console.log(seatOff);
        })
}




// // document.getElementById('play-now-button').addEventListener('click', function(){
// //     document.body.style.backgroundColor = 'goldenrod';
// // })