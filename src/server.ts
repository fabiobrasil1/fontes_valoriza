
import express from "express";



const app = express();

app.get("/test", (request, response) => {


return response.send("Fontes Promotora: Juntos somos mais fortes! #pracima")

})


app.listen(3000, () => console.log("Fontes server is running"));
