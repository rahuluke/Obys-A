function Loader(){
        var t1 = gsap.timeline()

t1.from(".line h1",{
        y: 150,
        stagger: 0.25,
        duratiuon: 0.6,
        delay: 0.2,
})
t1.from("#line1_part1, .line h2",{
        opacity: 0,
        onStart: function(){
                var h5timer = document.querySelector("#line1_part1 h5");
var grow = 0 ;
setInterval(function(){
        if(grow < 100){
              h5timer.innerHTML = grow++;
        }else{
              h5timer.innerHTML = grow;
        }
},20);
        }
})
t1.to("#loader",{
        opacity: 0,
        duratiuon:0.1,
        delay:2,
})

t1.from("#page1",{
        delay:0.2,
        y:100,
        opacity:0,
        duration: 0.2,
        ease:Power4
})

t1.to("#loader",{
        display:'none'
});
t1.from("#nav",{
        opacity:0
})
t1.from("#Hero1 h1,#Hero2 h1,#Hero3 h2,#Hero4 h1",{
        y:100,
        stagger: 0.2,
})
}
Loader();

function cursorAnimation(){
        
document.addEventListener("mousemove",function (dets){
        gsap.to('#crsr',{
                left:dets.x,
                top:dets.y,
        });
});
Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation();