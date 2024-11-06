const buttonDefault = `#97bf04`
const buttonCurrent = `#d9043d`

sheep.addEventListener(`click`, function(){
    console.log("WORKS")
    document.getElementById(`animal_img`).src = "images/sheep.webp"
    document.getElementById(`sheep`).style.backgroundColor = buttonCurrent
    document.getElementById(`bear`).style.backgroundColor = buttonDefault
    document.getElementById(`moose`).style.backgroundColor = buttonDefault
    document.getElementById(`wolf`).style.backgroundColor = buttonDefault
    document.getElementById(`elk`).style.backgroundColor = buttonDefault
})


bear.addEventListener(`click`, function(){
    document.getElementById(`animal_img`).src = "images/bear.webp"
    document.getElementById(`sheep`).style.backgroundColor = buttonDefault
    document.getElementById(`bear`).style.backgroundColor = buttonCurrent
    document.getElementById(`moose`).style.backgroundColor = buttonDefault
    document.getElementById(`wolf`).style.backgroundColor = buttonDefault
    document.getElementById(`elk`).style.backgroundColor = buttonDefault
})


moose.addEventListener(`click`, function(){
    document.getElementById(`animal_img`).src = "images/moose.webp"
    document.getElementById(`sheep`).style.backgroundColor = buttonDefault
    document.getElementById(`bear`).style.backgroundColor = buttonDefault
    document.getElementById(`moose`).style.backgroundColor = buttonCurrent
    document.getElementById(`wolf`).style.backgroundColor = buttonDefault
    document.getElementById(`elk`).style.backgroundColor = buttonDefault
})


wolf.addEventListener(`click`, function(){
    document.getElementById(`animal_img`).src = "images/wolf.webp"
    document.getElementById(`sheep`).style.backgroundColor = buttonDefault
    document.getElementById(`bear`).style.backgroundColor = buttonDefault
    document.getElementById(`moose`).style.backgroundColor = buttonDefault
    document.getElementById(`wolf`).style.backgroundColor = buttonCurrent
    document.getElementById(`elk`).style.backgroundColor = buttonDefault
})


elk.addEventListener(`click`, function(){
    document.getElementById(`animal_img`).src = "images/elk.webp"
    document.getElementById(`sheep`).style.backgroundColor = buttonDefault
    document.getElementById(`bear`).style.backgroundColor = buttonDefault
    document.getElementById(`moose`).style.backgroundColor = buttonDefault
    document.getElementById(`wolf`).style.backgroundColor = buttonDefault
    document.getElementById(`elk`).style.backgroundColor = buttonCurrent
})