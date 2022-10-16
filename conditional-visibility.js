//works in a way that if there is a checbox or radio with attribute 'show-class-when-active' 
//then it will show the el with classes given in the attribute
var customAttrs = {
    showWhenActive: 'show-class-when-active'
}
var conditionalVisibilityToggles = document.querySelectorAll(`[${customAttrs.showWhenActive}]`)
conditionalVisibilityToggles.forEach(toggle=>{
    var elClassToMakeActive = toggle.getAttribute(customAttrs.showWhenActive)
    var elsToMakeActive = document.querySelectorAll(`.${elClassToMakeActive}`)

    toggle.addEventListener('change', ()=>{
        if(toggle.checked) {
            elsToMakeActive.forEach(el=>{
                el.style.display = 'none'
            })
        } else {
            elsToMakeActive.forEach(el=>{
                el.style.display = ''
            })
        }
    })
})