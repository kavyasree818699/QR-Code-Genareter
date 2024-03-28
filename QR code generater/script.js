// const url = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`

const qrText = document.getElementById('qrText')
const imgBox = document.getElementById('imgBox')
const QRimg = document.getElementById('QRimg')
// const btn = document.getElementById('btn')


// btn.addEventListener('click', function(){
//     imgBox.src='generate' + qrText.ariaValueMax;
// })

function generate(){
    if(qrText.value.length > 0){
       QRimg.src=' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
       imgBox.classList.add('show-img')
    }
   
}

