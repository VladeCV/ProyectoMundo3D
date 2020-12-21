// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;

var objectsMuebles = [];
function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;
	var objects = [];
	var objectsMuebles = [];
	// CAMERA
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 80000);
	camera.position.set(-1, 1, 40);
	camera.lookAt(10, 10, 0);
	// LIGHTS
	light = new THREE.DirectionalLight(0xFFFFFF, 0.7);
	light.position.set(-3, 1, 0);
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()
	var ambientLight = new THREE.AmbientLight(0x111111);
	// RENDERER
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColor(0xF5F5F5, 1.0);
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild(renderer.domElement);

	// CONTROLS
	cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
	cameraControls.target.set(0, 0, 0);
	// SCENE
	scene = new THREE.Scene();
	//PAREDES LABORATORIO INGLES
	//P1
	var geometry = new THREE.BoxGeometry(15, 10, 0.2)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(3, 0, -1);
	scene.add(mesh);
	//P2
	var geometry = new THREE.BoxGeometry(.2, 10, 20)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-4.5, 0, 9.5);
	scene.add(mesh);
	//P3
	var geometry = new THREE.BoxGeometry(.2, 10, 15)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10.5, 0, 13);
	scene.add(mesh);
	//P4
	var geometry = new THREE.BoxGeometry(15, 10, 0.2)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(3, 0, 20.5);
	scene.add(mesh);
	//columna1
	var geometry = new THREE.BoxGeometry(1.5, 10, 1.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaColumna.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-4, 0, 20);
	scene.add(mesh);
	//columna2
	var geometry = new THREE.BoxGeometry(1.5, 10, 1.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaColumna.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10, 0, 20);
	scene.add(mesh);
	//columna3
	var geometry = new THREE.BoxGeometry(1.5, 10, 1.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaColumna.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-4, 0, -0.5);
	scene.add(mesh);

	//PUERTA
	//p1
	var p1 = new THREE.BoxGeometry(.2, 5.5, 3)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/puertac1.jpg') 
	});
	mesh = new THREE.Mesh(p1, material);
	mesh.position.set(10.5, 0, 0.5);
	scene.add(mesh);
	//p2
	var p2 = new THREE.BoxGeometry(.2, 5.5, 3)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/puertac1.jpg') 
	});
	mesh = new THREE.Mesh(p2, material);
	mesh.position.set(11.5, 0, 4.5);
	mesh.rotateY(-1);
	scene.add(mesh);

	//PAREDES KARDEX
	//P1
	var geometry = new THREE.BoxGeometry(15, 10, 0.2)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaParedK.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(3, 0, -19);
	scene.add(mesh);
	//P2
	var geometry = new THREE.BoxGeometry(.2, 10, 18)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaParedK.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-4.5, 0, -10);
	scene.add(mesh);
	//P3.1
	var geometry = new THREE.BoxGeometry(.2, 3, 14.4)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10.5, -1, -8.5);
	scene.add(mesh);
	//P3.2
	var geometry = new THREE.BoxGeometry(.2, 7.2, 3.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10.5, 1.4, -2.8);
	scene.add(mesh);

	//P3.3
	var geometry = new THREE.BoxGeometry(.2, 7.2, 2.4)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10.5, 1.4, -14.5);
	scene.add(mesh);

	//P3.4
	var geometry = new THREE.BoxGeometry(.2, 0.6, 24)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10.5, 4.7, -6.5);
	scene.add(mesh);
	//VENTANILLA
	var generarVentanilla = new THREE.Object3D;
	generarVentanilla.add(crearVentanilla(10.5,-2.5,-1,2,1,3.5,1.58));
	scene.add(generarVentanilla);
	//VENTANAS
	var generarVentanas = new THREE.Object3D;
	//ventanaKardex
	generarVentanas.add(crearVentana(10.5,1,-14.8,0.5,0.5,1,1.58));
	//ventanaLI
	generarVentanas.add(crearVentana(10.5,1,8,1.5,0.5,1,1.58));
	scene.add(generarVentanas);
	//PUERTA
	//p1
	var geometry = new THREE.BoxGeometry(.2, 5.5, 2)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/puertac1.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10.5, 0, -16.7);
	scene.add(mesh);
	
	
	//columna1K
	var geometry = new THREE.BoxGeometry(1.5, 10, 1.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-4, 0, -18.5);
	scene.add(mesh);
	//columna3K
	var geometry = new THREE.BoxGeometry(1.5, 10, 1.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-4, 0, -1.5);
	scene.add(mesh);
	//columna2K
	var geometry = new THREE.BoxGeometry(1.5, 10, 1.5)
	material = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaPared.jpg') 
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(10, 0, -18.5);
	scene.add(mesh);

	//COMPUTADORA
	var computadora = new THREE.Object3D();

	var material1 = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/textura_escritorio.jpg')
	});
	var juntar1 = new THREE.Geometry();
	var material2 = new THREE.MeshPhongMaterial({ color: 0x090A0A });
	var juntar2 = new THREE.Geometry();


	//cables mouse
	function CustomSinCurve(scale) {
		THREE.Curve.call(this);
		this.scale = (scale === undefined) ? 1 : scale;
	}
	CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
	CustomSinCurve.prototype.constructor = CustomSinCurve;
	CustomSinCurve.prototype.getPoint = function (t) {
		var tex = t * 3 - 1.5;
		var tey = Math.sin(2 * Math.PI * t);
		var tez = 0;
		return new THREE.Vector3(tex, tey, tez).multiplyScalar(this.scale);
	};
	var path = new CustomSinCurve(0.1);
	var geometry = new THREE.TubeGeometry(path, 50, 0.007, 10, false);
	var mesh = new THREE.Mesh(geometry);
	mesh.position.set(0.36, -0.5, 0.18);
	mesh.rotateX(1.6);
	juntar2.mergeMesh(mesh);

	var geometry = new THREE.BoxGeometry(1.01, 0.7, 0.06)
	var mesh = new THREE.Mesh(geometry);
	juntar2.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(0.9, 0.6, 0.01);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/pantallafondo.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateZ(0.0251);
	computadora.add(mesh);

	//soporte

	geometry = new THREE.CylinderGeometry(0, 0.25, 0.1, 32);
	var cone = new THREE.Mesh(geometry);
	cone.position.set(0, -0.45, -0.1);
	juntar2.mergeMesh(cone);


	geometry = new THREE.CylinderGeometry(0, 0.08, 0.3, 32);
	cone = new THREE.Mesh(geometry);
	cone.position.set(0, -0.3, -0.03);
	cone.rotateX(0.3);
	juntar2.mergeMesh(cone);


	//escritorio

	var geometry = new THREE.BoxGeometry(1.4, 0.04, 0.9)
	var mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.52, 0);
	juntar1.mergeMesh(mesh);


	geometry = new THREE.BoxGeometry(1.3, 0.04, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -1.92, 0);
	juntar1.mergeMesh(mesh);



	geometry = new THREE.BoxGeometry(0.04, 1.53, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0.67, -1.27, 0);
	juntar1.mergeMesh(mesh);


	geometry = new THREE.BoxGeometry(0.04, 1.53, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(-0.67, -1.27, 0);
	juntar1.mergeMesh(mesh);


	geometry = new THREE.BoxGeometry(1.35, 0.35, 0.04)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.72, -0.38);
	juntar1.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(1.3, 0.04, 0.7)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.7, 0.3);
	juntar1.mergeMesh(mesh);



	//mouse y ruedita

	geometry = new THREE.SphereGeometry(0.08, 32, 32, 0, 6.3, 0, 1.3);
	var sphere = new THREE.Mesh(geometry);
	sphere.position.set(0.5, -0.52, 0.3);
	juntar2.mergeMesh(sphere);

	geometry = new THREE.SphereGeometry(0.08, 32, 32, 0, 6.3, 0, 1.3);
	sphere = new THREE.Mesh(geometry);
	sphere.position.set(0.5, -0.52, 0.27);
	juntar2.mergeMesh(sphere);

	geometry = new THREE.SphereGeometry(0.07, 32, 32, 0, 6.3, 0, 1.3);
	sphere = new THREE.Mesh(geometry);
	sphere.position.set(0.5, -0.53, 0.22);
	juntar2.mergeMesh(sphere);

	geometry = new THREE.TorusGeometry(0.01, 0.008, 16, 100);
	var torus = new THREE.Mesh(geometry);
	torus.position.set(0.5, -0.46, 0.22);

	torus.rotateY(1.5);
	torus.rotateZ(0.3);

	juntar2.mergeMesh(torus);

	//pc - adelante - atras

	geometry = new THREE.BoxGeometry(0.4, 1, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0.4, -1.4, 0.05);
	juntar2.mergeMesh(mesh);


	geometry = new THREE.BoxGeometry(0.4, 1, 0.01);
	var material = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/frontalpc1.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateX(0.4);
	mesh.translateY(-1.4);
	mesh.translateZ(0.496);
	computadora.add(mesh);

	geometry = new THREE.BoxGeometry(0.4, 1, 0.01);
	var material = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/atraspc1.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateX(0.4);
	mesh.translateY(-1.4);
	mesh.translateZ(-0.396);
	computadora.add(mesh);


	// teclado y soporte de teclado

	geometry = new THREE.BoxGeometry(1.145, 0.03, 0.45);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/teclado2.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateY(-0.648);
	mesh.translateZ(0.35);
	computadora.add(mesh);


	geometry = new THREE.BoxGeometry(1.146, 0.04, 0.46)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.654, 0.35);
	juntar2.mergeMesh(mesh);



	// union escritorio
	var mesh1 = new THREE.Mesh(juntar1, material1);
	mesh1.position.set(0, 0, 0);
	objects.push(mesh1);
	//  scene.add(mesh1);
	computadora.add(mesh1);
	//borderExperimental(juntar1, mesh1);

	//union compu negro
	var mesh2 = new THREE.Mesh(juntar2, material2);
	mesh2.position.set(0, 0, 0);
	objects.push(mesh2);
	computadora.add(mesh2);

	//objeto Computadora
	//computadora.scale.set(sx, sy, sz);
	
	//computadora.position.set(px, ty, tz);
	//computadora.rotateX(rx);
	computadora.rotateY(-1.6);
	//computadora.rotateZ(rz);
	
	scene.add(computadora);



	//PIZARRA
	var pizarra = new THREE.Object3D();
	var material = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/textura_pizarra.jpg')
	});
	var juntar = new THREE.Geometry();

	var geometry = new THREE.BoxGeometry(4.5, 2.5, 0.1)
	var mesh = new THREE.Mesh(geometry);
	mesh.position.set(4, 1.5, 0);
	juntar.mergeMesh(mesh);

	//Graderia
	var juntar2 = new THREE.Geometry();
	var material2 = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/texturaStand.jpg')
	});

	geometry = new THREE.BoxGeometry(3, 0.1, 0.2)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(4, 0.3, 0);
	juntar2.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(4.5, 1, 2, 2)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(4, -1.5, 0.5);
	juntar2.mergeMesh(mesh);

	var mesh1 = new THREE.Mesh(juntar2, material2);
	objects.push(mesh1);
	pizarra.add(mesh1);

	var mesh = new THREE.Mesh(juntar, material);
	pizarra.add(mesh);
	scene.add(pizarra);

	//MESA 
	var mesa1 = new THREE.Object3D();
	//pata delantera mesa derecha
	var estructura = new THREE.Geometry();

	var geometry = new THREE.CylinderGeometry(0.02, 0.02, 1.6, 32);
	var material = new THREE.MeshPhongMaterial({ color: 0x000000 });
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0.9, -0.74, 1.57);
	estructura.mergeMesh(cylinder);
	//pata trasera mesa derecha

	geometry = new THREE.CylinderGeometry(0.02, 0.02, 1.6, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0.9, -0.74, 1.08);
	estructura.mergeMesh(cylinder);

	// conexion patas mesa ABAJO derecha

	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0.9, 0, 1.33);
	cylinder.rotateX(1.6);
	estructura.mergeMesh(cylinder);
	//medio	HORIZONTAL derecha
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0, -0.3, 1.57);
	cylinder.rotateZ(1.57);
	estructura.mergeMesh(cylinder);

	//medio atras HORIZONTAL derecha
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0, -0.3, 1.08 + 0);
	cylinder.rotateZ(1.57);
	estructura.mergeMesh(cylinder);

	//apoyo mesa delantera izquierda
	geometry = new THREE.CylinderGeometry(0.02, 0.02, 1.6, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(-0.9, -.74, 1.57);
	estructura.mergeMesh(cylinder);

	//apoyo mesa trasera izquierda
	geometry = new THREE.CylinderGeometry(0.02, 0.02, 1.6, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(-0.9, -.74, 1.08);
	estructura.mergeMesh(cylinder);

	//apoyo mesa abajo(UNION PATAS MESA)izquierda
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 32);
	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(-0.9, -0.3, 1.33);
	cylinder.rotateX(1.6);
	estructura.mergeMesh(cylinder);

	var fierro = new THREE.Mesh(estructura, material)
	objectsMuebles.push(fierro);
	
	mesa1.scale.set(2,1.5,10);
	mesa1.position.set(3,-0.5,-2);
	mesa1.add(fierro);
	scene.add(mesa1);

	//MESA madera
	var mesita = new THREE.Geometry();

	geometry = new THREE.BoxGeometry(2, 0.06, 0.85);
	material = new THREE.MeshPhongMaterial({ 
		 map: THREE.ImageUtils.loadTexture('images/texturaMesa.jpg')
	});
	cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0, 0.1, 1.32);
	mesita.mergeMesh(cylinder);
	//MESA madera

	geometry = new THREE.BoxGeometry(1.7, 0.06, 0.5);
	cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(0, -0.24, 1.32);
	mesita.mergeMesh(cylinder);

	var mesa = new THREE.Mesh(mesita, material)
	objectsMuebles.push(mesa);

	mesa.scale.set(2,1.5,10);
	mesa.position.set(3,-0.5,-2);

	mesa1.add(mesa);
	scene.add(mesa);

	//base del escenario
	var material2 = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/texturaplataforma.jpg')
	});
	geometry = new THREE.BoxGeometry(30, 0.5, 60);
	cili = new THREE.Mesh(geometry, material2);
	cili.position.set(0, -2.3, 0);
	scene.add(cili);

	scene.add(light);
	scene.add(ambientLight);
	//CREAMOS LAS PCS DEL LABORATORIO
	var generarPCs = new THREE.Object3D();
	//IZQ
	generarPCs.add(crearPC(-4,0,3,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,4.5,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,6,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,7.5,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,9,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,10.5,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,12,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,13.5,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,15,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,16.5,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(-4,0,18,0,1.6,0,1,1,1));
	//DER
	generarPCs.add(crearPC(10,0,7.5,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,9,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,10.5,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,12,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,13.5,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,15,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,16.5,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(10,0,18,0,-1.6,0,1,1,1));
	scene.add(generarPCs);
	//MESAS DEL MEDIO
	generarPCs.add(crearPC(2.5,0,16.5,0,-1.6,0,1,1,1));
	generarPCs.add(crearPC(2.5,0,18,0,-1.6,0,1,1,1));

	generarPCs.add(crearPC(3.5,0,16.5,0,1.6,0,1,1,1));
	generarPCs.add(crearPC(3.5,0,18,0,1.6,0,1,1,1));
	
	//CREAMOS LAS SILLAS PARA LAS PCS
	var generarSillas = new THREE.Object3D;
	//DER
	generarSillas.add(crearAsiento(8.5,-3,7.2,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,8.9,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,10.6,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,12.3,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,14,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,15.7,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,17.4,0,1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(8.5,-3,19.1,0,1.6,0,1.2,1.2,1.2));
	//IZQ
	generarSillas.add(crearAsiento(-2.5,-3,3,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,4.5,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,6,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,7.5,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,9,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,10.5,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,12,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,13.5,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,15,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,16.5,0,-1.6,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(-2.5,-3,18,0,-1.6,0,1.2,1.2,1.2));

	scene.add(generarSillas);

	//PC KARDEX
	var generarPCsKardex = new THREE.Object3D();
	generarPCsKardex.add(crearPC(2.5,0,-8.5,0,0,0,1.5,1.5,1.5));
	generarPCsKardex.add(crearPC(2.5,0,-11.5,0,-3.2,0,1.5,1.5,1.5));
	scene.add(generarPCsKardex);
	//CREAMOS LAS SILLAS PARA KARDEX
	var generarSillas = new THREE.Object3D;
	generarSillas.add(crearAsiento(2.5,-3.5,-6.5,0,-3.2,0,1.7,1.5,1.5));
	generarSillas.add(crearAsiento(2.5,-3.5,-13.5,0,0,0,1.7,1.5,1.5));

	generarSillas.add(crearAsiento(2.5,-3,-18,0,0,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(4,-3,-18,0,0,0,1.2,1.2,1.2));
	generarSillas.add(crearAsiento(5.5,-3,-18,0,0,0,1.2,1.2,1.2));
	scene.add(generarSillas)

}
//Funcion para crear la PC
function crearPC(px, ty, tz, rx, ry, rz, sx, sy, sz) {
	var computadora = new THREE.Object3D();
	var material1 = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/textura_escritorio.jpg')
	});
	var juntar1 = new THREE.Geometry();
	var material2 = new THREE.MeshPhongMaterial({ color: 0x181818 });
	var juntar2 = new THREE.Geometry();
	//cables mouse
	function CustomSinCurve(scale) {
		THREE.Curve.call(this);
		this.scale = (scale === undefined) ? 1 : scale;
	}
	CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
	CustomSinCurve.prototype.constructor = CustomSinCurve;
	CustomSinCurve.prototype.getPoint = function (t) {
		var tex = t * 3 - 1.5;
		var tey = Math.sin(2 * Math.PI * t);
		var tez = 0;
		return new THREE.Vector3(tex, tey, tez).multiplyScalar(this.scale);
	};
	var path = new CustomSinCurve(0.1);
	var geometry = new THREE.TubeGeometry(path, 50, 0.007, 10, false);
	var mesh = new THREE.Mesh(geometry);
	mesh.position.set(0.36, -0.5, 0.18);
	mesh.rotateX(1.6);
	juntar2.mergeMesh(mesh);

	var geometry = new THREE.BoxGeometry(1.01, 0.7, 0.06)
	var mesh = new THREE.Mesh(geometry);
	juntar2.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(0.9, 0.6, 0.01);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/pantallafondo.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateZ(0.0251);
	computadora.add(mesh);

	
	geometry = new THREE.CylinderGeometry(0, 0.25, 0.1, 32);
	var cone = new THREE.Mesh(geometry);
	cone.position.set(0, -0.45, -0.1);
	juntar2.mergeMesh(cone);

	geometry = new THREE.CylinderGeometry(0, 0.08, 0.3, 32);
	cone = new THREE.Mesh(geometry);
	cone.position.set(0, -0.3, -0.03);
	cone.rotateX(0.3);
	juntar2.mergeMesh(cone);

	var geometry = new THREE.BoxGeometry(1.4, 0.04, 0.9)
	var mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.52, 0);
	juntar1.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(1.3, 0.04, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -1.92, 0);
	juntar1.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(0.04, 1.53, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0.67, -1.27, 0);
	juntar1.mergeMesh(mesh);
	geometry = new THREE.BoxGeometry(0.04, 1.53, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(-0.67, -1.27, 0);
	juntar1.mergeMesh(mesh);
	geometry = new THREE.BoxGeometry(1.35, 0.35, 0.04)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.72, -0.38);
	juntar1.mergeMesh(mesh);
	geometry = new THREE.BoxGeometry(1.3, 0.04, 0.7)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.7, 0.3);
	juntar1.mergeMesh(mesh);

	//MOUSE
	geometry = new THREE.SphereGeometry(0.08, 32, 32, 0, 6.3, 0, 1.3);
	var sphere = new THREE.Mesh(geometry);
	sphere.position.set(0.5, -0.52, 0.3);
	juntar2.mergeMesh(sphere);

	geometry = new THREE.SphereGeometry(0.08, 32, 32, 0, 6.3, 0, 1.3);
	sphere = new THREE.Mesh(geometry);
	sphere.position.set(0.5, -0.52, 0.27);
	juntar2.mergeMesh(sphere);

	geometry = new THREE.SphereGeometry(0.07, 32, 32, 0, 6.3, 0, 1.3);
	sphere = new THREE.Mesh(geometry);
	sphere.position.set(0.5, -0.53, 0.22);
	juntar2.mergeMesh(sphere);

	geometry = new THREE.TorusGeometry(0.01, 0.008, 16, 100);
	var torus = new THREE.Mesh(geometry);
	torus.position.set(0.5, -0.46, 0.22);

	torus.rotateY(1.5);
	torus.rotateZ(0.3);

	juntar2.mergeMesh(torus);
	//CPU
	geometry = new THREE.BoxGeometry(0.4, 1, 0.9)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0.4, -1.4, 0.05);
	juntar2.mergeMesh(mesh);

	geometry = new THREE.BoxGeometry(0.4, 1, 0.01);
	var material = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/CPUfrontal.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateX(0.4);
	mesh.translateY(-1.4);
	mesh.translateZ(0.496);
	computadora.add(mesh);

	geometry = new THREE.BoxGeometry(0.4, 1, 0.01);
	var material = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/CPUtrasera.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateX(0.4);
	mesh.translateY(-1.4);
	mesh.translateZ(-0.396);
	computadora.add(mesh);
	// TECLADO
	geometry = new THREE.BoxGeometry(1.145, 0.03, 0.45);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(
			'images/teclado.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.translateY(-0.648);
	mesh.translateZ(0.35);
	computadora.add(mesh);
	geometry = new THREE.BoxGeometry(1.146, 0.04, 0.46)
	mesh = new THREE.Mesh(geometry);
	mesh.position.set(0, -0.654, 0.35);
	juntar2.mergeMesh(mesh);
	
	var mesh1 = new THREE.Mesh(juntar1, material1);
	mesh1.position.set(0, 0, 0);
	objectsMuebles.push(mesh1);
	computadora.add(mesh1);
	var mesh2 = new THREE.Mesh(juntar2, material2);
	mesh2.position.set(0, 0, 0);
	objectsMuebles.push(mesh2);
	computadora.add(mesh2);
	//Definimos escala de la PC
	computadora.scale.set(sx, sy, sz);
	//Definimos la posicion de la PC
	computadora.position.set(px, ty, tz);
	//Definimos en que lado rota la PC
	computadora.rotateX(rx);
	computadora.rotateY(ry);
	computadora.rotateZ(rz);
	//Devolvemos la PC
	return computadora;
	scene.add(computadora);
}
//Funcion para crear el Asiento
function crearAsiento(px, ty, tz, rx, ry, rz, sx, sy, sz){
	var traslateObjetoX = -0.4;
	var traslateObjetoY = 1.85;
	var traslateObjetoZ = 0;

	var rotateObjetoX = -0.15;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;

	var juntar1=new THREE.Geometry();
	var material1 = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaMetal.jpg'
		) 
	});

	var juntar2=new THREE.Geometry();
	var material2 = new THREE.MeshPhongMaterial({ 
		map: THREE.ImageUtils.loadTexture(
			'images/texturaAsiento.jpg'
		)
	});

	var geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.78, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);
	// pata trasera asiento IZQUIERDA
	var traslateObjetoX = -0.4;
	var traslateObjetoY = 1.15;
	var traslateObjetoZ = 0.0;

	var rotateObjetoX = 0.2;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.7, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);
	// pata delantera asiento IZQUIERDA
	var traslateObjetoX = -0.4;
	var traslateObjetoY = 1.15;
	var traslateObjetoZ = 0.58;

	var rotateObjetoX = -0.2;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.75, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);
	// apoyo asiento(UNION PATAS ASIENTO)
	var traslateObjetoX = -0.4;
	var traslateObjetoY = 1.5;
	var traslateObjetoZ = 0.28;

	var rotateObjetoX = 1.6;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);

	//fierro espaldar derecha
	var traslateObjetoX = 0.4;
	var traslateObjetoY = 1.85;
	var traslateObjetoZ = 0;

	var rotateObjetoX = -0.15;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.78, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);
	// pata trasera asiento derecha
	var traslateObjetoX = 0.4;
	var traslateObjetoY = 1.15;
	var traslateObjetoZ = 0.0;

	var rotateObjetoX = 0.2;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.7, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);
	//pata delantera asiento derecha
	var traslateObjetoX = 0.4;
	var traslateObjetoY = 1.15;
	var traslateObjetoZ = 0.58;

	var rotateObjetoX = -0.2;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.75, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);
	//apoyo asiento DERECHA
	var traslateObjetoX = 0.4;
	var traslateObjetoY = 1.5;
	var traslateObjetoZ = 0.28;

	var rotateObjetoX = 1.6;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 32);

	var cylinder = new THREE.Mesh(geometry);
	cylinder.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	cylinder.rotateX(rotateObjetoX);
	cylinder.rotateY(rotateObjetoY);
	cylinder.rotateZ(rotateObjetoZ);
	juntar1.mergeMesh(cylinder);

	//espaldar
	var traslateObjetoX = 0;
	var traslateObjetoY = 2.1;
	var traslateObjetoZ = 0;

	var rotateObjetoX = -0.15;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.BoxGeometry(0.8, 0.45, 0.06);

	var mesh = new THREE.Mesh(geometry);
	mesh.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	mesh.rotateX(rotateObjetoX);
	mesh.rotateY(rotateObjetoY);
	mesh.rotateZ(rotateObjetoZ);

	juntar2.mergeMesh(mesh);

	//asiento
	var traslateObjetoX = 0;
	var traslateObjetoY = 1.55;
	var traslateObjetoZ = 0.3;

	var rotateObjetoX = 0;
	var rotateObjetoY = 0;
	var rotateObjetoZ = 0;
	geometry = new THREE.BoxGeometry(0.8, 0.06, 0.6);

	mesh = new THREE.Mesh(geometry);
	mesh.position.set(traslateObjetoX, traslateObjetoY, traslateObjetoZ);
	mesh.rotateX(rotateObjetoX);
	mesh.rotateY(rotateObjetoY);
	mesh.rotateZ(rotateObjetoZ);
	juntar2.mergeMesh(mesh);

	var pupiInd=new THREE.Object3D();

	var mesh1=new THREE.Mesh(juntar1,material1);
	objectsMuebles.push(mesh1);
	pupiInd.add(mesh1);

	var mesh2=new THREE.Mesh(juntar2,material2);
	objectsMuebles.push(mesh2);
	pupiInd.add(mesh2);
	//Definimos la escala de la silla 
	pupiInd.scale.set(sx,sy,sz);
	//Definimos la posicion de la silla 
	pupiInd.position.set(px,ty,tz);
	//Definimos en que lado rota la silla
	pupiInd.rotateX(rx);
	pupiInd.rotateY(ry);
	pupiInd.rotateZ(rz);
	//Devolvemos la silla construida
	return pupiInd;
}
//Funcion para crear VentanillaAtencion
function crearVentanilla(px, py, pz, sx, sy, sz, ry) {

	var ventana = new THREE.Object3D();

	//VIDRIOS
	var geometry = new THREE.BoxGeometry(4.5, 3.5, 0.05);
	material = new THREE.MeshPhongMaterial({ 
		color: 0xFFFFFF,
		opacity: 0.5,
		transparent: true,
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(4, 5, 0);
	ventana.add(mesh);
	//rejillas
	//VERTICAL
	geometry = new THREE.BoxGeometry(0.1, 3.5, 0.1)
	material = new THREE.MeshPhongMaterial({ color: 0x060606 });
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(3.5, 5, 0);
	ventana.add(mesh);
	//VERTICAL
	geometry = new THREE.BoxGeometry(0.1, 3.5, 0.1)
	material = new THREE.MeshPhongMaterial({ color: 0x060606 });
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(4.5, 5, 0);
	ventana.add(mesh);
	//HORIZONTAL
	geometry = new THREE.BoxGeometry(4.5, 0.1, 0.1)
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(4, 5, 0);
	ventana.add(mesh);
	//HORIZONTAL
	geometry = new THREE.BoxGeometry(4.5, 0.5, 0.6)
	material = new THREE.MeshPhongMaterial({ 
		 map: THREE.ImageUtils.loadTexture('images/texturaPorcelana.jpg')
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(4, 3.2, 0);
	ventana.add(mesh);

	ventana.scale.set( sx,  sy, sz);
	ventana.position.set(px, py, pz);
	ventana.rotateY(ry);
	return ventana;
	scene.add(ventana);
}
function crearVentana(px, py, pz, sx, sy, sz, ry) {

	var ventana = new THREE.Object3D();

	//VIDRIOS
	var geometry = new THREE.BoxGeometry(4.5, 3.5, 0.05);
	material = new THREE.MeshPhongMaterial({ 
		color: 0xFFFFFF,
		opacity: 0.5,
		transparent: true,
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(4, 5, 0);
	ventana.add(mesh);

	ventana.scale.set( sx,  sy, sz);
	ventana.position.set(px, py, pz);
	ventana.rotateY(ry);
	return ventana;
	scene.add(ventana);
}
function animate() {
	window.requestAnimationFrame(animate);
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render(scene, camera);
}

try {
	init();
	animate();
} catch (e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport + e);
}
