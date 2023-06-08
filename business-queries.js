// Create index to optimize query's performance

db.adult.createIndex({"total": 1})

// Tìm thông tin 10 người có giá trị tài sản lớn nhất

db.adult.find().sort({"total": -1}).limit(10)

db.adult.explain("executionStats").find().sort({"total": -1}).limit(10)

// Tài sản trung bình của phụ nữ ở “Vietnam”

db.adult.aggregate([
{
	$lookup: {
		from: "national",
		localField: "national_id",
		foreignField: "_id",
		as: "national"
	}
},
{
	$match:{
			"gender": "Female",
			"national.native_country": "Vietnam"
		}
},
{
	$group:{
		_id: null,
		avg_total : {$avg: "$total"}
	}
}
])

// Tài sản của 10 người có số giờ làm việc nhiều nhất

db.adult.find({},{"total": 1}).sort({"hours_per_week": -1}).limit(10)

// Tài sản và chi tiêu hàng tuần của 10 người chi tiêu nhiều nhất

db.adult.find({},{"total": 1, "capital_loss": 1}).sort({"capital_loss": -1}).limit(10)

// Có bao nhiêu người làm việc hơn 50 tiếng 1 tuần

db.adult.count({
	"hours_per_week": {$gt: 50}
})
