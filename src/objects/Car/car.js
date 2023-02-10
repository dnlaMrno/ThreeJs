// import * as TWEEN from '@tweenjs/tween.js/dist/tween.umd' 
import { Group } from "three";
import body from "./body";
import nose from "./nose";
import wheel from "./wheel";

class car extends Group {
    constructor(){
        super();
        this.Body = new body();
        this.Body.position.set(0, .5, -1);
        
        this.Nose = new nose();
        this.Nose.position.set(0, 0, .5);

        this.Wheel = new wheel();
        this.Wheel.position.set(0, -.5, 1)
        this.Wheel2 = this.Wheel.clone()
        this.Wheel2.position.set(1, -.5, -1.5)
        this.Wheel3 = this.Wheel.clone()
        this.Wheel3.position.set(-1, -.5, -1.5)
        
        this.add(this.Body, this.Nose, this.Wheel, this.Wheel2, this.Wheel3);

        // this.Wheel_tween = new TWEEN.Tween(this.Wheel.rotation)
        // .to({
        //     y: .5
        // })
        // ,easing(TWEEN.Easing.Sinusoidal.InOut)
        // .start();

    }
    update() {
        // TWEEN.update();
        this.Wheel.rotateY(-0.05);
        this.Wheel2.rotateY(-0.05);
        this.Wheel3.rotateY(-0.05);
    }
}

export default car;