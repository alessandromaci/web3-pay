import React, { useState } from "react";
import styles from "./customize.module.scss";

export default function Customize() {
  const [displayName, setDisplayName] = useState<string>("Alessandro Maci");
  const [buttonColor, setButtonColor] = useState<string>("#2563eb");
  const [tokens, setTokens] = useState<string[]>(["ETH", "BTC", "USDC"]);
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [donationAmounts, setDonationAmounts] = useState<string>("5, 10, 20");
  const [fontStyle, setFontStyle] = useState<string>("Arial");

  return (
    <div className={styles.customizePage}>
      <div className={styles.mainContainer}>
        {/* Left: Setup Form */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Set up your donation page</h2>
          <p className={styles.cardDescription}>
            Configure your donation button with the following options.
          </p>

          {/* Display Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="displayName" className={styles.label}>
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Button Color */}
          <div className={styles.inputGroup}>
            <label htmlFor="buttonColor" className={styles.label}>
              Button Color
            </label>
            <input
              type="color"
              id="buttonColor"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Supported Tokens */}
          <div className={styles.inputGroup}>
            <label htmlFor="tokens" className={styles.label}>
              Supported Tokens
            </label>
            <select
              id="tokens"
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              className={styles.select}
            >
              {tokens.map((token) => (
                <option key={token} value={token}>
                  {token}
                </option>
              ))}
            </select>
          </div>

          {/* Donation Amount Options */}
          <div className={styles.inputGroup}>
            <label htmlFor="donationAmounts" className={styles.label}>
              Default Donation Amounts (comma-separated)
            </label>
            <input
              type="text"
              id="donationAmounts"
              value={donationAmounts}
              onChange={(e) => setDonationAmounts(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Font Style */}
          <div className={styles.inputGroup}>
            <label htmlFor="fontStyle" className={styles.label}>
              Font Style
            </label>
            <select
              id="fontStyle"
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
              className={styles.select}
            >
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Roboto">Roboto</option>
              <option value="Times New Roman">Times New Roman</option>
            </select>
          </div>

          {/* Continue Button */}
          <button className={styles.button}>Continue</button>
        </div>

        {/* Right: Donation Page Preview */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Donation Page Preview</h2>

          <div className={styles.previewContainer}>
            <h3>Donate to</h3>
            <h1 style={{ fontFamily: fontStyle }}>{displayName}</h1>

            <div className={styles.paymentOptions}>
              {donationAmounts.split(",").map((amount) => (
                <button key={amount} className={styles.paymentButton}>
                  €{amount.trim()}
                </button>
              ))}
            </div>

            <div className={styles.paymentOptions}>
              <button
                style={{ backgroundColor: buttonColor }}
                className={`${styles.payButton} ${styles.paypal}`}
              >
                Donate with {selectedToken}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
