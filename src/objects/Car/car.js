import * as TWEEN from '@tweenjs/tween.js/dist/tween.umd';
import { Group, Object3D } from "three";
import body from "./body";
import nose from "./nose";
import wheel from "./wheel";

class car extends Group {
    constructor(){
        super();
        //CUERPO
        this.Body = new body();
        this.Body.position.set(0, .5, -1);
        //NARIZ
        this.Nose = new nose();
        this.Nose.position.set(0, 0, .5);

        //RUEDAS
        this.Wheel_rotation = new Object3D();
        this.Wheel = new wheel();
        this.Wheel_rotation.add(this.Wheel);
        this.Wheel_rotation.position.set(0, -.5, 1)

        this.Wheel2 = this.Wheel.clone()
        this.Wheel2.position.set(1, -.5, -1.5)

        this.Wheel3 = this.Wheel.clone()
        this.Wheel3.position.set(-1, -.5, -1.5)
        
        this.add(this.Body, this.Nose,  this.Wheel_rotation, this.Wheel2, this.Wheel3);

        this.Wheel_rotation.rotateY(-0.5)
        this.Wheel_tween = new TWEEN.Tween(this.Wheel_rotation.rotation)
            .to({
                y: .5
            },2000) //Le establezco un tiempo para que vaya mas rapido o mas lento
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .repeat(Infinity)
            .yoyo(true)
            .start();

    }
    update() {
        TWEEN.update();
        this.Wheel.rotateY(-0.05);
        this.Wheel2.rotateY(-0.05);
        this.Wheel3.rotateY(-0.05);
    }
}

export default car;