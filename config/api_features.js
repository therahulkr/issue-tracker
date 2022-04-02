class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            title : {
                $regex : this.queryStr.keyword,
                //find all the name with requested name as substring
                $options : "i",//case insensitive
            }
        }:{};
        this.query = this.query.find({ ...keyword });
        return this;
    }


}

module.exports = ApiFeatures;