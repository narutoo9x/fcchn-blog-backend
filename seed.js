// Run `seed` to seed your mongodb with all your data from your /seeds folder.
// Run `NODE_ENV=dev seed` to seed your mongodb data for development environment
module.exports = {
	"undefined": "mongodb://localhost:27017/fcchn-blog",
	"dev": "mongodb://localhost:27017/fcchn-blog",
	"prod": "localhost/PROD_DB_NAME"
}