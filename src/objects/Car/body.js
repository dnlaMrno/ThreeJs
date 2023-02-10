import { BoxBufferGeometry, Color, Mesh, MeshStandardMaterial } from "three";

class body extends Mesh {
    constructor() {
        super();
        this.material = new MeshStandardMaterial({
            color: new Color('rgb(176, 242, 194)').convertSRGBToLinear(),
            flatShading: true,
            roughness: 0
    });
    this.geometry = new BoxBufferGeometry(2, 2, 2)
    }
}

export default body;