const format = require('date-fns/format')

const currentTimeParser = function (req, res) {
	const parsedDate = new Date();
	const utc = format(parsedDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'")
	const unix = parseInt(format(parsedDate, "T"))
	res.json({ unix, utc });
};


const inputTimeParser = function (req, res) {

	let urlDate, parsedDate, utc, unix;

	try {
		if (parseInt(req.params.date) > 1e12 && parseInt(req.params.date) < 1e13) {
			urlDate = parseInt(req.params.date);
		} else {
			urlDate = req.params.date;
		}

		parsedDate = new Date(urlDate);
		utc = format(parsedDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'")
		unix = parseInt(format(parsedDate, "T"))
		res.json({ unix, utc });

	}
	catch (error) {
		console.log(error.message)
		res.json({
			error: "Invalid Date"
		})
	}
};

module.exports = {
	currentTimeParser,
	inputTimeParser
}