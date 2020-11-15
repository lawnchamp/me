// Pallet 9, 18, 23
import './index.css';

export default function App() {
  return (
    <div className="flex">
      <div className="max-w-md px-8 mx-auto sm:py-12 sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="https://res.cloudinary.com/onlinechesstimer/image/upload/v1579381863/smaller_miles_and_i_adqywo.png"
            alt="My son and I at the mountain"
          />
          <h1 className="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            Hi, my name is
            <br className="lg:inline" />
            <span className="text-indigo-500">Riley Shenk</span>
          </h1>
          <div className="my-4 text-sm font-bold tracking-widest text-gray-600 uppercase sm:text-lg">
            Full Stack Engineer • Washington DC
          </div>
          <p className="text-gray-600 sm:mt-4 sm:text-xl">
            Building web apps with
            <b className="pl-1 font-semibold text-green-500">Ruby</b>,
            <b className="pl-1 font-semibold text-green-500">Rails</b>,
            <b className="pl-1 font-semibold text-green-500">React</b>, and
            <b className="pl-1 font-semibold text-green-500">Vue</b> since 2015
          </p>
          <p className="py-4 text-gray-600 sm:mt-4 sm:text-xl">
            Currently working at{' '}
            <a
              className="text-blue-500 underline font-medium hover:text-blue-700"
              href="https://www.getwellnetwork.com/"
            >
              GetWellNetwork
            </a>{' '}
            previously worked at{' '}
            <a
              className="text-blue-500 underline font-medium hover:text-blue-700"
              href="https://learnzillion.com"
            >
              LearnZillion
            </a>
          </p>
          <p className="text-gray-600 sm:text-xl">
            Computer Engineering degree from University Of Maryland
          </p>
          <div className="flex justify-center w-full pt-12">
            <a href="https://twitter.com/lawn_champ">
              <svg
                className="w-8 h-8 mx-2 text-gray-500 rounded-sm fill-current hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400"
              >
                <path d="M0 0h400v400H0z" data-name="Dark Blue" />
                <g>
                  <path
                    d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45 51.34 51.34 0 00-87.41 46.78A145.62 145.62 0 0192.4 107.81a51.33 51.33 0 0015.88 68.47A50.91 50.91 0 0185 169.86v.65a51.31 51.31 0 0041.15 50.28 51.21 51.21 0 01-23.16.88 51.35 51.35 0 0047.92 35.62 102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23"
                    fill="#fff"
                  />
                  <path fill="none" d="M0 0h400v400H0z" />
                </g>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rileyshenk">
              <svg
                className="w-8 h-8 mx-2 text-gray-500 fill-current hover:text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" />
                <path
                  d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6A2.752 2.752 0 017.12 9.9a2.76 2.76 0 01-2.754-2.753 2.75 2.75 0 012.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"
                  className="text-white fill-current"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          className="absolute inset-0 object-cover object-center w-full h-full xl:max-w-4xl"
          src="https://res.cloudinary.com/onlinechesstimer/image/upload/v1579381863/smaller_miles_and_i_adqywo.png"
          alt="My son and I at the mountain"
        />
      </div>
    </div>
  );
}
