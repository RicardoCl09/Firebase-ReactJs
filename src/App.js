import React, { useState, createContext } from "react";
import { app, messaging } from './firebase'
import { IoLogoFirebase } from "react-icons/io5";
import Header from "./components/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import toast, { Toaster } from "react-hot-toast";
import { onMessage } from "firebase/messaging";
import Shopping from "./routes/Shopping";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

export const AppContext = createContext(null);

onMessage(messaging, payload => {
  // console.log('Nueva notificacion en directo', payload);
  toast.custom(t => (
    <div className="bg-sky-300 p-4 rounded-lg shadow-lg">
      <p className="text-lg text-sky-700 font-semibold">{payload.notification.title}</p>
      <p className="text-sm text-sky-600">{payload.notification.body}</p>
    </div>
  ))
})

function App() {

  const [route, setRoute] = useState("home")
  const [user, setUser] = useState(null)

  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster></Toaster>
      <div>
        <Header />
        <main className="p-6 pt-24 pb-20">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {route === "tasklist" && <TaskList />}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
