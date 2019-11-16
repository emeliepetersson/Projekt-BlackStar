const formEmail = document.querySelector('.mailForm');
const body = document.body;

    window.addEventListener('scroll', ()=>{
        /* the size need to be uppdated therfore the variables is
        the event becuse when scrolled the total scrollheight is
        uppdated and can be calculated with scroll event   
        */
        //converting the page to precentage
        let totalScrollHeight = body.scrollHeight - window.innerHeight
        const scrollToPercent = totalScrollHeight / 100; //  1/100
        
        //just to see the total scroll height in precentage
        //const totalScroll = totalScrollHeight / scrollToPercent; // 100/100
        
        //converting the y scroll position to precentag
        const yOfScroll = (yScroll) => {
            return yScroll / scrollToPercent;
        }
       let scrolling = Math.floor(window.scrollY);
       let scroll = yOfScroll(scrolling);

        /**here can you write what's going to hapen the page.
         * the page have been set up to always be 0 -100 like 
         * precentag or almost 100.
         * so when you scroll and reach you can make things happen.
             **/

        if(scroll >10){
            formEmail.style.opacity ="0";
        }else{
             formEmail.style.opacity ="1";
        }
        if(scroll > 80){
            formEmail.style.opacity = "1";
        }
     console.log(scroll)
})



    


