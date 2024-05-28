import '../Hero/hero.css'; // Importing CSS styles for the Hero component
import { ReactTyped } from "react-typed"; // Importing ReactTyped component for typing animation

const Hero = () => {
  return (
    <div>
      <div className="dark:bg-gray-900"> {/* Setting background color using Tailwind CSS */}
        <div className="container px-6 mx-auto"> {/* Container for content */}
          <div className="items-center lg:flex"> {/* Flex container for responsive layout */}
            <div className="w-full lg:w-1/2"> {/* Setting width for large screens */}
              <div>{/* Placeholder for additional content */}</div>
              <div className="lg:max-w-lg"> {/* Setting max width for large screens */}
                <h1 className="text-3xl font-semibold text-white dark:text-white lg:text-4xl">Abdullah Al Kawser</h1> {/* Main heading */}
                <p className="text-xl font-semibold text-white dark:text-white lg:text-4xl mt-10"> {/* Subheading with typing animation */}
                  <ReactTyped
                    startWhenVisible
                    strings={[
                      'Software Engineer',
                      'Programmer',
                    ]}
                    typeSpeed={20}
                    backSpeed={20}
                    loop
                  />
                </p>
                <p className="mt-3 text-white-600 dark:text-gray-400"> {/* Description */}
                  A software engineer and programmer is a professional responsible for designing, developing, testing, and maintaining software applications, systems, and platforms. This role combines technical expertise with problem-solving skills to create efficient and reliable software solutions that meet the needs of users and organizations.......
                </p>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button> {/* Call-to-action button */}
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"> {/* Image section */}
              <div class="w-full max-w-xs overflow-hidden glass  rounded-lg shadow-lg dark:bg-gray-800"> {/* Image container */}
                <img class="object-cover w-full h-56 " src="/n.jpg" alt="avatar"/> {/* Image */}
                <div class="py-5 text-center"> {/* Text section */}
                  <a href="#" class="block text-xl font-bold text-white-800 dark:text-white" tabindex="0" role="link">Abdullah Al Kawser</a> {/* Name */}
                  <span class="text-sm text-white-700 dark:text-gray-200">Software Engineer</span> {/* Role */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
