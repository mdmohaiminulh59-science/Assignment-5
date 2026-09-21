import bannerImg from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section id="home" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Build Your Ideal
              <br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, 
              and put together the stack that fits your next project.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
              <a href="#technologies">
                <button id="explore-btn" className="btn-primary text-base px-7 py-3.5 shadow-lg shadow-pink-200">
                  Explore Technologies
                </button>
              </a>
              <a href="#about">
                <button id="learnmore-btn" className="btn-outline text-base px-7 py-3.5">
                  Learn More
                </button>
              </a>
            </div>
          </div>

          {/* Right: Banner Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100 blur-3xl opacity-60 scale-110" />
              <img
                src={bannerImg}
                alt="Dev Stack Builder 3D illustration"
                className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
