import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WaveEffect.css"; // CSS para a animação

function WaveEffect({ text }) {
  const [hovered, setHovered] = useState(Array(text.length).fill(false));

  // Função para ativar o efeito de escala em formato de onda
  const handleMouseEnter = () => {
    text.split("").forEach((_, i) => {
      setTimeout(() => {
        setHovered((prev) => {
          const newHovered = [...prev];
          newHovered[i] = true;
          return newHovered;
        });

        // Depois de um tempo, desativa o efeito
        setTimeout(() => {
          setHovered((prev) => {
            const newHovered = [...prev];
            newHovered[i] = false;
            return newHovered;
          });
        }, 400); // Duração do efeito em cada letra
      }, i * 100); // Atraso para criar o efeito de onda
    });
  };

  return (
    <p className="wave-effect" onMouseEnter={handleMouseEnter}>
      {text.split("").map((char, index) => (
        <span key={index} className={hovered[index] ? "hovered" : ""}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
}
WaveEffect.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WaveEffect;
