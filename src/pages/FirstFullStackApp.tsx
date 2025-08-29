import React from 'react';

const FirstFullStackApp = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-16 px-6 rounded-xl mb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Step-by-Step: Ship Your First Production-Ready Full-Stack App as a Student
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Stop building endless tutorials. This practical guide walks computer science students through the complete journey of building, testing, and deploying a full-stack web application to a real, public URL.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm">Tutorial</span>
            <span className="bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm">Student Life</span>
            <span className="bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm">Web Development</span>
          </div>
          {/* Author Information */}
          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-lg font-semibold">Author: Priyanshu Raj</p>
            <p className="text-sm mt-2">
              © 2023 Priyanshu Raj. All rights reserved. Licensed under Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0).
            </p>
            <p className="text-sm mt-1">
              This work is trademarked and may not be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author.
            </p>
          </div>
          {/* Download PDF Button */}
          <div className="mt-6">
            <a 
              href="/src/media/blog/firstFullStackApp.pdf" 
              download="firstFullStackApp.pdf"
              className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Download as PDF
            </a>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Coding on a laptop"
        className="w-full h-auto rounded-lg shadow-lg mb-12"
      />

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
          Introduction: Beyond the Tutorial Hell
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          As a computer science student, you've likely built a dozen TODO apps and followed countless tutorials. You understand loops, algorithms, and maybe even React components. But there's a massive gap between running <code className="bg-gray-100 px-2 py-1 rounded">localhost:3000</code> on your machine and having a real, live application that anyone in the world can visit.
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold">
          That gap is called <span className="text-blue-600">production</span>.
        </p>
        <p className="text-lg text-gray-700">
          Shipping your first full-stack app is the single most valuable project you can add to your portfolio. It screams, "I don't just know how to code; I know how to ship." This guide cuts through the fluff and gives you a realistic, step-by-step blueprint to go from idea to a live URL.
        </p>
      </section>

      {/* Phase 1 */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-3 px-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold">Phase 1: Planning & Design (The "Think Before You Code" Phase)</h2>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
          <h4 className="text-red-700 font-bold mb-2">Reality Check</h4>
          <p className="text-gray-700">
            Jumping straight into code is the fastest way to create a messy, un-deployable project. Planning is non-negotiable for production software.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">1</span>
            Define Your MVP (Minimum Viable Product)
          </h3>
          <p className="text-gray-700 mb-4">
            What is the absolute smallest, core functionality your app needs to be useful? Scope creep is the enemy.
          </p>
          <div className="bg-red-100 p-4 rounded-lg mb-4">
            <p className="text-red-800 font-semibold">Bad Idea:</p>
            <p className="text-red-700">"A social network for gamers with profiles, messaging, live streaming, and a marketplace."</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <p className="text-green-800 font-semibold">Good Idea (MVP):</p>
            <p className="text-green-700">"A site where gamers can create a profile and post their game reviews. Others can like the reviews."</p>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2"><span className="font-semibold">Core Features:</span> User auth, create review, view all reviews, like a review.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">2</span>
            Choose Your Tech Stack (The Tried & True)
          </h3>
          <p className="text-gray-700 mb-4">
            Don't get lost in framework wars. Choose modern, well-documented, and deployment-friendly technologies.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <span className="font-semibold">Frontend:</span> <span className="text-blue-600">React</span> or <span className="text-blue-600">Vue.js</span>. Huge ecosystems, endless tutorials, and easy deployment on Vercel/Netlify.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Backend:</span> <span className="text-blue-600">Node.js with Express</span> or <span className="text-blue-600">Python with Flask/Django</span>. Both are beginner-friendly and incredibly powerful.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Database:</span> For your first app, start with a <span className="text-blue-600">SQL</span> database like <span className="text-blue-600">PostgreSQL</span> (often called Postgres). It's robust, free, and teaches you valuable data modeling skills. Avoid MongoDB for your first app unless you have a specific need; SQL is a fundamental skill.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Deployment:</span> We'll use <span className="text-blue-600">Heroku</span> (for a simple, all-in-one solution) or <span className="text-blue-600">Vercel + Railway</span> (for a more modern, split-stack approach). Both have generous free tiers for students.
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">3</span>
            Map Your Data
          </h3>
          <p className="text-gray-700 mb-4">
            Design your database schema. What tables do you need? For our game review MVP:
          </p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono overflow-x-auto mb-4">
            users (id, email, password_hash, username)<br />
            reviews (id, title, content, user_id [foreign key])<br />
            likes (id, user_id [fk], review_id [fk])
          </div>
          <p className="text-gray-700">
            This 10-minute exercise will save you hours of refactoring later.
          </p>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-3 px-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold">Phase 2: Development (Building with Deployment in Mind)</h2>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
          <h4 className="text-red-700 font-bold mb-2">Reality Check</h4>
          <p className="text-gray-700">
            Code that works on your machine is step one. Code that is ready for another environment (production) is the goal.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">4</span>
            Build Your Backend API First
          </h3>
          <p className="text-gray-700 mb-4">
            Create a RESTful API. Your frontend will call these endpoints (URLs) to get and send data.
          </p>
          <p className="font-semibold text-gray-800 mb-2">Essential Endpoints for our MVP:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li className="mb-2"><code className="bg-gray-100 px-2 py-1 rounded">POST /api/auth/signup</code> - Create a new user</li>
            <li className="mb-2"><code className="bg-gray-100 px-2 py-1 rounded">POST /api/auth/login</code> - Log a user in</li>
            <li className="mb-2"><code className="bg-gray-100 px-2 py-1 rounded">GET /api/reviews</code> - Get all reviews</li>
            <li className="mb-2"><code className="bg-gray-100 px-2 py-1 rounded">POST /api/reviews</code> - Create a new review (protected route)</li>
            <li className="mb-2"><code className="bg-gray-100 px-2 py-1 rounded">POST /api/reviews/:id/like</code> - Like a review (protected route)</li>
          </ul>
          <p className="font-semibold text-gray-800 mb-2">Crucial for Production:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <span className="font-semibold">Environment Variables:</span> Never hardcode secrets like your database password or API keys. Use a <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file and the <code className="bg-gray-100 px-2 py-1 rounded">dotenv</code> package. This file is added to <code className="bg-gray-100 px-2 py-1 rounded">.gitignore</code> so it's never pushed to GitHub.
            </li>
            <li className="mb-2">
              <span className="font-semibold">CORS:</span> Enable Cross-Origin Resource Sharing on your backend to allow your frontend (on a different URL) to talk to it.
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">5</span>
            Build Your Frontend
          </h3>
          <p className="text-gray-700 mb-4">
            Create your React/Vue app to consume the API you just built.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">Use <code className="bg-gray-100 px-2 py-1 rounded">fetch</code> or <code className="bg-gray-100 px-2 py-1 rounded">axios</code> to call your backend endpoints.</li>
            <li className="mb-2">Manage global state (like user authentication) with <span className="text-blue-600">Context API (React)</span> or <span className="text-blue-600">Pinia (Vue)</span>. You don't need Redux for this.</li>
            <li className="mb-2">Keep your UI simple. Use a component library like <span className="text-blue-600">Chakra UI</span> or <span className="text-blue-600">Material UI</span> to move faster.</li>
          </ul>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-3 px-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold">Phase 3: Testing (The "Does This Actually Work?" Phase)</h2>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
          <h4 className="text-red-700 font-bold mb-2">Reality Check</h4>
          <p className="text-gray-700">
            Bugs are inevitable. Catching them before your users do is what separates amateurs from professionals.
          </p>
        </div>

        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-4">
            <span className="font-semibold">Manual Testing:</span> Methodically click through every feature. Can you sign up? Log in? Post a review without being logged in? (You shouldn't be able to!). Test on your phone's browser.
          </li>
          <li className="mb-4">
            <span className="font-semibold">Basic "Smoke Test":</span> Before any deployment, run your app locally one final time. Does it build without errors? Do the core flows work?
          </li>
        </ul>
      </section>

      {/* Phase 4 */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-3 px-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold">Phase 4: Deployment (The "Ship It" Moment)</h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          This is the main event. We'll use the <span className="text-blue-600 font-semibold">Vercel + Railway</span> model as it's very common and powerful.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">6</span>
            Prepare Your Code for Deployment
          </h3>
          <p className="font-semibold text-gray-800 mb-2">Backend (on Railway):</p>
          <ol className="list-decimal pl-6 text-gray-700">
            <li className="mb-2">Create a <code className="bg-gray-100 px-2 py-1 rounded">Procfile</code> in your backend's root directory. This tells Railway how to start your app. It should contain: <code className="bg-gray-100 px-2 py-1 rounded">web: node server.js</code> (replace <code className="bg-gray-100 px-2 py-1 rounded">server.js</code> with your main file).</li>
            <li className="mb-2">In your <code className="bg-gray-100 px-2 py-1 rounded">package.json</code>, ensure you have a <code className="bg-gray-100 px-2 py-1 rounded">"start"</code> script.</li>
            <li className="mb-2">Push your code to GitHub. <span className="font-semibold">Double-check your <code className="bg-gray-100 px-2 py-1 rounded">.gitignore</code> file has <code className="bg-gray-100 px-2 py-1 rounded">node_modules</code> and <code className="bg-gray-100 px-2 py-1 rounded">.env</code> in it!</span></li>
          </ol>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">7</span>
            Deploy Backend to Railway
          </h3>
          <ol className="list-decimal pl-6 text-gray-700">
            <li className="mb-2">Sign up for <a href="https://railway.app/" className="text-blue-600 hover:underline">Railway</a> using your GitHub student pack for discounts/credits.</li>
            <li className="mb-2">Click "New Project" and select "Deploy from GitHub repo."</li>
            <li className="mb-2">Connect your repo. Railway will automatically detect it's a Node.js project and start deploying.</li>
            <li className="mb-2">Go to the "Variables" tab and add all the environment variables from your <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file (e.g., <code className="bg-gray-100 px-2 py-1 rounded">DATABASE_URL</code>, <code className="bg-gray-100 px-2 py-1 rounded">JWT_SECRET</code>). Railway will provide a new <code className="bg-gray-100 px-2 py-1 rounded">DATABASE_URL</code> when you provision a PostgreSQL plugin.</li>
          </ol>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">8</span>
            Deploy Frontend to Vercel
          </h3>
          <ol className="list-decimal pl-6 text-gray-700">
            <li className="mb-2">Sign up for <a href="https://vercel.com/" className="text-blue-600 hover:underline">Vercel</a>.</li>
            <li className="mb-2">Import your frontend GitHub repository.</li>
            <li className="mb-2">During import, Vercel will ask for environment variables. You'll need one: <code className="bg-gray-100 px-2 py-1 rounded">REACT_APP_API_URL=[Your Railway backend URL]</code> (e.g., <code className="bg-gray-100 px-2 py-1 rounded">https://my-app-backend-production.up.railway.app</code>).</li>
            <li className="mb-2">Click Deploy. Vercel will give you a live URL (e.g., <code className="bg-gray-100 px-2 py-1 rounded">my-app.vercel.app</code>) in under a minute.</li>
          </ol>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full mr-3">9</span>
            The Final Connection
          </h3>
          <p className="text-gray-700 mb-4">
            Your frontend is now on Vercel, and your backend is on Railway. The last step is to tell your frontend the new address of your backend.
          </p>
          <p className="text-gray-700 mb-4">
            In your frontend code, wherever you make API calls (e.g., <code className="bg-gray-100 px-2 py-1 rounded">axios.get("http://localhost:5000/api/reviews")</code>), replace the base URL with the environment variable:
          </p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono overflow-x-auto mb-4">
            {"axios.get(`${process.env.REACT_APP_API_URL}/api/reviews`)"}
          </div>
          <p className="text-gray-700">
            Commit this change and push to GitHub. Vercel will automatically redeploy.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Conclusion: You Did It. Now What?</h2>
        <p className="text-lg text-gray-700 mb-6">
          You now have a live, public, full-stack application. This is a huge achievement that most CS students never reach.
        </p>
        <p className="font-semibold text-gray-800 mb-4">What's Next?</p>
        <ol className="list-decimal pl-6 text-gray-700">
          <li className="mb-3">
            <span className="font-semibold">Buy a Custom Domain:</span> Get a <code className="bg-gray-100 px-2 py-1 rounded">.dev</code> or <code className="bg-gray-100 px-2 py-1 rounded">.com</code> domain from Google Domains or Namecheap. Vercel lets you connect it for free in their dashboard.
          </li>
          <li className="mb-3">
            <span className="font-semibold">Write a Blog Post:</span> Just like this one! Document your process, your challenges, and your solutions. This demonstrates communication skills.
          </li>
          <li className="mb-3">
            <span className="font-semibold">Add to Your Resume/Portfolio:</span> Add the project with a link to the live site and a link to the GitHub code.
          </li>
          <li className="mb-3">
            <span className="font-semibold">Iterate:</span> Now that it's live, add one new feature from your original "big idea" list. You've mastered the pipeline; now you can build on top of it.
          </li>
        </ol>
        <p className="text-lg text-gray-700 mt-6">
          The journey from <code className="bg-gray-100 px-2 py-1 rounded">localhost</code> to a production deployment is the most practical skill you can learn. It demystifies the software development lifecycle and gives you the confidence to build anything. Now go ship something.
        </p>
      </section>
    </div>
  );
};

export default FirstFullStackApp;