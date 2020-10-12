import React from "react";

import DogImage from "host/DogImage";
import DogCaption from "peer/DogCaption";

const App = () => (
  <div>
    <div>Peer here</div>
    <DogImage />
    <DogCaption name="Sally" />
  </div>
);

export default App;
