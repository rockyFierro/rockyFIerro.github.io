import { useState, useEffect, useRef} from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../../lib/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Haruka = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(0.05, 0.5, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            2 * Math.sin(0.2 * Math.PI),
            1,
            12 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)
            // 640 -> 240
            // 8 -> 6
            const scale = scH * 0.01 + 1
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xf9e6cf, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene,'/haruko.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(()=>{
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame 

                if(frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc( frame / 120 ) * Math.PI * 20

                    camera.position.y = 10
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                    // controls.enable = false; 
                }
                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    return (
        <Box
            ref={refContainer}
            className="smol"
            m="auto"
            at={['-20px', '-60px', '-120px']}
            mb={['-15px', '-45px', '-75px']}
            w='sm'
            h='sm'
            position="relative"
        >
            {loading && (
                <Spinner
                    size="m"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="calc(0px - var(--spinner-size) /2)"
                    mt="calc(0px - var(--spinner-size))"
                />
            )}
        </Box>
    )
}

export default Haruka
