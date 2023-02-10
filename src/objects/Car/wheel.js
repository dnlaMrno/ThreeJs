import { Color, CylinderBufferGeometry, MathUtils, Mesh, MeshStandardMaterial } from "three";

class wheel extends Mesh {
    constructor() {
        super();
        this.material = new MeshStandardMaterial({
            color: new Color('rgb(181, 197, 215)').convertSRGBToLinear(),
            flatShading: true,
    });
    this.geometry = new CylinderBufferGeometry (.5, .5, .5, 8);
    this.rotateZ(MathUtils.degToRad(90))

    }
}

export default wheel;