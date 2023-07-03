// ALSO NEED TO ADD - <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//Alternate Animations script
var moveHeight = 100;
var moveDirection = 'up' //up, down, left, right, none (it means it'll just fade out)
var animatedParents = Array.from(document.querySelectorAll('[anime-parent]'))
animatedParents.forEach(animeParent => {
    if (animeParent) {
        animeParent.childNodes.forEach(childNode => {
            childNode.setAttribute('anime-child', 'true')
        })
    }
})



var alternateAnimations = arr => {
    duration = 400
    for (i = 0; i < arr.length; i++) {
        slideUpAnimate(arr[i], duration, (duration * (i + 1)) / 2, 0, 1)
    }
}

var slideUpAnimate = (el, duration, delay, disTranlate, opacity) => {
    switch (moveDirection) {
        case 'up':
            setTimeout(() => {
                anime({
                    targets: el,
                    translateY: disTranlate,
                    opacity: opacity,
                    duration: duration,
                    easing: 'easeOutSine'
                });
            }, delay)
            break;
        case 'down':
            setTimeout(() => {
                anime({
                    targets: el,
                    translateY: -disTranlate,
                    opacity: opacity,
                    duration: duration,
                    easing: 'easeOutSine'
                });
            }, delay)
            break;
        case 'left':
            setTimeout(() => {
                anime({
                    targets: el,
                    translateX: -disTranlate,
                    opacity: opacity,
                    duration: duration,
                    easing: 'easeOutSine'
                });
            }, delay)
            break;
        case 'right':
            setTimeout(() => {
                anime({
                    targets: el,
                    translateX: disTranlate,
                    opacity: opacity,
                    duration: duration,
                    easing: 'easeOutSine'
                });
            }, delay)
            break;
        case 'none':
            setTimeout(() => {
                anime({
                    targets: el,
                    opacity: opacity,
                    duration: duration,
                    easing: 'easeOutSine'
                });
            }, delay)
            break;
    }
}

var isElementInView = (el) => {
    var percentVal = 80;
    var windowHeight = window.innerHeight
    var spaceToCover = Math.round(windowHeight * percentVal / 100)
    var spaceFromEachSides = (windowHeight - spaceToCover) / 2;
    var elTop = el.getBoundingClientRect().top
    // var elBottom = el.getBoundingClientRect().bottom
    if (elTop + el.offsetHeight > spaceFromEachSides && elTop < windowHeight - spaceFromEachSides) {
        return true;
    }
    return false
}

animatedParents.forEach(parent => {
    var animatedChilds = parent.querySelectorAll('[anime-child=true]')
    animatedChilds.forEach(child => {
        slideUpAnimate(child, 0, 0, moveHeight, 0)
    })
})

function animateIfParentInView() {
    animatedParents.forEach(parentEl => {
        if (isElementInView(parentEl)) {
            alternateAnimations(parentEl.querySelectorAll('[anime-child=true]'))
            var thisParentIndex = animatedParents.indexOf(parentEl)
            animatedParents.splice(thisParentIndex, 1)
        }
    })
}

window.addEventListener('scroll', animateIfParentInView)
animateIfParentInView()
animateIfParentInView()
