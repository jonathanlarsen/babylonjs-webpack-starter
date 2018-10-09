import { Engine, FreeCamera, HemisphericLight, Light, MeshBuilder, Scene, Vector3} from 'babylonjs';

export class Game {
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _scene: Scene;
    private _camera: FreeCamera;
    private _light: Light;

    constructor(canvasElement: string) {
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
        this._engine = new Engine(this._canvas, true);
    }

    createScene(): void {
        this._scene = new Scene(this._engine);
        this._camera = new FreeCamera('camera1', new Vector3(0, 5,-10), this._scene);
        this._camera.setTarget(Vector3.Zero());
        this._camera.attachControl(this._canvas, true);
        this._light = new HemisphericLight('light1', new Vector3(0,1,0), this._scene);
        
        let sphere = MeshBuilder.CreateSphere('sphere', {segments: 16, diameter: 2}, this._scene);
        sphere.position.y = 1;

        let ground = MeshBuilder.CreateGround('ground', {width:6, height:6, subdivisions:2}, this._scene);
    }

    doRender(): void {
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        window.addEventListener('resize', () => {
            this._engine.resize();
        });
    }
}
