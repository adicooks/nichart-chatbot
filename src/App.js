import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  const askQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse("Thinking...");

    try {
      const res = await axios.post("http://127.0.0.1:5000/ask", { question });
      setResponse(res.data.response || "No response from AI.");
      setHistory([...history, question]);
    } catch (error) {
      setResponse("Error connecting to AI.");
    }
    setLoading(false);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <h1>🧠 NiChart AI</h1>
        <a href="#">AI Chat</a>
        <a href="#">Templates</a>
        <a href="#">Settings</a>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-col flex-grow p-8">
        <div className={`chat-container ${darkMode ? "dark" : ""}`}>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">AI Chatbot</h1>

          </div>

          {/* Chat Input & Buttons */}
          <div className="input-container">
            <textarea
              placeholder="Ask me about NiChart..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>

            <div className="button-container">
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
              <button onClick={askQuestion} disabled={loading}>
                {loading ? "Thinking..." : "Ask NiChart"}
              </button>
            </div>
          </div>

          {/* Chat Response */}
          {response && (
            <div className="response-box mt-4">
              <strong>AI:</strong> {loading ? "Typing..." : response}
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar (History) */}
      <div className="history-container">
        <h2 className="text-lg font-bold mb-3">📜 Chat History</h2>
        {history.length === 0 ? (
          <p className="text-gray-500">No history yet.</p>
        ) : (
          history.map((item, index) => (
            <div key={index} className="history-item">
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
