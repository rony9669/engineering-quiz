import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="m-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-1">
          1. What is the purpose of React Router?
        </h1>
        <p>
          <span className="text-green-700 font-bold">Answer:</span> React Router
          is a standard library system built on top of the React and used to
          create routing in the React application using React Router Package. It
          provides the synchronous URL on the browser with data that will be
          displayed on the web page. It maintains the standard structure and
          behavior of the application and mainly used for developing single page
          web applications.
        </p>
      </div>
      <div className="m-8">
        <h1 className="text-2xl font-bold  text-blue-600 mb-1">
          2. How does Context API works?
        </h1>
        <p className="">
          <span className="text-green-700 font-bold">Answer:</span> The React
          Context API is a way for a React app to effectively produce global
          variables that can be passed around. This is the alternative to "prop
          drilling" or moving props from grandparent to child to parent, and so
          on.React.createContext() is all we need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state.
        </p>
      </div>
      <div className="m-8">
        <h1 className="text-2xl font-bold  text-blue-600 mb-1">
          3. How does useRef work in React?
        </h1>
        <p className="">
          <span className="text-green-700 font-bold">Answer:</span> The useRef
          Hook allows us to persist values between renders. It can be used to
          store a mutable value that does not cause a re-render when updated. It
          can be used to access a DOM element directly.We should use useRef if
          we need to manage focus, text selection, trigger imperative animations
          or integrating third-party libraries.And useRef can be used to store
          local mutable value in a component. It doesn't participate in
          rerendering (unline state data). useMemo is used to memoize (like we
          do in Dynamic Programming, concept wise) and skip recalculation.If we
          want to update data and cause a UI update, useState is a Hook. If we
          need some kind of data container throughout the component's lifecycle
          without causing render cycles on mutating our variable, then useRef is
          one kind of solution.
        </p>
      </div>
    </div>
  );
};

export default Blog;
