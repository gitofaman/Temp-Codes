var isNodeInView = (t) => {
    var topPos = t.getBoundingClientRect().top
    var tHeight = t.offsetHeight;
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