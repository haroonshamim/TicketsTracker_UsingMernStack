const experessserver=require("express");

const app=experessserver();
const port=3000;

const websitemiddleware=experessserver.static("WebsiteFiles/public");

app.use(websitemiddleware);
app.use("/jsxFilesMapping",experessserver.static("WebsiteFiles/jsxFiles"));

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}/index.html`);
});