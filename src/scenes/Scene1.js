import { Scene, Color, DirectionalLight, HemisphereLight, AxesHelper} from 'three';
import car from '../objects/Car/car';

class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue').convertSRGBToLinear();
		this.create();
	}

	create() {
		
		this.Car = new car();
		this.add(this.Car)

		const ambientLight = new HemisphereLight(0xffffbb, 0x080820, 5);
		const light = new DirectionalLight(0xffffff, 1.0);

		const helper = new AxesHelper(3);

		this.add(light, ambientLight, helper);
	}

	update() {
		this.Car.update();
	}
}

export default Scene1;
