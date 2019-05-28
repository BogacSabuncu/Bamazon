module.exports = function (sequilize, DataTypes) {
    var Post = sequelize.define("Post", {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock_quality: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};