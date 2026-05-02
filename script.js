gsap.set(".lemon1", { rotate: "-90deg", left: "-100%", top: "110%" });
gsap.set("#cocacola", { rotate: "-90deg", top: "110%", left: "-100%" });
gsap.set(".lemon2", { rotate: "90deg", left: "100%", top: "110%" });
gsap.set("#pepsi", { rotate: "90deg", top: "110%", left: "100%" });

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"165%",
    right: "15%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})


tl2.to(".lemon1",{
    rotate: "0deg",
    left: "50%",
    top: "-30%"
}, 'ca')
tl2.to("#cocacola",{
    rotate: "0deg",
    top: "-15%",
    left: "50%",
}, 'ca')

tl2.to(".lemon2",{
    rotate: "0deg",
    left: "50%",
    top: "-30%"
}, 'ca')
tl2.to("#pepsi",{
    rotate: "0deg",
    top: "-25%",
    left: "50%",
}, 'ca')


tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
