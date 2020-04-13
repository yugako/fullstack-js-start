const express = require('express');
// const config = require('config');
// const mongoose = require('mongoose');
// const path = require('path');
// const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json({extended: true}));

/**
 * Serve static files from the React app
 */

// app.use(express.static(path.join(__dirname, 'client/build')));

/**
 * Set api routes
*/

// app.use('/api/your-route', require('./routes/your-route.routes'));


/**
 * The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
*/

/*
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    });
*/


/** Start server */

// Start server using Mongo

/*
    async function start() {
        try {
            await mongoose.connect(config.get('mongoURI'), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
            app.listen(PORT, () => console.log(`Server was running on port ${PORT}`));
            
        } catch (e) {
            console.log('Server error', e.message);
            process.exit(1);
        }
    }
*/

// Start server without Mongo


function start() {
	try {
		app.listen(PORT, () => console.log(`Server was running on port ${PORT}`));
	} catch (e) {
		console.log('Server error', e.message);
		process.exit(1);
	}
}

start();
