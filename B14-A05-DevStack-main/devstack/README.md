# 🧱 Dev Stack Builder

A modern, interactive web application where developers can **explore technologies**, compare tools, and assemble their ideal development stack — all in one place.

---

## 🔗 Live Site

> **[https://mdmohaiminulh59-science.github.io/Assignment-5](https://mdmohaiminulh59-science.github.io/Assignment-5)** *(update after deployment)*

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | UI component framework |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS v4** | Utility-first styling system |
| **react-toastify** | Toast notifications |
| **JSON** | Local technology data store |

---

## ✨ Key Features

### 🔍 Explore 15 Technologies
Browse a curated grid of 15 developer tools across 7 categories — Frontend, Backend, Database, Language, Styling, DevOps, and Tools. Every card shows the icon, badge, category, difficulty level, and rating at a glance.

### 🧰 Build Your Custom Stack
Click **"Add to Stack"** on any technology card to add it to your personal stack panel. The button instantly disables and shows **"✓ Added to Stack"** — you can't add the same tool twice. Remove items individually with the ✕ button or clear everything with **"Remove All"**.

### 🎨 Consistent Brand Gradient
A single orange → pink → violet gradient is defined once as a CSS custom property (`--brand-gradient`) and reused everywhere: the brand name, hero heading highlight, and all primary buttons.

---

## 📸 Preview

> *(Add a screenshot of your live site here)*

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/mdmohaiminulh59-science/Assignment-5.git
cd Assignment-5/devstack

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

---

## 💡 React Concepts — Q&A

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It lets you write HTML-like syntax directly inside JavaScript. React uses it because it makes the UI structure easy to read and write — you can see your component's layout right next to the logic that drives it. Under the hood, the build tool converts JSX into `React.createElement()` calls.

---

### 2. What is the difference between props and state?

**Props** are values passed *into* a component from its parent — they are read-only inside the component. **State** is data that a component owns and can change over time. When state changes, React re-renders the component. Think of props as arguments to a function, and state as a variable that lives inside the function and can be updated.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a functional component hold and update its own data. It returns the current value and a setter function. In this project I used it in three places inside `App.jsx`:
- `const [technologies, setTechnologies] = useState([])` — stores the loaded technology list.
- `const [stack, setStack] = useState([])` — stores the user's selected technologies.
- `const [loading, setLoading] = useState(true)` — tracks whether the JSON data is still being fetched.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side-effects after the component renders. I needed it to load the JSON because fetching data is an async operation that happens *outside* of the normal render cycle — you can't `await` inside JSX. With `useEffect` and an empty dependency array `[]`, the fetch runs once when the app first mounts, then the state update triggers a re-render with the loaded data.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses `key` to track which list items changed, were added, or removed between renders. Without a key, React has to re-render the entire list on every update, which is slow and can cause bugs (like inputs losing focus). A unique and stable key — like an `id` from the data — lets React update only the specific item that changed.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition, just like an `if` statement in JavaScript. One example in this project is the **empty state** inside `YourStack.jsx`:

```jsx
{stack.length === 0 ? (
  <div className="border-2 border-dashed ...">
    <p>Your stack is empty.</p>
  </div>
) : (
  <div>
    {stack.map((tech) => ( ... ))}
  </div>
)}
```

When no technologies are selected, the dashed empty box is shown. Once items are added, the list renders instead.

---

### 7. How do you pass data from a parent to a child, and how does a child send something back?

Data flows **down** from parent to child via **props**. For example, `App.jsx` passes the `stack` array and handler functions down to `TechGrid`, which passes them further down to `YourStack`:

```jsx
// Parent (App.jsx) passes data and callbacks down
<TechGrid
  technologies={technologies}
  stack={stack}
  onAdd={handleAdd}
  onRemove={handleRemove}
  onRemoveAll={handleRemoveAll}
/>
```

The child sends data **back up** by calling the callback prop the parent provided:

```jsx
// Child (TechCard.jsx) calls the parent's function to report the event
<button onClick={() => onAdd(tech)}>Add to Stack</button>
```

This pattern — props down, callbacks up — is the standard way React components communicate.

---

## 📄 License

MIT © 2026 Dev Stack Builder
