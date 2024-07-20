import { Sequelize } from "sequelize";

function getConnection(){
    return new Sequelize('postgres', 'postgres.aetxomimdayhkrfqwelu', '5cUbanr0alCXDgEw', {
        host : 'aws-0-ap-south-1.pooler.supabase.com',
        port : 6543,
        dialect:"postgres"

})
}

const sequelizeConnection = getConnection();

export default sequelizeConnection;