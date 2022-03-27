let toggle= document.querySelector('.toggle')
let togglebtn= document.querySelector('.toggle-background')
let monthlyspan=document.querySelectorAll('.monthly')
let anualspan=document.querySelectorAll('.annual')

function changemonthly(){
    monthlyspan.forEach((item) =>{
        item.setAttribute('style','display:none')
    })
    anualspan.forEach((item) =>{
        item.setAttribute('style','display:block')
    })
}

function changeannual(){
    monthlyspan.forEach((item) =>{
        item.setAttribute('style','display:block')
    })
    anualspan.forEach((item) =>{
        item.setAttribute('style','display:none')
    })
}

togglebtn.addEventListener('click',function(){
    

    if(toggle.className==='toggle'){
        console.log('annual')
        toggle.classList.remove('toggle')
        toggle.classList.add('toggle-active')
        changemonthly()
    }
    else if(toggle.className==='toggle-active'){
        console.log('monthly')
        toggle.classList.remove('toggle-active')
        toggle.classList.add('toggle')
        changeannual()

    }
   
})