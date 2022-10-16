// ALSO NEED TO ADD - <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//Alternate Animations script
var animatedParents = Array.from(document.querySelectorAll('[anime-parent]'))
var moveHeight = 100;
var easingType = 'easeOutSine'
var slideUpDuration = 400

animatedParents.forEach(animeParent=>{
    //assigning anime child to all it's child
    if(!!animeParent.querySelector('[anime-child]')) {
        //it makes sure you can add custom child if you want
        return;
    }
    if(animeParent) {
        animeParent.childNodes.forEach(childNode=>{
            childNode.setAttribute('anime-child', 'true')
        })
    }
})



var alternateAnimations = arr => {
    //animating elements in array line by line
    for(i=0;i<arr.length;i++) {
        slideUpAnimate(arr[i], slideUpDuration, (slideUpDuration*(i+1))/2, 0, 1)
    }
}

var slideUpAnimate = (el, duration, delay, yTranlate, opacity) => {
    setTimeout(()=>{
        anime({
            targets: el,
            translateY: yTranlate,
            opacity: opacity,
            duration: duration,
            easing: easingType
          });
    }, delay)
}

var isElementInView = (t) => {
    var topPos = t.getBoundingClientRect().top
    var tHeight = t.offsetHeight;
    if(tHeight> 600) {
        tHeight = 400;
    }
    if(tHeight<100) {
        tHeight = 100;
    }
    var offsetPos = 0.5;
    var offsetAttribute = t.getAttribute('offset-pos')
    if(!!offsetAttribute) {
        offsetPos = parseFloat(offsetAttribute)
    }
    var isTargetPosReached = false;
    var topMaxPos = window.innerHeight - Math.round(offsetPos * t.offsetHeight)
    var topMinPos = - Math.round(offsetPos*t.offsetHeight)
    var isTargetPosReached = (topPos < topMaxPos) && (topPos > topMinPos)
    return isTargetPosReached;
}

animatedParents.forEach(parent=>{
    var animatedChilds = parent.querySelectorAll('[anime-child=true]')
    animatedChilds.forEach(child => {
        slideUpAnimate(child, 0, 0, moveHeight, 0)
    })
})

function animateIfParentInView() {
    animatedParents.forEach(parentEl=>{
        if(isElementInView(parentEl)) {
            alternateAnimations(parentEl.querySelectorAll('[anime-child=true]'))
            var thisParentIndex = animatedParents.indexOf(parentEl)
            animatedParents.splice(thisParentIndex, 1)
        }
    })
}

window.addEventListener('scroll', animateIfParentInView)
animateIfParentInView()