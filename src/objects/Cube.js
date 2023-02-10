import { Mesh, MeshStandardMaterial, Color, BoxBufferGeometry } from 'three';

export class Cube extends Mesh {
	constructor(size, Color) {
		super();

		this.geometry = new BoxBufferGeometry(size, size, size);
		this.material = new MeshStandardMaterial({
			color: Color,
			flatShading: true,
			roughness: .5
		});
	}
}
