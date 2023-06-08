// Import data source (CSV file) to mongodb, 
// create database "financeSurvey", collection "full" to store raw data.
// Use mongoimport

mongoimport US_Adult_Income.csv -d financeSurvey -c full --type csv  --headerline --drop

// Create and load collections having no ForeignKey
// Use mongosh

// Create and load "job" collection

function loadJob() {
	const bulkInsert = db.job.initializeUnorderedBulkOp();
	// Get all Documents in 'full' Collection
	const documents = db.full.find({});

	// Process each document
	documents.forEach(function (doc) {
		const element = {
			workclass: doc.workclass,
			occupation: doc.occupation
		};
		// Upsert into job Document
		bulkInsert.find(element).upsert().replaceOne(element);
	});
	bulkInsert.execute();
	return true;
}

// Create and load "education" collection

function loadEducation() {
	const bulkInsert = db.education.initializeUnorderedBulkOp();
	// Get all Documents in 'full' Collection
	const documents = db.full.find({});

	// Process each document
	documents.forEach(function (doc) {
		const element = {
			education: doc.education,
			education_num: doc.education_num
		};
		// Upsert into education Document
		bulkInsert.find(element).upsert().replaceOne(element);
	});
	bulkInsert.execute();
	return true;
}

// Create and load "relation" collection

function loadRelation() {
	const bulkInsert = db.relation.initializeUnorderedBulkOp();
	// Get all Documents in 'full' Collection
	const documents = db.full.find({});

	// Process each document
	documents.forEach(function (doc) {
		const element = {
			marital_status: doc.marital_status,
			relationship: doc.relationship
		};
		// Upsert into relation Document
		bulkInsert.find(element).upsert().replaceOne(element);
	});
	bulkInsert.execute();
	return true;
}

// Create and load "national" collection

function loadNational() {
	const bulkInsert = db.national.initializeUnorderedBulkOp();
	// Get all Documents in 'full' Collection
	const documents = db.full.find({});

	// Process each document
	documents.forEach(function (doc) {
		const element = {
			race: doc.race,
			native_country: doc.native_country
		};
		// Upsert into national Document
		bulkInsert.find(element).upsert().replaceOne(element);
	});
	bulkInsert.execute();
	return true;
}

// Create and load "adult" collection



function loadAdult() {
	const bulkInsert = db.adult.initializeUnorderedBulkOp();
	// Get all Documents in 'full' Collection
	const documents = db.full.find({});

	// Process each document
	documents.forEach(function (doc) {
		const element = {
			age: doc.age,
			total: doc.total,
			gender: doc.gender,
			capital_gain: doc.capital_gain,
			capital_loss: doc.capital_loss,
			hours_per_week: doc.hours_per_week,
			income_bracket: doc.income_bracket
		};

		// Get job PK
		const job = db.job.findOne({
			workclass: doc.workclass,
			occupation: doc.occupation
		});
		element.job_id = job._id;

		// Get education PK
		const education = db.education.findOne({
			education: doc.education,
			education_num: doc.education_num
		});
		element.education_id = education._id;

		// Get relation PK
		const relation = db.relation.findOne({
			marital_status: doc.marital_status,
			relationship: doc.relationship
		});
		element.relation_id = relation._id;

		// Get national PK
		const national = db.national.findOne({
			race: doc.race,
			native_country: doc.native_country
		});
		element.national_id = national._id;


		// Upsert into adult collection
		bulkInsert.find(element).upsert().replaceOne(element);
	});

	bulkInsert.execute();
	return true;
}