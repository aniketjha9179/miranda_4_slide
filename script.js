const  tl =  gsap.timeline()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


tl.to('#page1', {
    y:'100vh',
    scale:0.6,
    duration:0,

})


tl.to ('#page1', {
    duration:1.5,
    delay:.8


} )
tl.to('#page1',{
    y:'0vh',
    rotate:360,
    scale:1, 
    duration:0.8


})
