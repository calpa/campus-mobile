
const logger = require('../util/logger');

const positionOptions = {
	enableHighAccuracy: false,
	timeout: 1000,
	maximumAge: 1000
};

export function getPosition() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve(position); },
			(error) => { reject(error); },
			positionOptions
		);
	});
}

export function getPermission() {
	return new Promise((resolve, reject) => {
	});
}
