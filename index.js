// barba.init();

function mainAnimation(){
    gsap.from("img",{
        duration:1,
        opacity:0,
        y:-100,
        x:-30,
        rotate:-10
    })
    gsap.from("#div3 h4",{
         y:"-300px",
         duration:1,
         opacity:0
    })
    gsap.from("#div2 h3",{
        x:"300px",
        duration:1.5,
        opacity:0
    })
    gsap.from("#div2 h4",{
        x:"300px",
        duration:1.5,
        opacity:0
    })
    gsap.from("#div2 h6",{
        x:"300px",
        duration:1.5,
        opacity:0
    })
}
barba.init({
    snyc:true,
    transitions:[
        {
            enter(){
                mainAnimation();
            }
        }
    ]
});
