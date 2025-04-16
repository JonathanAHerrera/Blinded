import React, { useState, useEffect } from "react";
import styles from "./DetectiveThoughts.module.css";

/**
 * Displays text that fades in, floats up slightly, stays for a duration, then fades out.
 * Completely standalone and floats over other content.
 */
const FloatingThought = ({
  text = "",
  isVisible = false,
  duration = 3500, // Milliseconds the text stays visible after fading in
}) => {
  // State to manage the actual rendering and applying CSS classes for transitions
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let fadeInTimer;
    let fadeOutTimer;
    let unmountTimer;

    if (isVisible && text) {
      // 1. Start rendering immediately
      setShouldRender(true);
      // 2. Apply fade-in/float-up class slightly after render to trigger animation
      fadeInTimer = setTimeout(() => {
        setAnimationClass(styles.visible);
      }, 50); // Short delay to allow DOM update

      // 3. Set timer to start fade-out after duration
      fadeOutTimer = setTimeout(() => {
        setAnimationClass(styles.fadingOut); // Trigger fade-out styles

        // 4. Set timer to stop rendering after fade-out completes
        unmountTimer = setTimeout(() => {
          setShouldRender(false);
          // Reset class for next time
          setAnimationClass("");
          // NOTE: We don't automatically set isVisible=false here,
          // that should be controlled by the parent component.
        }, 500); // Must match fade-out transition duration in CSS
      }, duration); // Duration text stays fully visible
    } else {
      // If isVisible becomes false externally, start fade out immediately
      if (shouldRender) {
        setAnimationClass(styles.fadingOut);
        unmountTimer = setTimeout(() => {
          setShouldRender(false);
          setAnimationClass("");
        }, 500); // Match fade-out transition duration
      } else {
        // Ensure cleanup if isVisible is false initially or text is empty
        setShouldRender(false);
        setAnimationClass("");
      }
    }

    // Cleanup timers if component unmounts or props change mid-animation
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
    };
  }, [isVisible, text, duration, shouldRender]); // Add shouldRender to deps for the else case

  if (!shouldRender) {
    return null; // Don't render anything if not visible/active
  }

  return (
    <div className={`${styles.thoughtContainer} ${animationClass}`}>
      {/* Split text by newline and render each as a paragraph for potential multi-line thoughts */}
      {text.split("\n").map((line, index) => (
        <p key={index} className={styles.thoughtText}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default FloatingThought;
