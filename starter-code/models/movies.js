const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
    title : String,
    genre: String,
    plot: String,
});

const moviesModel = mongoose.model("Movies", moviesSchema);



module.experts = moviesModel;

