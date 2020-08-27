var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight);

var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
$('body').append(renderer.domElement);


var geometry = new THREE.BoxGeometry(1, 1, 1);
var edges = new THREE.EdgesGeometry(geometry);
var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 'black'}));
var material = new  THREE.MeshBasicMaterial({color: "red"});
var cube = new THREE.Mesh(geometry, material);
cube.add(line);
scene.add(cube);

cube.position.z = -3;
cube.rotation.x = 10;
cube.rotation.y = -1;

var animate = () => {
    cube.rotation.x += .01;
    cube.rotation.y += .01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

