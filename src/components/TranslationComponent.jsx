import React, { useState } from "react";
import translate from "translate-google";

const TranslationComponent = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("zh-cn");
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    setError("");
    try {
      const res = await translate(inputText, { to: language });
      setTranslatedText(res);
    } catch (err) {
      setError("Translation failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="translation-container">
      <h1>Google Translate Clone</h1>
      <textarea rows="4" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter text to translate..." />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="zh-cn">Chinese (Simplified)</option>
        <option value="nl">Dutch</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {error && <p className="error">{error}</p>}
      {translatedText && (
        <div className="translated-text">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationComponent;
