import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON file
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}technologies.json`);
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Failed to load technologies:', error);
        toast.error('Failed to load technologies. Please refresh.');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((s) => s.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`⚠️ ${tech.name} is already in your stack!`, {
        toastId: `warn-${tech.id}`,
      });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`✅ ${tech.name} added to your stack!`, {
      toastId: `add-${tech.id}`,
    });
  };

  // Remove single technology from stack
  const handleRemove = (id) => {
    const tech = stack.find((s) => s.id === id);
    setStack((prev) => prev.filter((s) => s.id !== id));
    if (tech) {
      toast.info(`🗑️ ${tech.name} removed from your stack.`, {
        toastId: `remove-${id}`,
      });
    }
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('🗑️ All technologies removed from your stack.', {
      toastId: 'remove-all',
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <TechGrid
            technologies={technologies}
            stack={stack}
            loading={loading}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
