const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
    console.log(chalk.yellow('Please provide an address'));
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(chalk.red('Error: '), chalk.red(error));
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(chalk.red('Error: '), chalk.red(error));
            }
            console.log(chalk.blue('Data: '), location);

            console.log(forecastData);
        });
    });
}
