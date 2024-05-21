import React from "react";

class JsonToCsvConverter extends React.Component {
  convertJsonToCsv = (json) => {
    if (!json || json.length === 0) {
      console.error("JSON data is empty or undefined.");
      return "";
    }

    const rows = [];
    const header = Object.keys(json[0]);
    rows.push(header.join(","));

    json.forEach((item) => {
      const values = header.map((key) => item[key]);
      rows.push(values.join(","));
    });

    return rows.join("\n");
  };

  downloadCsv = (csv, filename) => {
    const blob = new Blob([csv], { type: "text/csv" });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  handleConversionAndDownload = (json) => {
    const csv = this.convertJsonToCsv(json);
    this.downloadCsv(csv, "data.csv");
  };

  render() {
    const { jsonData } = this.props;

    return (
      <button onClick={() => this.handleConversionAndDownload(jsonData)}>
        Convert to CSV and Download
      </button>
    );
  }
}

export default JsonToCsvConverter;
