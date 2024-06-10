import { drizzle } from 'drizzle-orm/aws-data-api/pg';
import { RDSDataClient } from '@aws-sdk/client-rds-data';
import { fromIni } from '@aws-sdk/credential-providers';
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const rdsClient = new RDSDataClient({
    credentials: fromIni({ profile: process.env['PROFILE'] }),
    region: 'ap-south-1',
});

const db = drizzle(rdsClient, {
    database: process.env['DATABASE']!,
    secretArn: process.env['SECRET_ARN']!,
    resourceArn: process.env['RESOURCE_ARN']!,
});