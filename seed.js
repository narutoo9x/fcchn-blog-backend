require('dotenv').config();

// Run `seed` to seed your mongodb with all your data from your /seeds folder.
// Run `NODE_ENV=dev seed` to seed your mongodb data for development environment
module.exports = {
	"undefined": process.env.LOCAL_DATABASE_URL,
	"dev": process.env.LOCAL_DATABASE_URL,
	"prod": process.env.CLOUD_DATABASE_URL
}