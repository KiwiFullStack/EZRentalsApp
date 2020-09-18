function playTo(to){
    if(to<this.progress){
        this.reversed = true;
    }else{
        this.reversed = false;
    }
    this.play();
    this.update = function(anim) {
    
        if(this.reversed == false){
            if(this.progress >= to){
                this.pause()
            }
        }else{
            if(this.progress <= to){
                this.pause()

            }
        }
    }
}