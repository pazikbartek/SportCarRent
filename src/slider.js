class Slider{

    addListenerRight(){

        const a = document.querySelectorAll('.fas.fa-angle-double-right');
        a.forEach(el=>{
            el.addEventListener("click", (e)=>{
                e.target.parentElement.style.backgroundColor = "red";
            })
        })
        }

        addListenerLeft(){

        const a = document.querySelectorAll('.fas.fa-angle-double-left');
        a.forEach(el=>{
            el.addEventListener("click", (e)=>{
                e.target.parentElement.style.backgroundColor = "blue";
            })
        })
        }
}

export default Slider;