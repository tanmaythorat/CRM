// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Layout, Users2, Calendar, Star, MessageCircle, Info } from 'lucide-react';

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="bg-white border-b shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center">
//               <Layout className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">TaskFlow</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Link to="/login" className="text-gray-600 hover:text-gray-900">Log in</Link>
//               <Link
//                 to="/login"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">
//             Empower Your Team to Achieve More
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Streamline your workflow, enhance collaboration, and drive productivity with TaskFlow.
//           </p>
//           <Link
//             to="/login"
//             className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Start for Free
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Link>
//           <div className="mt-4 text-sm text-gray-500">No credit card required</div>
//         </div>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <img
//             src="/images/dashboard-preview.jpg"
//             alt="Dashboard Preview"
//             className="rounded-lg shadow-xl"
//           />
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//               <Users2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">Team Collaboration</h3>
//               <p className="text-gray-600 mt-2">Foster seamless communication with shared boards and real-time updates.</p>
//             </div>
//             <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//               <Calendar className="h-10 w-10 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">Task Scheduling</h3>
//               <p className="text-gray-600 mt-2">Plan projects efficiently with timelines, deadlines, and reminders.</p>
//             </div>
//             <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//               <MessageCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">Feedback & Insights</h3>
//               <p className="text-gray-600 mt-2">Gather feedback, track performance, and optimize workflows.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Get Started Section */}
//       <div className="bg-blue-600 py-20 text-center text-white">
//         <h2 className="text-3xl font-bold mb-4">Ready to Boost Productivity?</h2>
//         <p className="text-xl mb-6">Join thousands of teams managing their workflow with TaskFlow.</p>
//         <Link
//           to="/login"
//           className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors"
//         >
//           Get Started Now
//           <ArrowRight className="ml-2 h-5 w-5" />
//         </Link>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-400 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#" className="hover:text-white">Features</a></li>
//               <li><a href="#" className="hover:text-white">Pricing</a></li>
//               <li><a href="#" className="hover:text-white">Security</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#" className="hover:text-white">About Us</a></li>
//               <li><a href="#" className="hover:text-white">Careers</a></li>
//               <li><a href="#" className="hover:text-white">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#" className="hover:text-white">Blog</a></li>
//               <li><a href="#" className="hover:text-white">Help Center</a></li>
//               <li><a href="#" className="hover:text-white">Guides</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-white">Terms of Service</a></li>
//               <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-sm">&copy; 2024 TaskFlow. All rights reserved.</div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Layout, Users2, Calendar, MessageCircle } from 'lucide-react';

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Navigation */}
//       <nav className="bg-gray-800 border-b border-gray-700 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center">
//               <Layout className="h-8 w-8 text-green-400" />
//               <span className="ml-2 text-xl font-bold">TaskFlow</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Link to="/login" className="text-gray-300 hover:text-white">Log in</Link>
//               <Link
//                 to="/login"
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative bg-gray-800 py-20 text-center">
//         <h1 className="text-5xl font-extrabold text-green-400 mb-6">
//           Elevate Your Workflow with TaskFlow
//         </h1>
//         <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//           A smart, intuitive platform designed for seamless project management and collaboration.
//         </p>
//         <Link
//           to="/login"
//           className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg hover:bg-green-600 transition-colors"
//         >
//           Get Started Now
//           <ArrowRight className="ml-2 h-5 w-5" />
//         </Link>
//       </div>

//       {/* Features Section */}
//       <div className="py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-green-400 mb-8">Why Choose TaskFlow?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-gray-800 rounded-lg shadow-md">
//               <Users2 className="h-10 w-10 text-green-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold">Seamless Collaboration</h3>
//               <p className="text-gray-300 mt-2">Boost team efficiency with real-time task updates.</p>
//             </div>
//             <div className="p-6 bg-gray-800 rounded-lg shadow-md">
//               <Calendar className="h-10 w-10 text-green-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold">Intelligent Scheduling</h3>
//               <p className="text-gray-300 mt-2">Never miss a deadline with AI-powered scheduling.</p>
//             </div>
//             <div className="p-6 bg-gray-800 rounded-lg shadow-md">
//               <MessageCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold">Instant Feedback</h3>
//               <p className="text-gray-300 mt-2">Keep your team in sync with quick and effective feedback tools.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="bg-green-500 py-20 text-center text-gray-900">
//         <h2 className="text-3xl font-bold mb-4">Join TaskFlow Today!</h2>
//         <p className="text-xl mb-6">Get started with the best workflow management system now.</p>
//         <Link
//           to="/login"
//           className="inline-flex items-center px-6 py-3 bg-gray-900 text-green-400 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
//         >
//           Start Free Trial
//           <ArrowRight className="ml-2 h-5 w-5" />
//         </Link>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-400 py-12">
//         <div className="text-center text-sm">&copy; 2024 TaskFlow. All rights reserved.</div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Users2, Calendar, MessageCircle } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">TaskFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-300 hover:text-white">Log in</Link>
              <Link
                to="/login"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-800 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-green-400 mb-6">
          Elevate Your Workflow with TaskFlow
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          A smart, intuitive platform designed for seamless project management and collaboration.
        </p>
        <Link
          to="/login"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg hover:bg-green-600 transition-colors"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Company Information Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About Our Company */}
          <div>
            <h2 className="text-3xl font-bold text-green-400">About Our Company</h2>
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-4">TaskFlow is committed to revolutionizing the way teams manage their workflows. We provide cutting-edge solutions that enhance collaboration and productivity.</p>
          </div>
          
          {/* Our Workflow */}

          <div>
            <p className="text-lg text-gray-300 mb-4">We streamline processes with automation, real-time tracking, and AI-driven insights, ensuring efficiency at every step.</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-green-400">Our Workflow</h2>
          </div>
          {/* Services We Provide */}
          <div>
            <h2 className="text-3xl font-bold text-green-400">Services We Provide</h2>
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-4">Our platform offers project management, task automation, real-time reporting, and seamless integrations with your favorite tools.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Why Choose TaskFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <Users2 className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Seamless Collaboration</h3>
              <p className="text-gray-300 mt-2">Boost team efficiency with real-time task updates.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <Calendar className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Intelligent Scheduling</h3>
              <p className="text-gray-300 mt-2">Never miss a deadline with AI-powered scheduling.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <MessageCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Instant Feedback</h3>
              <p className="text-gray-300 mt-2">Keep your team in sync with quick and effective feedback tools.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-500 py-20 text-center text-gray-900">
        <h2 className="text-3xl font-bold mb-4">Join TaskFlow Today!</h2>
        <p className="text-xl mb-6">Get started with the best workflow management system now.</p>
        <Link
          to="/login"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-green-400 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-green-400 font-semibold">TaskFlow - Simplify Your Workflow</p>
          <p className="text-sm mt-2">Effortless task management, enhanced collaboration, and AI-powered scheduling.</p>
          <div className="mt-4">
            <p className="text-sm">Contact us: <a href="mailto:support@taskflow.com" className="text-green-400 hover:underline">support@taskflow.com</a></p>
          </div>
          <div className="mt-6 text-sm">&copy; 2024 TaskFlow. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
