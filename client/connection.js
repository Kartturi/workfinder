let url = "http://localhost:5000";

if (ProcessingInstruction.env.NODE_ENV === "production") {
  url = "";
}

export default url;
