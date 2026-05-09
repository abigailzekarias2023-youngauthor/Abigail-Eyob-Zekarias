import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure Tailwind / global styles are imported

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
