import React from "react";
import FirstComponent from "./FirstComponent";
import ProfileImage from "./ProfileImage";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <FirstComponent description={"Esse é o tipo correto"} />
      <FirstComponent />
      <ProfileImage
        src="https://images.unsplash.com/photo-1677297680558-df5641e505ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        radius={200}
      />
      <ProfileImage
        src="https://images.unsplash.com/photo-1677136635150-de0f44ee389a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        radius={200}
      />
    </div>
  );
}

export default App;
