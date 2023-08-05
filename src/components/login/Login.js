import { useCallback,React} from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 


const Login = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

      <div className="bg-white p-8 shadow-lg rounded-lg z-50 ">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-gray-700 font-semibold mb-2"
            >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your user ID"
            />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
            >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
            Sign in as Student
          </button>
          <button
            type="button"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
            Sign in as Admin
          </button>
        </div>
      </div>
    </div>


    
</>
  );
};

export default Login;
