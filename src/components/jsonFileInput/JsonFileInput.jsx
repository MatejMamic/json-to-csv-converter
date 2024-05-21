import React from "react";

class JsonFileInput extends React.Component {
  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return; // No file selected

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      try {
        const json = JSON.parse(contents);
        console.log(json);
        // Handle the JSON data
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  render() {
    return (
      <input type="file" accept=".json" onChange={this.handleFileChange} />
    );
  }
}

export default JsonFileInput;
