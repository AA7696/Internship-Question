import React, { useState } from "react";
import box from './assets/6box.svg'
import brick from './assets/Brickonly.svg'
import arr from './assets/arrangement.svg'

const Question: React.FC = () => {
  const question =
    "Can you pack 53 bricks of dimension 1x1x4 into a 6x6x6 box?";
  const solution = `
  To solve this, calculate the volume of the box and the total volume of the bricks:

  - The volume of the box: 6 x 6 x 6 = 216 cubic units.
  - The volume of one brick: 1 x 1 x 4 = 4 cubic units.
  - The total volume of 53 bricks: 53 x 4 = 212 cubic units.

  Since the total volume of the bricks (212) is less than the volume of the box (216), packing them is theoretically possible.

  However, the challenge lies in the arrangement. The dimensions of the bricks (1x1x4) mean that careful placement is required to avoid gaps. The box's dimensions (6x6x6) are not perfectly divisible by the brick dimensions, which might leave unusable space.

  Conclusion: It’s possible to pack the bricks volume-wise, but physical arrangement may make it impractical.
  `;

  const [bricksPlaced, setBricksPlaced] = useState<number>(0);

  const placeBrick = () => {
    if (bricksPlaced < 53) {
      setBricksPlaced(bricksPlaced + 1);
    }
  };

  const resetSimulator = () => {
    setBricksPlaced(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Question</h1>
      <p style={styles.text}>{question}</p>
      <h1 style={styles.heading}>Solution</h1>
      <p style={styles.text}>{solution}</p>

      <div style={styles.imageSection}>
        <div>
          <img
            src={box}
            alt="6x6x6 Box"
            style={styles.image}
          />
          <p style={styles.imageText}>This is the box (6x6x6).</p>
        </div>
        <div>
          <img
            src={brick}
            alt="1x1x4 Brick"
            style={styles.image}
          />
          <p style={styles.imageText}>Each brick has dimensions of 1x1x4.</p>
        </div>
        <div>
          <img
            src={arr}
            alt="Arrangement Idea"
            style={styles.image}
          />
          <p style={styles.imageText}>Example of how bricks could fit into the box (other then simulator).</p>
        </div>
      </div>

      <h1 style={styles.heading}>Simulator</h1>
      <div style={styles.simulator}>
        <div style={styles.box}>
          {[...Array(53)].map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.brick,
                backgroundColor: index < bricksPlaced ? "#4caf50" : "#ccc",
              }}
            />
          ))}
        </div>
        <p>
          Bricks Placed: <strong>{bricksPlaced}</strong> / 53
        </p>
        <button style={styles.button} onClick={placeBrick}>
          Place Brick
        </button>
        <button style={styles.button} onClick={resetSimulator}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333",
    marginBottom: "10px",
  },
  text: {
    color: "#555",
  },
  imageSection: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  image: {
    width: "150px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  imageText: {
    textAlign: "center" as const,
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
  simulator: {
    marginTop: "20px",
    textAlign: "center" as const,
  },
  box: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 30px)",
    gridTemplateRows: "repeat(6, 30px)",
    gap: "5px",
    width: "190px",
    margin: "20px auto",
    backgroundColor: "#ddd",
    padding: "5px",
    borderRadius: "4px",
  },
  brick: {
    width: "30px",
    height: "30px",
    backgroundColor: "#ccc",
    borderRadius: "2px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Question;
