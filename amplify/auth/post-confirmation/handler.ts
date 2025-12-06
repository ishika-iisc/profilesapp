// this is the code that runs in lambda function
import type {PostConfirmationTriggerHandler} from "aws-lambda";

export const handler:PostConfirmationTriggerHandler = async (event) => {
    return event;
};