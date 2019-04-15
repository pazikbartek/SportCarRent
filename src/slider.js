class Slider{
    constructor(){
        this.rightPhoto = [['url(./photos/porschetyl.jpg)', false], ['url(./photos/mustangtyl.jpg)', false], ['url(./photos/lambotyl.jpg)', false], ['url(./photos/merctyl.jpg)', false], ['url(./photos/ferrarityl.jpg)', false]]
        this.leftPhoto = ['url(./photos/porscheprzod.jpg)', 'url(./photos/mustangprzod.jpg)', 'url(./photos/lamboprzod.jpg)', 'url(./photos/mercprzod.jpg)', 'url(./photos/ferrariprzod.jpg)' ]
    }

    addListenerRight(){
        const a = document.querySelectorAll('.fas.fa-angle-double-right');

        a.forEach((el, index)=>{   
            el.addEventListener("click", (e)=>{
                if (this.rightPhoto[index][1]===false){
                    e.target.parentElement.style.animation = "changePhoto 0.2s"
                    setTimeout(()=>{
                        e.target.parentElement.style.backgroundImage = this.rightPhoto[index][0];
                        e.target.parentElement.style.animation = "none";
                        this.rightPhoto[index][1]=true;
                        e.target.style.opacity = "0.5";
                        e.target.style.cursor = "default";
                        e.target.previousElementSibling.style.opacity = "1";
                        e.target.previousElementSibling.style.cursor = "pointer";
                    }, 100)
                }
            })
        })
    }

    addListenerLeft(){
        const a = document.querySelectorAll('.fas.fa-angle-double-left');

        a.forEach((el, index)=>{   
            el.addEventListener("click", (e)=>{
                if (this.rightPhoto[index][1]){
                    e.target.parentElement.style.animation = "changePhoto 0.2s"
                    setTimeout(()=>{
                        e.target.parentElement.style.backgroundImage = this.leftPhoto[index];
                        e.target.parentElement.style.animation = "none";
                        this.rightPhoto[index][1]=false;
                        e.target.style.opacity = "0.5";
                        e.target.style.cursor = "default";
                        e.target.nextElementSibling.style.opacity = "1";
                        e.target.nextElementSibling.style.cursor = "pointer";
                    }, 100)
                }
            })
        })
    }
}

export default Slider;