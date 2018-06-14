module.exports = app => {
    app.db.sequelize.sync().done(()=> {
        app.listen(app.get('port'), () => {
            console.log(`NTask API - PORT ${app.get('port')}`);
        });
    });
};