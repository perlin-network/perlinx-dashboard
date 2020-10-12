"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const { snapshot, history, data, stat, gas, totalSupply, syntheticData } = require("./routes");
const { roundMinutes } = require("./utils")

// Create the table to being stored a network snapshot
const snapshotTable = new aws.dynamodb.Table(
    "snapshotTable",
    {
        attributes: [
            {
                name: "network",
                type: "S"
            },
            {
                name: "timestamp",
                type: "N"
            }
        ],
        hashKey: "network",
        rangeKey: "timestamp",
        billingMode : "PAY_PER_REQUEST"
    }
)

// API endpoints for various actions
const endpoint = new awsx.apigateway.API("perlinx-bot-backend-api", {
    routes : [
        {
            path: "/snapshot", 
            method: "GET",
            eventHandler: new aws.lambda.CallbackFunction("getSnapshot", {
                memorySize: 256,
                timeout: 60,
                callback: snapshot,
            }),
        },
        {
            path: "/history", // need to supply timestamp in ISO-8601 format ex. ?timestamp=1598500504 
            method: "GET",
            eventHandler: new aws.lambda.CallbackFunction("getHistory", {
                memorySize: 256,
                timeout: 90,
                callback: history,
            }),
        },
        {
            path: "/data",
            method: "GET",
            eventHandler: async (event) => await data(event, snapshotTable.name.get())
        },
        {
            path : "/stat", // get a quick stat
            method: "GET",
            eventHandler: async (event) => await stat(event, snapshotTable.name.get())
        },
        {
            path: "/gas", // get quick overview of gas prices
            method: "GET",
            eventHandler: new aws.lambda.CallbackFunction("getGas", {
                memorySize: 256,
                timeout: 60,
                callback: gas,
            })
        },
        {
            path : "/totalsupply",
            method : "GET",
            eventHandler: new aws.lambda.CallbackFunction("getTotalSupply", {
                memorySize: 128,
                timeout: 30,
                callback: totalSupply,
            }),
        }
    ]
})


// Snaps the activity over time
const scheduler = async (event) => {

    const TableName = snapshotTable.name.get();
    const response = await snapshot(event);

    const json = JSON.parse(response.body);
    const now = roundMinutes(new Date());

    let gasData = {}

    try {
        const gasResponse = await gas(event);
        gasData = JSON.parse(gasResponse.body);

    } catch (e) {
        console.log("Fetch gas data failed : ", e.message)
    }

    let synthetics = []
    try {
        const syntheticResponse = await syntheticData(event);
        const json  = JSON.parse(syntheticResponse.body);
        synthetics = json.synthetics
    } catch (e) {
        console.log("Fetch synth data failed : ", e.message)
    }

    const Item = {
        network: "mainnet",
        timestamp: now.valueOf(),
        ...json,
        gasData : gasData,
        synthetics : synthetics
    }
    console.log("saving : ", Item);

    const client = new aws.sdk.DynamoDB.DocumentClient();
    await client.put({ TableName, Item }).promise();

}

const snapshotScheduler = new aws.cloudwatch.onSchedule(
    "snapshotScheduler",
    "rate(40 minutes)",
    scheduler,
);


exports.apiEndpoint = endpoint.url;