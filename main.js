var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );


var camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight);

var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
$('body').append(renderer.domElement);


var geometry = new THREE.BoxGeometry(1, 2, 1);
var edges = new THREE.EdgesGeometry(geometry);
var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 'black'}));
var texture = new THREE.TextureLoader().load('textures/buiding.jpg');
// texture.setCrossOrigin('anonymous');
var material = new  THREE.MeshBasicMaterial({map: texture});

var cube = new THREE.Mesh(geometry, material);
cube.add(line);
scene.add(cube);

cube.position.z = -3;
cube.rotation.y = 5.5;
//cube.rotation.y = -1;

var animate = () => {
    // cube.rotation.x += .01;
    //cube.rotation.y += .01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

