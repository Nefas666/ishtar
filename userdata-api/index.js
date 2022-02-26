const express = require("express");
const app = express();
const port = 3306;
const userDataRouter = require("./routes/userData");
//const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

/*app.use("/userValue", (req, res, next) => {
    const { sex, age, gender } = req.body;
    const userValues = {
        sex: form.sex.value,
        age: form.age.value,
        gender: form.gender.value
    };

    if (sex === userValues.sex && age === userDetails.age && gender === userValues.gender) {
        res.cookie('sex', sex);
        res.cookie('age', age);
        res.cookie('gender', gender);

    } else {
        res.json({ message: "u been bad, no cookie for u" });
    }
});*/

app.use("/userData", userDataRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});