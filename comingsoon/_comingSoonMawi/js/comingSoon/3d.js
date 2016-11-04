 var container, stats;

            var camera, scene, renderer;

            var cube, cube2;

            var targetRotation = 0;
            var targetRotationOnMouseDown = 0;

            var mouseX = 0;
            var mouseY = 0;
            var mouseXOnMouseDown = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var info = document.createElement( 'div' );
                info.style.position = 'absolute';
                info.style.top = '10%';
                info.style.width = '100%';
                info.style.cursor = 'hand';
                info.style.textAlign = 'center';




                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.y = 225;
                camera.position.z = 450;

                scene = new THREE.Scene();

                // Cube

                var geometry = new THREE.BoxGeometry( 150, 150, 150 );

                for ( var i = 0; i < geometry.faces.length; i += 2 ) {

                    var hex = 000000;
                    geometry.faces[ i ].color.setHex( hex );
                    geometry.faces[ i + 1 ].color.setHex( hex );

                }

                var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );

                cube = new THREE.Mesh( geometry, material );
                cube.position.y = 150;
                scene.add( cube );

               // Cube2

                var geometry = new THREE.BoxGeometry( 325, 150, 150 );

                for ( var i = 0; i < geometry.faces.length; i += 2 ) {

                    var hex = 0xffffff;
                    geometry.faces[ i ].color.setHex( hex );
                    geometry.faces[ i + 1 ].color.setHex( hex );

                }

                var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );

                cube2 = new THREE.Mesh( geometry, material );
                cube2.position.y = 100;
                scene.add( cube2 );







                // Plane & Render

                var geometry = new THREE.PlaneBufferGeometry( 200, 200 );
                geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );





                renderer = new THREE.CanvasRenderer();
                renderer.setClearColor( 0xffffff );
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseDown( event ) {

                event.preventDefault();

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'mouseout', onDocumentMouseOut, false );

                mouseXOnMouseDown = event.clientX - windowHalfX;
                mouseYOnMouseDown = event.clientX - windowHalfX;
                targetRotationOnMouseDown = targetRotation;

            }

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

                targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
                targetRotation = targetRotationOnMouseDown + ( mouseY - mouseYOnMouseDown ) * 0.02;

            }

            function onDocumentMouseUp( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

            }

            function onDocumentMouseOut( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length === 1 ) {

                    event.preventDefault();

                    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotationOnMouseDown = targetRotation;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length === 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

            cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
            cube.rotation.x += ( targetRotation - cube.rotation.x ) * 0.05;
            cube2.rotation.y += ( targetRotation - cube.rotation.y ) * 0.1;
            cube2.rotation.x += ( targetRotation - cube.rotation.x ) * 0.1;

                renderer.render( scene, camera );

            }

