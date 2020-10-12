import React from "react";

function DogImage() {
  return (
    <div>
      <img
        style={{
          width: 500,
          height: 280,
          border: "1em solid red",
          padding: "1em",
        }}
        src="https://placedog.net/500/280?random"
      />
    </div>
  );
}

export default DogImage;
