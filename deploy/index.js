require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(express.static('build'))

const Point = require("./models/point")

app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    res.send('<h1>Hop hey la la ley</h1>')
})

app.get('/api/points', (request, response) => {
    Point.find({}).then(points => {
        response.json(points.map(point => {
            return point.toJSON();
        }));
    })
})

app.get("/api/points/:id", (request, response) => {
    Point.findById(request.params.id).then(point => {
        if (point) {
            response.json(point.toJSON());
        }
        else {
            response.status(404).end();
        }
    })
});

app.post('/api/points', (request, response) => {
    const body = request.body

    if (!body.type || !body.content || !body.longitude || !body.latitude) {
        return response.status(400).json({ error: 'info missing' })
    }

    const point = new Point({
        type: body.type,
        content: body.content,
        longitude: body.longitude,
        latitude: body.latitude
    })

    console.log('point after pulling', point);

    point.save().then(savedPoint => savedPoint.toJSON()).then(savedAndFormattedPoint => {
        console.log('point', savedAndFormattedPoint)
        response.json(savedAndFormattedPoint);
    })
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})